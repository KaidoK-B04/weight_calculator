const input = document.querySelector("#num-input");


const planets = [
  { name: "Sun", gravity: 27.01 },
  { name: "Mercury", gravity: 0.38 },
  { name: "Venus", gravity: 0.91 },
	{ name: "Mars", gravity: 0.38 },
	{ name: "Jupiter", gravity: 2.34 },
  { name: "Saturn", gravity: 1.06 },
	{ name: "Uranus", gravity: 0.92 },
  { name: "Neptun", gravity: 1.19 },
	{ name: "Pluto", gravity: 0.06 }	
];

const calculate = () => {
	for (let i = 0; i < planets.length; i++) {
    const output = document.getElementById(`result${[i]}`);
    output.textContent = `= ${(planets[i].gravity * input.value).toFixed(2)}`;
  }
};



