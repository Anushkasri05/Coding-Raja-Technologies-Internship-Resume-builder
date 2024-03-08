// alert("loading");
function addNewWEField(){
    // console.log("adding");
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
newNode.classList.add("weField");
newNode.setAttribute("placeholder", "Enter here")
let weOb = document.getElementById("we") ;
let weAddButtonOb = document.getElementById("weAddButton");

weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewEDField(){
   let newNode=document.createElement("textarea");
   newNode.classList.add("form-control"); 
   newNode.classList.add("qeField");
   newNode.setAttribute("placeholder","Enter here");
   let edOb = document.getElementById("ed");
   let edAddButtonOb = document.getElementById("edAddButton");
   edOb.insertBefore(newNode, edAddButtonOb);
}
//generating CV
function generateCV(){
    // console.log("cv");
    let nameField = document.getElementById('nameField').value;
    let nameT1 = document.getElementById("nameT1")
    nameT1.innerHTML = nameField;
    
    let nameT2 = document.getElementById("nameT2")
    nameT2.innerHTML = nameField;

    let numberfield = document.getElementById("numberfield").value;
    let contactT = document.getElementById("contactT")
    contactT.innerHTML = numberfield;
    //direct
    document.getElementById("emailT").innerHTML = document.getElementById("e-mail").value;
    document.getElementById("dobT").innerHTML = document.getElementById("dob").value;
    document.getElementById("addressT").innerHTML = document.getElementById("address").value;
    document.getElementById("fbT").innerHTML = document.getElementById("fb").value;
    document.getElementById("instaT").innerHTML = document.getElementById("insta").value;
    document.getElementById("linkedT").innerHTML = document.getElementById("link").value;
    document.getElementById("skT").innerHTML = document.getElementById("skills").value;
    document.getElementById("aboutT").innerHTML = document.getElementById("myself").value;
    //objective
    document.getElementById("objective").innerHTML = document.getElementById("objectiveField").value;
    
    //we
    let wes = document.getElementsByClassName("weField");
let str ="";
for(let e of wes)
{
  str = str + `<li> ${e.value} </li> `;
}
document.getElementById("weT").innerHTML = str;
//education
let eds = document.getElementsByClassName("qeField");
let str1="";
for(let e of eds) {
    str1 += `<li> ${e.value} </li>`;

}
document.getElementById("educationT").innerHTML = str1;
//intern
document.getElementById("internT").innerHTML = document.getElementById("intern").value;
//certificate
document.getElementById("certificateT").innerHTML = document.getElementById("Certificate").value;
//code for setting img
let file = document.getElementById("imgField").files[0];
console.log("file");
let reader = new FileReader()
reader.readAsDataURL(file);
console.log(reader.result);
//set the img to template
reader.onloadend = function(){
    document.getElementById("imgTemplate").src = reader.result;
}

document.getElementById("cv-form").style.display = "none";
document.getElementById("cv-template").style.display = "block";
}
//printcv
function printCV(){
    window.print();
}
