document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("menu-icon").addEventListener("click", function () {
        document.querySelector(".navbar").classList.toggle("show");
    });

    window.onclick = function (event) {
        if (!event.target.matches('#menu-icon')) {
            var dropdowns = document.getElementsByClassName("navbar");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    };
});

const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 0);
}); 

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};
const slider = document.querySelector(".slider");
        const nextBtn = document.querySelector(".next-btn");
        const prevBtn = document.querySelector(".prev-btn");
        const slides = document.querySelectorAll(".slide");
        const slideIcons = document.querySelectorAll(".slide-icon");
        const numberOfSlides = slides.length;
        var slideNumber = 0;

        //image slider next button
        nextBtn.addEventListener("click",()=>{
            slides.forEach((slide) => {
                slide.classList.remove("active");
            });
            slideIcons.forEach((slideIcon) => {
                slideIcon.classList.remove("active");
            });

            slideNumber++;

            if(slideNumber > (numberOfSlides -1)){
                slideNumber = 0;
            }

            slides[slideNumber].classList.add("active");
            slideIcons[slideNumber].classList.add("active");
        })

        //images slider previous button
        prevBtn.addEventListener("click",() => {
            slides.forEach((slide) => {
                slide.classList.remove("active");
            });
            slideIcons.forEach((slideIcon) => {
                slideIcon.classList.remove("active");
            });

            slideNumber--;

            if(slideNumber < 0){
                slideNumber = numberOfSlides - 1;
            }

            slides[slideNumber].classList.add("active");
            slideIcons[slideNumber].classList.add("active");
        });

        //image slider autoplay
        var playSlider;

        var repeater = () =>{
            playSlider = setInterval(function(){
                slides.forEach((slide) => {
                slide.classList.remove("active");
            });
            slideIcons.forEach((slideIcon) => {
                slideIcon.classList.remove("active");
            });

            slideNumber++;

            if(slideNumber > (numberOfSlides -1)){
                slideNumber = 0;
            }

            slides[slideNumber].classList.add("active");
            slideIcons[slideNumber].classList.add("active");
            }, 3000);
        }
        repeater();

        //stop the image slider autoplay on mouseover
        slider.addEventListener("mouseover", () => {
            clearInterval(playSlider);
        });
        //stop the image slider autoplay on mouseout
        slider.addEventListener("mouseout", () => {
            repeater();
        });

        //for ads
        document.addEventListener('DOMContentLoaded', function () {
            setTimeout(function () {
              document.getElementById('ads-overlay').style.display = 'block';
            }, 0);
          });
        function closeAds() {
            var adsContainer = document.getElementById('adsContainer');
            adsContainer.style.animation = 'slideOut 1s forwards';
            adsContainer.classList.add('animation-out');
            setTimeout(function () {
            adsContainer.classList.add('hidden');
            document.getElementById('ads-overlay').style.display = 'none';
            }, 1000);
        }
