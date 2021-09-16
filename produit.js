const productId = new URL(location.href).searchParams.get("id");
console.log(productId);

fetch('http://localhost:3000/api/teddies/' + productId)  //url qui permet de recueillir des données
  .then(function(response){ //utilisation de then pour récupérer une promesse qui va nous donner une réponse 
    return response.json() //type de format réponse en json
  })
  .then((teddy) => { //récupération d'une autre promesse pour obtenir des données 
    console.log(teddy) //s'affiche sur la console du site


    function main(teddie) {
    let newDiv =document.createElement("div")
    newDiv.innerHTML =
      `<section class="main" id="main">
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
      console.log(newDiv)

}
    function couleur(colors) {
      let divcolor = document.getElementByClassName("couleurs");
      divcolor.innerText = document.getElementByClassName("couleurs", `<div class="couleurs">${teddie.colors}</div>`);
      colors.forEach((elem) => (elem))
    console.log(divcolor);
    $couleurs.appendChild(newDiv)
    }

  } );




