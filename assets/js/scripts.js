$('.slider-words').slick({
    slidesToShow: 7,
    slidesToScrol: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false
})

function getSecs(sHors, sMins, sSecs, campo) {
    sSecs++;

    if (sSecs === 60) {
        sSecs = 0;
        sMins++;
    }
    if (sMins === 60) {
        sMins = 0;
        sHors++;
    }
    if (sSecs <= 9) {
        sSecs = "0" + sSecs;
    }
    if (sMins <= 9) {
        sMins = "0" + sMins;
    }
    if (sHors <= 9) {
        sHors = "0" + sHors;
    }
    document.getElementById(campo).innerHTML = sHors + ":" + sMins + ":" + sSecs;

    setTimeout("getSecs(" + sHors + ", " + sMins + "," + sSecs + ", '" + campo + "')", 1000);
}

getSecs(0, 0, 0, 'timer')