// Datos de los certificados
const certificatesData = {
  cert0: {
    image:
      "imagenes certifc/Programa Impulsando Talento con Valores_ de la Asociación Ferreycorp-1.png",
  },
  cert1: {
    image: "imagenes certifc/Especialización en Marketing Digital.jpg",
  },
  cert2: {
    image:
      "imagenes certifc/certificado IPAPPG_habilidades-blandas-para-el-desarrollo-profesional.jpg",
  },
  cert3: {
    image: "White Gold Elegant Appreciation Certificate .jpg",
  },
  cert4: {
    image: "imagenes certifc/certificacion-emms2024-digital-trends.png",
  },
  cert5: {
    image:
      "imagenes certifc/constancia_frankduc-yampier-sarcco-casazola_habilidades-blandas-para-el-desarrollo-profesional_page-0001.jpg",
  },
  cert6: {
    image: "imagenes certifc/Seminario_Economia de la Felicidad.jpg",
  },
  cert7: {
    image: "imagenes certifc/HABILIDADES DIRECTIVAS FELIPE- Constancia.jpg",
  },
  cert8: {
    image:
      "imagenes certifc/CONSTANCIA DE PARTICIPACIÓN - CLASE MAGISTRAL DE LIDERAZGO-4_page-0001.jpg",
  },

  cert10: {
    image: "imagenes certifc/MKT para el 2025_Constancia de participacion.jpg",
  },
  cert11: {
    image:
      "imagenes certifc/MOTIVACIÓN Y SATISFACCIÓN  RRHH LABORAL- Constancia.jpg",
  },

  cert12: {
    image: "imagenes certifc/Constancia_taller_Ahorro Previsional.jpg",
  },
};

// Elementos DOM
const modal = document.getElementById("certificateModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalDate = document.getElementById("modalDate");
const modalIssuer = document.getElementById("modalIssuer");
const closeModal = document.querySelector(".close-modal");

// Event Listener para las tarjetas
document.querySelectorAll(".certificate-card").forEach((card) => {
  card.addEventListener("click", function () {
    const certId = this.dataset.certificate;
    openModal(certId);
  });
});

// Función para abrir el modal con animación
function openModal(certId) {
  const certData = certificatesData[certId];

  modalImage.src = certData.image;
  modalTitle.textContent = certData.title;
  modalDescription.textContent = certData.description;
  modalDate.textContent = certData.date;
  modalIssuer.textContent = certData.issuer;

  modal.style.display = "block";
  // Forzar un reflow para que la transición funcione
  modal.offsetHeight;
  modal.classList.add("modal-active");
  document.body.style.overflow = "hidden";
}

// Función para cerrar el modal con animación
function closeModalFunction() {
  modal.classList.remove("modal-active");
  setTimeout(() => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }, 300); // Coincide con la duración de la transición CSS
}

// Event Listeners para cerrar el modal
closeModal.addEventListener("click", closeModalFunction);

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModalFunction();
  }
});

// Cerrar modal con la tecla ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "block") {
    closeModalFunction();
  }
});

// Contenido para cada paso, ESTA ES LA PARTE SOBRE MI
const content = [
  {
    text: "Soy parte de generación CERTUS, donde impulsamos actividades estudiantiles.",
    image: "img de famosos y generacion certus/Generacion general.jpg",
  },
  {
    text: "Actividades como la navidad y muchos mas son confiadas a generacion CERTUS",
    image: "img de famosos y generacion certus/navidad generacion.jpg",
  },
  {
    text: "Cierre de año trasando nuevas objetivos de mejora para el 2025 como generacion CERTUS",
    image: "img de famosos y generacion certus/Generacion Certus final.jpg",
  },
];

// Variables globales
let currentStep = 0;
const dialogBubble = document.querySelector(".dialog-bubble");
const dialogText = document.querySelector(".dialog-text");
const contentImage = document.querySelector(".content-image");
const stepsContainer = document.querySelector(".step-indicators");

// Crear indicadores de paso
content.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.className = "step-dot";
  dot.addEventListener("click", () => showStep(index));
  stepsContainer.appendChild(dot);
});

// Función para mostrar un paso específico
function showStep(step) {
  currentStep = step;

  // Actualizar texto e imagen
  dialogText.textContent = content[step].text;
  contentImage.src = content[step].image;

  // Actualizar clases activas
  dialogBubble.classList.add("active");
  contentImage.classList.add("active");

  // Actualizar indicadores
  document.querySelectorAll(".step-dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === step);
  });
}

