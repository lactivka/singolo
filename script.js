const NAVIGATION = document.getElementById('navigation');

NAVIGATION.addEventListener('click', (event) => {
  NAVIGATION.querySelectorAll('a').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
})
