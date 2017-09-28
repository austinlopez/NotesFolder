var page = document.getElementById("main");
var head = document.getElementById("head");

//page.style.background = "linear-gradient(to left, #fa6a00, #1976D2)"; //"#fa6a00"; //"#1976D2";
//hexidecimal color rr/gg/bb rgb color
//32 bit color f in hex is 1111 in binary
// ffffff is 1111 1111 1111 1111 1111 1111
// 2 to 32 power of colors which is 16,777,215 different colors
//1. make a greeting
//2. set the text color
//3. make it big
//4. change the font
//5. center it
//6. whatever else
//var name = prompt("Name: ");
page.innerHTML = "<b>Hi there " + name + "!</b>";
page.style.color = "white";
page.style.textAlign = "center";
page.style.fontFamily = "Helvetica, sans-serif";
page.style.fontSize = "50px";
page.style.paddingTop = "50px";
var colorCode = prompt("What color do you want?");
page.style.backgroundColor = colorCode;
//what if they pick white?
//we need a conditional
//the most used condition is the if statement
//if(condition)
//if the condition is true it does the next
//block of code {}
if(colorCode == "#ffffff" "white"){
  page.style.color = "#000000";
}

//head.style.color = "blue";
//head.style.width = "80%";
//head.style.height = "200px";
