document.addEventListener("click", function (e) {
  var b = e.target.closest(".playbtn, [data-play]");
  if (!b) return;
  e.preventDefault();
  var a = b.parentNode && b.parentNode.querySelector("audio");
  if (!a) {
    var src = b.getAttribute("data-play");
    if (!src) return;
    a = new Audio(src);
  }
  a.currentTime = 0;
  var p = a.play();
  if (p && p.then) {
    p.then(function () { b.textContent = "Play again"; })
     .catch(function () { b.textContent = "Could not play"; });
  }
});
