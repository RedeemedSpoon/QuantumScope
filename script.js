document.addEventListener("DOMContentLoaded", function() {
   const listeItems = document.querySelectorAll(".liste");
   const place = (window.location.pathname.includes("chapitre") ? ".." : ".");
   let toggle = null
   
   listeItems.forEach(listeItem => {
     const partie = listeItem.querySelector("ul");
     const fléche = listeItem.querySelector("h2 img");
     partie.classList.add("caché");

     listeItem.querySelector("h2").addEventListener("click", function() {
       if (toggle !== listeItem) {
         listeItems.forEach(otherItem => {
	   otherItem.querySelector("ul").classList.add("caché");
	   otherItem.querySelector("img").setAttribute("src", `${place}/assets/off.png`)
         });
       }

       partie.classList.toggle('caché');
       direction = fléche.getAttribute("src") === `${place}/assets/on.png` ? `${place}/assets/off.png` : `${place}/assets/on.png`;
       fléche.setAttribute("src", direction)
       toggle = listeItem
     });
   });
});
