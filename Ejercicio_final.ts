/*
    Hemos copiado y pegado un código que teníamos en Javascript y queremos 
    migrarlo a TypeScript. ¿Nos ayudas a conseguirlo? Aprovecha para probar
    todo lo que quieras sobre este lenguaje de programación
*/

interface iPokemon {
  nombre: string;
  numero: number;
  ataques: string[];
}

class Pokemon implements iPokemon {
  constructor(
    public nombre: string,
    public numero: number,
    public ataques: string[]
  ) {}

  ataque(numero: number) {
    if (this.ataques.length >= numero && 0 < numero) {
      console.log(
        this.nombre + " utiliza el ataque " + this.ataques[numero - 1]
      );
    } else {
      console.log(
        "Inserte un valor de ataque valido (valor entre 1 y " +
          this.ataques.length +
          ")"
      );
    }
  }
}

var pokemon1 = new Pokemon("Pikachu", 25, ["placaje", "rayo", "gruñido"]);
pokemon1.ataque(2);
