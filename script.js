function myFunction() {
  if (window.pageYOffset > 20) {
    small();
  }
}
function small()
{
  document.getElementById("big2").style.display = "none";
  document.getElementById("big2").style.transition = "all 1s";
  document.getElementById("big").style.display = "none";
  document.getElementById("big").style.transition = "all 1s";
  document.getElementById("navi").style.height = "70px";
  document.getElementById("navi").style.transition = "all 1s";
  
   document.getElementById("rot").style.transform = "rotate(" +   90 + "deg)";
}
function big()
{
   document.getElementById("big").style.display = "";
   document.getElementById("big").style.transition = "all 1s";
   document.getElementById("big2").style.display = "";
   document.getElementById("big2").style.transition = "all 1s";
   document.getElementById("navi").style.height = "100%";
   document.getElementById("navi").style.transition = "all 1s";
   document.getElementById("rot").style.transform='rotate('+270+'deg)';
   document.getElementById("rot").style.transition = "all 1s";
}
function navi()
{
  if(document.getElementById("navi").offsetHeight=="70")
  {
    big();
  }
  else{
    small();
  }
}
