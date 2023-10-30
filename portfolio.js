$(document).ready(function(){
	
	$(window).scroll(function(){
	  if(this.scrollY > 20){
		$('.navbar').addClass("sticky");
	  }else{
		 $('.navbar').removeClass("sticky");
	  }
	  if(this.scrollY > 500){
		  $('.scroll-up-btn').addClass("show");
	  }else{
		  $('.scroll-up-btn').removeClass("show");
	  }
	});


	// slide-up script
	$('.scroll-up-btn').click(function(){
		$('html').animate({scrollTop: 0});
	});
  
	// toggle menu/navbar script
 	$('.menu-btn').click(function(){
    	$('.navbar .menu').toggleClass("active");
    	$('.menu-btn i').toggleClass("active");
  	});

	// looking for work button  goes to contact
	$('.looking-for-work-btn').click(function(){
		$('html').animate({scrollTop: 3800});
	});

	//   typing animation script
	var typed3 = new Typed (".typing3", {
		strings: ["Hello! My name is"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
	});
	var typed2 = new Typed (".typing2", {
		strings: ["Gregory", "Reeves"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
	});
	var typed = new Typed (".typing", {
		strings: ["Software Engineer", "Freelancer"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
	});

	// Resume open button
	$('resume-btn').click(function(e) {
		e.preventDefault();  
		window.location.href = 'Greg 2022 Resume.docx';
	});
	
	// Skills read more button
	$('.read-more-btn').click( function(e){
		e.preventDefault();
		$('#more').toggle();
	});

	// owl carousel script
	$('.carousel').owlCarousel({
		margin: 20,
		loop: true,
		autoplayTimeOut: 2000,
		autoplayHoverPause: true,
		responsive: {
			0:{
				items: 1,
				nav: false
			},
			600:{
				items: 2,
				nav: false
			},
			1000:{
				items: 3,
				nav: false
			}
		}
	});
});

document.addEventListener("DOMContentLoaded", function () {
    const tooltipTrigger = document.querySelector(".tooltip-trigger");
    const tooltip = document.querySelector(".tooltip");

    tooltipTrigger.addEventListener("mouseenter", function () {
        tooltip.style.display = "block";
    });
    tooltipTrigger.addEventListener("mouseleave", function () {
        tooltip.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function (){
	const javaScriptTooltip = document.querySelector(".devicon-javascript-plain5");
	const jsTooltip = document.querySelector(".javascriptTextbox");

	javaScriptTooltip.addEventListener("mouseenter", function(){
		jsTooltip.style.display = "block";
	})

	javaScriptTooltip.addEventListener("mouseleave", function(){
		jsTooltip.style.display = "none";
	});
});