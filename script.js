function myFunction() {
  if (window.pageYOffset > 20) {
    small();
  }
}
function small() {
  $("#big2").hide(700);
  $("#big1").hide(700);
   $("#navi").animate(
     {
       "backgroundColor": "linear-gradient(145deg,white,black,white)"
     },
     1000
   );
  document.getElementById("rot").style.transition = "all 1s";
  document.getElementById("navi").style.height = "70px";
document.getElementById("navi").style.backgroundColor = "rgb(140,140,140)";
document.getElementById("navi").style.transition = "all 1s";
  document.getElementById("rot").style.transform = "rotate(" + 90 + "deg)";
}
function big() {
  $("#big2").show(700);
  $("#big1").show(700);
  document.getElementById("rot").style.transition = "all 1s";
  document.getElementById("navi").style.height = "100%";
  document.getElementById("navi").style.backgroundColor="rgb(70,70,70)";
  document.getElementById("navi").style.transition="all 1s";

  document.getElementById("rot").style.transform = "rotate(" + 270 + "deg)";
}
function navi() {
  if (document.getElementById("navi").offsetHeight == "70") {
    big();
  } else {
    small();
  }
}
