// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({43:[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],15:[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":43}],44:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":15}],14:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./../assets/fonts/NunitoSans-ExtraLight.ttf":[["699d8bf293d2db222865ff12ecf98e2f.ttf",17],17],"./../assets/fonts/NunitoSans-Light.ttf":[["24518a5d1eef97e29c3995408ce00b4d.ttf",16],16],"./../assets/fonts/NunitoSans-Regular.ttf":[["1a8304b4e854ec023a9e0104b8a24715.ttf",18],18],"./../assets/fonts/NunitoSans-SemiBold.ttf":[["5eef6c6322212bbbd643ac667ad18f9a.ttf",19],19],"./../assets/fonts/NunitoSans-Bold.ttf":[["c8ef920c711a055e8d0b9caa140ba2b7.ttf",20],20],"./../assets/imgs/bg/wip.jpg":[["b6e58dbd72863e2fcbc63593245157e8.jpg",21],21],"./../assets/imgs/bg/home_bg.jpg":[["6455c7d65346d7d4516bcf2bbd5e4c79.jpg",22],22],"./../assets/imgs/bg/method/method1min.jpg":[["32c4efdc620d32a3f22be2670b127991.jpg",31],31],"./../assets/imgs/bg/method/method2min.jpg":[["1187e27bd2504797b8bee880cba296d3.jpg",34],34],"./../assets/imgs/bg/method/method3min.jpg":[["a7e4b1d12ced1c547561e958c946127d.jpg",32],32],"./../assets/imgs/bg/random/random1min.jpg":[["40ac69095f9ef8f87fb219c5d5ff4923.jpg",33],33],"./../assets/imgs/bg/random/random2min.jpg":[["3d8e47efcd7ea3cdb0da1e373c4d6ea1.jpg",35],35],"./../assets/imgs/bg/random/random3min.jpg":[["b48557689233effc9d3dd3891a256787.jpg",36],36],"./../assets/imgs/bg/random/random4min.jpg":[["23b2e4cf97ace8e6acc6a6f4cc14920a.jpg",37],37],"./../assets/imgs/bg/random/random5min.jpg":[["ad02641c37e4a7c8ecb5a7f4ce1d07fa.jpg",38],38],"./../assets/imgs/bg/random/random6min.jpg":[["ff54af0e8e61340c84a41fa2008c5542.jpg",39],39],"./../assets/imgs/bg/random/random7min.jpg":[["4257654976cce3e56a5f0e7107a11fa1.jpg",40],40],"./../assets/imgs/bg/random/random8min.jpg":[["e9fc7abfca059cd7d4715cb11e2b7173.jpg",42],42],"./../assets/imgs/bg/random/random9min.jpg":[["2d1e8f5f6c083006d9882c69392bfc24.jpg",41],41],"./../assets/imgs/bg/random_bg.jpg":[["81eb8d304da141d05f73e1476babcb5e.jpg",23],23],"./../assets/imgs/bg/footer_bg.jpg":[["88ae164b19d3883865881b68e2bb3f97.jpg",24],24],"./../assets/imgs/icons/github.svg":[["1c0140baabacc5369af77eda5fab22c6.svg",25],25],"./../assets/imgs/icons/github-anim.svg":[["b57770b034495332de2b987778c32da6.svg",26],26],"./../assets/imgs/icons/linkedin.svg":[["0c747f9684a28df3c27fe8178074e3f9.svg",27],27],"./../assets/imgs/icons/linkedin-anim.svg":[["87cb2cfa79ed629eea86664dabb364dc.svg",28],28],"./../assets/imgs/icons/instagram.svg":[["3b4cd4226c37d3c2860b2d2605f27f03.svg",29],29],"./../assets/imgs/icons/instagram-anim.svg":[["76b939999e58ef06c91b02686db35828.svg",30],30],"_css_loader":15}],2:[function(require,module,exports) {
'use strict';

require('flexboxgrid');

require('./styles/styles.scss');

// PARALLAX
window.addEventListener("scroll", function () {
	var slider = document.querySelector(".header");
	var yPos = window.pageYOffset / slider.dataset.speed;
	yPos = +yPos;

	var coords = '0% ' + yPos + 'px';
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
}
// TYPEWRITER
var carrousel = document.querySelector('.header_typewriter');
var carrouselWrap = document.querySelector('.header_typewriter_items');
var images = document.querySelectorAll('.header_typewriter_item');
var carrouselWidth = 100;
var imgs = [images[0], images[1], images[2], images[3], images[4], images[5]];
var btnRight = document.querySelector('.right');
var counter = 0;

var prevImg = function prevImg() {
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

var intervalID = window.setInterval(prevImg, 2500);

// INPUT
var inputBox = document.querySelector('.header_button');
var input = document.querySelector('.header_button_input');
var search = document.querySelector('.header_button_search');

inputBox.addEventListener('click', function () {
	input.removeAttribute('disabled');
	input.removeAttribute('value');
	input.setAttribute('placeholder', ' : enter what you want to visit');
	input.classList.add('header_button_input-anim');
	search.classList.add('is-active');
});

// MUTE
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
});

// LANGUAGE
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
});

// SCOLLPOS
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
});

// SCROLL
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
});

// NOTME
var randomArticle = document.querySelectorAll('.random_box_article');
//
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

var _loop = function _loop(_i) {
	randomArticle[_i].addEventListener('click', function () {
		randomFig[_i].classList.add('scaled');
		randomFigText[_i].classList.add('tracking-in-contract');
		cross.classList.add('is-active');
	});
	cross.addEventListener('click', function () {
		randomFig[_i].classList.remove('scaled');
		randomFigText[_i].classList.remove('tracking-in-contract');
		cross.classList.remove('is-active');
	});
};

for (var _i = 0; _i < randomArticle.length; _i++) {
	_loop(_i);
}

// DISTRICTS
var district = document.querySelector('#district');
var districtPath = document.querySelectorAll('.district_svg_path');
var districtName = document.querySelector('.district_name');

var _loop2 = function _loop2(_i2) {
	districtPath[_i2].addEventListener('mouseover', function () {
		var districtID = districtPath[_i2].getAttribute('id');
		console.log(districtID);
		districtName.textContent = districtID;
	});
};

for (var _i2 = 0; _i2 < districtPath.length; _i2++) {
	_loop2(_i2);
}

// TESTS
var loading = document.querySelector('.loading');
window.setTimeout(function () {
	loading.classList.remove('is-active');
}, 5000);

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
}

// var intervalID2 = window.setInterval(scroll, 2000);
},{"flexboxgrid":44,"./styles/styles.scss":14}],45:[function(require,module,exports) {

var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '50528' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id);
  });
}
},{}]},{},[45,2])
//# sourceMappingURL=/dist/0561c7ad3c16ebe3beaa3f6e1a670b33.map