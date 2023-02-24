const button = document.getElementById("button1")
const img = document.getElementById("img1")
button.addEventListener("click", toggleLight);


function toggleLight() {
 if(img.src.includes("light_off")) {
  img.src = "/Users/anastasia/Desktop/tyler_class/Homework/1/img/light_on.png";
  button.style.color = "green";
  button.innerHTML = "ON";
 } else {
  img.src = "/Users/anastasia/Desktop/tyler_class/Homework/1/img/light_off.jpg";
  button.style.color = "red";
  button.innerHTML = "OFF";
 }
}