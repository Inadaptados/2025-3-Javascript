const { ask } = require('../helpers/input');

function obtenerPromedio(numeros) {
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total = total + numeros[i];
  }
  const promedio = total / numeros.length;

  return promedio;
}

function obtenerMayor(numeros) {
  let mayor = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return mayor;
}

function obtenerMenor(numeros) {
  let menor = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }
  return menor;
}

function resumenEstadistico(numeros) {
  const promedio = obtenerPromedio(numeros);
  const mayor = obtenerMayor(numeros);
  const menor = obtenerMenor(numeros);
  return { promedio, mayor, menor };
}

function nombresConVocal(nombres) {
  const vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];
  const resultado = [];

  for (let i = 0; i < nombres.length; i++) {
    let primerLetra = nombres[i][0].toLowerCase();
    // for (let j = 0; j < vocales.length; j++) {
    //   if (vocales[j] === primerLetra) {
    //     resultado.push(nombres[i]);
    //   }
    // }
    if (vocales.includes(primerLetra)) {
      resultado.push(nombres[i]);
    }
  }
  return resultado;
}

async function main() {
  const edades = [20, 18, 25, 30, 22];
  const lista = [5, 20, 8, 99, 3];
  const datos = [70, 80, 90, 100, 85];
  const nombres = ['Ana', 'Esteban', 'Luis', 'Óscar', 'María'];

  console.log(`Promedio de edades = ${obtenerPromedio(edades)}`);
  console.log(`El número mayor de: ${lista} = ${obtenerMayor(lista)}`);
  console.log(`El número menor de: ${lista} = ${obtenerMenor(lista)}`);
  const estadisticas = resumenEstadistico(datos);
  console.log(estadisticas);
  console.log(`El resumen estadístico de: ${datos} es:`);
  console.log(`Promedio: ${estadisticas.promedio}`);
  console.log(`Mayor: ${estadisticas.mayor}`);
  console.log(`Menor: ${estadisticas.menor}`);
  console.log(`Nombres con vocal: ${nombresConVocal(nombres)}`);
}

main();