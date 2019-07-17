function myFunction() {
  if (window.pageYOffset > 20) {
    small();
  }
}
function small() {
  
  $("#big2").hide(1000);
  $("#big1").hide(1000);
  document.getElementById("rot").style.transition = "all 1s";
  document.getElementById("navi").style.height = "70px";
  document.getElementById("navi").style.background =
    "linear-gradient(90deg,white,black,white)";
  document.getElementById("rot").style.transform = "rotate(" + 90 + "deg)";
}
function big() {

  $("#big2").show(1000);
    $("#big1").show(1000);
  document.getElementById("rot").style.transition = "all 1s";
  document.getElementById("navi").style.height = "100%";
  document.getElementById("navi").style.background =
    "linear-gradient(45deg,white,black,white)";
  document.getElementById("rot").style.transform = "rotate(" + 270 + "deg)";
}
function navi() {
  if (document.getElementById("navi").offsetHeight == "70") {
    big();
  } else {
    small();
  }
}
