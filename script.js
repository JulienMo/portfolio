window.onscroll = function() {myFunction()};

function myFunction() {
  if (window.scrollY > 30) {
    document.getElementById("navbar").style.display = "";
  } else if (window.scrollY < 1) {
    document.getElementById("navbar").style.display = "none";
  }
}