
addEventListener("keyup", function(event) {
  if (event.keyCode === 81) {
    var a = document.querySelector(".active1");
    a.classList.remove("active1");
    var b = a.nextElementSibling;
    if (b.classList.contains("finish")) {
      b.classList.add("active1");
      alert("red car has won.");
      window.location.reload(false);
    }
    b.classList.add("active1");
  } else if (event.keyCode === 80) {
    var a = document.querySelector(".active2");
    a.classList.remove("active2");
    var b = a.nextElementSibling;

    if (b.classList.contains("finish")) {
      b.classList.add("active2");
      alert("blue car has won.");
      window.location.reload(false);
    }
    b.classList.add("active2");
  }
});







