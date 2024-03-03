document.addEventListener("DOMContentLoaded", function() {
	const barRecherche = document.querySelector('input[type="search"]');
	const listeItems = document.querySelectorAll(".liste");
	const place = (window.location.pathname.includes("chapitre") ? ".." : ".");
	const filtre = ["et ", "le ", "la ", "l'", "d'", "de ", "du ", "aux ", "au ", " ", "-", "_", ".", ","];
	let résultat = "erreur";
	let toggle = null;
	const urls = {
	  "1.1": "introductionaumondequantique",
	  "1.2": "dualitéondecorpuscule",
	  "1.3": "quantificationetniveauxd énergie",
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
	  "4.5": "applicationsdel informatiquequantique",
	  "5.1": "théoriedeschampsetmodèlestandard",
	  "5.2": "gravitéquantiqueetthéorieunifiée",
	  "5.3": "implicationsphilosophiques"
	};


	listeItems.forEach(listeItem => {
	  const partie = listeItem.querySelector("ul");
	  const fléche = listeItem.querySelector("h2 img");

	  listeItem.querySelector("h2").addEventListener("click", function() {
		 if (toggle !== listeItem) {
		   listeItems.forEach(otherItem => {
		   otherItem.querySelector("ul").classList.remove("visible");
		   otherItem.querySelector("img").setAttribute("src", `${place}/assets/off.png`);
		   });
		 };
		 	
		 partie.classList.toggle('visible');
		 direction = fléche.getAttribute("src") === `${place}/assets/on.png` ? `${place}/assets/off.png` : `${place}/assets/on.png`;
		 fléche.setAttribute("src", direction);
		 toggle = listeItem;
	  });
	});

	barRecherche.addEventListener("keypress", function(e) {
		if (e.key === "Enter") {
			 let recherche = barRecherche.value.toLowerCase();
			 for (str of filtre) recherche = recherche.replace(str, '');
			 for (page in urls) résultat = urls[page].includes(recherche) ? page : résultat;
			 window.location.href = `https://redeemedspoon.github.io/QuantumScope/chapitre/${résultat}.html`;
		};
	});
});
