// Mobile nav toggle
document.querySelector('.hamburger')?.addEventListener('click', () => {
  document.querySelector('nav.main').classList.toggle('open');
});

// Shrink header on scroll; .overlay headers also fade transparent → solid
const siteHeader = document.querySelector('header.site');
if (siteHeader) {
  const onScroll = () => siteHeader.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
