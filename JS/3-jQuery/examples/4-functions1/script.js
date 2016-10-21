$(document).ready(function(){
  $(".hide").hide(); // Cache l'element
  $(".hide").show(); // Affiche l'element
  $(".hide").toggle(); // les 2

  $("div").css('color', "red"); // Applique le css au selecteur

  $(".maclass").addClass("uneclass"); // Ajoute un classe
  $(".maclass").removeClass("uneclass"); // Enleve un classe
  $(".maclass").toggleClass("uneclass"); // Les 2

  $(".maclass").hasClass("uneclass"); // True si il y a la classe
});
