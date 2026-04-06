/* ==========================================================================
   08 — Bloque 4: Lógica de Juego y Rankings (Brain) | 10 Katas
   Foco: algoritmos para manejar estados complejos y puntuaciones.
   Completá cada función RETORNANDO el valor pedido.
   ⚠️  NO uses console.log() — las funciones deben RETORNAR el resultado.
========================================================================== */

/* --------------------------------------------------------------------------
   KATA 1 — calcularNivel
   Cada 100 de XP es un nivel. Retorna el nivel actual (empieza en 1).
   Ej: 0 → 1 | 99 → 1 | 100 → 2 | 250 → 3
-------------------------------------------------------------------------- */
function calcularNivel(xp) {
  // TU CÓDIGO AQUÍ 👇
  return Math.floor(xp / 100) + 1;
}

/* --------------------------------------------------------------------------
   KATA 2 — porcentajeProgreso
   Retorna el porcentaje de XP obtenido sobre el total (0 a 100).
   Redondea a entero.
   Ej: (50, 200) → 25 | (200, 200) → 100 | (0, 100) → 0
-------------------------------------------------------------------------- */
function porcentajeProgreso(xp, total) {
  // TU CÓDIGO AQUÍ 👇
  return Math.round((xp / total) * 100);
}

/* --------------------------------------------------------------------------
   KATA 3 — esNuevoRecord
   Retorna true si el puntaje actual es ESTRICTAMENTE mayor al máximo histórico.
   Ej: (200, 150) → true | (150, 150) → false | (100, 200) → false
-------------------------------------------------------------------------- */
function esNuevoRecord(actual, max) {
  // TU CÓDIGO AQUÍ 👇
  return actual > max;
}

/* --------------------------------------------------------------------------
   KATA 4 — ordenarRanking
   Recibe un array de puntajes (números) y los retorna ordenados
   de MAYOR a MENOR.
   Ej: [30, 10, 50, 20] → [50, 30, 20, 10]
-------------------------------------------------------------------------- */
function ordenarRanking(arr) {
  // TU CÓDIGO AQUÍ 👇
  let rankingOrden =  arr.map(e => e);
  return rankingOrden.sort((a,b) => b - a);
}

/* --------------------------------------------------------------------------
   KATA 5 — topTres
   Retorna solo los 3 mejores puntajes de una lista (ya ordenada o no).
   Ej: [30, 10, 50, 20, 80] → [80, 50, 30]
-------------------------------------------------------------------------- */
function topTres(arr) {
  // TU CÓDIGO AQUÍ 👇
  const arrayOrdenado = arr.sort((a,b) => b - a)
  const topTres = [];
  arrayOrdenado.forEach(num => {
    if(topTres.length < 3){
      topTres.push(num);
    }
  });
  return topTres;
}

/* --------------------------------------------------------------------------
   KATA 6 — generarId
   Retorna un ID único basado en el timestamp actual (Date.now()).
   El resultado debe ser un número positivo.
   Ej: → 1711900000000 (varía en cada llamada)
-------------------------------------------------------------------------- */
function generarId() {
  // TU CÓDIGO AQUÍ 👇
  return Date.now();
}

/* --------------------------------------------------------------------------
   KATA 7 — aplicarMultiplicador
   Multiplica los puntos por el bonus y redondea hacia abajo.
   Ej: (10, 1.5) → 15 | (7, 1.3) → 9 | (100, 2) → 200
-------------------------------------------------------------------------- */
function aplicarMultiplicador(puntos, bonus) {
  // TU CÓDIGO AQUÍ 👇
  return Math.floor(puntos * bonus);
}

/* --------------------------------------------------------------------------
   KATA 8 — estaBloqueado
   Si la cantidad de intentos es mayor o igual a 3, retorna true.
   Ej: 3 → true | 4 → true | 2 → false
-------------------------------------------------------------------------- */
function estaBloqueado(intentos) {
  // TU CÓDIGO AQUÍ 👇
  if(intentos >= 3){
    return true
  }
  else{
    return false
  }
}

/* --------------------------------------------------------------------------
   KATA 9 — formatearPosicion
   Convierte un número de posición a su forma con sufijo ordinal.
   Ej: 1 → "1º" | 2 → "2º" | 10 → "10º"
-------------------------------------------------------------------------- */
function formatearPosicion(pos) {
  // TU CÓDIGO AQUÍ 👇
  return `${pos}º`
}

/* --------------------------------------------------------------------------
   KATA 10 — calcularDistancia
   Aplica el Teorema de Pitágoras para calcular la distancia entre dos puntos.
   Fórmula: Math.sqrt((x2-x1)² + (y2-y1)²)
   Redondeá a 2 decimales.
   Ej: (0, 0, 3, 4) → 5 | (0, 0, 1, 1) → 1.41
-------------------------------------------------------------------------- */
function calcularDistancia(x1, y1, x2, y2) {
  // TU CÓDIGO AQUÍ 👇
  return Number(Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1)).toFixed(2));
}

// 🚨 ¡NO TOCAR! Exportación para los tests
module.exports = {
  calcularNivel,
  porcentajeProgreso,
  esNuevoRecord,
  ordenarRanking,
  topTres,
  generarId,
  aplicarMultiplicador,
  estaBloqueado,
  formatearPosicion,
  calcularDistancia,
};
