// Inicio animación de título y subtítulo del hero
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
  if (content) {
    observer.observe(content);
  }
});

// Final animación de título y subtítulo del hero

// Inicio animación carrusel
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

// Final animación carrusel

// Inicio funcionalidad menú hamburguesa
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector("#menu-toggle");
  const navMenu = document.querySelector(".nav ul");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const viewportWidth = window.innerWidth;
      if (viewportWidth < 768) {
        navMenu.classList.toggle("active"); // Abre o cierra el menú
      }
    });

    document.addEventListener("click", (e) => {
      if (
        !menuToggle.contains(e.target) && // No es el botón
        !navMenu.contains(e.target) && // No es el menú
        navMenu.classList.contains("active") // Y el menú está abierto
      ) {
        navMenu.classList.remove("active"); // Cierra el menú
      }
    });
  }
});
