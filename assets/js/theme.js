/* Dark mode.
   Loaded blocking from <head> so the theme is applied before the first paint
   (no flash of the wrong colors — that's why there's no `defer` here, and why
   no extra inline snippet is needed).

   The toggle button lives in the page markup inside nav.site-nav. This script
   only wires it up. It is safe to load twice, removes any duplicate or legacy
   toggles, and falls back to building a button if the markup has none. */
(function () {
  var root = document.documentElement;
  if (root.hasAttribute("data-theme-init")) return;
  root.setAttribute("data-theme-init", "1");

  function saved() {
    try { return localStorage.getItem("theme"); } catch (e) { return null; }
  }
  function apply(t) { root.setAttribute("data-theme", t); }

  var mql = window.matchMedia("(prefers-color-scheme: dark)");
  apply(saved() || (mql.matches ? "dark" : "light"));

  var onOsChange = function (e) { if (!saved()) apply(e.matches ? "dark" : "light"); };
  if (mql.addEventListener) mql.addEventListener("change", onOsChange);
  else if (mql.addListener) mql.addListener(onOsChange);

  var SUN = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.5"/>' +
    '<path d="M12 1.5v2M12 20.5v2M1.5 12h2M20.5 12h2M4.6 4.6L6 6M18 18l1.4 1.4M19.4 4.6L18 6M6 18l-1.4 1.4"/></svg>';
  var MOON = '<svg viewBox="0 0 24 24" aria-hidden="true">' +
    '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';

  function build() {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "theme-toggle";
    b.setAttribute("role", "switch");
    b.setAttribute("aria-label", "Dark mode");
    b.innerHTML = SUN + MOON + '<span class="tt-knob"></span>';
    return b;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var nav = document.querySelector("nav.site-nav");
    if (!nav) return;

    // Drop anything left over from an older markup version.
    document.querySelectorAll(".theme-switch").forEach(function (el) { el.remove(); });

    var found = nav.querySelectorAll(".theme-toggle");
    for (var i = 1; i < found.length; i++) found[i].remove();

    var btn = found[0];
    if (!btn) { btn = build(); nav.appendChild(btn); }

    function sync() {
      btn.setAttribute("aria-checked", root.getAttribute("data-theme") === "dark" ? "true" : "false");
    }
    sync();

    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      apply(next);
      sync();
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  });
})();
