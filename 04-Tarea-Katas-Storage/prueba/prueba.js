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

let arr = [1, 2 ,6 ,87 ,89,0]

console.log(ordenarRanking(arr))

function ordenarRanking(arr) {
  // TU CÓDIGO AQUÍ 👇
  let rankingOrden =  arr.map(e => e);
  return rankingOrden.sort((a,b) => b - a);
}