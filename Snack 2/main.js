console.log("Ok Js :)");
//Crea 10 oggetti che rappresentano una zucchina.
//Dividi in due array separati le zucchine che misurano meno o più di 15cm.
//Infine stampa separatamente quanto pesano i due gruppi di zucchine.
//Crea 10 oggetti che rappresentano una zucchina.
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
    lunghezza: 12,
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
    lunghezza: 10,
  },
  {
    varietà: "zucchina rigata pugliese",
    peso: 60,
    lunghezza: 16,
  },
  {
    varietà: "zucchina pâtisson",
    peso: 100,
    lunghezza: 14,
  },
];

//Dividi in due array separati le zucchine che misurano meno o più di 15cm.
let zucchineShort = [];
let zucchineLong = [];
//ZUCCHINE SHORT
for (let i = 0; i < cassetta.length; i++) {
  if (cassetta[i].lunghezza <= 15) {
    zucchineShort.push(cassetta[i]);
  }
  //ZUCCHINE LONG
  else {
    zucchineLong.push(cassetta[i]);
  }
}

//Infine stampa separatamente quanto pesano i due gruppi di zucchine.
let pesoZucchinaShort = 0;
let pesoZucchinaLong = 0;
//PESO ZUCCHINE SHORT
for (i = 0; i < zucchineShort.length; i++) {
  let shortWeight = zucchineShort[i].peso;
  pesoZucchinaShort += shortWeight;
}
console.log("Il peso totale delle zucchine piccole è " + pesoZucchinaShort);

//PESO ZUCCHINE LONG
for (i = 0; i < zucchineLong.length; i++) {
  let longWeight = zucchineLong[i].peso;
  pesoZucchinaLong += longWeight;
}
console.log("Il peso totale delle zucchine grandi è " + pesoZucchinaLong);
