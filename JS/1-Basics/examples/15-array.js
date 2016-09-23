// Creer un tableau vide
var tableau = [];

// Creer un tableau avec des valeurs
tableau = ["Valeur1", 1, 1.3];

// Recuperer une valeur du tableau
var valeur = tableau[0];

// Ajouter un element dans le tableau
tableau.push("Nouvel element");

// Recuperer la taille du tableau
tableau.length;

// Parcourrir un tableau
for(var i = 0; i < tableau.length; i++){
  var el = tableau[i];
}

// Reunir les elements dans une chaine
var str = tableau.join(',');
