const searchBar = document.querySelector('input[type="search"]');
const listItems = document.querySelectorAll(".list");
const place = (window.location.pathname.includes("chapiter") ? ".." : ".");
const filter = ["the ", "a ", "an ", " ", "-", "_", ".", ","];
let result = "error";
let toggle = null;
const urls = {
  "1.1":"introductiontothequantumworld",
  "1.2":"waveparticleduality",
  "1.3":"quantizationandenergylevels",
  "1.4":"uncertaintyprinciple",
  "1.5":"superpositionandentanglement",
  "1.6":"applicationsofquantumphysics",
  "2.1":"electronicstructure",
  "2.2":"periodictableandchemicalbonding",
  "2.3":"molecularorbitals",
  "2.4":"electronconfigurations",
  "2.5":"quantumsimulationsofchemicalreactions",
  "2.6":"applicationsinsciencesdesmateriaux",
  "3.1":"linearalgebraandbraketnotation",
  "3.2":"schrödingerequationandwavefunctions",
  "3.3":"eigenvaluesandeigenvectors",
  "3.4":"operatorsandmeasurements",
  "3.5":"perturbationtheory",
  "3.6":"variationalmethods",
  "4.1":"qubitsandquantumcircuits",
  "4.2":"quantumalgorithms",
  "4.3":"faulttoleranceanderrorcorrection",
  "4.4":"quantummachinelearning",
  "4.5":"applicationsofquantumcomputing",
  "5.1":"fieldtheoryandstandardmodels",
  "5.2":"quantumgravityandunifiedtheory",
  "5.3":"philosophicalimplications"
};

listItems.forEach(listItem => {
  const part = listItem.querySelector("ul");
  const arrow = listItem.querySelector("h2 img");

  listItem.querySelector("h2").addEventListener("click", function() {
	 if (toggle !== listItem) {
	   listItems.forEach(otherItem => {
	   otherItem.querySelector("ul").classList.remove("visible");
	   otherItem.querySelector("img").setAttribute("src", `${place}/assets/off.png`);
	   });
	 };
	 	
	 part.classList.toggle('visible');
	 direction = arrow.getAttribute("src") === `${place}/assets/on.png` ? `${place}/assets/off.png` : `${place}/assets/on.png`;
	 arrow.setAttribute("src", direction);
	 toggle = listItem;
  });
});

searchBar.addEventListener("keypress", function(e) {
	if (e.key === "Enter") {
	  let recherche = searchBar.value.toLowerCase();
	  for (str of filter) recherche = recherche.replace(str, '');
	  for (page in urls) result = urls[page].includes(recherche) ? page : result;
	  window.location.href = `https://redeemedspoon.github.io/QuantumScope/chapiter/${result}.html`;
	};
});