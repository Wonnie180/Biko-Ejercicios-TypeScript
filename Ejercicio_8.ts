/* 
    TIPOS LITERALES

    Los tipos literales son un sub-tipo que creamos a partir de valores concretos.
    Puedes leer más en: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types

    --- Resultado esperado en consola
    Al bueno lo llamaban Rubio, al malo Sentencia y, al feo, Tuco
*/

// Modifica el código bajo esta línea

type PersonajesLiterales = "bueno" | "malo" | "feo";

function getName(personaje: PersonajesLiterales) : string{
  let nombre: string = "";
  if (personaje === "bueno") {
    nombre = "Rubio";
  } else if (personaje === "malo") {
    nombre = "Sentencia";
  } else if (personaje === "feo") {
    nombre = "Tuco";
  }
  return nombre;
}

// Modifica el código sobre esta línea

console.log(
  `Al bueno lo llamaban ${getName("bueno")}, al malo ${getName(
    "malo"
  )} y, al feo, ${getName("feo")}`
);
