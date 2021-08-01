
(async function() {
  const articles = await getArticles()
  
  for (article of articles) {
    displayArticle(article)
  }
})()

function getArticles() {
  return fetch ("http://localhost:3000/api/teddies")
    .then(function(response){ //utilisation de then pour récupérer une promesse qui va nous donner une réponse 
      return response.json() //type de format réponse en json
    })
    .then(function(articles) {
      return articles
    })
    .catch(function(error) {
      alert("Une erreur est survenue. Nous allons corriger le problème très prochainement")
    })
}

function displayArticle(article) {
  const templateElt = document.getElementById("produit")
  const cloneElt = document.importNode(templateElt.content, true)

  cloneElt.getElementById('image').src = produit.imageUrl
  cloneElt.getElementById('nom').textContent = produit.name
  cloneElt.getElementById('prix').textContent = `${produit.price / 100}.00 €`
  cloneElt.getElementById('lien').href = `/produit.html?id=${produit._id}`

}