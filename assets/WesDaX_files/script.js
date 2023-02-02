//To-Do// This should be edited, code can be written much efficiently. 

var btnClass = document.getElementsByClassName("btn-inquire");
var modal = document.getElementById('myModal');
var img0 = document.getElementById('maps_for_hover');
var img1 = document.getElementById('table_for_hover');
var img2 = document.getElementById('charts_for_hover');
var modalImg0 = document.getElementById("img_00");
var modalContent = document.getElementsByClassName("modal-maps")[0];
var modalClose = document.getElementsByClassName("close")[0];

img0.onclick = function(){
    modal.style.display = "block";
    modalImg0.src = "assets/maps_for_hover.jpg";
    modalContent.style.width = "70%";
    modalClose.style.right = "12.5vw";
    document.getElementsByClassName("menu-button__wrapper")[0].style.display = 'none';
    btnClass[0].style.display = 'none';
}
img1.onclick = function(){
    modal.style.display = "block";
    modalImg0.src = "assets/table_for_hover.jpg";
    modalContent.style.width = "70%";
    modalClose.style.right = "12.5vw";
    document.getElementsByClassName("menu-button__wrapper")[0].style.display = 'none';
    btnClass[0].style.display = 'none';
}
img2.onclick = function(){
    modal.style.display = "block";
    modalImg0.src = "assets/charts_for_hover.jpg";
    modalContent.style.width = "55%";
    modalClose.style.right = "20.5vw";
    document.getElementsByClassName("menu-button__wrapper")[0].style.display = 'none';
    btnClass[0].style.display = 'none';
}
img0.onkeypress = function(){
    modal.style.display = "block";
    modalImg0.src = "assets/maps_for_hover.jpg";
    modalContent.style.width = "70%";
    modalClose.style.right = "12.5vw";
    document.getElementsByClassName("menu-button__wrapper")[0].style.display = 'none';
    btnClass[0].style.display = 'none';
}
img1.onkeypress = function(){
    modal.style.display = "block";
    modalImg0.src = "assets/table_for_hover.jpg";
    modalContent.style.width = "70%";
    modalClose.style.right = "12.5vw";
    document.getElementsByClassName("menu-button__wrapper")[0].style.display = 'none';
    btnClass[0].style.display = 'none';
}
img2.onkeypress = function(){
    modal.style.display = "block";
    modalImg0.src = "assets/charts_for_hover.jpg";
    modalContent.style.width = "55%";
    modalClose.style.right = "20.5vw";
    document.getElementsByClassName("menu-button__wrapper")[0].style.display = 'none';
    btnClass[0].style.display = 'none';
}
//Close modal on click elsewhere other than content
$('.modal').click (function (e) {
    if (e.target === $('.modal')[0]) {
    	modal.style.display = "none";
    }
});

// if((window.fullScreen) ||
//    (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
// 		modal.style.paddingTop = "9vw";
// }else{
// 		modal.style.paddingTop = "9vw";
// }

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
    document.getElementsByClassName("menu-button__wrapper")[0].style.display = 'block';
    btnClass[0].style.display = 'block';
};

(function changeIds(){
	let els = document.querySelectorAll('div[id]:not(.tab-box__section)');

	for (let i=0;i<els.length;i++) {
		els[i].setAttribute('data-id', els[i].id);
		els[i].id = '';
	}
})()

const pages = {
	home: document.querySelector('.content--home'),
	learn: document.querySelector('.content--learn'),
	data: document.querySelector('.content--data'),
}

const tabs = {
	zeroNull: document.querySelector('#zero-null'),
	oneNull: document.querySelector('#one-null'),
	nullZero: document.querySelector('#null-zero'),
	nullOne: document.querySelector('#null-one'),
}

const fx = {
	home: pages.home.querySelectorAll('.focusable:not(.splash-body)'),
	learn: pages.learn.querySelectorAll('.focusable'),
	data: pages.data.querySelectorAll('.focusable'),
	menu: menu.wrapper.querySelectorAll('.focusable:not(.contact__wrapper)'),
	contact: menu.contact.querySelectorAll('.focusable'),
}

