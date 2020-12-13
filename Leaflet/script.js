const url = "https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?";

let crimeSet = new Set();
let setArray = []

var crimes = L.layerGroup();
// let all = L.layerGroup()
var accident = L.layerGroup();
var theft = L.layerGroup();
var assault = L.layerGroup();
var sexOffense = L.layerGroup();
var breakingEnt = L.layerGroup();
var robbery = L.layerGroup();
var vandalism = L.layerGroup();
var auto = L.layerGroup();
var homicide = L.layerGroup();




// const attribution =
//   '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

// const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
        streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
        
//Making a map and tiles
const mymap = L.map("mapid", {
    center: [38.9072, -77.0369],
    zoom: 12,
    minZoom: 10,
    layers: [grayscale, crimes]
  });

var baseLayers = {
    "Grayscale": grayscale,
    "Streets": streets
};

var overlays = {
  
    "All": crimes,
    "Accident": accident,
    "Assault": assault,
    "Auto": auto,
    "Breaking & Entering": breakingEnt,
    "Homicide": homicide,
    "Robbery":robbery,
    "Sex Offense":sexOffense,
    "Theft": theft,
    "Vandalism": vandalism
};

// const tiles = L.tileLayer(tileUrl, { attribution });
L.control.layers(baseLayers, overlays).addTo(mymap);

//Making a marker

async function getData() {
  
  const response = await fetch(url);
  const data = await response.json();

  // Creating a list of crime category this is added to a set 
  for (x = 0; x < data.length; x++) {
    crimeSet.add(data[x].clearance_code_inc_type);
    // console.log(crimeSet);

    // printing crime data from the set 
  }
  
  setArray = Array.from(crimeSet)
  console.log(setArray[18])

  


  

  // Adding markers to the map 
  for (let i = 0; i < data.length; i++) {

    const latitude = data[i].latitude;
    const longitude = data[i].longitude;
    const crime = data[i].clearance_code_inc_type;
    const date = data[i].date;
    const incidentNum = data[i].incident_case_id;
   

    if(crime === "ACCIDENT"){
      L.marker([latitude, longitude]).addTo(accident)
      .bindPopup("Incident Number: " + incidentNum + "<br>" + "Type of Crime: " + crime + "<br>" + "Date: "+ date[0,1,2,3])
      .openPopup();
    }
    if(crime === "THEFT FROM AUTO" || crime === "THEFT"){

      L.marker([latitude, longitude]).addTo(theft);
    }
    
    if(crime === "ASSAULT" || crime === "ASSAULT, WEAPON" || crime === "ASSAULT, SHOOTING"){
      L.marker([latitude, longitude]).addTo(assault);
    }

    if(crime === "AUTO, STOLEN" || crime === "AUTO, STOLEN & RECOVERED"){
      L.marker([latitude, longitude]).addTo(auto);
    }
    
    if(crime === "SEX OFFENSE"){
      L.marker([latitude, longitude]).addTo(sexOffense);
    }
    
    if(crime === "ROBBERY, OTHER" || crime === "ROBBERY, COMMERCIAL" ){
      L.marker([latitude, longitude]).addTo(robbery);
    }

    if(crime === "HOMICIDE"){
        L.marker([latitude, longitude]).addTo(homicide);
    }
    
    if(crime === "VANDALISM"){
        L.marker([latitude, longitude]).addTo(vandalism);
      }
    
    if(crime === "B & E, VACANT" || crime === "B & E, OTHER" || crime === "B & E, RESIDENTIAL" || crime === "B & E, COMMERCIAL" || crime === "B & E, RESIDENTIAL (VACANT)"){
      L.marker([latitude, longitude]).addTo(breakingEnt);
    }
	L.marker([latitude, longitude]).addTo(crimes);
    
  }
  

  
  
}


getData();
