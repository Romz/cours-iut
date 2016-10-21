$(document).ready(function(){
  // Evenement click
  $("a").click(function() {
    // Recupere le lien clique
    var aClicked = $(this);
    // Recupere l'attribut href
    var href = aClicked.attr("href");
    alert(href);
  });

  // Evenement quand un champs change
  $("input, textarea, select").change(function() {
    // Recupere la valeur du champs
    var val = $(this).val();
    console.log(val)
  });
});
