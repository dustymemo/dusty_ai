/* Scroll reveal — fade + rise elements (incl. individual cards) as they
   enter the viewport. Shared by every page. Pairs with the .anim / .in CSS
   (inline per page) and <script>documentElement.classList.add('anim')</script>
   in each <head>. Degrades gracefully with no JS / no IntersectionObserver. */
(function () {
  var SEL = '.stitle,.prose,.job,.skillrow,.card,.pcard,.socials,.chat,.demo,.slot,' +
    '.hero__eyebrow,.hero h1,.hero__sub,.hero__cta,.hero__avatar,' +
    '.phead .eyebrow,.phead h1,.phead .lead,' +
    '.ahead .back,.ahead .ahead__meta,.ahead h1,.ahead .lead,.body>*';
  var els = [].slice.call(document.querySelectorAll(SEL));
  if (!els.length) return;
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (e) { e.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });
  els.forEach(function (e) { io.observe(e); });
})();
