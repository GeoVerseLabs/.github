/* GeoVerse Labs — shared behaviour: language toggle, lightbox, film modal. */
(function () {
  var root = document.documentElement;

  // ---- language ----
  function applyLang(lang) {
    var en = lang === 'en';
    root.classList.toggle('en', en);
    root.setAttribute('lang', en ? 'en' : 'zh-CN');
    var t = root.getAttribute(en ? 'data-title-en' : 'data-title-zh');
    if (t) document.title = t;
    document.querySelectorAll('[data-href-zh][data-href-en]').forEach(function (a) {
      a.setAttribute('href', a.getAttribute(en ? 'data-href-en' : 'data-href-zh'));
    });
    // attributes can't be paired with .zh/.en elements, so swap them in place
    document.querySelectorAll('[data-alt-zh][data-alt-en]').forEach(function (el) {
      el.setAttribute('alt', el.getAttribute(en ? 'data-alt-en' : 'data-alt-zh'));
    });
    document.querySelectorAll('[data-label-zh][data-label-en]').forEach(function (el) {
      el.setAttribute('aria-label', el.getAttribute(en ? 'data-label-en' : 'data-label-zh'));
    });
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.textContent = en ? '中文' : 'EN';
      b.setAttribute('aria-label', en ? '切换到中文' : 'Switch to English');
    });
    document.dispatchEvent(new CustomEvent('gv:lang', { detail: { lang: en ? 'en' : 'zh' } }));
  }
  window.gvLang = function () { return root.classList.contains('en') ? 'en' : 'zh'; };
  document.querySelectorAll('.lang-btn').forEach(function (b) {
    b.addEventListener('click', function () {
      var next = window.gvLang() === 'en' ? 'zh' : 'en';
      try { localStorage.setItem('gv-lang', next); } catch (e) { /* storage unavailable */ }
      applyLang(next);
    });
  });
  applyLang(window.gvLang());

  // ---- lightbox for .zoomable images ----
  var lb = document.getElementById('lb');
  if (lb) {
    var big = lb.querySelector('img');
    document.querySelectorAll('.zoomable img, img.zoomable').forEach(function (img) {
      img.addEventListener('click', function () {
        big.src = img.currentSrc || img.src;
        big.alt = img.alt;
        lb.classList.add('open');
      });
    });
    var closeLb = function () { lb.classList.remove('open'); big.removeAttribute('src'); };
    lb.addEventListener('click', closeLb);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLb(); });
  }

  // ---- film modal: [data-film] opens #film-modal and plays the language-matched video ----
  var modal = document.getElementById('film-modal');
  if (modal) {
    var video = modal.querySelector('video');
    var open = function (e) {
      // let modified clicks open the interactive film page in a new tab
      if (e && (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey)) return;
      if (e) e.preventDefault();
      var lang = window.gvLang();
      var src = video.getAttribute(lang === 'en' ? 'data-src-en' : 'data-src-zh');
      if (video.getAttribute('src') !== src) video.setAttribute('src', src);
      modal.classList.add('open');
      video.currentTime = 0;
      var playing = video.play();
      if (playing && typeof playing.catch === 'function') playing.catch(function () { /* autoplay blocked, interrupted or unsupported */ });
    };
    var close = function () { modal.classList.remove('open'); video.pause(); };
    document.querySelectorAll('[data-film]').forEach(function (a) { a.addEventListener('click', open); });
    modal.addEventListener('click', function (e) { if (e.target === modal) close(); });
    modal.querySelector('.modal-close').addEventListener('click', close);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }
})();
