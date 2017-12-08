//	default.js
//	default js file for portfolio

window.onload =function() {
	footerGen();
	navGen();

	$('sideNav').onmouseover = function() {
		$('sideNav').style.width = "160px";
		var links = document.getElementsByClassName("navLink");
		
		for (var i = 0; i < links.length; i++) {
			links[i].style.visibility = "visible";
		}
		// $('navLink').style.visibility = "visible";
	}

	$('sideNav').onmouseout = function() {
		$('sideNav').style.width = "10px";
		var links = document.getElementsByClassName("navLink");
		
		for (var i = 0; i < links.length; i++) {
			links[i].style.visibility = "hidden";
		}
		// $('navLink').style.visibility = "hidden";

	}
}

function $(id) {
	return document.getElementById(id);
}

function footerGen() {
	$('pFooter').innerHTML = 
		'<hr />' + 
		'Visit my ' +
		'<a href="https://cisprod.clarion.edu/~s_jlgeorgvic">production webzone</a>' +
		' on the Clarion University cisprod server!' + 
		'<br /><br />' + 
		'<a href="sitemap.html">Sitemap</a>';
}

function navGen() {
	$('sideNav').innerHTML = 
		'<a class="navLink" href="index.html">Index</a>' +
		'<a class="navLink" href="contact.html">Contact</a>';
}