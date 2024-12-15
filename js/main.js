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
  const menuToggle = document.querySelector(".menu-toggle"); // Selecciona por clase
  const navMenu = document.querySelector(".nav ul");

  if (menuToggle && navMenu) {
    // Evento para abrir/cerrar el menú hamburguesa
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    // Evento para cerrar el menú si se hace clic fuera
    document.addEventListener("click", (e) => {
      const isClickInsideMenu = menuToggle.contains(e.target) || navMenu.contains(e.target);
      if (!isClickInsideMenu && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
      }
    });

    // Asegurar que el menú esté visible en tamaños grandes
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        navMenu.classList.remove("active");
      }
    });
  }
});
// Final funcionalidad menú hamburguesa
