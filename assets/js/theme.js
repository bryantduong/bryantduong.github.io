/* Loaded blocking from <head> so the theme is set before first paint. */
(function () {
  var root = document.documentElement;
  var mql = window.matchMedia("(prefers-color-scheme: dark)");

  function saved() {
    try { return localStorage.getItem("theme"); } catch (e) { return null; }
  }
  function apply(theme) {
    root.setAttribute("data-theme", theme);
    var btn = document.querySelector(".theme-toggle");
    if (btn) btn.setAttribute("aria-checked", theme === "dark" ? "true" : "false");
  }

  apply(saved() || (mql.matches ? "dark" : "light"));

  // Safari < 14 has no addEventListener here; throwing would leave the switch unwired.
  if (mql.addEventListener) mql.addEventListener("change", function (e) {
    if (!saved()) apply(e.matches ? "dark" : "light");
  });

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".theme-toggle");
    if (!btn) return;
    apply(root.getAttribute("data-theme"));
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      apply(next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  });
})();
