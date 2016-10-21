$(document).ready(function(){
  // Cree un element
  var li = $("<li>New item</li>");
  // Ajoute la class item
  li.addClass("item");
  // Ajoute l'element dans la liste
  $("#menu").append(li);
  // recupere le dernier element
  var lastItem = $("#menu li.item").last();
  // Supprime l'element
  lastItem.remove();
  // Recupere tout l'html du menu
  var html = $("#menu").html();
  // Vide le menu
  $("#menu").html("");
});
