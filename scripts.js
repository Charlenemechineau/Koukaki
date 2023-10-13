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
const bigCloud = document.querySelector('.big-cloud'); // selectionne l'élement de la classe " big-cloud"  et l'attribut à la variable bigCloud //
const smallCloud = document.querySelector('.small-cloud'); // séléctionne l'élément de la classe "small-cloud" et l'attribut à la variable smallCloud//

window.addEventListener('scroll', function() { // évenement d'écoute
    const scrollPosition = window.pageYOffset;
    bigCloud.style.transform = `translate3d(${scrollPosition * -0.3}px, 0, 0)`;
    smallCloud.style.transform = `translate3d(${scrollPosition * -0.3}px, 0, 0)`;
});

// changement du menu burger en croix au clic et animation des titres du menu //
const burger = document.querySelector('.burger');     //Selectionne l'élément avec la classe "burger" et l'attribut à la variable burger//
const titlesNav = document.querySelectorAll('.menu li ');  // Selectionne tous les éléments <li> dans la liste de la classe menu et les attributs à la variable 'titlesNav//

burger.addEventListener('click', () => {        // évènement écouteur qui est attaché à l'élément 'burger' pour réagir au clic//
    burger.classList.toggle('active');          // lorsque l'élément est cliqué cela ajoute ou supprime la class "active" de l'élément burger et la class "active" change l'icone en croix // 
    
      if (burger.classList.contains('active')) {     // verification si la class "active" à été ajouter à l'élément 'burger' alors
        setTimeout(() => {
          titlesNav.forEach(title => {               // parcourt tous les titres du menu nav//
            title.classList.add('animes');        // ajout de la class animes à chaque titre//
          });
        }, "500");                                // l'animation des titres est réalisée après 0,5 seconde//
    } else {
      titlesNav.forEach(title => {               
          title.classList.remove('animes');    
      });
    }
  });

// pour que le burger affiche le menu au clic 
document.querySelector('.menu-toggle').addEventListener('click', function() { //écoute le clic sur l'élément avec la class 'menu-toggle' (bouton menu burger)// 
    document.querySelector('.menu').classList.toggle('is-active'); //et bascule la classe 'is-active' de l'élément de la classe 'menu'//
    console.log('is-active')    // ça permet de montrer ou cacher lorque le bouton burger est cliqué.//
  }); 
  
  
// pour que le menu soit caché au clic des titres 
const navLinks = document.querySelectorAll('.menu li'); // selectionne tout les éléments <li> et les attribut à la variable 'navLinks//
  
navLinks.forEach(link => {    // boucle qui permet itérer touts les éléments <li> du menu//
    link.addEventListener('click', () => { 
      document.querySelector('.menu').classList.remove('is-active'); //lorsque l'un des titres du menu est cliqué  cela supprime la class 'is-active' du menu et le cache ensuite//
      burger.classList.remove('active'); // ça permet de supprimer également la classe 'active' de l'élément burger et réinitialise l'icone du menu burger
      titlesNav.forEach(title => { 
        title.classList.remove('animes'); // ça supprime ensuite la classe 'animes' de chaque titre pour désactivet l'animation//
      });
    });
  });
  
  