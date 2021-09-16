const productId = new URL(location.href).searchParams.get("id")
console.log(productId);

fetch('http://localhost:3000/api/teddies/' + productId)  //url qui permet de recueillir des données
  .then(function(response){ //utilisation de then pour récupérer une promesse qui va nous donner une réponse 
    return response.json() //type de format réponse en json
  })
  .then((teddy) => { //récupération d'une autre promesse pour obtenir des données 
    main(teddy) // initie la fonction main
  });


function main(teddie) {
  document.querySelector(".image").src = teddie.imageUrl
  document.querySelector("#nom").innerText = teddie.name
  document.querySelector(".description").innerText = teddie.description
  document.querySelector(".couleurs") = teddie.colors
  document.querySelector("#prix").innerText = teddie.price

}





