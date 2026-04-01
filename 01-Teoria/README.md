# ⏱️ El Tiempo y la Persistencia

> El navegador tiene memoria. Nosotros le enseñamos a usarla.

---

## 🕐 PARTE 1 — El Tiempo (Temporizadores)

JavaScript puede ejecutar código después de un tiempo o de forma repetida. Para eso existen dos herramientas clave:

### `setTimeout(fn, ms)` — "Hacelo una vez, después de X ms"

```js
setTimeout(() => {
  console.log("¡Han pasado 2 segundos!");
}, 2000);
```

- Ejecuta la función **una sola vez** después del retardo.
- Retorna un **ID** que podés usar para cancelarlo.

### `setInterval(fn, ms)` — "Hacelo cada X ms, para siempre"

```js
const intervalo = setInterval(() => {
  console.log("Tick...");
}, 1000);
```

- Ejecuta la función **repetidamente** cada X milisegundos.
- Retorna un **ID** que es esencial guardar para poder detenerlo.

### `clearTimeout(id)` y `clearInterval(id)` — "Pará todo"

```js
clearInterval(intervalo); // Detiene el setInterval
clearTimeout(miTimeout); // Cancela el setTimeout pendiente
```

> ⚠️ **Regla de oro**: siempre guardá el ID del intervalo en una variable. Si no podés apagarlo, tenés una fuga de memoria.

---

## 💾 PARTE 2 — La Persistencia (localStorage)

`localStorage` es una mini base de datos que vive en el navegador. Los datos **sobreviven al cierre de la pestaña** y hasta al reinicio del navegador.

### API básica

| Método                                   | ¿Qué hace?                           |
| ---------------------------------------- | ------------------------------------ |
| `localStorage.setItem("clave", "valor")` | Guarda un string                     |
| `localStorage.getItem("clave")`          | Lee el valor (o `null` si no existe) |
| `localStorage.removeItem("clave")`       | Borra esa clave                      |
| `localStorage.clear()`                   | Borra TODO el storage                |

### ⚠️ Solo guarda strings

```js
// ❌ Esto guarda "[object Object]"
localStorage.setItem("usuario", { nombre: "Ana" });

// ✅ Esto funciona
localStorage.setItem("usuario", JSON.stringify({ nombre: "Ana" }));

// ✅ Para recuperarlo
const usuario = JSON.parse(localStorage.getItem("usuario"));
```

> **Regla de oro**: siempre `JSON.stringify()` al guardar objetos y `JSON.parse()` al recuperarlos.

---

## 🧠 PARTE 3 — Combinando Tiempo + Persistencia

La magia ocurre cuando los unimos. Ejemplo: un **High Score** que persiste entre sesiones.

```js
// Al terminar la partida
function actualizarHighScore(puntajeActual) {
  const mejorPuntaje = Number(localStorage.getItem("highScore")) || 0;

  if (puntajeActual > mejorPuntaje) {
    localStorage.setItem("highScore", puntajeActual);
    console.log("🏆 ¡Nuevo récord!");
  }
}
```

---

## 🗂️ Diferencias rápidas: localStorage vs sessionStorage

|                           | `localStorage`  | `sessionStorage`              |
| ------------------------- | --------------- | ----------------------------- |
| Duración                  | Permanente      | Solo mientras dure la pestaña |
| Compartido entre pestañas | ✅ Sí           | ❌ No                         |
| Capacidad                 | ~5MB por origen | ~5MB por origen               |

---

## 📋 Resumen de Conceptos

- `setTimeout` → ejecuta código **una vez** después de un retardo
- `setInterval` → ejecuta código **repetidamente** cada X ms
- `clearInterval` / `clearTimeout` → **detienen** los temporizadores (¡siempre usarlos!)
- `localStorage` → persiste datos en el navegador como **strings**
- `JSON.stringify` / `JSON.parse` → convierten objetos ↔ strings para el storage
