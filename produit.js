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

getId()

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
  document.querySelector("#prix").innerText = (teddie.price)/ 100 + ",00" +"€"

};



// Création de la div qui contiendra l'input pour sélectionner la quantité
let Quantitydiv = document.createElement("div");
let container = document.querySelector("#produit");
container.appendChild(Quantitydiv);
Quantitydiv.classList.add("quantity");


// Création du bouton "ajouter au panier"
let panierButton = document.createElement("button");
panierButton.textContent = "Ajouter au panier";
Quantitydiv.appendChild(panierButton);

// Déclaration de la variable ProduitLocalStorage. 
//Son rôle est de retranscrire en javascript la valeur envoyée par "getItem("produit") en un objet réutilisable.
let produitLocalStorage = JSON.parse(localStorage.getItem("#produit"));
console.log(produitLocalStorage);

// Création d'un objet qui contient les options sélectionnées pour les envoyer dans le local storage
function objet (teddie) {
  let optionsProduit = {
    nom: teddie.name,
    idProduit: teddie._id,
    prix: teddie.price,
    quantity: document.getElementsByTagName("input type : number")
  }
};


//********************LOCAL STORAGE******************//
//************Stocker la récupération des valeurs du formulaire dans le local storage

//Déclaration de lq variable "produitEnregistreDansLocalStorage" dans laquelle on met les keys qui sont dans le local storage
let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("#produit"));
//***JSON.parse c'est pour convertir les données au format JSON qui sont dans le local storage en objet JavaScript
console.log(produitEnregistreDansLocalStorage);

//fenêtre pop up
const popupConfirmation = () => {
  if (window.confirm (`${teddie.name} option: ${teddie.colors} a bien été ajouté au panier . Consultez le panier OK ou revenir à l'accueil ANNULER`)) {
    window.location.href = "panier.html";
  }else {
    window.location.href = "index.html" ;
  }
}

//S'il y a déja des produit enregistrés dans le local storage
if (produitEnregistreDansLocalStorage) {
    produitEnregistreDansLocalStorage.push(objet);
    localStorage.setItem("produit" , JSON.stringify(produitEnregistreDansLocalStorage));
    console.log(produitEnregistreDansLocalStorage);

//S'il n'y a pas de produit enregistrés dans le local storage
}else {
  produitEnregistreDansLocalStorage = [];
  produitEnregistreDansLocalStorage.push(objet);
  localStorage.setItem("produit" , JSON.stringify(produitEnregistreDansLocalStorage));
  console.log(produitEnregistreDansLocalStorage); 
   
}




