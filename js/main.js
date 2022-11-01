// Menu Show

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};

showMenu('nav-toggle', 'nav-menu');

// Remove Menu Mobile
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('active');
}
navLink.forEach((n) =>
  n.addEventListener('click', () => {
    linkAction();
  }),
);

//Scroll Section Active Link
const sections = document.querySelectorAll('section[id]');
console.log(sections)

window.addEventListener('scroll',scrollActive)
function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');
    console.log(sectionId)
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
    }
  });
}


// Scroll Reveal Animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: '2000',
    reset: true
})

// Scroll Home

sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin: 'right', delay: 400})

// Scroll About
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300, origin:'right'})
sr.reveal('.about__profession', {delay: 300, origin:'right'})
sr.reveal('.about__text', {delay: 500, origin: 'bottom'})
sr.reveal('.about__social-icon', {delay: 600, origin: 'bottom', interval: 200})


// Scroll Skills

sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__subtitle', {delay: 400})

// Scroll Portfolio
sr.reveal('.portfolio__img', {interval: 200})

// Scroll Contact
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})