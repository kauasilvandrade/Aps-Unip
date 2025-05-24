// -- MENU
// ELEMENTOS
const hamburguer = document.getElementById('btnMenu');
const cabecalho = document.querySelector('.cabecalho');

// EVENTOS
hamburguer.addEventListener('click', function() {
    cabecalho.classList.toggle('ativado');
    window.addEventListener('resize', () => cabecalho.classList.remove('ativado'))
    
})

// -- SLIDE
const slides = document.querySelectorAll('.slide');
const h2 = document.querySelectorAll('.conteudo__conteudoSlide h2');
const p = document.querySelectorAll('.conteudo__conteudoSlide p');
const btnProximo = document.getElementById('btnProximo');
const btnVoltar = document.getElementById('btnVoltar');

console.log(h2)
let currentSlide = 0;
let alvo1 = 0;
let alvo2 = 0;

function hideSlide() {
    slides.forEach(item => item.classList.remove('on'));
    h2.forEach(item => item.classList.remove('on'));
    p.forEach(item => item.classList.remove('on'));
}

function showSlide() {
    slides[currentSlide].classList.add('on');
    h2[alvo1].classList.add('on');
    p[alvo2].classList.add('on');
}

function nextSlide() {
    hideSlide();
    if (currentSlide === slides.length -1) {
        currentSlide = 0
    } else {
        currentSlide++
    }
    if (alvo1 === h2.length -1) {
        alvo1 = 0
    } else {
        alvo1++
    }
    if (alvo2 === p.length -1) {
        alvo2 = 0
    } else {
        alvo2++
    }
    showSlide();
}

function prevSlide() {
    hideSlide();
    if (currentSlide === 0) {
        currentSlide = slides.length -1
    } else {
        currentSlide--
    }
    if (alvo1 === 0) {
        alvo1 = h2.length -1
    } else {
        alvo1--
    }
    if (alvo2 === 0) {
        alvo2 = p.length -1
    } else {
        alvo2--
    }
    showSlide();
}

btnProximo.addEventListener('click', nextSlide)
btnVoltar.addEventListener('click', prevSlide)