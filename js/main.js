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
  