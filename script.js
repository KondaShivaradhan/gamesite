function myFunction() {
    // if (window.pageYOffset > 20) {
    //     small();
    // }
    small()
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
    // document.getElementById('scrolldiv').style.display = 'none';
    document.getElementById("small").style.display = 'flex';
    document.getElementById("svg").style.cssText = 'height:0%; width:0%;transition:all 0.3s';
    document.getElementById("rot").style.transition = "all 0.5s";
    document.getElementById("navi").style.height = "70px";
    document.getElementById("rot").style.transform = "rotate(" + 90 + "deg)";
}

function big() {
    console.log("big called");
    // document.getElementById('scrolldiv').style.display = '';
    document.getElementById("small").style.display = 'none';
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