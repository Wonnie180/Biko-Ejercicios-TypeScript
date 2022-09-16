/* 
    DEFINIENDO ENUMERADOS
    Typescript nos permite crear enumerados, que podríamos definir como un
    listado de constantes. Veamos un ejemplo

    Puedes saber más en: https://www.typescriptlang.org/docs/handbook/enums.html

    --- Resultado esperado por consola
    Al bueno lo llamaban Rubio, al malo Sentencia y, al feo, Tuco
*/

enum Personaje {
  Bueno,
  Feo,
  Malo,
}

// Modifica el código bajo esta línea

function getName(personaje: Personaje) : string {
  let nombre: string;

  switch (personaje) {
    case Personaje.Bueno:
      nombre = "Rubio";
      break;
    case Personaje.Malo:
      nombre = "Sentencia";
      break;
    case Personaje.Feo:
      nombre = "Tuco";
      break;
    default:
      nombre = "";
      break;
  }

  return nombre;

  // if (personaje === Personaje.Bueno) {
  //   return "Rubio";
  // } else if (personaje === Personaje.Malo) {
  //   return "Sentencia";
  // } else if (personaje === Personaje.Feo) {
  //   return "Tuco";
  // }
  // return "";
}

// Modifica el código sobre esta línea

console.log(
  `Al bueno lo llamaban ${getName(Personaje.Bueno)}, al malo ${getName(
    Personaje.Malo
  )} y, al feo, ${getName(Personaje.Feo)}`
);
