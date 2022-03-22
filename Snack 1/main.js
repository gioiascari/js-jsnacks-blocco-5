console.log("Ok Js :)");
//Crea un array di 10 oggetti che rappresentano una zucchina,
//indicando per ognuna varietà, peso e lunghezza.
//Calcola quanto pesano tutte le zucchine.

const cassetta = [
  {
    varietà: "zucchina napoletana",
    peso: 50,
    lunghezza: 20,
  },
  {
    varietà: "zucchina nero di Milano",
    peso: 75,
    lunghezza: 21,
  },
  {
    varietà: "zucchina romanesco",
    peso: 65,
    lunghezza: 22,
  },
  {
    varietà: "zucchina ortolano di Faenza",
    peso: 55,
    lunghezza: 23,
  },
  {
    varietà: "zucchina lunga fiorentina",
    peso: 100,
    lunghezza: 19,
  },
  {
    varietà: "zucchina siciliana",
    peso: 90,
    lunghezza: 18,
  },
  {
    varietà: "zucchina striata di Napoli",
    peso: 80,
    lunghezza: 15,
  },
  {
    varietà: "zucchina bianca triestina",
    peso: 70,
    lunghezza: 17,
  },
  {
    varietà: "zucchina rigata pugliese",
    peso: 60,
    lunghezza: 16,
  },
  {
    varietà: "zucchina pâtisson",
    peso: 100,
    lunghezza: 19,
  },
];

//CALCOLO IL PESO TOTALE DI TUTTE LE ZUCCHINE
let sum = 0;
for (let i = 0; i < cassetta.length; i++) {
  let pesoTotale = cassetta[i].peso;
  sum += pesoTotale;
}
console.log(sum);
