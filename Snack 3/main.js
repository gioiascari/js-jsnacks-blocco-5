console.log("Ok Js :)");
//Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

function reverse(text) {
  return text.split("").reverse().join("");
}
console.log(reverse("Ciao"));
