
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

//