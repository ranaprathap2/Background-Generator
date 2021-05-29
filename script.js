var gradient = document.getElementById("gradient");
var css = document.getElementById("css");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function setGradient()
{
	console.log("setGradient invoked");
	gradient.style.background = "linear-gradient(to right, "+
								color1.value+", "+color2.value+")";

	css.textContent = gradient.style.background;								
}