var oldHash = location.hash;
var routing = false;


function route(state, queryArg) {
	routing = true;

	btnClass[0].style.display = state === "" ? 'none' : 'block';
	let current = document.querySelector('.content--active') || pages.home;
	let next = '#home';
	let query = location.hash.split('/')[1] || '00';


	if (state.slice(1) === current.getAttribute('data-id') ) {
		current = document.createElement('div');
	}

	let tempClasses = ['content--active'];

	console.log(query);

	document.getElementsByClassName('hometab_0')[0].tabIndex = state === "#home" ? '0' : '-1';
	document.getElementsByClassName('hometab_1')[0].tabIndex = state === "#home" ? '0' : '-1';			
	document.getElementsByClassName('image-box__enlarge--one')[0].tabIndex = state === "#learn" ? "0" : "-1";
	document.getElementsByClassName('image-box__enlarge--two')[0].tabIndex = state === "#learn" ? "0" : "-1";
	document.getElementsByClassName('image-box__enlarge--three')[0].tabIndex = state === "#learn" ? "0" : "-1";
	document.getElementsByClassName('white_paper_link')[0].tabIndex = state === "#learn" ? "0" : "-1";
	document.getElementsByClassName('wesvar_link')[0].tabIndex = state === "#learn" ? "0" : "-1";
	document.getElementsByClassName('learntab_0')[0].tabIndex = state === "#learn" ? "0" : "-1";
	document.getElementsByClassName('learntab_1')[0].tabIndex = state === "#learn" ? "0" : "-1";
	document.getElementsByClassName('public_data_suite_link')[0].tabIndex = state === "#learn" ? "0" : "-1";
	document.getElementsByClassName('datatab_2')[0].tabIndex = state === "#data" ? "0" : "-1";
	document.getElementsByClassName('startup_guide_link')[0].tabIndex = state === "#data" ? "0" : "-1";
	document.getElementsByClassName('how_WesDaX_can_help_link')[0].tabIndex = state === "#data" ? "0" : "-1";
	document.getElementsByClassName('datatab_0')[0].tabIndex = state === "#data" ? "0" : "-1";
	document.getElementsByClassName('datatab_1')[0].tabIndex = state === "#data" ? "0" : "-1";
	var dataTabImg = document.getElementsByClassName('body-piece__image');
	var dataTabLink = document.getElementsByClassName('data_11_link');
	for (var i = dataTabImg.length - 1; i >= 0; i--) {
		dataTabImg[i].tabIndex = state === "#data" ? "0" : "-1";
	}
	for (var i = dataTabLink.length - 1; i >= 0; i--) {
		dataTabLink[i].tabIndex = state === "#data" ? "0" : "-1";
	}
	document.getElementById('ACS').tabIndex = state === "#data" ? "0" : "-1";
	document.getElementById('CPS').tabIndex = state === "#data" ? "0" : "-1";
	document.getElementById('CCD').tabIndex = state === "#data" ? "0" : "-1";

	switch (state) {
		case '#home':
			current.classList.add('content--down');
			tempClasses.push('content--down');
			pages.home.classList.remove('content--splash');
			pages.home.classList.add('content--active');
			document.getElementsByClassName('hometab_0')[0].tabIndex = '0';
			document.getElementsByClassName('hometab_1')[0].tabIndex = '0';
			next = '#home';
			break;
		case '#learn':
			current.classList.add('content--down');
			tempClasses.push('content--down');
			pages.learn.classList.add('content--active');
			next = '#learn';
			if (+query[0]) {
				tabs.oneNull.classList.add('tab-box__section--active');
				tabs.zeroNull.classList.remove('tab-box__section--active');
			} else {
				tabs.zeroNull.classList.add('tab-box__section--active');
				tabs.oneNull.classList.remove('tab-box__section--active');
			}
			break;
		case '#data':
			current.classList.add('content--down');
			tempClasses.push('content--down');
			pages.data.classList.add('content--active');
			next = '#data';
			if (+query[1]) {
				tabs.nullOne.classList.add('tab-box__section--active');
				tabs.nullZero.classList.remove('tab-box__section--active');
			} else {
				tabs.nullZero.classList.add('tab-box__section--active');
				tabs.nullOne.classList.remove('tab-box__section--active');
			}
			break;
		default:
			pages.home.classList.add('content--active');
			next = '#home';
			break;
	}

	menu.wrapper.classList.remove('menu-wrapper--splash');


	location.hash = next + '/' + query;

	window.setTimeout(function(){
		routing = false;
		for (var i = 0; i < tempClasses.length; i++) {
			current.classList.remove(tempClasses[i]);
		}
		// current.classList.remove(...tempClasses); //spread syntax is not compatible with IE
	},200);		

	// }

}


