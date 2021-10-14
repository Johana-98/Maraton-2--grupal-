// 1) Eureka! Nuestra web tendrá una lamparita (imagen o hecha con css), que al oprimir una tecla se encienda y al soltarla se apague(cambia de estilo o imagen). Si la quiero prender y ya está prendida, no hace nada. Lo mismo con el apagado.
/* /
 function changeImage() {
    var image= document.getElementById('myImage') ;
    if (image.src.match("bulbon")) {
  
  image.src="https://www.w3schools.com/js/pic_bulboff.gif" ;
  } else {
    image.src = "https://w3schools.com/js/pic_bulbon.gif" ;
  }
  } */
 
/* var dateStart;
var dateEnd;

$('.zone').on('mouseenter', function() {
  dateStart = new Date();
  dateEnd = null;
  $('.info').html('');
});


$('.zone').on('mouseleave', function() {  
  dateEnd = new Date();
  var duration = (dateEnd - dateStart) / 1000;
  $('.info').html(duration + ' segundos');
});  */

// 2) Crear un elemento (puede ser cualquier cosa, un cuadrado, círculo, imagen, etc) que cuente la cantidad de veces que se le pasó el mouse por encima. Mostrar en un mensaje la cantidad de veces sumadas e ir actualizandolo cada vez que agregue 1.
//   Ejemplo: Que diga “Usted pasó el mouse 2 veces”.


/* 3) Vamos a crear una app para que cada vez que aprete un botón, me muestre
un usuario aleatorio utilizando la siguiente API: https://randomuser.me/api
Mostrar 3 o 4 datos del usuario. */


/* 4) Crear un juego de piedra papel o tijera! Tenemos la tres opciones y al elegir,
saldrá aleatoriamente lo que eligió la computadora. Mostrar el resultado.
Ejemeplo: Si elegí tijera, y aleatoriamente la computadora sacó piedra,
entonces mostrar que he perdido.
 */


/* 5) Crear un cronómetro. Puede iniciar apretando un botón o con el evento que
prefieran y empezar a contar segundos y minutos. Arranca en 0 y va
subiendo infinitamente. */

var inicio=0;
var timeout=0;
 
	function empezarDetener(elemento)
	{
		if(timeout==0)
		{
			// empezar el cronometro
 
			elemento.value="Detener";
 
			// Obtenemos el valor actual
			inicio=vuelta=new Date().getTime();
 
			// iniciamos el proceso
			funcionando();
		}else{
			// detemer el cronometro
 
			elemento.value="Empezar";
			clearTimeout(timeout);
			timeout=0;
		}
	}
 
	function funcionando()
	{
		// obteneos la fecha actual
		var actual = new Date().getTime();
 
		// obtenemos la diferencia entre la fecha actual y la de inicio
		var diff=new Date(actual-inicio);
 
		// mostramos la diferencia entre la fecha actual y la inicial
		var result=LeadingZero(diff.getUTCHours())+":"+LeadingZero(diff.getUTCMinutes())+":"+LeadingZero(diff.getUTCSeconds());
		document.getElementById('crono').innerHTML = result;
 
		// Indicamos que se ejecute esta función nuevamente dentro de 1 segundo
		timeout=setTimeout("funcionando()",1000);
	} 
 
	// Funcion que pone un 0 delante de un valor si es necesario
	function LeadingZero(Time) {
		return (Time < 10) ? "0" + Time : + Time;
	}
 
