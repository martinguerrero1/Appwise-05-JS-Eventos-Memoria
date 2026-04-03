const date = new Date();
// let dia = ahora.getDay();
// console.log(dia); // año → 2026
// ahora.getMonth();    // mes → 0-11
// ahora.getDate();     // día del mes
// ahora.getHours();    // hora
// ahora.getMinutes();  // minutos
// ahora.getSeconds();  // segundos

// console.log(esFinDeSemana(date))

// function esFinDeSemana(date) {
//   // TU CÓDIGO AQUÍ 👇
//   let dia = date.getDay();
//   if (dia === 6 || 0){
//     return true;
//   } 
//   else{
//     return false;
//   }
// }

let str = "mar tisdn jas dasfar"

console.log(soloNumeros(str))

function soloNumeros(str) {
  return str.toLowerCase().replaceAll(" ", "-");
}