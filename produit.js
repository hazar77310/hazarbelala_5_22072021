const prod = document.querySelector('#produit');
let params = new URL(document.location).searchParams;
let id = params.get("id");
console.log(id);


fetch('http://localhost:3000/api/teddies/')  //url qui permet de recueillir des données
  .then(function(response){ //utilisation de then pour récupérer une promesse qui va nous donner une réponse 
    return response.json() //type de format réponse en json
  })
  .then((teddy) => { //récupération d'une autre promesse pour obtenir des données 
    main(teddy) // initie la fonction main
  })
  .catch(function (error) {
    alert(
      "Une erreur est survenue. Nous allons corriger le problème très prochainement"
    )
  }) ; 


function main(teddie) {
  document.querySelector(".image").src = teddie.imageUrl
  document.querySelector("#nom").innerText = teddie.name
  document.querySelector(".description").innerText = teddie.description
  document.querySelector(".couleurs") = teddie.colors
  document.querySelector("#prix").innerText = teddie.price

}




