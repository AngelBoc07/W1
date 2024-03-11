let translations;

try {
  translations = {
    es: {
      //Boton Cambio de Idioma
      "toggle-button": " EN",
      //Titulos Generales por seccion
      "titulo-general-uno": "",
      // "titulo-general-dos": "¡Agregamos valor a tu Compañía!",
      //Menu de Navegación
      "menu-uno": "Nosotros",
      // "menu-dos": "Servicios",
      "menu-tres": "Equipo",
      "menu-cuatro": "Contacto",
      "menu-cinco": "Programas",
      "menu-inicio": "Inicio",
      //seccion dos - Nosotros
      "nosotros-titulo": "SMIN - Energy Service Companies (ESCOs)",
      "nosotros-descripcion":
        "SMIN es una Compañía de Servicios Energéticos (ESCO) de nivel internacional fundada en 1997 que se dedica a establecer la transferencia de Know How; la gestión eficiente de la energía y uso de fuentes de energía renovable; la reducción de las emisiones de gases de efecto invernadero (GEI) y la adaptación al cambio climático; el desarrollo sostenible y sus objetivos globales mediante la gestión de programas de interés general.",
      //Seccion Empresa Vacia
      //Seccion cuatro
      "titulo-seccion-cuatro":"Lineas de Acción",
      "parrafo_seccion_cuatro":"Smin desarrolla las siguientes líneas de acción, garantizando la satisfacción de las necesidades de nuestros aliados en los sectores público y privado del nivel latinoamericano.",
      "seccion-cuatro-card_1":"Asesoría y Consultoría",
      "seccion-cuatro-card_2":"Gestión Energética",
      "seccion-cuatro-card_3":"Autoconsumo",
      "seccion-cuatro-card_4":"Iluminación Inteligente",
      "seccion-cuatro-card_5":"Smart City",
      "seccion-cuatro-card_6":"Economía Circular",
      "seccion-cuatro-card_7":"Microgrid",
      "seccion-cuatro-card_8":"Mantenimiento Integral",
      "seccion-cuatro-card_9":"Reducción de GEI",
      "seccion-cuatro-card_10":"Suministro de Energía",

      //Seccion tres
      "seccion-tres-t1": "En Smin nuestros esfuerzos se orientan a agregar valor a tus iniciativas de manera sistemática",
      "seccion-tres-porque": "¿Por que",
      "seccion-tres-Smin": "Smin Ltda?",
      //Seccion tres Card
      "seccion-tres-card_1": "Mejorando",
      "seccion-tres-card-texto_1":
        "La competitividad por la baja en los costos energéticos de producción",

      "seccion-tres-card_2": "Gestionando",
      "seccion-tres-card-texto_2":
        "Implementamos SGEn para entender como y en que se utilizan los energéticos",

      "seccion-tres-card_3": "Buscando",
      "seccion-tres-card-texto_3":
        "Finanzas más sanas, que logren mayor utilidad",

      "seccion-tres-card_4": "Reduciendo",
      "seccion-tres-card-texto_4": "Las pérdidas técnicas en procesos",

      "seccion-tres-card_5": "Analizando",
      "seccion-tres-card-texto_5":
        "La capacidad disponible de potencia en las instalaciones",

      "seccion-tres-card_6": "Estabilizando",
      "seccion-tres-card-texto_6": "Suministro energético",

      "seccion-tres-card_7": "Eliminando consumo nocivo",
      "seccion-tres-card-texto_7": "Energias de fuentes contaminantes",

      "seccion-tres-card_8": "Entregando",
      "seccion-tres-card-texto_8":
        "Visibilidad en tiempo real de las variables eléctricas de la operación",

      // Seccion Cinco
      "seccion-cinco-equipo": "El Dream Team",
      "seccion-cinco-Smin": "Smin",

      // Seccion Cinco Card
      "seccion-cinco-card_1_T1": "Lidia Andreina Amaya Fonseca",
      "seccion-cinco-card_1_S2": "Administradora",
      "seccion-cinco-card_1_D1":
      "Experta en  gestión pública; procesos de democratización pública; modernización institucional pública; especialista en alta gerencia.",

      "seccion-cinco-card_2_T1": "Marco Antonio Ruiz Rueda",
      "seccion-cinco-card_2_S2": "Ing. Sistemas",
      "seccion-cinco-card_2_D1":
        "Experto en  Inteligencia Artificial; optimización y predicción de eventos; y Smart Cities; Mg en Ciencia de la Computación y Mg en Diseño, Gestión y Administración de proyectos.",

      "seccion-cinco-card_3_T1": "Carlos Castillo Galvis",
      "seccion-cinco-card_3_S2": "Administrador",
      "seccion-cinco-card_3_D1":
        "Experto en desarrollo energético, sostenibilidad, transición energética Microgrid, Smart Cities, construcción y mantenimiento de redes de distribución, construcción y mantenimiento de sistemas de I&C y SFV.",

      "seccion-cinco-card_4_T1": "Alejandro Valencia Vélez",
      "seccion-cinco-card_4_S2": "Ing. Mecánico",
      "seccion-cinco-card_4_D1":
        "Experto en construcción y mantenimiento de Pequeñas Centrales Hidroeléctricas (PCH’s); y Estructuras Metálicas.",

      "seccion-cinco-card_5_T1": "Laura Lorena Garcia Suarez",
      "seccion-cinco-card_5_S2": "Ing. Electricista",
      "seccion-cinco-card_5_D1":
        "Experta en diseño, construcción y mantenimiento de sistemas de energía solar fotovoltaica; sistemas de transporte, transformación, distribución de energía; e inspección de sistemas de distribución de energía.",

      "seccion-cinco-card_6_T1": "Ivan Zúñiga Alegría",
      "seccion-cinco-card_6_S2": "Ing. Mecatrónico",
      "seccion-cinco-card_6_D1":
        "Experto en mantenimiento industrial, automatización de sistemas de potencia, I&C, e instalaciones industriales.",

      "seccion-cinco-card_7_T1": "Jhon Henry Cruz Feo",
      "seccion-cinco-card_7_S2": "Ing. Mecánico",
      "seccion-cinco-card_7_D1":
        "Experto en diseño, construcción, mantenimiento de facilidades de superficie y control de procesos.",

      // "seccion-cinco-card_8_T1": "Ing. Wendy Delgado Diáz",
      // "seccion-cinco-card_8_S2": "Ing. Electrónica",
      // "seccion-cinco-card_8_D1":
      //   "Especialista en mantenimiento de sistemas fotovoltaicos y riesgos laborales asociados a la instalación, operación y mantenimiento de sistemas fotovoltaicos.",

      // "seccion-cinco-card_9_T1": "Ing. Fabio Ignacio León Sanguino",
      // "seccion-cinco-card_9_S2": "Ing. Electricista",
      // "seccion-cinco-card_9_D1":
      //   "Especialista en construcción y mantenimiento de redes de distribución, subestaciones de transformación de energia y plantas de energia solar.",

      "seccion-cinco-card_10_T1": "Roberto Quinceno Walteros",
      "seccion-cinco-card_10_S2": "Ing. Mecatrónico",
      "seccion-cinco-card_10_D1":
        "Experto en programación, control  e Integración de procesos industriales.",

      //Maps

      "seccion-maps-localizacion": "Localización",
      "seccion-maps-Smin": "Smin Ltda.",
      "pin-colombia":"Colombia",
      "pin-eeuu":"Estados Unidos",
      "pin-paises-bajos":"Países Bajos",
      "pin-portugal":"Portugal",

      //Contacto footer

      "footer-titulo": "Para más información, contáctenos",
      "footer-parrafo":
        "Conocemos el sector de manera real y efectiva y tenemos la experiencia y el conocimiento para hacerle la vida más fácil y evitarle futuros problemas en sus instalaciones.",
      "footer-informacion": "Mayor Información",

      "footer-email": "Email:",
      "footer-correo": "cco@sminsl.com",
      "footer-whatsApp": "WhatsApp:",
      "footer-phone": "Celular:",

      "footer-seguir": "Síguenos en redes sociales",
      "footer-terminos": "Terminos y Servicios",
      "footer-@":
        "@ 2024-SMIN ENERGY SERVICE COMPANY. Todos los Derechos Reservados",
      "footer-politicas": "Politicas de Privacidad",

      //Pagina proyecto.html 
      //seccion proyecto
      "seccion-proyecto": "Servicios y ",
      "seccion-proyecto-b": "Proyectos",
      "primer_parrafo":"En Servicios Esenciales y Proyectos Sostenibles se encierra el área de negocio de SMIN LTDA, donde sus capacidades son necesarias para gestionar de un modo integral cualquier proyecto. Además como gestor integral de proyectos, SMIN LTDA lleva a cabo estudios de viabilidad, ingeniería básica y de detalle, construcción, suministro, instalación y montaje, puesta en marcha y servicios de operación y mantenimiento.",
      "titulo_contenedor":"Servicios Esenciales & Proyectos Sostenibles",
      "tarjeta_1":"ELECTRICIDAD",
      "tarjeta_2":"GENERACION DE ENERGIA",
      "tarjeta_3":"EFICIENCIA ENERGETICA",
      "tarjeta_4":"OIL&GAS",
      "tarjeta_1_elec":"ELECTRICIDAD",
      "titulo_1_elec":"Distribución de energía.",
      "lista_1_elec":"Líneas aéreas de media tensión.",
      "lista_2_elec":"Líneas subterráneas de media tensión.",
      "lista_3_elec":"Centros de trasformación.",
      "lista_4_elec":"Redes de baja tensión de cualquier tipo.",
      "lista_5_elec":"Mantenimiento preventivo y correctivo.",
      "titulo_2_elec":"Transformación de Energía",
      "lista_6_elec":"Subestaciones de Alta Tensión.",
      "lista_7_elec":"Trabajos de mantenimiento.",
      "titulo_3_elec":"Transporte de Energía",
      "lista_8_elec":"Líneas de interconexión de alta tensión.",
      "lista_9_elec":"Trabajos de mantenimiento.",
      //seccion proyecto generacion
      "titulo_1_gen":"Generación de Energia.",
      "list_1_gen":"ESC - Energy Supply Contracting",
      "list_2_gen":"Plantas solares fotovoltaicas para autoconsumo.",
      "list_3_gen":"Plantas solares fotovoltaicas en zonas no interconectadas.",
      "list_4_gen":"Parques solares fotovoltaicos generación superiores a 1 MWp.",
      "list_5_gen":"Plantas solares fotovoltaicas para autoconsumo en superficies industriales.",
      "list_6_gen":"Microgrid.",
      //seccion proyecto eficiencia
      "titulo_1_efi":"Eficiencia Energética",
      "list_1_efi":"Contrato de Servicios Energéticos.",
      "list_2_efi":"Telegestión.",
      "list_3_efi":"Migración de Luminaria de sodio o similar a tecnología LED.",
      "list_4_efi":"Modernización de sistemas de alumbrado perimetral a Solar.",
      "list_5_efi":"Sustitución de motores de eficiencia estándar por de alta eficiencia.",
      "list_6_efi":"Implementación de Sistema de Gestión de la Energía.",
      "list_7_efi":"Smart Cities.",
      //seccion proyecto gas
      "titulo_1_gas":"Oíl & Gas",
      "list_1_gas":"Diseño, Montaje, y mantenimiento de Sistemas de Tratamiento de crudo, agua y gas",
      "list_2_gas":"Mantenimiento Preventivo y correctivo a equipos rotativos estáticos.",
      "list_3_gas":"Automatización de procesos y operaciones.",
      "list_4_gas":"Construcción de líneas de Flujo.",

    },
    en: {
      //Boton Cambio de Idioma
      "toggle-button": " ESP",
      //Titulos Generales por seccion
      "titulo-general-uno": "",
      // "titulo-general-dos": "We add value to your Company!",
      //Menu de Navegación
      "menu-uno": "About us",
      // "menu-dos": "Service",
      "menu-tres": "Team",
      "menu-cuatro": "Contact",
      "menu-cinco": "Programs",
      "menu-inicio": "Home",
      //seccion dos - Nosotros
      "nosotros-titulo": "SMIN - Energy Service Companies (ESCOs)",
      "nosotros-descripcion":
        "SMIN is an international-level Energy Services Company (ESCO) founded in 1997 dedicated to establishing Know-How transfer; efficient energy management and the use of renewable energy sources; reducing greenhouse gas emissions (GHG); and adapting to climate change; sustainable development and its global objectives through the management of programs of general interest.",
      //Seccion Empresa Vacia

      //Seccion cuatro

      "titulo-seccion-cuatro":"Lines of Action",
      "parrafo_seccion_cuatro":"SMIN develops the following lines of action, ensuring the satisfaction of the needs of our allies in the public and private sectors at the Latin American level.",
      "seccion-cuatro-card_1":"Consultancy and Advisory Services",
      "seccion-cuatro-card_2":"Energy Management",
      "seccion-cuatro-card_3":"Self-Consumption",
      "seccion-cuatro-card_4":"Smart Lighting",
      "seccion-cuatro-card_5":"Smart City",
      "seccion-cuatro-card_6":"Circular Economy",
      "seccion-cuatro-card_7":"Microgrid",
      "seccion-cuatro-card_8":"Comprehensive Maintenance",
      "seccion-cuatro-card_9":"Greenhouse Gas Emissions Reduction",
      "seccion-cuatro-card_10":"Energy Supply",

      //Seccion tres
      "seccion-tres-t1": "At SMIN, our efforts are directed towards systematically adding value to your initiatives",
      "parrafo_seccion_tres":"",
      // "seccion-tres-porque": "Why",
      // "seccion-tres-Smin": "SMIN Ltda?",
      "seccion-tres-card_1": "Improving",
      "seccion-tres-card-texto_1":
        "Competitiveness through the reduction of production energy costs.",
      "seccion-tres-card_2": "Managing",
      "seccion-tres-card-texto_2":
        "We implement SGEn to understand how and where energy resources are utilized.",
      "seccion-tres-card_3": "Seeking",
      "seccion-tres-card-texto_3":
        "Healthier finances to achieve greater profitability.",
      "seccion-tres-card_4": "Reducing",
      "seccion-tres-card-texto_4": "The technical losses in processes",
      "seccion-tres-card_5": "Analyzing",
      "seccion-tres-card-texto_5":
        "The available power capacity in the facilities",
      "seccion-tres-card_6": "Stabilizing",
      "seccion-tres-card-texto_6": "Energy supply",
      "seccion-tres-card_7": "Eliminating harmful consumption",
      "seccion-tres-card-texto_7": "Energies from polluting sources",
      "seccion-tres-card_8": "Delivering",
      "seccion-tres-card-texto_8":
        "Real-time visibility of electrical variables in the operation",

      // seccion 5

      "seccion-cinco-equipo": "Dream Team",
      "seccion-cinco-Smin": "Smin",

      "seccion-cinco-card_1_T1": "Lidia Andreina Amaya Fonseca",
      "seccion-cinco-card_1_S2": "Administrator",
      "seccion-cinco-card_1_D1":
      "Expert in public management; public democratization processes; public institutional modernization; specialist in senior management.",

      "seccion-cinco-card_2_T1": "Marco Antonio Ruiz Rueda",
      "seccion-cinco-card_2_S2": "Systems Engineer",
      "seccion-cinco-card_2_D1":
        "Expert in Artificial Intelligence; optimization and event prediction; and Smart Cities; Master of Science in Computer Science and Master of Science in Design, Management, and Administration of projects.",

      "seccion-cinco-card_3_T1": "Carlos Castillo Galvis",
      "seccion-cinco-card_3_S2": "Administrator",
      "seccion-cinco-card_3_D1":
        "Expert in energy development, sustainability, energy transition, Microgrid, Smart Cities, construction and maintenance of distribution networks, construction and maintenance of I&C systems and PV systems.",

      "seccion-cinco-card_4_T1": "Alejandro Valencia Vélez",
      "seccion-cinco-card_4_S2": "Mechanical Engineer",
      "seccion-cinco-card_4_D1":
        "Expert in construction and maintenance of Small Hydroelectric Power Plants (SHPs); and Metal Structures.",

      "seccion-cinco-card_5_T1": "Laura Lorena Garcia Suarez",
      "seccion-cinco-card_5_S2": "Electrical Engineer",
      "seccion-cinco-card_5_D1":
        "Expert in design, construction, and maintenance of photovoltaic solar energy systems; systems for energy transportation, transformation, and distribution; and inspection of energy distribution systems.",

      "seccion-cinco-card_6_T1": "Ivan Zúñiga Alegría",
      "seccion-cinco-card_6_S2": "Mechatronics Engineer",
      "seccion-cinco-card_6_D1":
        "Expert in industrial maintenance, automation of power systems, I&C, and industrial installations.",

      "seccion-cinco-card_7_T1": "Jhon Henry Cruz Feo",
      "seccion-cinco-card_7_S2": "Mechanical Engineer",
      "seccion-cinco-card_7_D1":
        "Expert in design, construction, maintenance of surface facilities, and process control.",

      // "seccion-cinco-card_8_T1": "Eng. Wendy Delgado Diáz",
      // "seccion-cinco-card_8_S2": "Electronic E.",
      // "seccion-cinco-card_8_D1":
      //   "Specialist in maintenance of photovoltaic systems and occupational hazards associated with the installation, operation, and maintenance of photovoltaic systems.",

      // "seccion-cinco-card_9_T1": "Eng. Fabio Ignacio León Sanguino",
      // "seccion-cinco-card_9_S2": "Electrical E.",
      // "seccion-cinco-card_9_D1":
      //   "Specialist in construction and maintenance of distribution networks, energy transformation substations, and solar power plants",

      "seccion-cinco-card_10_T1": "Roberto Quinceno Walteros",
      "seccion-cinco-card_10_S2": "Mechatronics Engineer",
      "seccion-cinco-card_10_D1":
        "Expert in programming, control, and integration of industrial processes.",

      //Maps

      "seccion-maps-localizacion": "Location",
      "seccion-maps-Smin": "Smin Ltd.",
      "pin-colombia":"Colombia",
      "pin-eeuu":"United States",
      "pin-paises-bajos":"Países Bajos",
      "pin-portugal":"Portugal",

      //Contacto Footer

      "footer-titulo": "For more information, contact us.",
      "footer-parrafo":
        "We know the sector in a real and effective way, and we have the experience and knowledge to make your life easier and prevent future problems in your installations.",
      "footer-informacion": "Further Information",

      "footer-email": "Email:",
      "footer-correo": " cco@sminsl.com",
      "footer-whatsApp": "WhatsApp:",
      "footer-phone": "Cellphone:",

      "footer-seguir": "Follow us on social media",
      "footer-terminos": "Terms and Services",
      "footer-@": "@ 2024-SMIN ENERGY SERVICE COMPANY. All Rights Reserved",
      "footer-politicas": "Privacy Policies",

      //Pagina proyecto.html 
      //seccion proyecto
      "seccion-proyecto": "Services and ",
      "seccion-proyecto-b": "Projects",
      "primer_parrafo":"In Essential Services and Sustainable Projects lies the business area of SMIN LTDA, where its capabilities are required to manage any project comprehensively. Furthermore, as a comprehensive project manager, SMIN LTDA carries out feasibility studies, basic and detailed engineering, construction, supply, installation and assembly, commissioning, and operation and maintenance services.",
      "titulo_contenedor":"Essential Services & Sustainable Projects",
      "tarjeta_1":"ELECTRICITY",
      "tarjeta_2":"ENERGY GENERATION",
      "tarjeta_3":"ENERGY EFFICIENCY",
      "tarjeta_4":"OIL & GAS",
      "tarjeta_1_elec":"ELECTRICITY",
      "titulo_1_elec":"Energy Distribution",
      "lista_1_elec":"Medium Voltage Overhead Lines.",
      "lista_2_elec":"Medium Voltage Underground Lines.",
      "lista_3_elec":"Transformer Centers.",
      "lista_4_elec":"Low Voltage Networks of Any Type.",
      "lista_5_elec":"Preventive and Corrective Maintenance.",
      "titulo_2_elec":"Energy Transformation",
      "lista_6_elec":"High Voltage Substations.",
      "lista_7_elec":"Maintenance Works.",
      "titulo_3_elec":"Energy Transport",
      "lista_8_elec":"High Voltage Interconnection Lines.",
      "lista_9_elec":"Maintenance Works.",
      //seccion proyecto generacion
      "titulo_1_gen":"Energy Generation",
      "list_1_gen":"ESC - Energy Supply Contracting",
      "list_2_gen":"Photovoltaic Solar Plants for Self-Consumption.",
      "list_3_gen":"Photovoltaic Solar Plants in Non-Interconnected Areas.",
      "list_4_gen":"Photovoltaic Solar Parks with Generation Exceeding 1 MWp.",
      "list_5_gen":"Photovoltaic Solar Plants for Self-Consumption on Industrial Surfaces.",
      "list_6_gen":"Microgrid.",
      //seccion proyecto eficiencia
      "titulo_1_efi":"Energy Efficiency",
      "list_1_efi":"Energy Services Contract.",
      "list_2_efi":"Remote Management.",
      "list_3_efi":"Migrating Sodium or Similar Luminaire to LED Technology.",
      "list_4_efi":"Modernization of Perimeter Lighting Systems to Solar.",
      "list_5_efi":"Replacement of Standard Efficiency Motors with High Efficiency Motors.",
      "list_6_efi":"Implementation of Energy Management System.",
      "list_7_efi":"Smart Cities.",
      //seccion proyecto gas
      "titulo_1_gas":"Oíl & Gas",
      "list_1_gas":"Design, Assembly, and Maintenance of Crude, Water, and Gas Treatment Systems.",
      "list_2_gas":"Preventive and Corrective Maintenance for Rotating and Static Equipment.",
      "list_3_gas":"Automation of Processes and Operations.",
      "list_4_gas":"Construction of Flowlines.",







    },
  };
} catch (error) {
  console.error("Error al cargar los datos de traducción:", error.message);
  alert(
    "Error al cargar los datos de traducción. Por favor, verifica tu conexión de red y vuelve a intentarlo."
  );
}

export default translations;
