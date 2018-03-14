import 'flexboxgrid';
import './styles/styles.scss';

// PARALLAX
window.addEventListener("scroll", function() {
	var slider = document.querySelector(".header");
	var yPos = window.pageYOffset / slider.dataset.speed;
	yPos = +yPos;

	var coords = '0% '+ yPos + 'px';
	slider.style.backgroundPosition = coords;
});

// MENU
var burger = document.querySelector('.header_menu_burger');
var menu = document.querySelector('.header_menu_overlay');
var firstLine = document.querySelector('.header_menu_burger_firstLine');
var lastLine = document.querySelector('.header_menu_burger_lastLine');
var firstLineBefore = document.querySelector('.header_menu_burger_firstLine_before');
var lastLineAfter = document.querySelector('.header_menu_burger_lastLine_after');
var items = document.querySelectorAll('.header_menu_overlay_items');

burger.addEventListener('click', function() {
  menu.classList.toggle('header_menu_overlay-active');
  firstLine.classList.toggle('header_menu_burger_firstLine-anim');
	firstLineBefore.classList.toggle('header_menu_burger_firstLine-befafter');
  lastLine.classList.toggle('header_menu_burger_lastLine-anim');
	lastLineAfter.classList.toggle('header_menu_burger_firstLine-befafter');

});
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function() {
    menu.classList.toggle('header_menu_overlay-active');
  });
}
// TYPEWRITER
var carrousel = document.querySelector('.header_typewriter')
var carrouselWrap = document.querySelector('.header_typewriter_items')
var images = document.querySelectorAll('.header_typewriter_item')
var carrouselWidth = 100;
var imgs = [images[0], images[1], images[2], images[3], images[4], images[5]]
var btnRight = document.querySelector('.right')
var counter = 0;

var prevImg = function() {
	carrouselWrap.classList.add('transition')
	counter++
	if (counter > imgs.length - 1) {
		images = document.querySelectorAll('.header_typewriter_item')
		var node = images[images.length-1];
		carrouselWrap.insertBefore(node, carrouselWrap.childNodes[0]);
		counter = 0
		carrouselWrap.classList.remove('transition')
		carrouselWrap.style.transform = 'translateY(-' + (counter) * carrouselWidth + "px)";
		setTimeout(function() {
			prevImg()
		}, 1)
	} else {
		carrouselWrap.style.transform = 'translateY(-' + (counter) * carrouselWidth + "px)";
	}
}
btnRight.addEventListener('click', function() {
	prevImg()
})

var intervalID = window.setInterval(prevImg, 2500);

// INPUT
var inputBox = document.querySelector('.header_button');
var input = document.querySelector('.header_button_input');
var search = document.querySelector('.header_button_search');

inputBox.addEventListener('click', function() {
  input.removeAttribute('disabled');
  input.removeAttribute('value');
  input.setAttribute('placeholder', ' : enter what you want to visit');
  input.classList.add('header_button_input-anim');
	search.classList.add('is-active');
})

// MUTE
var audio = document.getElementById('audio');
var mute = document.querySelector('.header_music');
var muteBefore = document.querySelector('.header_music_before');
var muteAfter = document.querySelector('.header_music_after');
audio.volume = 0.05;

mute.addEventListener('click', function (){
  if (audio.muted === false) {
         audio.muted = true;
  }
  else {
      audio.muted = false;
  }
  muteBefore.classList.toggle('header_music_before-pulse');
  muteAfter.classList.toggle('header_music_after-pulse');
});

// LANGUAGE
var en = document.querySelector('.header_language_en');
var kr = document.querySelector('.header_language_kr');
var change = document.querySelector('.header_language-change');

en.addEventListener('click', function() {
  change.classList.toggle('header_language-change-toLeft');
	change.classList.toggle('header_language-change-toRight');
});
kr.addEventListener('click', function() {
  change.classList.toggle('header_language-change-toLeft');
	change.classList.toggle('header_language-change-toRight');
});

// SCOLLPOS
var linear = document.querySelector('#colorToChange');



// TESTS
// var beforealed = document.querySelector('.firstLine');
// var pls = window.getComputedStyle(beforealed, :before);

console.log('start');
// console.log(beforealed);
console.log('end');
