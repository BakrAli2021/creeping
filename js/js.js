/**filter game cards */
let fil = document.querySelectorAll(".button-group");
let card = document.querySelectorAll("#cards .grid-item");
fil.forEach((e) => {

    e.addEventListener('click', (el) => {
        card.forEach((ele) => {
            if (el.target.getAttribute("data-filter") == "*") {
                ele.classList.remove("hide");
            } else if (!ele.classList.contains(el.target.getAttribute("data-filter"))) {
                ele.classList.add("hide");
            } else {
                ele.classList.remove("hide");
            }
        });
        //el.target.parentNode.children.classList.remove('active');
        //el.target.classList.add('active');
        //console.log(el.target.parentNode.children)


    })
});
//nav bar
let mynav = document.querySelector('.navbar');


/// scroll top button
let mybutton = document.querySelector('.top');
console.log(mybutton);
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        mybutton.style.opacity = 1;
        mynav.classList.add('scrolled');
    } else {
        mybutton.style.opacity = 0;
        mynav.classList.remove('scrolled');
    }
}
$(document).ready(function() {
    $('.posters .owl-carousel').owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        dots: true,
        dotsEach: true,
        margin: 20,
        navText: [$('.posters .owl-nav .owl-nav-prev'), $('.posters .owl-nav .owl-nav-next')],
        startPosition: 3,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 4
            }
        }

    });
    $('.users_carousel .owl-carousel').owlCarousel({
        dots: false,
        margin: 20,
        loop: true,
        nav: true,
        dots: true,
        dotsEach: true,
        navText: [$('.users_carousel .owl-nav .owl-nav-prev'), $('.users_carousel .owl-nav .owl-nav-next')],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    $('.button-group li').click(function() {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
});