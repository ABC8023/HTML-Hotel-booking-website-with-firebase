const imgs = document.querySelectorAll('.experience-img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.experience-img-showcase img:first-child').clientWidth;

    document.querySelector('.experience-img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}
window.addEventListener('resize', slideImage);

/*experience-2*/
const imgs2 = document.querySelectorAll('.experience-img-select-2 a');
const imgBtns2 = [...imgs2];
let imgId2 = 1;

imgBtns2.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId2 = imgItem.dataset.id;
        slideImage2();
    });
});

function slideImage2(){
    const displayWidth = document.querySelector('.experience-img-showcase-2 img:first-child').clientWidth;

    document.querySelector('.experience-img-showcase-2').style.transform = `translateX(${- (imgId2 - 1) * displayWidth}px)`;
}
window.addEventListener('resize', slideImage2);

/*experience-3*/
const imgs3 = document.querySelectorAll('.experience-img-select-3 a');
const imgBtns3 = [...imgs3];
let imgId3 = 1;

imgBtns3.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId3 = imgItem.dataset.id;
        slideImage3();
    });
});

function slideImage3(){
    const displayWidth = document.querySelector('.experience-img-showcase-3 img:first-child').clientWidth;

    document.querySelector('.experience-img-showcase-3').style.transform = `translateX(${- (imgId3 - 1) * displayWidth}px)`;
}
window.addEventListener('resize', slideImage3);