let navButtons = document.querySelectorAll('.nav-icons');
for (let i=0;i<navButtons.length;i++) {
	let hash = navButtons[i].getAttribute('data-href');
	navButtons[i].addEventListener('click', function(e){
	let args = e.currentTarget.getAttribute('data-arg');
		if(args){setQuery(args);}
		route(hash);
	})
}

for (let i=0;i<navButtons.length;i++) {
	let hash = navButtons[i].getAttribute('data-href');
	navButtons[i].addEventListener('keypress', function(e){
	let args = e.currentTarget.getAttribute('data-arg');
		if(args){setQuery(args);}
		route(hash);
	})
}

// let tabButtons = document.querySelectorAll('button.tab');

// for (let i=0;i<tabButtons.length;i++) {
// 	tabButtons[i].addEventListener('click', function(e){
// 		let args = e.currentTarget.getAttribute('data-arg');
// 		let current = '#' + document.querySelector('.content--active').getAttribute('data-id');
// 		setQuery(args);
// 		route(current);
// 	})
// }

// let tabDivs = document.querySelectorAll('div.tab');

// for (let i=0;i<tabDivs.length;i++) {
// 	tabDivs[i].addEventListener('click', toggleTabMenu);
// 	// tabDivs[i].addEventListener('focus', openTabMenu);

// }

// function toggleTabMenu(e) {
// 	e.currentTarget.parentElement.classList.toggle('tabs--dropdown');
// 	document.querySelector('body').addEventListener('mousedown', closeTabMenu, {once: true});
// }

// function closeTabMenu(e) {
// 	console.log(e.target.classList.contains('tab'))
// 	console.log(e.target.tagName)
// 	if (e.target.classList.contains('tab') && e.target.tagName === "BUTTON") {
// 		e.target.click();
// 		document.querySelector('.tabs--dropdown').classList.remove('tabs--dropdown');
// 	}
// 	if (e.target.classList.contains('tab')) {
// 		return;
// 	}
// 	document.querySelector('.tabs--dropdown').classList.remove('tabs--dropdown');
// }

// for (let i=0;i<tabs.length;i++) {
// 	tabs[i].addEventListener('click', function(e){
// 		let parentAttr = e.currentTarget.getAttribute('data-parent');
// 		let parent = document.querySelector('div[data-tabs="' + parentAttr + '"]');
// 		console.log(parent)
// 		let tabEls = parent.querySelectorAll('.tab-box__section');
// 		console.log(tabEls)
// 		tabEls[0].classList.toggle('tab-box__section--active');
// 		tabEls[1].classList.toggle('tab-box__section--active');
// 	})
// }

document.querySelector('.splash-body').addEventListener('click', function(){
	route('#home');
})

function setQuery(args) {
	let previous = location.hash.split('/')[1];
	if (!previous) {
		previous = "00";
	}

	let arg1 = JSON.parse(args)[0];
	let arg2 = JSON.parse(args)[1];

	previous = previous.split('');

	previous[0] = '' +  (arg1 || previous[0]);

	previous[1] = '' + (arg2 || previous[1]);

	previous = previous.join('');

	location.hash = location.hash.split('/')[0] + '/' + previous;

	// return previous;
}

let menuLinks = document.querySelectorAll('.menu__link');

