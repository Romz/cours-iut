// Requete ajax avec la method get
$.get("/monurl.json", function(result) {
	console.log(result, status);
});

// Requete ajax avec la method post en post
$.post("/form/submit.php", {param:"test"}, function(result){
	console.log(result);
});

// Fonction ajax generique
$.ajax({
  url: "monurl.html",
  method: "GET",
  success: function(result) {
    console.log(result);
  }
});
