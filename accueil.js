let produit = fetch('http://localhost:3000/api/teddies')
  .then(function(response){
    return response.json()
  }).then(function(data){
     // appel de ta fonction d'affichage
     afficheDatas(data);
});

function afficheDatas(data) {
  data.map(function(produit, index) {
   document
      .querySelector(".produit")
      .insertAdjacentHTML("beforebegin","<div id='"+produit._id+"'>"
      +"<div>image :<img src='"+produit.imageUrl+"' alt='image_produit' /></div>"
      +"<div>nom :"+produit.name+"</div>"
      +"<div>prix :"+produit.price+"</div>"
      +"</div>");
  });

