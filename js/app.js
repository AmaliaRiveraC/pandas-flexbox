var textoOrigen = document.getElementById("textoOrigen");
var textoExtincion = document.getElementById("textoExtincion");
var botones = document.getElementsByClassName("opcion");

var cerrar = document.getElementsByClassName("cerrar");
var imagenPanda = document.getElementsByClassName("imagenPanda");

for(var i=0; i < imagenPanda.length; i++) {
  cerrar[i].addEventListener("click", function(){
    imagenPanda[i].style.display = "none";
  });
}

botones[0].addEventListener("click", function() {
  if(textoOrigen.style.visibility == "visible") {
  textoOrigen.style.visibility = "hidden";
  } else {
    textoOrigen.style.visibility = "visible";
  } 
});

botones[1].addEventListener("click", function(){
  if(textoExtincion.style.visibility == "visible") {
    textoExtincion.style.visibility = "hidden";
  } else {
    textoExtincion.style.visibility = "visible";
  }
});
