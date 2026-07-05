const tabs = document.querySelectorAll('.model-tab');
const cards = document.querySelectorAll('.model-card');

tabs.forEach(t => t.addEventListener('click', () => {
  tabs.forEach(x => x.classList.remove('active'));
  t.classList.add('active');
  
  const filter = t.getAttribute('data-filter');
  cards.forEach(c => {
    if (filter === 'all' || c.getAttribute('data-segment') === filter) {
      c.style.display = 'block';
      c.classList.remove('fade-in');
      void c.offsetWidth; // Force reflow
      c.classList.add('fade-in');
    } else {
      c.style.display = 'none';
      c.classList.remove('fade-in');
    }
  });
}));
const burger = document.querySelector('.burger');
const navUl = document.querySelector('nav ul');
burger.addEventListener('click', () => {
  const open = navUl.style.display === 'flex';
  navUl.style.display = open ? 'none' : 'flex';
  navUl.style.flexDirection = 'column';
  navUl.style.position='absolute';
  navUl.style.top='90px'; navUl.style.right='32px'; navUl.style.background='#fff';
  navUl.style.padding='20px'; navUl.style.border='1px solid #000'; navUl.style.gap='16px';
});
