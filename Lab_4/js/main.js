let myFullName = "Amari Smith"; // 10 characters in name...not including space
// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"

const myName = document.querySelector(".header");
myName.innerText = myFullName + "'s Lab 4";

// // 2 Insert two paragraphs into the div with the class "content"
// //  Label each paragraph with a distinct class name

const myContent = document.querySelector(".content");

const mp1 = document.createElement("p");
mp1.className = "content1";
mp1.innerText = "Hello I am the first paragraph";
myContent.appendChild(mp1);

const mp2 = document.createElement("p");
mp2.className = "content2";
mp2.innerText = "Second paragraph";
myContent.appendChild(mp2);

// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).
let length = myFullName.length - 1
mp1.innerText = "My name has " + length + " characters.";

// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name
const third = myFullName[2].toUpperCase();
const last3 = myFullName.substring(8,11);
mp2.innerText = "The 3rd character in my name is " + third + ". \n" + "The last 3 characters of my last name are " + last3;
// 6 Add a new line to your second paragraph


// 8 Substring your first and last name into two separate variables
const first = myFullName.substring(0,5);
const last = myFullName.substring(5,11);

// 9 Add the total length of your first and last names together
const total = first.length + last.length;

// 10 Display that total next to your name in your header
myName.innerText+= " " + total