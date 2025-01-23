let count = 0; // Initialize count to 0

function increaseCount() {
    count++; // Incrementar el conteo en 1
    displayCount();
    //document.getElementById('countDisplay').innerHTML=count; // Mostrar el conteo en el HTML
    checkCountValue();
  }

function displayCount() {
  document.getElementById('countDisplay').innerHTML=count; // Mostrar el conteo en el HTML
  }
  
function checkCountValue() {
    if (count === 10) {
      alert("¡Tu publicación de Instagram ganó 10 seguidores! ¡Felicidades!");
    } else if (count === 20) {
      alert("¡Tu publicación de Instagram ganó 20 seguidores! ¡Sigue así!");
    }
  }

function restartFollowers() {

    if (count > 0) {
      count = 0; // Reiniciar el conteo a 0
      document.getElementById('countDisplay').innerHTML=count;
      alert("¡El contador ha sido reiniciado!");  
    } else {
      alert("El contador ya está en 0");
    }

  }