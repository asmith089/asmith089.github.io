// const myClass = [
//     {
//       "course_id": "AASP100",
//       "name": "Introduction to African American Studies",
//       "department": "African American Studies"
//     },
//     {
//       "course_id": "AASP101",
//       "name": "Public Policy and the Black Community",
//       "department":"African American Studies"
//     }
//   ];

//   console.log(myClass[0]["name"] + " " + myClass[1]["department"]);

//   let classId = "INST377";
//   let classURL = "https://api.umd.io/v0/courses/" + classId;
//   let request = new XMLHttpRequest();


//   request.open('GET', classURL);
//   request.responseType = 'json';
//   request.send();
//   const classPull = request.response;  

//   request.onload = function() {
//     const classPull = request.response;
//     showDetails(classPull);
// } 
//     function showDetails(jsonObj){
//         let n = jsonObj['course_id'];
//         console.log(n);
//     }


//   console.log(classPull);

