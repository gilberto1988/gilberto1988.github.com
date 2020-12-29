//DOM
//.querySelector .querySelectorAll

/*let links = document.querySelectorAll("a");

links.forEach(function(link){
  console.log(link);
});
*/


// OBTENER LOS ELEMENTOS DE LA CLASE .close
let links = document.querySelectorAll(".close");

// RECORRERLOS

links.forEach(function(link){
  //Agregar un evento clic a cada uno de ellos
link.addEventListener("click",function(ev){
  ev.preventDefault();
  let content = document.querySelector('.content');

  // Quitarle las clases de animacion que ya tiene
  content.classList.remove("animate__fadeInDown");
  content.classList.remove("animate__animated");

  // Agregar clases para animar su salida fadeOutUp
  content.classList.add("animate__fadeOutUp");
  content.classList.add("animate__animated");

  setTimeout(function(){
  location.href="/boletines";
  },600);


  return false;
  });
});
