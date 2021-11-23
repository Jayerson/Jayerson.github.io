function showTopics() {
    var x = document.getElementById("collapsible");
    var y = document.getElementById("swapOut");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "block";
    } else {
      x.style.display = "block";
      y.style.display = "none";
    }
  }

function showEng() {
    var x = document.getElementById("be-hidden");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
