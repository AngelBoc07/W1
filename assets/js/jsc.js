document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const toggleLang = document.getElementById("toggle-lang");

  // Función para cerrar el menú hamburguesa
  function closeNavMenu() {
    navMenu.classList.remove("nav-menu_visible");
    navToggle.querySelector("i").classList.remove("fa-bars_t");
    navToggle.querySelector("i").classList.add("fa-bars_c");
  }

  // Función para abrir el menú hamburguesa
  function openNavMenu() {
    navMenu.classList.add("nav-menu_visible");
    navToggle.querySelector("i").classList.remove("fa-bars_c");
    navToggle.querySelector("i").classList.add("fa-bars_t");
  }

  // Agregar event listener para cerrar el menú al hacer clic en un enlace del menú
  const navLinks = document.querySelectorAll(".nav-menu-link");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      closeNavMenu();
    });
  });

  // Agregar event listener para abrir/cerrar el menú al hacer clic en el botón de toggle
  navToggle.addEventListener("click", function () {
    if (navMenu.classList.contains("nav-menu_visible")) {
      closeNavMenu();
    } else {
      openNavMenu();
    }
  });

  // Event listener para cerrar el menú al hacer clic en el botón de cambio de idioma
  toggleLang.addEventListener("click", function () {
    closeNavMenu();
  });

  // Cerrar el menú cuando se hace clic fuera del menú
  document.addEventListener("click", function (event) {
    const target = event.target;
    if (!target.closest(".nav")) {
      closeNavMenu();
    }
  });
});

//------------------------------------------------------------------------------------------------------------------

window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  var cajaContenido = document.querySelector(".contenido_caja");
  var headerFondoBlanco = intersecta(cajaContenido, header);

  // Agregar clase de transición
  header.classList.add("transitioning");

  // Agregar o quitar clase 'white-bg' después de un breve retraso
  setTimeout(function () {
    if (headerFondoBlanco) {
      header.classList.add("white-bg");
    } else {
      header.classList.remove("white-bg");
    }
  }, 50); // Retraso breve para permitir la transición CSS

  // Eliminar clase de transición después de que finalice la transición
  header.addEventListener(
    "transitionend",
    function () {
      header.classList.remove("transitioning");
    }, {
      once: true
    }
  );
});

function intersecta(a, b) {
  let aRect = a.getBoundingClientRect();
  let bRect = b.getBoundingClientRect();

  return !(
    aRect.top > bRect.bottom ||
    aRect.bottom < bRect.top ||
    aRect.right < bRect.left ||
    aRect.left > bRect.right
  );
}


//------------------------------------------------------------------------------------------------------------------

var listaItems = document.querySelectorAll(".lista_origen_texto");
const tiempoTransicion = 2000;

listaItems.forEach(function (item, index) {
  item.addEventListener("mouseover", function () {
    cambiarImagen(index);
  });
});

function cambiarImagen(index) {
  var imagen = document.querySelector(".origen_imagen img");
  // imagen.style.transition = 'opacity 0.5s ease-in-out';

  imagen.style.opacity = "0";
  setTimeout(function () {
    switch (index) {
      case 0:
        imagen.src = "./assets/img/Secciones/1M.webp";
        break;
      case 1:
        imagen.src = "./assets/img/Secciones/2M.webp";
        break;
      case 2:
        imagen.src = "./assets/img/Secciones/3M.webp";
        break;
      case 3:
        imagen.src = "./assets/img/Secciones/4M.webp";
        break;
    }
    imagen.style.opacity = "1";
  }, 0);
}

//------------------------------BTN UP----------------------------------------------

const $btnUP = document.getElementById('up');

window.addEventListener('scroll', (e) => {
  let ejeY = document.documentElement.scrollTop; // Cambié 'scrollTo' a 'scrollTop'
  if (ejeY === 0) {
    $btnUP.classList.add('hide');
    $btnUP.classList.remove('active_btn'); // Corregí para remover la clase 'active_btn'
  } else if (ejeY >= 50) {
    $btnUP.classList.remove('hide'); // Corregí para remover la clase 'hide'
    $btnUP.classList.add('active_btn');
  }
});

document.addEventListener('click', (e) => {
  if (e.target == $btnUP || e.target.matches('.fa-arrow-up')) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
});


var mapsdesktop = document.querySelector('.section_maps_desktop');
var pins = document.querySelectorAll('.pin');
var maps = document.querySelectorAll('.mps');
var timer; // Variable para almacenar el temporizador

function handleMouseEnter(pinIndex) {
    clearTimeout(timer); // Limpiar cualquier temporizador pendiente
    mapsdesktop.style.display = 'flex';
    maps[pinIndex].style.display = 'flex';
    setTimeout(function() {
        mapsdesktop.style.opacity = '1'; 
    }, 10);
}

function handleMouseLeave() {
    timer = setTimeout(function() {
        mapsdesktop.style.opacity = '0';
        setTimeout(function() {
            mapsdesktop.style.display = 'none';
            maps.forEach(map => map.style.display = 'none');
        }, 200);
    }, 200); // Incrementar el tiempo de espera antes de ocultar
}

pins.forEach((pin, index) => {
    pin.addEventListener('mouseenter', function() {
        handleMouseEnter(index);
    });

    pin.addEventListener('mouseleave', function() {
        handleMouseLeave();
    });
});

// Añadir un event listener al elemento mapsdesktop para detectar cuando el cursor sale de su área
mapsdesktop.addEventListener('mouseleave', function(event) {
    // Verificar si el cursor sale de mapsdesktop y no entra en otro elemento hijo inmediato
    if (!event.relatedTarget || !mapsdesktop.contains(event.relatedTarget)) {
        maps.forEach(map => map.style.display = 'none');
        handleMouseLeave();
    }
});






