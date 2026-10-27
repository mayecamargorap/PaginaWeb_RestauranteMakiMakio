
/* =========================================================
   MENÚ DE NAVEGACIÓN PARA CELULARES
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const Va_botonMenu = document.querySelector(".menu-toggle");
  const Va_menuNavegacion = document.querySelector(".main-nav");

  // Verificar que existan los elementos del menú.
  if (Va_botonMenu && Va_menuNavegacion) {

    // Abrir o cerrar el menú al pulsar el botón.
    Va_botonMenu.addEventListener("click", () => {
      const Va_menuAbierto =
        Va_botonMenu.getAttribute("aria-expanded") === "true";

      Va_botonMenu.setAttribute(
        "aria-expanded",
        String(!Va_menuAbierto)
      );

      Va_botonMenu.setAttribute(
        "aria-label",
        Va_menuAbierto ? "Abrir menú" : "Cerrar menú"
      );

      Va_menuNavegacion.classList.toggle(
        "is-open",
        !Va_menuAbierto
      );
    });

    // Cerrar el menú al seleccionar una sección.
    const Va_enlacesMenu =
      Va_menuNavegacion.querySelectorAll("a");

    Va_enlacesMenu.forEach((Va_enlace) => {
      Va_enlace.addEventListener("click", () => {
        Va_menuNavegacion.classList.remove("is-open");
        Va_botonMenu.setAttribute("aria-expanded", "false");
        Va_botonMenu.setAttribute("aria-label", "Abrir menú");
      });
    });

    // Cerrar el menú con la tecla Escape.
    document.addEventListener("keydown", (Va_evento) => {
      if (Va_evento.key === "Escape") {
        Va_menuNavegacion.classList.remove("is-open");
        Va_botonMenu.setAttribute("aria-expanded", "false");
        Va_botonMenu.setAttribute("aria-label", "Abrir menú");
      }
    });

    // Cerrar el menú si se amplía la pantalla a escritorio.
    window.addEventListener("resize", () => {
      if (window.innerWidth > 700) {
        Va_menuNavegacion.classList.remove("is-open");
        Va_botonMenu.setAttribute("aria-expanded", "false");
        Va_botonMenu.setAttribute("aria-label", "Abrir menú");
      }
    });
  }

  /* =======================================================
     AÑO AUTOMÁTICO DEL PIE DE PÁGINA
     ======================================================= */

  const Va_elementoAnio = document.getElementById("current-year");

  if (Va_elementoAnio) {
    Va_elementoAnio.textContent = new Date().getFullYear();
  }
});

