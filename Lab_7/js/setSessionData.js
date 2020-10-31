const main = document.getElementById("main");

function getClasses(){
    
    let classId =  document.getElementById("courseId"); // Your code here

    if(typeof classId !== "undefined" & classId !== ""){
        
        let classURL = "https://api.umd.io/v0/courses/" + classId; // Your code here
        let request = new XMLHttpRequest();

        request.open('GET', classURL);
        request.responseType = 'json';
        request.send();
        
        request.onload = function() {
            const classPull = request.response;
            
        }
        // YOUR CODE HERE
        
    }
    else{
        main.innerHTML = "No value provided";
    }
}

// let classURL = fetch("https://api.umd.io/v0/courses/INST377"); // Your code here
// let p_json = JSON.stringify(course_id);
// console.log(p_json);
// // const data = JSON.parse(classD);
// // console.log(data.name);