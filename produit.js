async function getId() {

    let params = new URLSearchParams(window.location.search);
    let idconfig = params.get("id"); 
    console.log(idconfig);


    await fetch(`http://localhost:3000/api/teddies/${idconfig}`)
  		.then(function(response){ //utilisation de then pour récupérer une promesse qui va nous donner une réponse 
    	return response.json() //type de format réponse en json
    	})
 		.then((teddy) => { //récupération d'une autre promesse pour obtenir des données 
    	main(teddy) //s'affiche sur la console du site
   	 	})
   	 	.catch (function (error) {
    	   alert("Une erreur est survenue. Nous allons corriger le problème très prochainement")
  		});

};

function main(teddie) {
  document.querySelector("#image").src = teddie.imageUrl
  document.querySelector("#image").alt = teddie.name
  document.querySelector("#nom").innerText = teddie.name
  document.querySelector(".description").innerText = teddie.description
  const  select = document.querySelector(".couleurs")
    console.log(teddie.colors)
    for (i = 0; i <= teddie.colors.length ; i++) {
      const option = document.createElement("option")
      option.value = teddie.colors [i]
      option.innerText = teddie.colors [i]
      select.appendChild(option)
    }
  document.querySelector("#prix").innerText = (teddie.price/100)

};


getId()

// Création de la div qui contiendra l'input pour sélectionner la quantité
let Quantitydiv = document.createElement("div");
let container = document.querySelector("#produit");
container.appendChild(Quantitydiv);
Quantitydiv.classList.add("quantity");


// Création du bouton "ajouter au panier"
let panierButton = document.createElement("button");
panierButton.textContent = "Ajouter au panier";
Quantitydiv.appendChild(panierButton);
// Ajout de l'évènement "click" sur le bouton "moins"
panierButton.addEventListener("click", function(){
});
