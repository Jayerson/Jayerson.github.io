function showTopics() {
    var w = document.getElementById("about_inline");
    var x = document.getElementById("collapsible");
    var y = document.getElementById("swapout");
    if (x.style.display === "block") {
      w.style.display = "block";
      x.style.display = "none";
      y.style.display = "block";
    } else {
      w.style.display = "none";
      x.style.display = "block";
      y.style.display = "none";
    }
}

function showEng() {
    var x = document.getElementById("be-hidden");
    var y = document.getElementById("rocket");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "block";
    } else {
      x.style.display = "block";
      y.style.display = "none";
    }
}

window.onscroll = function() {stick()};

var navBar = document.getElementById("sticky_nav");
var sticky = navBar.offsetTop;
function stick() {
  if (window.pageYOffset >= sticky)
    navBar.classList.add("sticky");
  else navBar.classList.remove("sticky");
}