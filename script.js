    document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.querySelector('input[placeholder="Nome"]').value;
    const email = document.querySelector('input[placeholder="Insira o seu email"]').value;
    const numero = document.querySelector('input[placeholder="Numero de celular"]').value;
    const mensagem = document.querySelector('textarea').value;

    })
 
    // Formata a mensagem para o WhatsApp
    const texto = `Nome: ${nome}%0AEmail: ${email}%0ANúmero: ${numero}%0AMensagem: ${mensagem}`;
    const telefone = '258856752762'; // Seu número de Moçambique

        window.open(`https://wa.me/${telefone}?text=${texto}`, '_blank');
    })
//Efeito Scrool para aparte de intro do meu site
 ScrollReveal({
     reset: true ,
     distance:'80px',
     duration: 2700,
     delay: 200

 });

 ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
 ScrollReveal().reveal('.home-img, .serviços-container, .projetos-caixa, .contacto form', { origin:'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img', { origin:'bottom' });
  ScrollReveal().reveal('.home-content p, .about-con', { origin:'right' });

//Excrita js
const typed = new Typed('.multiple-text',{
    strings: ['Desenvolvedor Front-end', 'Desenvolvedor Front-end',],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

const menuHamburguer = document.getElementById('menu-hamburguer');
const navbar = document.getElementById('navbar');

menuHamburguer.addEventListener('click', () => {
    menuHamburguer.classList.toggle('active');
    navbar.classList.toggle('active');
});

// Fecha o menu ao clicar em qualquer link do navbar
document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuHamburguer.classList.remove('active');
    });
});