function isRetina(){
    return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)').matches)) || (window.devicePixelRatio && window.devicePixelRatio >= 2)) && /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
}

$(window).on("load", function(){
	//console.log("Start of On Load");
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	var imgsrc = $("#MainImage").attr("data-src");
	if(isRetina() && (w <= 800)){
		imgsrc = $("#MainImage").attr("data-src-retina");
	} else if(w <= 800 ) {
		imgsrc = $("#MainImage").attr("data-src-mobile");
	}

	var preImage = new Image();
	preImage.onload = function(){
		$(".lazy").attr("src", function(i, attr){
			return imgsrc;
		});
		$(".lazy.main-image").removeClass("lazy");
	};
	preImage.src = imgsrc;
});


//Form Submission Logic
window.addEventListener("DOMContentLoaded", function() {

	// get the form elements defined in your form HTML above

	var form = document.getElementById("contentForm");
	var button = document.getElementById("send_btn");

	// Success and Error functions for after the form is submitted

	function success() {
		$('#full_name').val('');
		$('#email').val('');
		$('#full_message').val('');
		$("#myModal").modal();
	}

	function error() {
		console.log("Oops there was a problem here");
	}

	// handle the form submission event

	form.addEventListener("submit", function(ev) {
			ev.preventDefault();
			var data = new FormData(form);
			ajax(form.method, form.action, data, success, error);
	});
});

	// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader("Accept", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState !== XMLHttpRequest.DONE) return;
		if (xhr.status === 200) {
		success(xhr.response, xhr.responseType);
		} else {
		error(xhr.status, xhr.response, xhr.responseType);
		}
	};
	xhr.send(data);
}

//Navigation Scrolling

$('#tale_btn').click(function () {
    $('.content-container')[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
});
$('#mission_btn').click(function () {
    $('#missions_block')[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
});
$('#talent_btn').click(function () {
    $('#talent_block')[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
});
$('#contact_btn').click(function () {
    $('.form-container')[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "start" // or "end"
    });
});

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        navElement: "img src='assets/arrow.png' /",
        responsive:{
            0: {
                stagePadding: 30,
                nav: false
            },
            800: {
                stagePadding: 80,
                nav: true
            }

        }
    });
});