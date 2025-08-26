const { ask } = require('./helpers/input');

function obtenerPromedio(numeros) {
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total = total + numeros[i];
  }
  return (total / numeros.length);
}

function obtenerAprobados(numeros) {
  let aprobados = 0;
  let reprobados = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] >= 70) {
      aprobados++;
    } else {
      reprobados++;
    }
  }
  return { aprobados, reprobados };
}

function analizarCalificaciones(numeros) {
  const { aprobados, reprobados } = obtenerAprobados(numeros);
  const promedio = Math.floor(obtenerPromedio(numeros));
  const califAlta = Math.max(...numeros);
  const califBaja = Math.min(...numeros);

  return {
    aprobados,
    reprobados,
    promedio,
    califAlta,
    califBaja
  };
}

async function main() {
  const calificaciones = [90, 89, 34, 45, 67, 89, 23, 12, 45, 89, 8, 90];
  const resultado = analizarCalificaciones(calificaciones);
  console.log(resultado);
}

main();