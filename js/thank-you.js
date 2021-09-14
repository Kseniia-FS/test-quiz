$(document).ready(function () {
  $("a[data-rel='PhotoGallery1']").attr("rel", "PhotoGallery1");
  $("#PhotoGallery1").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: { enabled: true, navigateByImgClick: true },
  });
});

(function (m, e, t, r, i, k, a) {
  m[i] =
    m[i] ||
    function () {
      (m[i].a = m[i].a || []).push(arguments);
    };
  m[i].l = 1 * new Date();
  (k = e.createElement(t)),
    (a = e.getElementsByTagName(t)[0]),
    (k.async = 1),
    (k.src = r),
    a.parentNode.insertBefore(k, a);
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(56430505, "init", {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true,
});
