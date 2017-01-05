// Creation de l'objet permettant de faire des requettes AJAX
var xhr = new XMLHttpRequest();

// On ajouter notre fonction pour recuperer les infos
// de retour de notre requette
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
    console.log(xhr.responseText); // Données textuelles récupérées
  }
};

// Appel d'un fichier avec la methode get
xhr.open("GET", "toload.html?v1=1&v2=2", true);

// Envoi de la requette
xhr.send(null);
