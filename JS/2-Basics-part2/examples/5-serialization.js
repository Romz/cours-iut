var obj = {
  nom: "toto",
  prenom: "tata"
};

// Transforme l'objet en chaine de caractere
var objSerialise = JSON.stringify(obj);

// Transforme une chaine de caractere encode en objet js
var objParse = JSON.parse(objSerialise);
