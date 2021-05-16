var button = document.getElementById("buttonTop");
var shadow = document.getElementById("shadow");

window.onscroll = function() {scroll()};

function scroll() {
	if (document.documentElement.scrollTop > 80) {
		button.style.display = "block";
		shadow.style.display = "block";
	}
	else {
		button.style.display = "none";
		shadow.style.display = "none";
	}
}

function toTop() {
	document.documentElement.scrollTop = 0;
}