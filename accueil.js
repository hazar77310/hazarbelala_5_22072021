//on initialise les variables

let teddies 
let $produit = document.querySelector('#produit');

//appel de l'API

fetch ("http://localhost:3000/api/teddies")
  .then(function(response){ //utilisation de then pour récupérer une promesse qui va nous donner une réponse 
    return response.json() //type de format réponse en json
    })
  .then(function(articles) {
    articles.forEach(elem) => {
      main(elem)}
    })
  .catch(function(error) {
    alert("Une erreur est survenue. Nous allons corriger le problème très prochainement")
})


//Appel URL
const params = document.location;
console.log(params);

function main = (teddie) => {
  let newDiv =document.createElement("div")
  newDiv.innerHTML =
    `<section class="main" id="main">
      <h1 class="titre">Nos produits</h1>
      <div id="produit">
        <article class="boxprod">
          <a href="produit.html?id=${teddie._id}" id="lien" class="lien"><img alt="image" id="image" src="${teddie.imageUrl}"></a>
          <h2 id="nom" class="nom">${teddie.name}</h2>
          <p id="prix" class="prix">${teddie.price}</p>
        </article>
      </div>
    </section>`
    $produit.appendChild(newDiv)

}