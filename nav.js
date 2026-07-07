/* Mobile nav toggle — shared by every page.
   Uses event delegation so it works no matter which page includes it. */
document.addEventListener('click', function (e) {
  var btn = e.target.closest('.nav__menu');
  if (btn) {
    var nav = btn.closest('.nav');
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    btn.textContent = open ? '✕' : '☰';
    return;
  }
  // tapping a link (or anywhere outside) closes the open menu
  var openNav = document.querySelector('.nav.open');
  if (openNav && !e.target.closest('.nav .links')) {
    openNav.classList.remove('open');
    var b = openNav.querySelector('.nav__menu');
    if (b) { b.setAttribute('aria-expanded', 'false'); b.textContent = '☰'; }
  } else if (openNav && e.target.closest('.nav .links a')) {
    openNav.classList.remove('open');
    var b2 = openNav.querySelector('.nav__menu');
    if (b2) { b2.setAttribute('aria-expanded', 'false'); b2.textContent = '☰'; }
  }
});
