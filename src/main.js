import "./scss/main.scss"

// PARALLAX
window.addEventListener("scroll", function () {
  var slider = document.querySelector(".header");
  var yPos = window.pageYOffset / slider.dataset.speed;
  yPos = +yPos;
  var coords = '0% ' + yPos + 'px';
  slider.style.backgroundPosition = coords;
}); // MENU

var burger = document.querySelector('.header_menu_burger');
var menu = document.querySelector('.header_menu_overlay');
var firstLine = document.querySelector('.header_menu_burger_firstLine');
var lastLine = document.querySelector('.header_menu_burger_lastLine');
var firstLineBefore = document.querySelector('.header_menu_burger_firstLine_before');
var lastLineAfter = document.querySelector('.header_menu_burger_lastLine_after');
var items = document.querySelectorAll('.header_menu_overlay_items');
burger.addEventListener('click', function () {
  menu.classList.toggle('header_menu_overlay-active');
  firstLine.classList.toggle('header_menu_burger_firstLine-anim');
  firstLineBefore.classList.toggle('header_menu_burger_firstLine-befafter');
  lastLine.classList.toggle('header_menu_burger_lastLine-anim');
  lastLineAfter.classList.toggle('header_menu_burger_firstLine-befafter');
});

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function () {
    menu.classList.toggle('header_menu_overlay-active');
    firstLine.classList.toggle('header_menu_burger_firstLine-anim');
    firstLineBefore.classList.toggle('header_menu_burger_firstLine-befafter');
    lastLine.classList.toggle('header_menu_burger_lastLine-anim');
    lastLineAfter.classList.toggle('header_menu_burger_firstLine-befafter');
  });
} // TYPEWRITER


var carrousel = document.querySelector('.header_typewriter');
var carrouselWrap = document.querySelector('.header_typewriter_items');
var images = document.querySelectorAll('.header_typewriter_item');
var carrouselWidth = 100;
var imgs = [images[0], images[1], images[2], images[3], images[4], images[5]];
var btnRight = document.querySelector('.right');
var counter = 0;

var prevImg = function () {
  carrouselWrap.classList.add('transition');
  counter++;

  if (counter > imgs.length - 1) {
    images = document.querySelectorAll('.header_typewriter_item');
    var node = images[images.length - 1];
    carrouselWrap.insertBefore(node, carrouselWrap.childNodes[0]);
    counter = 0;
    carrouselWrap.classList.remove('transition');
    carrouselWrap.style.transform = 'translateY(-' + counter * carrouselWidth + "px)";
    setTimeout(function () {
      prevImg();
    }, 1);
  } else {
    carrouselWrap.style.transform = 'translateY(-' + counter * carrouselWidth + "px)";
  }
};

btnRight.addEventListener('click', function () {
  prevImg();
});
var intervalID = window.setInterval(prevImg, 2500); // INPUT

var inputBox = document.querySelector('.header_button');
var input = document.querySelector('.header_button_input');
var search = document.querySelector('.header_button_search');
inputBox.addEventListener('click', function () {
  input.removeAttribute('disabled');
  input.removeAttribute('value');
  input.setAttribute('placeholder', ' : enter what you want to visit');
  input.classList.add('header_button_input-anim');
  search.classList.add('loader_active');
}); // MUTE

var audio = document.getElementById('audio');
var mute = document.querySelector('.header_music');
var muteBefore = document.querySelector('.header_music_before');
var muteAfter = document.querySelector('.header_music_after');
audio.volume = 0.05;
mute.addEventListener('click', function () {
  if (audio.muted === false) {
    audio.muted = true;
  } else {
    audio.muted = false;
  }

  muteBefore.classList.toggle('header_music_before-pulse');
  muteAfter.classList.toggle('header_music_after-pulse');
}); // LANGUAGE

var en = document.querySelector('.header_language_en');
var kr = document.querySelector('.header_language_kr');
var change = document.querySelector('.header_language-change');
en.addEventListener('click', function () {
  change.classList.toggle('header_language-change-toLeft');
  change.classList.toggle('header_language-change-toRight');
});
kr.addEventListener('click', function () {
  change.classList.toggle('header_language-change-toLeft');
  change.classList.toggle('header_language-change-toRight');
}); // SCOLLPOS

