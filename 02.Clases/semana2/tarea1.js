// Práctica para casa:
// Imprimir números pares del 1 al 100
const { ask } = require('../helpers/input');

async function main() {
  let contador = 1;
  let limite = 100;

  console.log('Ciclo While');
  while (contador <= limite) {
    if (contador % 2 === 0) {
      console.log(`El número ${contador} es par`);
    }
    contador++;
  }

  console.log('Ciclo For');
  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(`El número ${i} es par`);
    }
  }

  let pares = [];
  console.log('Ciclo For de 2 en 2');
  for (let i = 0; i <= 100; i = i + 2) {
    pares.push(i);
  }
  console.log('Los numeros pares del 1 al 100 son: ', pares);

}

main();
