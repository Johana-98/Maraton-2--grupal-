// 1) Eureka! Nuestra web tendrá una lamparita (imagen o hecha con css), que al oprimir una tecla se encienda y al soltarla se apague(cambia de estilo o imagen). Si la quiero prender y ya está prendida, no hace nada. Lo mismo con el apagado.


function changeImage() {
    var image= document.getElementById('myImage') ;
    if (image.src.match("bulbon")) {
  
  image.src="https://www.w3schools.com/js/pic_bulboff.gif" ;
  } else {
    image.src = "https://w3schools.com/js/pic_bulbon.gif" ;
  }
  }


