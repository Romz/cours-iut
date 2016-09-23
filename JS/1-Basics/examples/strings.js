var str = "Une super chaine de caracteres";

str = str + " concatene";
// Recupere la taille de la chaine
var taille = str.length;

// Recupere la position de la chaine
var position = str.indexOf("chaine");

// Extrait une parti de la chaine
var sub = str.slice(0, 3);

// Remplace une chaine par un autre
str.replace("super", "mega");

// Recupere le caractere
var c = str.charAt(1);

// Decoupe la chaine avec un separateur
var mots = str.split(" ");
