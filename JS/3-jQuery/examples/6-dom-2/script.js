$(document).ready(function(){

  // Recupere l'element parent du selecteur
  $(".child").parent().css("background", "red");
  // Recupere le premier element parent qui correspond au selecteur
  $(".child").parents('.super-parent').css("background", "blue");;
  // Recupere tous les enfants du selecteur
  $(".parent").children().css("background", "green");
  // Cherche les elements corresponds a la recherche
  $('.parent').find(".child.red").css("background", "yellow");
  // Recupere l'element suivant
  $("#element").next();
  // Recupere l'element precedant
  $("#element").prev();
});
