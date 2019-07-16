function myFunction() {
  if (window.pageYOffset > 20) {
    //document.getElementById("keka").style.display = "none";
    //document.getElementById("keka").style.transition = "all 1.5s";
    document.getElementById("navi").style.height = "70px";
    document.getElementById("navi").style.transition = "all 0.5s";
  } else {
    //document.getElementById("keka").style.display = "";
    //document.getElementById("keka").style.transition = "all 1.5s";
    document.getElementById("navi").style.height = "100%";
    document.getElementById("navi").style.top = "0px";
    document.getElementById("navi").style.transition = "all 0.5s";
  }
}
