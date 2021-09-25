let idConfig = new URL(window.location.href);
idConfig = idConfig.searchParams.get("id");
console.log(idConfig);


let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("produit")); //On crée tout de suite la variable pour le localStorage

fetch(`http://localhost:3000/api/teddies/${idConfig}`) //Forcément, on change avec notre nouvelle variable
    .then(function (response) {
        return response.json();
    })
    .then((teddy) => {
        document.querySelector("#image").src = teddy.imageUrl //Toutes ces variables changent (teddie -> teddy, puisqu'on fait réf à notre objet reçu)
        document.querySelector("#image").alt = teddy.name
        document.querySelector("#nom").innerText = teddy.name
        document.querySelector(".description").innerText = teddy.description

        const select = document.querySelector(".couleurs")
        console.log(teddy.colors)

        for (i = 0; i <= teddy.colors.length; i++) {
            const option = document.createElement("option")
            option.value = teddy.colors [i]
            option.innerText = teddy.colors [i]
            select.appendChild(option)
        }


        document.querySelector("#prix").innerText = (teddy.price) / 100 + ",00" + "€"

        let panierButton = document.createElement("button");
        let article = document.getElementById("produit") //nouveau sélecteur parent pour append le bouton (à faire en dur => HTML)
        panierButton.textContent = "Ajouter au panier";
        article.appendChild(panierButton);
        panierButton.addEventListener("click", function(e){
            e.preventDefault
            window.location.href = "panier.html"
            //********************LOCAL STORAGE******************//
            //************Stocker la récupération des valeurs du formulaire dans le local storage

            // Déclaration de la variable ProduitLocalStorage. 
            //Son rôle est de retranscrire en javascript la valeur envoyée par "setItem("produit") en un objet réutilisable.
            let produitLocalStorage = JSON.parse(localStorage.getItem("#produit"));
            console.log(produitLocalStorage);

            const qtyButton = document.getElementById("quantity") //on crée une variable qui pointe sur l'élement qui contient la quantité...

                let optionsProduit = {
                    nom: teddy.name,
                    idProduit: teddy._id,
                    couleur: select.value,
                    prix: teddy.price / 100 + ",00" + "€",
                    quantity: qtyButton.value, //...pour récuperer la valeur de la quantité ici
                }

            if (produitEnregistreDansLocalStorage) {
                produitEnregistreDansLocalStorage.push(optionsProduit);
                localStorage.setItem("produit", JSON.stringify(produitEnregistreDansLocalStorage));
                console.log(produitEnregistreDansLocalStorage);

            } else {
                produitEnregistreDansLocalStorage = [];
                produitEnregistreDansLocalStorage.push(optionsProduit);
                localStorage.setItem("produit", JSON.stringify(produitEnregistreDansLocalStorage));
                console.log(produitEnregistreDansLocalStorage);

            }
        })
    })

    .catch((error) => {
        alert("Une erreur est survenue. Nous allons corriger le problème très prochainement : " + error.message) //Ici, je rajoute le error.message pour avoir une indication sur le problème
    })





  





