function myFunction() {
  if (window.pageYOffset > 20) {
    document.getElementById("big").style.display = "none";
    document.getElementById("big").style.transition = "all 1s";
    document.getElementById("big2").style.display = "none";
    document.getElementById("big2").style.transition = "all 1s";
    //document.getElementById("keka").style.display = "none";
    //document.getElementById("keka").style.transition = "all 1.5s";
    document.getElementById("navi").style.height = "70px";
    document.getElementById("navi").style.transition = "all 1s";
  } else {
    document.getElementById("big").style.display = "";
    document.getElementById("big").style.transition = "all 1s";
    document.getElementById("big2").style.display = "";
    document.getElementById("big2").style.transition = "all 1s";
    //document.getElementById("keka").style.display = "";
    //document.getElementById("keka").style.transition = "all 1.5s";
    document.getElementById("navi").style.height = "100%";
   
    document.getElementById("navi").style.transition = "all 1s";
  }
}
