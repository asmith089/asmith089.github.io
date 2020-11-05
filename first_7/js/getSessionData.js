// Get saved data from sessionStorage
let name = sessionStorage.getItem("name"); // Your code here
let semester = sessionStorage.getItem("semester"); // Your code here
let credits = sessionStorage.getItem("credits");// Your code here
let description = sessionStorage.getItem("description"); // Your code here 

// Your code here
// Set the corresponding <p> elements in the GetSessionData.html page with the values from above

document.querySelector('#name').innerHTML = name;
document.querySelector('#semester').innerHTML = semester;
document.querySelector('#credits').innerHTML = credits;
document.querySelector('#description').innerHTML= description;