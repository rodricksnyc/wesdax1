const menu = {
	button: document.querySelector('.menu-button'),
	buttonWrapper: document.querySelector('.menu-button__wrapper'),
	menu: document.querySelector('.menu'),
	wrapper: document.querySelector('.menu-wrapper'),
	contactTab: document.querySelector('.menu__contact-tab'),
	contact: document.querySelector('.contact'),
}

menu.buttonWrapper.addEventListener('click', toggleMenu);
btnClass = document.getElementsByClassName("btn-inquire");
var contactInput = document.getElementsByClassName('contact__input');
var menuLink = document.getElementsByClassName('menu__link');

var nfuncCall = 0;
function toggleMenu() {
	menu.button.classList.toggle('menu-button--flipped');
	menu.menu.classList.toggle('menu--open');
	menu.contactTab.classList.toggle('menu__contact-tab--down');
	menu.wrapper.classList.toggle('menu-wrapper--open');
	document.querySelector('body').classList.toggle('body--menu-open');
	btnClass[0].style.display = nfuncCall%2 === 0 ? 'none' : 'block';
	for (var i = menuLink.length - 1; i >= 0; i--) {
		menuLink[i].tabIndex = nfuncCall%2 === 0 ? 0 : -1;
	}
	document.getElementsByClassName('menu__contact-tab')[0].tabIndex = nfuncCall%2 === 0 ? 0 : -1;
	nfuncCall++;
}

function closeContact() {	
	for (var i = contactInput.length - 1; i >= 0; i--) {
		contactInput[i].tabIndex = '-1';
	}
	document.getElementsByClassName('contact__select')[0].tabIndex = '-1';
	document.getElementsByClassName('contact__textarea')[0].tabIndex = '-1';
	document.getElementsByClassName('contact__button')[0].tabIndex = '-1';
	document.getElementsByClassName('contact__close')[0].tabIndex = '-1';
	document.querySelector('.contact__wrapper').classList.remove('contact__wrapper--active');
	btnClass[0].style.display = nfuncCall%2 === 0 ? 'block' : 'none';
}

function openContact() {
	for (var i = contactInput.length - 1; i >= 0; i--) {
		contactInput[i].tabIndex = '0';
	}
	document.getElementsByClassName('contact__select')[0].tabIndex = '0';
	document.getElementsByClassName('contact__textarea')[0].tabIndex = '0';
	document.getElementsByClassName('contact__button')[0].tabIndex = '0';
	document.getElementsByClassName('contact__close')[0].tabIndex = '0';
	document.querySelector('.contact__wrapper').classList.add('contact__wrapper--active');
    btnClass[0].style.display = 'none';
    //Adding some padding on top of contact tab, when browsers are in full-screen mode.
	if((window.fullScreen) ||
	   (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
		document.getElementsByClassName('contact')[0].style.padding = '7vw 6vw';		
		document.getElementsByClassName('contact__close')[0].style.top = '2vw';
	}else{
		document.getElementsByClassName('contact')[0].style.padding = '5vw 6vw';
		document.getElementsByClassName('contact__close')[0].style.top = '0vw';
	}
}

document.querySelector('.contact__close').addEventListener('click', closeContact);

document.querySelector('.contact__shade').addEventListener('click', closeContact);

let contactButtons = document.querySelectorAll('.inquire');

for (let i=0;i<contactButtons.length;i++) {
	contactButtons[i].addEventListener('click', openContact);
}

for (let i=0;i<contactButtons.length;i++) {
	contactButtons[i].addEventListener('keypress', openContact);
}

function attachScrollListeners () {
    // create scroll listeners, applying throttling principles from https://developer.mozilla.org/en-US/docs/Web/Events/scroll
    var last_known_scroll_position = 0;
    var ticking = false;  

    window.addEventListener('scroll', function(e) {

		last_known_scroll_position = pageYOffset;

		if (!ticking) {

			window.requestAnimationFrame(function() {
				checkScroll(last_known_scroll_position);

				ticking = false;
			});
		 
			ticking = true;

		}
      
    });
}

function checkScroll(pos) {
	// console.log((pos/document.querySelector('body').clientWidth)*100)
	let tabs = document.querySelector('.content--active .tab-box__section--active .tabs');
	// console.log(tabs)

	if (pos > 5) {
		menu.buttonWrapper.classList.add('menu-button__wrapper--scroll');
		if (tabs && ((pos/document.querySelector('body').clientWidth)*100) > 11) {
			tabs.classList.add('tabs--scroll')
		} else {
			tabs ? tabs.classList.remove('tabs--scroll') : null;
		}
	} else {
		menu.buttonWrapper.classList.remove('menu-button__wrapper--scroll');
		tabs ? tabs.classList.remove('tabs--scroll') : null;
	}

}

checkScroll();
attachScrollListeners();
//checkFullScreen();
