const searchBar = document.querySelector('input[type="search"]');
const listItems = document.querySelectorAll(".list");
const place = (window.location.pathname.includes("chapiter") ? ".." : ".");
const filter = ["the " , " ", "-", "_", ".", ","];
let result = "error";
let toggle = null;
const urls = {
  "1.1": "introductionaumondequantique",
  "1.2": "dualitéondecorpuscule",
  "1.3": "quantificationetniveauxdénergie",
  "1.4": "principeincertitude",
  "1.5": "superpositionetenchevêtrement",
  "1.6": "applicationsdelaphysiquephysiquequantique",
  "2.1": "structureelectronique",
  "2.2": "tableauperiodiqueetliaisonchimique",
  "2.3": "orbitalesmoleculaires",
  "2.4": "configurationselectroniques",
  "2.5": "simulationsquantiquesderéactionschimiques",
  "2.6": "applicationsensciencedesmateriaux",
  "3.1": "algèbrelinéaireetnotationbraket",
  "3.2": "équationdeschrödingeretfonctionsdonde",
  "3.3": "valeurspropresetvecteurspropres",
  "3.4": "opérateuretsmesures",
  "3.5": "théoriedesperturbations",
  "3.6": "méthodesvariationnelles",
  "4.1": "qubitsandcircuitsquantiques",
  "4.2": "algorithmesquantiques",
  "4.3": "correctiond erreursertolérance",
  "4.4": "apprentissageautomatiquequantique",
  "4.5": "applicationsdelinformatiquequantique",
  "5.1": "théoriedeschampsetmodèlestandard",
  "5.2": "gravitéquantiqueetthéorieunifiée",
  "5.3": "implicationsphilosophiques"
};

listItems.forEach(listItem => {
  const partie = listItem.querySelector("ul");
  const fléche = listItem.querySelector("h2 img");

  listItem.querySelector("h2").addEventListener("click", function() {
	 if (toggle !== listItem) {
	   listItems.forEach(otherItem => {
	   otherItem.querySelector("ul").classList.remove("visible");
	   otherItem.querySelector("img").setAttribute("src", `${place}/assets/off.png`);
	   });
	 };
	 	
	 partie.classList.toggle('visible');
	 direction = fléche.getAttribute("src") === `${place}/assets/on.png` ? `${place}/assets/off.png` : `${place}/assets/on.png`;
	 fléche.setAttribute("src", direction);
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

