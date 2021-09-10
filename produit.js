let teddies 
let $produit = document.querySelector('#produit');

fetch('http://localhost:3000/api/teddies') //url qui permet de recueillir des données
  .then(function(response){ //utilisation de then pour récupérer une promesse qui va nous donner une réponse 
    return response.json() //type de format réponse en json
  })
  .then(function(data) { //récupération d'une autre promesse pour obtenir des données 
    var el = document.querySelector(".produitours");//selectionne le premier élément
    el.innerText=JSON.stringify(data); //change le texte qui est dans une balise html
    console.log(el) //s'affiche sur la console du site
  } );

//Appel URL

const url_id = window.location.search;
console.log (url_id);

const urlSearchparams = new URLSearchParams(url_id);
console.log(urlSearchparams);

function main(teddie) {
  let newDiv =document.createElement("div")
  newDiv.innerHTML =
    `<section class="main" id="main">
      <h1 class="titre"></h1>
      <div id="produit">
        <article class="boxprod">
          <a href="produit.html?id=${teddie._id}" id="lien" class="lien"><img alt="image" id="image" src="${teddie.imageUrl}"></a>
          <h2 id="nom" class="nom">${teddie.name}</h2>
          <div class="description">${teddie.description}</div>
          <div class="couleurs">${teddie.colors}</div>
          <p id="prix" class="prix">${teddie.price}</p>
        </article>
      </div>
    </section>`
    $produit.appendChild(newDiv)

}



