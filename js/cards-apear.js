const sections = document.querySelectorAll('.ocultar');

window.addEventListener('scroll', () => {
const triggerBottom = window.innerHeight * 0.85; // 85% de la altura visible

sections.forEach(section => {
const sectionTop = section.getBoundingClientRect().top;

if (sectionTop < triggerBottom) {
section.classList.add('aparecer');
}
});
});