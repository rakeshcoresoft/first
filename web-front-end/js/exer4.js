var myHeading = document.querySelector("h1");
var myButton = document.querySelector("button");

function setUser() {
    var myName = prompt("Please enter your name","User");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla is cool..." + myName;
}

if(!localStorage.getItem("name")) {
    setUser();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla is cool..." + storedName;
}

myButton.onclick = function() {
    setUser();
}