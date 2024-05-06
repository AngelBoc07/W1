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

// Opcional: Detener el parpadeo después de un cierto tiempo (por ejemplo, después de 10 segundos)
const blinkingIcon = document.querySelector('.blinking-icon');
let zoomTimeout;
let zoomFactor = 1;

function zoom() {
  blinkingIcon.style.transform = `scale(${zoomFactor})`;
  zoomFactor = zoomFactor === 1 ? 1.2 : 1; // Alternar entre el tamaño normal y un tamaño aumentado (ajusta según sea necesario)
  zoomTimeout = setTimeout(zoom, 1550); // Ajusta el tiempo de espera según el efecto de zoom deseado
}

zoom(); // Iniciar el efecto de zoom al cargar la página

// Opcional: Detener el efecto de zoom después de un cierto tiempo (por ejemplo, después de 10 segundos)
setTimeout(() => {
  clearTimeout(zoomTimeout);
}, 10000); // 10 segundos


// Obtiene la ubicación 
document.querySelectorAll('.pin span').forEach(function(element) {
  element.addEventListener('click', function() {
      var location = element.getAttribute('data-translate'); // Obtiene la ubicación del atributo data-translate
      var url; // URL del mapa personalizado

      // Utilizamos switch-case para manejar diferentes ubicaciones
      switch (location) {
          case 'pin-colombia':
              url = 'https://maps.app.goo.gl/34gsHW1wr8KYRTt7A';
              break;
          case 'pin-eeuu':
              url = 'https://maps.app.goo.gl/6DFDp9Y29S1pvwaJ7';
              break;
          case 'pin-paisesbajos':
              url = 'https://maps.app.goo.gl/FXA9sp5vSBnRy7kv8';
              break;
          case 'pin-portu':
              url = 'https://maps.app.goo.gl/PoS6z7uLH9D6MAc18';
              break;
          // Puedes agregar más casos para otras ubicaciones aquí si es necesario
          default:
              // Si no se reconoce la ubicación, no hace nada
              return;
      }

      // Abre el mapa personalizado en una nueva pestaña
      window.open(url, '_blank');
  });
});















