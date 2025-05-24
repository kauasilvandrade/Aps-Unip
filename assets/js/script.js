// ELEMENTOS
const hamburguer = document.getElementById('btnMenu');
const cabecalho = document.querySelector('.cabecalho');

// EVENTOS
hamburguer.addEventListener('click', function() {
    cabecalho.classList.toggle('ativado');
    window.addEventListener('resize', () => cabecalho.classList.remove('ativado'))
    
})