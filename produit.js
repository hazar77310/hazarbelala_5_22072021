fetch('http://localhost:3000/api/teddies') //url qui permet de recueillir des données
  .then(function(response){ //utilisation de then pour récupérer une promesse qui va nous donner une réponse 
    return response.json() //type de format réponse en json
  })
  .then(function(data) { //récupération d'une autre promesse pour obtenir des données 
    var el = document.querySelector(".produitours");//selectionne le premier élément
    el.innerText=JSON.stringify(data); //change le texte qui est dans une balise html
    console.log(el) //s'affiche sur la console du site
  } );


let params = new URL(document.location).searchParams;
let id = params.get("id");
function getArticles () {
  fetch('http://localhost:3000/api/teddies/${id}') //url qui permet de recueillir des données
    .then(function(response){ //utilisation de then pour récupérer une promesse qui va nous donner une réponse 
      return response.json() //type de format réponse en json
    })
    .then(function(resultatAPI) { //on place les donnees sur la page  
      article = resultatAPI;
      nom.innerHTML = article.name;
      image.src = article.imageUrl;
      description.innerText = article.description;
    })
}



