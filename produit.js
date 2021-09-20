async function getId() {

    let params = new URLSearchParams(window.location.search);
    let idconfig = params.get("id"); 
    console.log(idconfig);


    fetch("http://localhost:3000/api/teddies/${_id}")
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

async function main(teddie) {
  document.querySelector(".image").src = teddie.imageUrl
  document.querySelector("#nom").innerText = teddie.name
  document.querySelector(".description").innerText = teddie.description
  document.querySelector(".couleurs") = teddie.colors
    for (i = 0; i <= options.length ; i++)
    {
    }
  document.querySelector("#prix").innerText = teddie.price

};

// Création de la div qui contiendra l'input pour sélectionner la quantité
let Quantitydiv = document.createElement("div");
let container = document.querySelector("#produit");
container.appendChild(Quantitydiv);
Quantitydiv.classList.add("quantity");

// Création du bouton "moins"
let LessButton = document.createElement("button");
LessButton.textContent = "-";
Quantitydiv.appendChild(LessButton);
// Ajout de l'évènement "click" sur le bouton "moins"
LessButton.addEventListener("click", function(e){
  e.stopPropagation();
  if(InputNumber > 1){
    createInput.value = `${--InputNumber}`
                    }
});

// création de l'input pour rentrer la quantité voulue
let createInput = document.createElement("input");
let InputNumber = 1;
createInput.value = `1`;
Quantitydiv.appendChild(createInput);
// Ajout de l'évènement "input" pour prendre en compte la quantité sélectionnée
createInput.addEventListener("input", function(e){

});

// Création du bouton "plus"
let PlusButton = document.createElement("button");
PlusButton.textContent = "+";
Quantitydiv.appendChild(PlusButton);
// Ajout de l'évènement "click" sur le bouton "plus"
PlusButton.addEventListener("click", function(){
});

// Création du bouton "ajouter au panier"
let panierButton = document.createElement("button");
panierButton.textContent = "Ajouter au panier";
Quantitydiv.appendChild(panierButton);
// Ajout de l'évènement "click" sur le bouton "moins"
panierButton.addEventListener("click", function(){
});
