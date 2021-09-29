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


function commandorder(teddy) {
    fetch("http://localhost:3000/api/teddies/order", {method: "POST"})
        .then(response => response.json())
        .then((infosCommande) => {
            console.log(infosCommande);

            let commandLocalStorage = JSON.parse(localStorage.getItem("order"));
            
            let options = {
                getorderid: infosCommande.orderId,
            }
            console.log(options)

            if (commandLocalStorage) {
                commandLocalStorage.push(options);
                localStorage.setItem("order", JSON.stringify(commandLocalStorage));
                console.log(commandLocalStorage);

            } else {
                commandLocalStorage = [];
                commandLocalStorage.push(options);
                localStorage.setItem("order", JSON.stringify(commandLocalStorage));
                console.log(commandLocalStorage);
            }
        })
        .catch((error) => {
            alert("Une erreur est survenue. Nous allons corriger le problème très prochainement : " + error.message) //Ici, je rajoute le error.message pour avoir une indication sur le problème
        })
}

let commandLocalStorage = JSON.parse(localStorage.getItem("order")); //On crée tout de suite la variable pour le localStorage

fetch("http://localhost:3000/api/teddies/order", {method: "POST"})
    .then(function (response) {
        return response.json();
    })
    .then((infosCommande) => {

        //********************RECHERCHE DOM ******************//

        const commande = document.querySelector("#orderId")
        console.log(commande)


        //********************FIN RECHERCHE D0M ******************//



        //********************LOCAL STORAGE******************//
        //Récupérer le bouton ajouter au panier dans le DOM

        let article = document.getElementById("bouton-validation") //nouveau sélecteur parent pour append le bouton (à faire en dur => HTML)
        article.addEventListener("click", function(e){
            e.preventDefault

            //************Stocker la récupération des valeurs du formulaire dans le local storage

            // Déclaration de la variable commandLocalStorage 
            //Son rôle est de retranscrire en javascript la valeur envoyée par "getItem("order") en un objet réutilisable.
            let commandLocalStorage = JSON.parse(localStorage.getItem("#order"));
            console.log(commandLocalStorage);

            let cmd = [];

           //Aller chercher le orderId 
            for  (let m = 0; m < commandLocalStorage.length; m++) {
                let order = commandLocalStorage[m].id;
                console.log(commandLocalStorage[m].id);

                //mettre le order du panier dans la variable "cmd"
                cmd.push(order);
                console.log(order);


                    let optionsProduit = {
                        id : orderId,

                    }

                if (commandLocalStorage) {
                    commandLocalStorage.push(optionsProduit);
                    localStorage.setItem("produit", JSON.stringify(commandLocalStorage));
                    console.log(commandLocalStorage);

                } else {
                    commandLocalStorage = [];
                    commandLocalStorage.push(optionsProduit);
                    localStorage.setItem("produit", JSON.stringify(commandLocalStorage));
                    console.log(commandLocalStorage);

                }
            }

        //********************FIN LOCAL STORAGE******************//
        })

    //********************FIN DU THEN ((teddy)******************//
    })


    .catch((error) => {
        alert("Une erreur est survenue. Nous allons corriger le problème très prochainement : " + error.message) //Ici, je rajoute le error.message pour avoir une indication sur le problème
    })