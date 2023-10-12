// effet d’apparition des titres //
const titles = document.querySelectorAll('.animation-titre');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animes'); // ajout de la classe animes pour faire apparaitre le titre'//
        }
    });
});

// Observez chaque titre
titles.forEach(title => {
    observer.observe(title);
});


// effet de parallaxe sur la vidéo et le titre du header//
const video = document.querySelector('#fond-video');
const title = document.querySelector('.animation-titre');

window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    video.style.transform = `translate3d(0, ${scrollPosition * 0.2}px, 0)`;
    title.style.transform = `translate3d(0, ${scrollPosition * -0.5}px, 0)`;
});


// Carrousel  //
const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true, 
    centeredSlides: true, 
    slidesPerView: 'auto', 
    coverflowEffect: {
        rotate: 50, 
        stretch: 5, 
        depth: 100, 
        modifier: 1, 
        slideShadows: false, 
    },
    initialSlide: 1,
  });


// effet de parallaxe sur les nuages //
const bigCloud = document.querySelector('.big-cloud');
const smallCloud = document.querySelector('.small-cloud');

window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    bigCloud.style.transform = `translate3d(${scrollPosition * -0.3}px, 0, 0)`;
    smallCloud.style.transform = `translate3d(${scrollPosition * -0.3}px, 0, 0)`;
});

