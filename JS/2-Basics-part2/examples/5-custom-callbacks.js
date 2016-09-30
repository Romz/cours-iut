function maFonctionLongue(callback) {

  // Traitement long
  var resultatDuTraitementLong = "Resultat";
  callback(resultatDuTraitementLong);
}


maFonctionLongue(function(resultat) {
  console.log(resultat);
});
