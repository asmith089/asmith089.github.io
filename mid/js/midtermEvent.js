const myB = document.querySelector("button");
const par2 = document.getElementById("paragraphId2");
const par1 = document.getElementById("paragraphId1");
const myName = " Amari Smith";
myB.addEventListener("mouseover", swap);

function swap(){
   par2.innerHTML = par1.innerText + myName;
  
}

