/* ==========================================================================
   CRONÓMETRO — Lógica pura: Play, Pause, Reset
   Conceptos: setInterval, clearInterval, manipulación del DOM
========================================================================== */

// 1. EL ESTADO GLOBAL DEL CRONÓMETRO
// Estos son los datos que cambian a lo largo del tiempo
let segundos = 0; // Cuántos segundos han pasado
let intervalo = null; // Guardamos el ID del intervalo para poder pararlo

// 2. AGARRAMOS LOS ELEMENTOS DEL HTML
const display = document.querySelector("#display");
const btnPlay = document.querySelector("#btn-play");
const btnPause = document.querySelector("#btn-pause");
const btnReset = document.querySelector("#btn-reset");

// 3. HELPER — Convierte un número de segundos a formato "MM:SS"
function formatearTiempo(segs) {
  const minutos = Math.floor(segs / 60);
  const segundosResto = segs % 60;

  // padStart(2, "0") convierte "5" → "05"
  const mm = String(minutos).padStart(2, "0");
  const ss = String(segundosResto).padStart(2, "0");

  return `${mm}:${ss}`;
}

// 4. FUNCIÓN PLAY — Arranca el cronómetro
function play() {
  // Seguridad: si ya hay un intervalo corriendo, no creamos otro
  if (intervalo !== null) return;

  // setInterval ejecuta la función cada 1000ms (1 segundo)
  intervalo = setInterval(() => {
    segundos++;
    display.textContent = formatearTiempo(segundos);
  }, 1000);

  // Actualizamos el estado de los botones
  btnPlay.disabled = true;
  btnPause.disabled = false;
}

// 5. FUNCIÓN PAUSE — Pausa sin resetear
function pause() {
  // clearInterval detiene la ejecución repetida
  clearInterval(intervalo);

  // ⚠️ Importante: ponemos el ID en null para saber que está detenido
  intervalo = null;

  // Actualizamos los botones
  btnPlay.disabled = false;
  btnPause.disabled = true;
}

// 6. FUNCIÓN RESET — Vuelve todo a cero
function reset() {
  // Primero pausamos (si estaba corriendo)
  clearInterval(intervalo);
  intervalo = null;

  // Reseteamos el estado
  segundos = 0;
  display.textContent = "00:00";

  // Volvemos los botones al estado inicial
  btnPlay.disabled = false;
  btnPause.disabled = true;
}

// 7. CONECTAMOS LOS EVENTOS A LOS BOTONES
btnPlay.addEventListener("click", play);
btnPause.addEventListener("click", pause);
btnReset.addEventListener("click", reset);
