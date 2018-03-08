import 'flexboxgrid';
import './styles/styles.scss';
document.write('JS\'s connected !');

// MENU
var burger = document.querySelector('.header_menu_burger');
var menu = document.querySelector('.header_menu_overlay');

burger.addEventListener('click', function() {
  menu.classList.toggle('is-active');
});

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

en.addEventListener('click', function() {
  en.classList.toggle('language-active');
  kr.classList.toggle('language-active');
});
kr.addEventListener('click', function() {
  en.classList.toggle('language-active');
  kr.classList.toggle('language-active');
});
