// applicationのslideImageのスライドショーつくる
let slideImage = document.querySelectorAll('.slideImage');
let currentNum = 1;
const csSlide = slideImage[0];
const bdSlide = slideImage[1];
console.log(csSlide);
slideShow(csSlide);
slideShow(bdSlide);


function slideShow(slide) {
  setInterval(() => {
    for(let i = 0; i < 3; i++) {
      slide.children[i].classList.remove('active');
    }
    switch (currentNum%3) {
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
    currentNum += 1;
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