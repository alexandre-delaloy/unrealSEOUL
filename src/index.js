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
var lastLine = document.querySelector('.header_menu_burger_lastLine')
var items = document.querySelectorAll('.header_menu_overlay_items');

burger.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  // firstLine.classList.toggle('header_menu_burger_firstLine-anim');
  // lastLine.classList.toggle('header_menu_burger_lastLine-anim');
});
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function() {
    menu.classList.toggle('is-active');
  });
}

// MUTE
var audio = document.getElementById('audio');
var mute = document.querySelector('.header_music');
var muteBefore = document.querySelector('.header_music_before');
var muteAfter = document.querySelector('.header_music_after');
mute.addEventListener('click', function (){
  if (audio.muted === false) {
         audio.muted = true;
  }
  else {
      audio.muted = false;
  }
  muteAfter.classList.toggle('pulse');
  muteBefore.classList.toggle('pulse');
});

// LANGUAGE
var en = document.querySelector('.header_language_en');
var kr = document.querySelector('.header_language_kr');
var change = document.querySelector('.header_language_change');

en.addEventListener('click', function() {
  change.classList.toggle('toLeft');
	change.classList.toggle('toRight');
});
kr.addEventListener('click', function() {
  change.classList.toggle('toLeft');
	change.classList.toggle('toRight');
});

// INPUT
var inputBox = document.querySelector('.header_button');
var input = document.querySelector('.header_button_input');

inputBox.addEventListener('click', function() {
  input.removeAttribute('disabled');
  input.removeAttribute('value');
  input.setAttribute('placeholder', ' : enter what you want to visit');
  input.classList.add('header_button_input-anim')
})
