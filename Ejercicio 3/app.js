// 3) Vamos a crear una app para que cada vez que aprete un botón, me muestre
// un usuario aleatorio utilizando la siguiente API: https://randomuser.me/api
// Mostrar 3 o 4 datos del usuario.

function randomUser() {
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(resp => console.log(resp.results))
}
 