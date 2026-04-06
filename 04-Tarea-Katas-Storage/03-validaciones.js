/* ==========================================================================
   07 — Bloque 3: Validaciones y Sanitización (Inputs) | 10 Katas
   Foco: limpiar y validar datos antes de que entren a la memoria.
   Completá cada función RETORNANDO el valor pedido.
   ⚠️  NO uses console.log() — las funciones deben RETORNAR el resultado.
========================================================================== */

/* --------------------------------------------------------------------------
   KATA 1 — limpiarInput
   Quita espacios al principio y al final, y convierte a minúsculas.
   Ej: "  Ana  " → "ana" | " HOLA " → "hola"
-------------------------------------------------------------------------- */
function limpiarInput(str) {
  // TU CÓDIGO AQUÍ 👇
  return str.trim().toLowerCase()
}

/* --------------------------------------------------------------------------
   KATA 2 — esEmailValido
   Retorna true si el texto contiene un "@" y un "." (lógica simple).
   Ej: "ana@mail.com" → true | "sinArroba" → false
-------------------------------------------------------------------------- */
function esEmailValido(email) {
  // TU CÓDIGO AQUÍ 👇
  if (email.includes("@") && email.includes(".")){
    return true
  }
  else {
    return false
  }
}

/* --------------------------------------------------------------------------
   KATA 3 — esPasswordLarga
   Retorna true si el string tiene 8 o más caracteres.
   Ej: "12345678" → true | "1234567" → false
-------------------------------------------------------------------------- */
function esPasswordLarga(pass) {
  // TU CÓDIGO AQUÍ 👇
  return pass.length >= 8;
}

/* --------------------------------------------------------------------------
   KATA 4 — slugify
   Convierte un título a formato URL: todo en minúsculas y espacios
   reemplazados por guiones.
   Ej: "Hola Mundo" → "hola-mundo" | "Mi Blog Post" → "mi-blog-post"
-------------------------------------------------------------------------- */
function slugify(titulo) {
  // TU CÓDIGO AQUÍ 👇
  return titulo.toLowerCase().split(" ").join("-");
  //existe el metodo .replace(valorBuscado, valorReemplazo) (o replaceAll en este caso)
  // return titulo.toLowerCase().replaceAll(" ", "-");
}

/* --------------------------------------------------------------------------
   KATA 5 — extraerId
   Recibe un string con formato "item-N" y retorna solo el número.
   Ej: "item-42" → 42 | "item-7" → 7
-------------------------------------------------------------------------- */
function extraerId(str) {
  // TU CÓDIGO AQUÍ 👇
  let arrayString = str.split("-");
  for (let i of arrayString){
    let numero = Number(i)
    if(!isNaN(numero)){
      return numero;
    }
  }
}

/* --------------------------------------------------------------------------
   KATA 6 — mascararTarjeta
   Recibe un número de tarjeta como string y retorna los últimos 4
   dígitos visibles, el resto reemplazado por "*".
   Ej: "12345678" → "****5678" | "1234567890123456" → "************3456"
-------------------------------------------------------------------------- */
function mascararTarjeta(num) {
  // TU CÓDIGO AQUÍ 👇
  let array = num.split("");
  return array.map((caracter,index) => {
    if (index < (array.length - 4)){
      caracter = '*'
    }
    return caracter;
  }).join("")
}

/* --------------------------------------------------------------------------
   KATA 7 — soloNumeros
   Elimina cualquier letra de un string y deja solo los dígitos.
   Ej: "abc123def456" → "123456" | "hola99" → "99"
-------------------------------------------------------------------------- */
function soloNumeros(str) {
  // TU CÓDIGO AQUÍ 👇
  let arrayCaracteres = str.split("");
  return arrayCaracteres.filter(e => !isNaN(Number(e))).join(""); 
}

/* --------------------------------------------------------------------------
   KATA 8 — capitalizar
   Convierte el primer carácter a mayúscula y el resto a minúsculas.
   Ej: "neri" → "Neri" | "JUAN" → "Juan"
-------------------------------------------------------------------------- */
function capitalizar(str) {
  // TU CÓDIGO AQUÍ 👇
  let array = str.toLowerCase().split("");
  array[0] = array[0].toUpperCase()
  return array.join("");
}

/* --------------------------------------------------------------------------
   KATA 9 — limitarTexto
   Si el string supera el límite de caracteres, lo corta y agrega "...".
   Si no lo supera, lo retorna tal cual.
   Ej: ("Hola Mundo", 4) → "Hola..." | ("Hola", 10) → "Hola"
-------------------------------------------------------------------------- */
function limitarTexto(str, limit) {
  // TU CÓDIGO AQUÍ 👇
  if (str.length > limit){
    return `${str.slice(0,limit)}...`;
  }
  return str;
}

/* --------------------------------------------------------------------------
   KATA 10 — obtenerExtension
   Recibe el nombre de un archivo y retorna su extensión (sin el punto).
   Ej: "foto.png" → "png" | "archivo.test.js" → "js"
-------------------------------------------------------------------------- */
function obtenerExtension(file) {
  // TU CÓDIGO AQUÍ 👇
  let arrayInvertido = file.split("").reverse();
  let formatoInvertido = arrayInvertido.slice(0,arrayInvertido.indexOf("."));
  let formato = formatoInvertido.reverse().join("");
  return formato;
}

// 🚨 ¡NO TOCAR! Exportación para los tests
module.exports = {
  limpiarInput,
  esEmailValido,
  esPasswordLarga,
  slugify,
  extraerId,
  mascararTarjeta,
  soloNumeros,
  capitalizar,
  limitarTexto,
  obtenerExtension,
};
