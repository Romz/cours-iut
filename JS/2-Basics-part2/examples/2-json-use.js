// Afficher le nom
console.log( formateur.nom );
// Afficher le prenom
console.log(formateur["prenom"]);
// Afficher la ville de l'adresse
console.log( formateur.adresse.ville );
// Lister les competences
for(var i = 0; i < formateur.competences.length; i++){
  console.log(formateur.competences[i]);
}
// Changer une valeur
formateur.age = 27;
// Ajouter un attribut
formateur.civilite = "M";
