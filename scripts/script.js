const bodyEl = document.body;
const openMenuIconEL = document.getElementById('open-menu-icon');
const closeMenuIconEl = document.getElementById('close-menu-icon');
const navMenuEl = document.getElementById('nav-menu');

openMenuIconEL.addEventListener('click', () =>{
  navMenuEl.classList.add('nav-open');
  bodyEl.style.pointerEvents = 'none';
  bodyEl.style.background =  'rgba(0,0,0,0.15)';
  navMenuEl.style.pointerEvents = 'all';
});

closeMenuIconEl.addEventListener('click', () => {
  navMenuEl.classList.remove('nav-open');
  bodyEl.style.pointerEvents = 'all';
  bodyEl.style.background =  'unset';
});

window.addEventListener('resize', () => {
  navMenuEl.classList.remove('nav-open');
  bodyEl.style.pointerEvents = 'all';
  bodyEl.style.background =  'unset';
});