// inicio animacion de titulo y subtitulo del hero 
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // Detener la observación una vez activada
          }
        });
      },
      {
        threshold: 0.5, // Se activa cuando el 50% del contenedor es visible
      }
    );
  
    const content = document.querySelector(".content");
    observer.observe(content);
  });
// final animacion de titulo y subtitulo del hero 

// Inicio Animación Carrusel
document.addEventListener("DOMContentLoaded", () => {
  const carrusel = document.querySelector(".carrusel");
  const items = document.querySelectorAll(".carrusel-item");
  let index = 0;

  const moveCarrusel = () => {
    index++;
    if (index >= items.length) {
      index = 0;
    }
    carrusel.style.transform = `translateX(-${index * 100}%)`;
  };

  if (carrusel) {
    setInterval(moveCarrusel, 3000); // Cambia de imagen cada 3 segundos
  }
});


// Fin Animación Carrusel

  