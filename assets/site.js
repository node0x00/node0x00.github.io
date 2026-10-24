// Media slots + table of contents. No dependencies.
(function () {
  "use strict";

  // ---- media slots: <div class="media" data-media="id" data-kind="photo|video" data-text="what goes here">
  var media = window.QWEN_MEDIA || {};
  document.querySelectorAll(".media[data-media]").forEach(function (el) {
    var id = el.getAttribute("data-media");
    var entry = media[id];
    var fig = el.closest("figure");
    var cap = fig && fig.querySelector("figcaption");
    var alt = (entry && entry.alt) || (cap ? cap.textContent.trim() : id);
    el.innerHTML = "";
    if (entry && entry.embed) {
      var f = document.createElement("iframe");
      f.src = entry.embed; f.title = alt; f.loading = "lazy";
      f.allow = "accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen";
      el.appendChild(f);
    } else if (entry && entry.src && /\.(mp4|webm|mov)$/i.test(entry.src)) {
      var v = document.createElement("video");
      v.src = entry.src; v.controls = true; v.muted = true; v.loop = true; v.playsInline = true;
      v.preload = "metadata"; v.setAttribute("aria-label", alt);
      el.appendChild(v);
    } else if (entry && entry.src) {
      var i = document.createElement("img");
      i.src = entry.src; i.alt = alt; i.loading = "lazy"; i.decoding = "async";
      el.appendChild(i);
    } else {
      el.classList.add("slot");
      var kind = el.getAttribute("data-kind") || "photo";
      el.innerHTML = '<div><div class="slot-kind">' + (kind === "video" ? "Video" : "Photo") +
        ' to come</div><div class="slot-text">' + (el.getAttribute("data-text") || "") + "</div></div>";
    }
  });

  // ---- table of contents: highlight the section in view; collapsible on small screens
  var toc = document.querySelector(".toc");
  if (!toc) return;
  var toggle = toc.querySelector(".toc-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = toc.getAttribute("data-open") === "true";
      toc.setAttribute("data-open", open ? "false" : "true");
      toggle.setAttribute("aria-expanded", open ? "false" : "true");
    });
    toc.querySelectorAll("nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 1080px)").matches) {
          toc.setAttribute("data-open", "false");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }
  var links = {};
  toc.querySelectorAll("nav a[href^='#']").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
  var sections = Object.keys(links).map(function (id) { return document.getElementById(id); }).filter(Boolean);
  if (!("IntersectionObserver" in window)) return;
  var current = null;
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        if (current) current.classList.remove("active");
        current = links[e.target.id];
        if (current) current.classList.add("active");
      }
    });
  }, { rootMargin: "-20% 0px -70% 0px" });
  sections.forEach(function (s) { obs.observe(s); });
})();
