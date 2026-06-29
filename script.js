const setLang = (lang) => {
  document.body.classList.toggle('lang-zh', lang === 'zh');
  document.body.classList.toggle('lang-en', lang !== 'zh');
  localStorage.setItem('xm-lang', lang);
};
document.querySelectorAll('[data-set-lang]').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.setLang));
});
setLang(localStorage.getItem('xm-lang') || 'en');
