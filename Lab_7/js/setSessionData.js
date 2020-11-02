const main = document.getElementById("main");

function getClasses(){
    
    let classId =  document.getElementById("courseId").value; // Your code here

    if(typeof classId !== "undefined" & classId !== ""){
        let classURL = "https://api.umd.io/v0/courses/" + classId; // Your code here
        console.log(classURL);
        const fetchPromise = fetch(classURL);

        fetchPromise.then(response =>{
            return response.json();
        }).then(course => {
            let name = course.name;
            let semester = course.semester;
            let credits = course.credits;
            let description = course.description;
            let details = name + " " + semester + " " + credits + " " + description;
            
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("semester", semester);
            sessionStorage.setItem("credits", credits);
            sessionStorage.setItem("description", description);
        });
    }
    else{
        main.innerHTML = "No value provided";
        sessionStorage.setItem("name", "Nothing Set");
        sessionStorage.setItem("semester", "Nothing Set");
        sessionStorage.setItem("credits", "Nothing Set");
        sessionStorage.setItem("description", "Nothing Set");
    }
}
