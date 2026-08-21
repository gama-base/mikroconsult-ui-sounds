(function () {
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-play]");
    if (!b) return;
    e.preventDefault();
    var a = new Audio(b.getAttribute("data-play"));
    a.play().catch(function () {});
  });
})();