var linear = document.querySelector('#colorToChange');
window.addEventListener('scroll', function () {
  if (window.scrollY < document.querySelector('.header').offsetHeight - 50) {
    firstLine.classList.add('backgroundChange');
    lastLine.classList.add('backgroundChange');
    firstLineBefore.classList.add('backgroundChange');
    lastLineAfter.classList.add('backgroundChange');
    linear.setAttribute('stop-color', '#fff');
  } else if (window.scrollY < document.querySelector('.header').offsetHeight + document.querySelector('.method').offsetHeight - 50) {
    firstLine.classList.remove('backgroundChange');
    lastLine.classList.remove('backgroundChange');
    firstLineBefore.classList.remove('backgroundChange');
    lastLineAfter.classList.remove('backgroundChange');
    linear.setAttribute('stop-color', '#8B83FF');
  } else if (window.scrollY < document.querySelector('.header').offsetHeight + document.querySelector('.method').offsetHeight + document.querySelector('.random').offsetHeight - 50) {
    firstLine.classList.add('backgroundChange');
    lastLine.classList.add('backgroundChange');
    firstLineBefore.classList.add('backgroundChange');
    lastLineAfter.classList.add('backgroundChange');
    linear.setAttribute('stop-color', '#fff');
  } else {
    firstLine.classList.remove('backgroundChange');
    lastLine.classList.remove('backgroundChange');
    firstLineBefore.classList.remove('backgroundChange');
    lastLineAfter.classList.remove('backgroundChange');
    linear.setAttribute('stop-color', '#8B83FF');
  }
});
window.addEventListener('scroll', function () {
  if (window.scrollY < 35) {
    mute.classList.add('backgroundChange');
    muteBefore.classList.add('backgroundChange');
    muteAfter.classList.add('backgroundChange');
    en.classList.add('colorChange');
    kr.classList.add('colorChange');
    change.classList.add('gradientBackgroundChange');
  } else if (window.scrollY < document.querySelector('.header').offsetHeight - 35) {
    mute.classList.remove('backgroundChange');
    muteBefore.classList.remove('backgroundChange');
    muteAfter.classList.remove('backgroundChange');
    en.classList.remove('colorChange');
    kr.classList.remove('colorChange');
    change.classList.remove('gradientBackgroundChange');
  } else if (window.scrollY < document.querySelector('.header').offsetHeight + document.querySelector('.method').offsetHeight - 35) {
    mute.classList.add('backgroundChange');
    muteBefore.classList.add('backgroundChange');
    muteAfter.classList.add('backgroundChange');
    en.classList.add('colorChange');
    kr.classList.add('colorChange');
    change.classList.add('gradientBackgroundChange');
  } else if (window.scrollY < document.querySelector('.header').offsetHeight + document.querySelector('.method').offsetHeight + document.querySelector('.random').offsetHeight - 35) {
    mute.classList.remove('backgroundChange');
    muteBefore.classList.remove('backgroundChange');
    muteAfter.classList.remove('backgroundChange');
    en.classList.remove('colorChange');
    kr.classList.remove('colorChange');
    change.classList.remove('gradientBackgroundChange');
  } else {
    mute.classList.add('backgroundChange');
    muteBefore.classList.add('backgroundChange');
    muteAfter.classList.add('backgroundChange');
    en.classList.add('colorChange');
    kr.classList.add('colorChange');
    change.classList.add('gradientBackgroundChange');
  }
}); // SCROLL

var gotoHome = document.querySelector('.header_menu_overlay_item-1');
var gotoMethod = document.querySelector('.header_menu_overlay_item-2');
var gotoRandom = document.querySelector('.header_menu_overlay_item-3');
var gotoDistrict = document.querySelector('.header_menu_overlay_item-4');
gotoHome.addEventListener('click', function () {
  document.querySelector('#header').scrollIntoView({
    behavior: 'smooth'
  });
});
gotoMethod.addEventListener('click', function () {
  document.querySelector('#method').scrollIntoView({
    behavior: 'smooth'
  });
});
gotoRandom.addEventListener('click', function () {
  document.querySelector('#random').scrollIntoView({
    behavior: 'smooth'
  });
});
gotoDistrict.addEventListener('click', function () {
  document.querySelector('#district').scrollIntoView({
    behavior: 'smooth'
  });
}); // NOTME

var randomArticle = document.querySelectorAll('.random_box_article'); //
// for (let a = 0; a < randomArticle.length; a++) {
//   randomArticle[a].addEventListener('mouseover', function() {
//       console.log(a)
//       for (var i = 0; i < randomArticle.length; i++) {
//           if (i !== a) {
//               randomArticle[i].classList.add('over');
//           }
//       }
//   });
//
//   randomArticle[a].addEventListener('mouseout', function() {
//       for (var i = 0; i < randomArticle.length; i++) {
//           randomArticle[i].classList.remove('over');
//       }
//   });
// }
// DEPLOY IMGS

var randomFig = document.querySelectorAll('.random_imgBox_figure');
var randomFigText = document.querySelectorAll('.random_imgBox_figure_figcaption');
var cross = document.querySelector('.cross');

for (let i = 0; i < randomArticle.length; i++) {
  randomArticle[i].addEventListener('click', function () {
    randomFig[i].classList.add('scaled');
    randomFigText[i].classList.add('tracking-in-contract');
    cross.classList.add('loader_active');
  });
  cross.addEventListener('click', function () {
    randomFig[i].classList.remove('scaled');
    randomFigText[i].classList.remove('tracking-in-contract');
    cross.classList.remove('loader_active');
  });
} // DISTRICTS


var district = document.querySelector('#district');
var districtPath = document.querySelectorAll('.district_svg_path');
var districtName = document.querySelector('.district_name');

for (let i = 0; i < districtPath.length; i++) {
  districtPath[i].addEventListener('mouseover', function () {
    var districtID = districtPath[i].getAttribute('id');
    console.log(districtID);
    districtName.textContent = districtID;
  });
} // TESTS


var loader = document.querySelector('.loader');
var loaderEnter = document.querySelector('.loader_enter');
setTimeout(() => {
  loaderEnter.style.display = "block"
}, 2000);
loaderEnter.addEventListener("click", function () {
  loader.classList.remove('loader_active');
  document.getElementById("audio").play()
});

console.log(document.querySelector('.random').offsetHeight);
var headerButton = document.querySelector('.header_button_search');
headerButton.addEventListener('click', function () {
  scroll();
});

function scroll() {
  function scrollDown() {
    document.querySelector('.footer').scrollIntoView({
      behavior: 'smooth'
    });
  }

  function scrollUp() {
    document.querySelector('.header').scrollIntoView({
      behavior: 'smooth'
    });
  }
} // var intervalID2 = window.setInterval(scroll, 2000);