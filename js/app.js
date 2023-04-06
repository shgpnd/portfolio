// applicationのslideImageのスライドショーつくる
let slideImage = document.querySelectorAll('.slideImage');
let currentNum1 = 1;
let currentNum2 = 1;
let currentNum3 = 1;
const csSlide = slideImage[0];
const bdSlide = slideImage[1];
const mhSlide = slideImage[2];
console.log(slideImage[1]);
slideShow(csSlide, currentNum1);
slideShow(bdSlide, currentNum2);
slideShow(mhSlide, currentNum3);


function slideShow(slide, num) {
  setInterval(() => {
    for(let i = 0; i < 3; i++) {
      slide.children[i].classList.remove('active');
    }
    switch (num%3) {
      case 1:
        slide.children[0].classList.add('active');
        break;
      case 2:
        slide.children[1].classList.add('active');
        break;
      case 0:
        slide.children[2].classList.add('active');
        break;
    }
    num += 1;
  }, 3000);
}


//trigger-menu
let trigger = document.getElementsByClassName('menu-trigger');
let linkMenu = document.getElementsByTagName('nav');

trigger[0].addEventListener('click', function() {
  console.log(linkMenu[0]);
  linkMenu[0].classList.toggle('active');
  trigger[0].classList.toggle('active');
});
