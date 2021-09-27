//Déclaration de la variable "produitEnregistreDansLocalStorage" dans laquelle on met les keys qui sont dans le local storage
let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("produit"));
//***JSON.parse c'est pour convertir les données au format JSON qui sont dans le local storage en objet JavaScript
console.log(produitEnregistreDansLocalStorage);

//***************AFFICHAGE DES PRODUITS DU PANIER***********************//
//Sélection de la classe où je vais injecter le code HTML
const element = document.querySelector("#produit-panier");
console.log(element);

//si le panier est vide : afficher le panier vide
if (produitEnregistreDansLocalStorage === null || produitEnregistreDansLocalStorage == 0 ) {
    console.log("je suis vide");
const paniervide = 
    `<div id="panier-vide">
        <div>Le panier est vide</div>  
    </div>`;
    element.innerHTML = paniervide;
}else {
    //Si le panier n'est pas vide , afficher les produits dans le local storage
   let produitpanier = [];
   for ( j = 0; j < produitEnregistreDansLocalStorage.length; j++) {
        produitpanier = produitpanier + 
        `<div class = "recapitulatif-panier">
            <div>Quantite - ${produitEnregistreDansLocalStorage[j].nom} options : ${produitEnregistreDansLocalStorage[j].couleur}</div>  
            <div>${produitEnregistreDansLocalStorage[j].prix}
        </div>`;
        }
        if (j === produitEnregistreDansLocalStorage.length) {
            //injection html dans la page panier
            element.innerHTML = produitpanier;
        } 

}

//******************Gestion du bouton supprimer l'article*****************//
//Création du bouton supprimer
let supprimerButton = document.createElement("button");
let article = document.getElementById("produit-panier")
supprimerButton.textContent = "Supprimer le produit";
article.appendChild(supprimerButton);

for (let k = 0; k < supprimerButton.length; k++) {
    supprimerButton[k].addEventListener("click", (event) => {
        event.preventDefault();

        //Sélection de l'id du produit qui va être supprimé en cliquant sur le bouton
        let id_supprimer = produitEnregistreDansLocalStorage[k]._id;
        console.log(supprimerButton);
        console.log("supprimerButton");

        //on envoie la variable dans le local storage
        //On transforme la variable au format JSON dans la key "produit" du local storage
        localStorage.setItem(
            "produit" , 
            JSON.stringify(produitEnregistreDansLocalStorage)
        )

        //alert pour indiquer que le produit a bien été supprimé
        alert("Ce produit a bien été supprimé du panier")


    })
}

//******************Montant total du panier*****************//
//Déclaration de la variable pour pouvoir y mettre les prix qui sont présents dans le panier
let calculprix = [];

//Aller chercher les prix dans le panier
for  (let l = 0; l < produitEnregistreDansLocalStorage.length; l++) {
    let prixpanier = produitEnregistreDansLocalStorage[l].prix;
    console.log(produitEnregistreDansLocalStorage[l].prix);

    //mettre les prix du panier dans la variable "calculprix"
    calculprix.push(prixpanier);
    console.log(calculprix);
    

    //Additionner les prix dans le tableau de la variable
    const reducer = (accumulator , currentValue) => accumulator + currentValue;
    console.log(reducer);
    const total = calculprix.reduce(reducer);
    console.log(total);

    //Le code HTML du prix total à afficher
    const prixHTML = `<div class="prix-html">Le prix total est de : ${total} € </div>`

    //injection html dans la page panier
    element.insertAdjacentHTML("beforeend", prixHTML );

    let confirmButton =  document.querySelector(".bouton-validation") //nouveau sélecteur parent pour append le bouton (à faire en dur => HTML)
    confirmButton.addEventListener("click", function(e){
         e.preventDefault
        window.location.href = "confirmation.html"
    })
}

