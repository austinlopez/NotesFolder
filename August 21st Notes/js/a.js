// Javascript is used to manipulate HTML
// This is one way to do it
document.getElementById("main").innerHTML = "Hello";
document.getElementById("main").innerHTML = "<b>Hello</b>";
//variables can hold more than numbers and strings
var myPage = document.getElementById("main");
//You can also change the style
myPage.style.backgroundColor = "lightBlue";
myPage.style.color = "white";
myPage.style.fontSize = "40px";
myPage.style.textAlign = "center";
myPage.style.fontFamily = "verdana";
//make a prompt asking for a name
//have the webpage say hello to that person
var name = prompt("What is your name?");
myPage.innerHTML = "<b>Hello " + name + "</b>";

//html has many predefined colors
//or you can make your own color
//using a hexidecimal number
//hexidecimal means base 16
//hexidecimal is real easy to
//change to binary
//f = 15 in decimal
//f = 1111
