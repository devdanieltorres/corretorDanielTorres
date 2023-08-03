// Efeito para rolagem suave

const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    const scrollTop = target.getBoundingClientRect().top + window.pageYOffset ;
    window.scrollTo({ top: scrollTop, behavior: 'smooth' });
  });
});

const btnToggle = document.querySelector('.btn-toggle');
const menu = document.querySelector('.menu');

btnToggle.addEventListener('click', function() {
  menu.classList.toggle('active');
});

function scrollToTop() {
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, currentScroll - (currentScroll / 8));
  }
};

window.addEventListener("load", function() {
  var loader = document.getElementById("loader");
  loader.style.display = "none";
});

// ikeda
document.addEventListener("DOMContentLoaded", function() {
  mostrarImagemGrande('imagens/ikeda (1).jpg');
});

function mostrarImagemGrande(imagem) {
  document.getElementById("imagemGrande").src = imagem;
}

document.addEventListener("DOMContentLoaded", function() {
  mostrarImagemGrandePlantaIkeda('imagens/plantaIkeda (1).jpg');
});

function mostrarImagemGrandePlantaIkeda(imagem) {
  document.getElementById("imagemGrandePlantaIkeda").src = imagem;
}

// reserva do horizonte
document.addEventListener("DOMContentLoaded", function() {
  mostrarImagemGrandeRH('imagens/rhimagens (1).jpg');
});

function mostrarImagemGrandeRH(imagem) {
  document.getElementById("imagemGrandeRH").src = imagem;
}

document.addEventListener("DOMContentLoaded", function() {
  PlantaGrandeRH('imagens/rhplantas (1).jpg');
});

function PlantaGrandeRH(imagem) {
  document.getElementById("imagemPlantaGrandeRH").src = imagem;
}

// ARARAS
document.addEventListener("DOMContentLoaded", function() {
  mostrarImagemGrandeAraras('imagens/ararasImagens (1).jpg');
});

function mostrarImagemGrandeAraras(imagem) {
  document.getElementById("imagemGrandeAraras").src = imagem;
}

document.addEventListener("DOMContentLoaded", function() {
  mostrarImagemGrandePlantasAraras('imagens/ararasPlantas (1).jpg');
});

function mostrarImagemGrandePlantasAraras(imagem) {
  document.getElementById("imagemGrandePlantaAraras").src = imagem;
}

// canarios
document.addEventListener("DOMContentLoaded", function() {
  mostrarImagemGrandeCanarios('imagens/canariosImagens (1).jpg');
});

function mostrarImagemGrandeCanarios(imagem) {
  document.getElementById("imagemGrandeCanarios").src = imagem;
}

document.addEventListener("DOMContentLoaded", function() {
  mostrarImagemGrandePlantasCanarios('imagens/canariosPlantas (1).jpg');
});

function mostrarImagemGrandePlantasCanarios(imagem) {
  document.getElementById("imagemGrandePlantaCanarios").src = imagem;
}