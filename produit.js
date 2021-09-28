let idConfig = new URL(window.location.href);
 idConfig = idConfig.searchParams.get("id");
 
 
 let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("produit")); //On crée tout de suite la variable pour le localStorage
 
 fetch(`http://localhost:3000/api/teddies/${idConfig}`) //Forcément, on change avec notre nouvelle variable
     .then(data => {
         return data.json();
     })
     .then((teddy) => {
         console.log('Here');
          printProduct(teddy);
         setStorage(teddy);
         //commandorder(teddy);
     })
             .catch((error) => {
                 alert("Une erreur est survenue. Nous allons corriger le problème très prochainement")
         })
 
    printProduct = (teddy) => {
     document.querySelector("#image").src = teddy.imageUrl //Toutes ces variables changent (teddie -> teddy, puisqu'on fait réf à notre objet reçu)
     document.querySelector("#image").alt = teddy.name
     document.querySelector("#nom").innerText = teddy.name
     const select = document.querySelector(".couleurs")
     console.log(teddy.colors)
 
     for (i = 0; i <= teddy.colors.length; i++) {
         const option = document.createElement("option")
         option.value = teddy.colors [i]
         option.innerText = teddy.colors [i]
         select.appendChild(option)
     }
 
 
     //document.querySelector("#prix").innerText = (teddy.price) 
 

     
 }
 
  setStorage = (teddy) => {
     //********************LOCAL STORAGE******************//
     //************Stocker la récupération des valeurs du formulaire dans le local storage
 
     // Déclaration de la variable ProduitLocalStorage. 
     //Son rôle est de retranscrire en javascript la valeur envoyée par setItem("produit") en un objet réutilisable.
     if (produitEnregistreDansLocalStorage.setItem("#produit") === null  ) {
         let produitLocalStorage = []
     }
     const qtyButton = document.getElementById("quantity") //on crée une variable qui pointe sur l'élement qui contient la quantité...
     const select = document.querySelector(".couleurs")
 
 
         let optionsProduit = {
             nom: teddy.name,
             idProduit: idConfig,
             couleur: select.value,
             prix: teddy.price,
             quantity: qtyButton.value, //...pour récuperer la valeur de la quantité ici
         }
 
         if (produitEnregistreDansLocalStorage) {
             produitEnregistreDansLocalStorage.push(optionsProduit);
             localStorage.setItem("€produit", JSON.stringify(produitEnregistreDansLocalStorage));
             console.log(produitEnregistreDansLocalStorage);
 
         } else {
             produitEnregistreDansLocalStorage = [];
             produitEnregistreDansLocalStorage.push(optionsProduit);
             localStorage.setItem("#produit", JSON.stringify(produitEnregistreDansLocalStorage));let idConfig = new URL(window.location.href);
      } 
 
 } 
 