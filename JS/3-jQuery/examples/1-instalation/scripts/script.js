// Methode 1
var pageReady = function(){
  alert("Page chargee")
};

jQuery(document).ready(pageReady);

// Methode 2 fonction anonyme
jQuery(document).ready(function(){
  alert("Page chargee");
});
