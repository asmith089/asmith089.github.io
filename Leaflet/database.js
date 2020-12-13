const url = 'https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?';

//Making a map and tiles
const mymap = L.map('mapid',{
    center: [38.9072, -77.0369],
    zoom: 12,
    minZoom: 10

});
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const tiles = L.tileLayer(tileUrl, {attribution} );
tiles.addTo(mymap);

//Making a marker


async function getData(){
    let crimeSet = new Set();
    const response = await fetch(url);
    const data = await response.json();

    for (x=0; x<data.length; x++){
        crimeSet.add(data[x].clearance_code_inc_type);
        // console.log(crimeSet);
    }

    console.log(crimeSet);

    var crimeArray = [];

    var switch = function()
    // crimeSet.forEach(e =>{
    //     console.log(e)
    // });
    // const accident = url + "clearance_code_inc_type=ACCIDENT";
   
    for (i=0; i<data.length; i++){
        const latitude = data[i].latitude;
        const longitude = data[i].longitude;
        const crime = data[i].clearance_code_inc_type;

        // L.marker([latitude, longitude]).addTo(mymap); 
        L.marker([latitude, longitude]).addTo(mymap)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
        // marker.setLatLng([latitude, longitude]);
        
        // console.log(crime);
    }


//Add control to turn on and off crime point heatmaps
// L.control.layers(data).addTo(mymap);
    

    // marker.setLatLng([latitude, longitude]);
    // document.getElementById('lat').textContent = latitude;
    // document.getElementById('lon').textContent = longitude;


    // const results = data[x]
    // for (i=0; i<data.length; i++){
        // console.log(data[i].latitude + ", " + data[i].longitude);
        // console.log(data[45].location.latitude);
    // }
    // console.log(data[23]);
    }

    getData();