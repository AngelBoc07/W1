import translations from "./translations.js";

document.addEventListener("DOMContentLoaded", function () {
  let lang = "en"; // Por defecto, cargar español

  // Función para traducir los elementos
  function translateElements() {
    try {
      const elements = document.querySelectorAll("[data-translate]");
      elements.forEach((element) => {
        const key = element.dataset.translate;
        const translation = translations[lang][key];
        // Sanitizar los datos de traducción (opcional)
        const sanitizedTranslation = sanitizeHTML(translation);
        element.textContent = sanitizedTranslation;
      });
    } catch (error) {
      console.error("Error al traducir elementos:", error);
    }
  }

  // Función para evitar la inyección de HTML
  function sanitizeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML.replace(/&amp;/g, "&");
  }

  // Traducir los elementos al cargar la página
  translateElements();

  // Cambiar el idioma al hacer clic en el botón
  document.getElementById("toggle-lang").addEventListener("click", function () {
    try {
      lang = lang === "es" ? "en" : "es"; // Alternar entre español e inglés
      translateElements();

      // Cambiar el texto del botón de manera segura
      const toggleButton = document.getElementById("toggle-lang");
      toggleButton.textContent = translations[lang]["toggle-button"];
    } catch (error) {
      console.error("Error al cambiar el idioma:", error);
    }
  });
});