for (let i=0;i<menuLinks.length;i++) {
	let hash = menuLinks[i].getAttribute('data-href');
	let tabFlag = menuLinks[i].getAttribute('data-arg');
	menuLinks[i].addEventListener('click', function(){
		if (location.hash != hash) {
			tabFlag ? setQuery(tabFlag) : null;
			route(hash);
		}
		toggleMenu();
	})
}

window.onload = function(){
	let pageHash = location.hash.split('/')[0];
	let tabFlags = location.hash.split('/')[1];
	// let pageQuery = document.location.search.substring(1).split('=')[0];
	if (pageHash) {
		route(pageHash);
	}
	 btnClass[0].style.display = pageHash === "" ? 'none' : 'block';
	 document.getElementsByClassName('splash-body')[0].tabIndex = pageHash === "" ? 0 : -1;
}

window.onhashchange = function(){
	var newHash = location.hash;


	if (newHash === oldHash) {
		console.log('ignore')
	} else if (!routing) {
		console.log(routing)
		console.log('fire')
		let pageHash = location.hash.split('/')[0];
		let tabFlags = location.hash.split('/')[1];
		// let pageQuery = document.location.search.substring(1).split('=')[0];
		if (pageHash) {
			route(pageHash);
		}
	}
	
	oldHash = newHash;

}

// function listNav(){
// 	document.querySelectorAll(".learntab_1_ul li:last-child")[0].focus();
// }

function resetForm(){
	// document.getElementById("contactForm").submit();
	// document.getElementById("contactForm").reset();
	// return false;
}

//To-Do

$('.image-box__enlarge--one').hover(function(){
	$('.image-box__image--one').css({transform : "scale(1.1)"})
}, function(){
	$('.image-box__image--one').css({transform : "scale(1)"})
});

$('.image-box__enlarge--two').hover(function(){
	$('.image-box__image--two').css({transform : "scale(1.1)"})
}, function(){
	$('.image-box__image--two').css({transform : "scale(1)"})
});

$('.image-box__enlarge--three').hover(function(){
	$('.image-box__image--three').css({transform : "scale(1.1)"})
}, function(){
	$('.image-box__image--three').css({transform : "scale(1)"})
});

$('.image-box__enlarge--one').focus(function(){
	$('.image-box__image--one').css({transform : "scale(1.1)"})
});

$('.image-box__enlarge--two').focus(function(){
	$('.image-box__image--two').css({transform : "scale(1.1)"})
});

$('.image-box__enlarge--three').focus(function(){
	$('.image-box__image--three').css({transform : "scale(1.1)"})
});

$('.image-box__enlarge--one').focusout(function(){
	$('.image-box__image--one').css({transform : "scale(1)"})
});

$('.image-box__enlarge--two').focusout(function(){
	$('.image-box__image--two').css({transform : "scale(1)"})
});

$('.image-box__enlarge--three').focusout(function(){
	$('.image-box__image--three').css({transform : "scale(1)"})
});


function imgHover(element, source) {
  element.setAttribute('src', source);
}

function imgunHover(element, source) {
  element.setAttribute('src', source);
}

//TO-DO
function showtooltip(element, text, source){
	$('#tooltiplink').attr("href", source);
	$('.data_11_link').html(text);
	element == 1 ? $('.tooltiptext').css({visibility: "visible", top: "21vw", right: "31vw"}) : (element == 2 ? $('.tooltiptext').css({visibility: "visible", top: "29vw", right: "32vw"}) : ($('.tooltiptext').css({visibility: "visible", top: "37.3vw", right: "34vw"})));
	element == 1 ? $('.tooltiparrow').css({visibility: "visible", top: "22.2vw", right: "38.7vw"}) : (element == 2 ? $('.tooltiparrow').css({visibility: "visible", top: "30.2vw", right: "39.9vw"}) : ($('.tooltiparrow').css({visibility: "visible", top: "38.5vw", right: "42.2vw"})));
}

function hidetooltip(){
	setTimeout(function(){
		$('.tooltiptext').css({visibility: "hidden"});
		$('.tooltiparrow').css({visibility: "hidden"});
	}, 2000);
}

function keepFocussed(n){
	$(n).focus();
}

//----------------------------------------------------------------------------------------//




