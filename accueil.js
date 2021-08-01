//on initialise les variables

let teddies 
let $produit = document.querySelector('#produit');

//appel de l'API

fetch ("http://localhost:3000/api/teddies")
  .then(function(response){ //utilisation de then pour récupérer une promesse qui va nous donner une réponse 
    return response.json() //type de format réponse en json
    })
  .then(function(articles) {
    return articles
    })
  .catch(function(error) {
    alert("Une erreur est survenue. Nous allons corriger le problème très prochainement")
})


//Appel URL
const params = document.location;
console.log("params", params)

const main = () => {
  $produit.innerHTML +=
    `<section class="main" id="main">
      <h1 class="titre">Nos produits</h1>
      <div id="produit">
        <article class="boxprod">
          <a href="produit.html?id=${teddies._id}" id="lien" class="lien"><img alt="image" id="image" src="" url(${teddies.imageUrl}></a>
          <h2 id="nom" class="nom">${teddies.name}</h2>
          <p id="prix" class="prix">${teddies.price}</p>
        </article>
      </div>
    </section>`

}