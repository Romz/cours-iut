var arr = [10, "test", 1.2];
var personne = {nom: "TOTO", prenom: "TATA"};
// Boucle for of
for(var element of arr) {
  console.log(element);
}

// Boucle for in
for(var index in personne) {
  // Affiche nom/prenom
  console.log(index);
  
  // Affiche TOTO/TATA
  console.log(personne[index]);
}
