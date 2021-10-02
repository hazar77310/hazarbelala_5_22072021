let Client = [];
let products = [];

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
            <div>Nom : ${produitEnregistreDansLocalStorage[j].nom} - Couleur : ${produitEnregistreDansLocalStorage[j].couleur} - Quantité : ${produitEnregistreDansLocalStorage[j].quantity} </div>  
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
            "#produit" , 
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
    const prixHTML = `<div class="prix-html">Le prix total est de : ${total} </div>`

    //injection html dans la page panier
    element.insertAdjacentHTML("beforeend", prixHTML );

}


function commandtoOrder() {


    const contact = {
        firstName: firstName,
        lastName: lastName,
        address: address,
        city: city,
        email: email,
        codePostal : codePostal,
    
    }
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regexCodePostal = /[0-9]/;
    let regexAddress = /\d([ ])(\w+[ ]?)+/;


    console.log(contact)


    const product = {
        method: "POST",
        body: JSON.stringify(contact),
        headers: { "Content-Type": "application/json" },
    };


    fetch("http://localhost:3000/api/teddies/order", product )

        .then(response => response.json())
        .then((infosCommande) => {
            console.log(infosCommande);

        //********************RECHERCHE DOM ******************//

            const count = document.querySelector("#orderId")
            console.log(count)


        //********************FIN RECHERCHE D0M ******************//



        //********************LOCAL STORAGE******************//
        //Récupérer le bouton ajouter au panier dans le DOM

            let article = document.getElementById("bouton-validation") //nouveau sélecteur parent pour append le bouton (à faire en dur => HTML)
            article.addEventListener("click", function(e){
                e.preventDefault

                //************Stocker la récupération des valeurs du formulaire dans le local storage

                let opt = {
                    orderId : infosCommande.orderId,
                    prixTotal : total,
                }

                console.log(opt)

                // Déclaration de la variable commandLocalStorage 
                //Son rôle est de retranscrire en javascript la valeur envoyée par "getItem("toOrder") en un objet réutilisable.
                let commandLocalStorage = [];
                commandLocalStorage.push(opt);
                localStorage.setItem("command", JSON.stringify(commandeLocalStorage));
                console.log(commandLocalStorage);

            })


        //********************FIN LOCAL STORAGE******************//
        })

    //********************FIN DU THEN ******************//


    .catch((error) => {
        alert("Une erreur est survenue. Nous allons corriger le problème très prochainement : " + error.message) //Ici, je rajoute le error.message pour avoir une indication sur le problème
    })
}

commandtoOrder();