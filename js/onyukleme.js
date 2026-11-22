/* İlk boyamadan önce çalışır. Uyarlama: satır içi betik olarak duruyordu; satır içi betiği engelleyen
   güvenlik kuralı (script-src 'self') altında da çalışsın diye ayrı dosyaya alındı. */
/* Tema, tasarım ve hasta grubu ilk boyamadan önce uygulanır (yanıp sönmeyi önler).
   ?tasarim=bauhaus ve ?kitle=eri (ped | eri) ile bağlantı paylaşılabilir. Hasta grubu seçilmemişse karşılama penceresi açılır. */
(function () {
  var k = document.documentElement, T = /^(klasik|bauhaus|isvicre|farmakope)$/;
  var kq = (location.search.match(/[?&]kitle=(ped|eri)(?:&|$)/) || [])[1];
  if (kq) k.setAttribute('data-kitle', kq);
  try {
    if (kq) localStorage.setItem('pr-kitle', kq);
    var kd = localStorage.getItem('pr-kitle');
    if (!kq && (kd === 'ped' || kd === 'eri')) k.setAttribute('data-kitle', kd);
    var t = localStorage.getItem('pr-tema'); if (t === 'light' || t === 'dark') k.setAttribute('data-theme', t);
    var q = (location.search.match(/[?&]tasarim=([a-z]+)/) || [])[1];
    if (q && T.test(q)) localStorage.setItem('pr-tasarim', q);
    var d = q && T.test(q) ? q : localStorage.getItem('pr-tasarim');
    if (d && T.test(d) && d !== 'klasik') k.setAttribute('data-tasarim', d);
  } catch (e) {}
  /* Uyarlama: hasta grubu seçilmemişse rehber çocuk-ergen görünümüyle açılır, karşılama penceresi gösterilmez */
  if (!k.hasAttribute('data-kitle')) k.setAttribute('data-kitle', 'ped');
})();
