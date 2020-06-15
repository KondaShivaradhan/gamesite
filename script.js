function myFunction() {
    if (window.pageYOffset > 20) {
        small();
    }
}
function small() {
    $('#ntext').hide().css({
        opacity: '1'
    });
    $("#navi").animate({
        backgroundColor: "linear-gradient(145deg,white,black,white)"
    },
        1000
    );
    document.getElementById("svg").style.cssText = 'height:0%; width:0%;transition:all 0.3s';
    document.getElementById("rot").style.transition = "all 0.5s";
    document.getElementById("navi").style.height = "70px";
    document.getElementById("rot").style.transform = "rotate(" + 90 + "deg)";
}
function big() {
    document.getElementById("svg").style.cssText = 'height:50%; width:50%;';
    $('#ntext').show();
    document.getElementById("navi").style.height = "100%";
    document.getElementById("rot").style.transform = "rotate(" + 270 + "deg)"; 
}
function navi() {
    if (document.getElementById("navi").offsetHeight == "70") {
        big();
    } else {
        small();
    }
}