// Iniciar la presentación
showStep(0);

// Cambiar automáticamente cada 5 segundos
setInterval(() => {
  currentStep = (currentStep + 1) % content.length;
  showStep(currentStep);
}, 5000);

// CERRANDO LA PARTE SOBRE MI

// codigo   ABRIENDO LA PARTE DE AUTORES

// Datos de los autores
const authors = [
  {
    name: "JIM RHON",
    image: "img de famosos y generacion certus/jin rhon.png",
    quote: "El exito es un 20% De habilidades y un 80% de estrategia",
  },
  {
    name: "Victoria Oliveto",
    image: "img de famosos y generacion certus/vicky.jpg",
    quote:
      "Cuando algo es lo suficientemente importante, lo haces incluso si las probabilidades no están a tu favor.",
  },
  {
    name: "Bill Gates",
    image: "img de famosos y generacion certus/bill gates.jpg",
    quote: "No nacimos para ser promedio, nacimos para ser extraordinarios.",
  },
];

let currentGroup = 0;
const cardsPerPage = 3;
const totalGroups = Math.ceil(authors.length / cardsPerPage);

function createAuthorCards() {
  const track = document.querySelector(".carousel-track");
  const indicators = document.querySelector(".carousel-indicators");

  // Limpiar contenido anterior
  track.innerHTML = "";
  indicators.innerHTML = "";

  // Mostrar primer grupo
  showGroup(0);
}

function showGroup(groupIndex) {
  const track = document.querySelector(".carousel-track");
  const startIndex = groupIndex * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, authors.length);

  // Eliminar tarjetas anteriores
  track.innerHTML = "";

  // Crear y mostrar nuevas tarjetas
  for (let i = startIndex; i < endIndex; i++) {
    const author = authors[i];
    const card = document.createElement("div");
    card.className = "author-card";

    card.innerHTML = `
            <img src="${author.image}" alt="${author.name}" class="author-image">
            <h3 class="author-name">${author.name}</h3>
            <p class="author-quote">"${author.quote}"</p>
        `;

    track.appendChild(card);

    // Activar la tarjeta después de un pequeño retraso
    setTimeout(() => {
      card.classList.add("active");
    }, 50 * (i - startIndex));
  }

  // Actualizar indicadores
  document.querySelectorAll(".indicator").forEach((indicator, index) => {
    indicator.classList.toggle("active", index === groupIndex);
  });

  currentGroup = groupIndex;
}

// Configurar navegación
document.querySelector(".prev-btn").addEventListener("click", () => {
  const newGroup = (currentGroup - 1 + totalGroups) % totalGroups;
  showGroup(newGroup);
});

document.querySelector(".next-btn").addEventListener("click", () => {
  const newGroup = (currentGroup + 1) % totalGroups;
  showGroup(newGroup);
});

// Inicializar carrusel
createAuthorCards();

// cerrando codigo LA PARTE DE AUTORES

// Animación suave para elementos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  const elements = [
    ".pre-title",
    ".fancy-welcome",
    ".portfolio-text",
    ".description",
    ".cta-group",
    ".profile-frame",
    ".social-links",
  ];

  elements.forEach((selector, index) => {
    const element = document.querySelector(selector);
    if (element) {
      element.style.opacity = "0";
      element.style.transform = "translateY(20px)";
      element.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";

      setTimeout(() => {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }, 200 * index);
    }
  });
});

// Efecto parallax para las formas geométricas del fondo
document.addEventListener("mousemove", (e) => {
  const shapes = document.querySelectorAll(".geometric-shape");
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  shapes.forEach((shape, index) => {
    const speed = (index + 1) * 0.03;
    const x = (window.innerWidth - mouseX) * speed;
    const y = (window.innerHeight - mouseY) * speed;

    shape.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// Efecto hover mejorado para la imagen de perfil
const profileImage = document.querySelector(".profile-image");
if (profileImage) {
  profileImage.addEventListener("mousemove", (e) => {
    const rect = profileImage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = x / rect.width;
    const yPercent = y / rect.height;

    const rotateX = (yPercent - 0.5) * 10;
    const rotateY = (xPercent - 0.5) * 10;

    profileImage.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  });

  profileImage.addEventListener("mouseleave", () => {
    profileImage.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  });
}
