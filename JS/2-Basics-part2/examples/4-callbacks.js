var button = document.getElementById("bouton");

// Creation d'une fonction
function boutonClick() {
  console.log("Bouton click");
}

// Appel de la fonction en passant boutonClick en parametre
button.addEventListener("click", boutonClick);

// Fonction anomyme
button.addEventListener("click", function(){
  console.log("Bouton click encore");
})
