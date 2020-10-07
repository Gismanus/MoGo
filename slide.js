function slide () {
    let slides = document.getElementsByClassName('slider__item');
    let intro = document.querySelector('.intro')



    setInterval(tick, 2000);
    /*if (i = 3) {
        i = 0
    }*/
    let i = 0, arr = [];
    for (let j = 10; j >= 0; j--){
        arr.push(j/10)
    }
    function tick () {
        if (slides[i].classList.contains('active')) {
            slides[i].classList.remove('active');
            if(i == slides.length - 1){
                i = 0;
            } else {
                i++
            }
            slides[i].classList.add('active');
        }
    }
}

