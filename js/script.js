var owl_knowledge = $('#knowledge-carousel');
var owl_services = $('#services-carousel');
var knowledge_open = false;
var services_open = false;

// Smooth Scroll

$.scrollify({
	section : ".sec",
	interstitialSection : "",
	easing: "easeOutExpo",
	scrollSpeed: 500,
	offset : 0,
	scrollbars: true,
	standardScrollElements: "",
	setHeights: true,
	overflowScroll: true,
	updateHash: true,
	touchScroll:true
});

// Owl carousel

owl_knowledge.owlCarousel({
	center:true,
	loop:true,
	margin:10,
	autoplay:true,
	autoplayTimeout:2000,
	autoplayHoverPause:true,
	nav: true,
	navText: [
	"<i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>",
	"<i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>"
	],
	responsiveClass:true,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:3
		},
		1000:{
			items:5
		}
	}
});
owl_services.owlCarousel({
	center:true,
	loop:true,
	margin:10,
	autoplay:true,
	autoplayTimeout:2000,
	autoplayHoverPause:true,
	nav: true,
	navText: [
	"<i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>",
	"<i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>"
	],
	responsiveClass:true,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		1000:{
			items:3
		}
	}
});

// Event handle

$('#knowledge-carousel > div').mouseleave(function(e){
	if(!knowledge_open){
		owl_knowledge.trigger('next.owl.carousel');
		owl_knowledge.trigger('play.owl.autoplay');
	}
})
$('#services-carousel > div').mouseleave(function(e){
	if(!services_open){
		owl_services.trigger('next.owl.carousel');
		owl_services.trigger('play.owl.autoplay');
	}
})

function topOf(obj){
	$('html, body').animate({
		scrollTop: $(obj).offset().top
	}, 200);
}

function closeKnowledgeTip(){
	$("#knowledge-tip").slideUp("fast", function(){
		$("#knowledge-tip h1").text("Title");
		knowledge_open = false;
		owl_knowledge.trigger('play.owl.autoplay');
		// if(!knowledge_open && !services_open){
		// 	$.scrollify({
		// 		standardScrollElements: ""
		// 	});
		// }
		$.scrollify.update();
		// $.scrollify.move("#2");
	});
	topOf("#showcase");
}

function closeServicesTip(){
	$("#services-tip").slideUp("fast", function(){
		$("#services-tip h1").text("Title");
		services_open = false;
		owl_services.trigger('play.owl.autoplay');
		// $.scrollify.move("#2");
		// if(!knowledge_open && !services_open){
		// 	$.scrollify({
		// 		standardScrollElements: ""}
		// 		);
		// }
		$.scrollify.update()		
	});
	topOf("#showcase");
}

$("#services-tip .back i").on("click", function(){
	closeServicesTip();	
});


$("#knowledge-tip .back i").on("click", function(){
	closeKnowledgeTip();
});

function setTip(tip, title, image, desc){	
	tip.find("h1").text(title);
	tip.find("img").attr("src", image);	
	tip.slideDown("fast");
	$.scrollify.update()
}

$(".knowledge .owl-item").on("click", function(){
	if($("#knowledge-tip h1").text() == $(this).find("h4").text()){
		closeKnowledgeTip();
		return;
	}
	setTip($("#knowledge-tip"), $(this).find("h4").text(), $(this).find("img").attr("src"), 0);
	topOf("#showcase");
	owl_knowledge.trigger('to.owl.carousel', $(this).index()+1);
	knowledge_open = true;
	owl_knowledge.trigger('stop.owl.autoplay');
});

$(".services .owl-item").on("click", function(){
	if($("#services-tip h1").text() == $(this).find("h4").text()){
		closeServicesTip();
		return;
	}
	topOf("#services-carousel");
	owl_services.trigger('to.owl.carousel', $(this).index()+1);
	owl_services.trigger('stop.owl.autoplay');
	setTip($("#services-tip"), $(this).find("h4").text(), $(this).find("img").attr("src"), 0);
	services_open = true;
});

$('#knowledge-tip').hide();
$('#services-tip').hide();
$.scrollify.update();

// Scroll reveal

window.sr = ScrollReveal();
sr.reveal(".left img", {
	duration: 1000,
	origin: 'top'
});

sr.reveal(".left h1, .left p", {
	duration: 2000,
	origin: 'left'
});

sr.reveal(".right p", {
	duration: 1000,
	origin: 'right'
});

sr.reveal(".social", {
	duration: 2000,
	origin: 'top'
});

sr.reveal(".next", {
	duration: 1000,
	origin: 'top'
});

sr.reveal(".owl-section h1", {
	duration: 1000,
	origin: 'top'
});

sr.reveal(".owl-carousel", {
	duration: 2000,
	origin: 'bottom'
});