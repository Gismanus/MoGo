window.onload = function () {
    let navLink = document.getElementsByClassName('nav__link');
    for (let j = 0; j < navLink.length; j++){
        navLink[j].addEventListener('click', nav);
        navLink[j].addEventListener('mouseover', nav);
    };
    function nav () {
        if(this.classList.contains('active') == false){
            this.classList.add('active');
            /*test*/
            if(this.classList.contains('img')){
                this.childNodes[1].classList.add('hided');
                this.childNodes[3].classList.remove('hided');
            }
            for(let j = 0; j <= navLink.length; j++) {
                if(navLink[j] != this) {
                    navLink[j].classList.remove('active')
                    if(navLink[j].classList.contains('img')){
                        navLink[j].childNodes[3].classList.add('hided');
                        navLink[j].childNodes[1].classList.remove('hided');
                    }
                };
            }
        }
    }

    slide();
}


