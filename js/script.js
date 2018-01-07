var owl_knowledge = $('#knowledge-carousel');
var owl_services = $('#services-carousel');
var knowledge_open = false;
var services_open = false;

$.scrollify({
	section : ".sec",
	interstitialSection : "",
	easing: "easeOutExpo",
	scrollSpeed: 500,
	offset : 0,
	scrollbars: true,
	standardScrollElements: ".wrapper",
	setHeights: true,
	overflowScroll: true,
	updateHash: true,
	touchScroll:true
});

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

$("#knowledge-tip .back i").on("click", function(){
	$("#knowledge-tip").slideUp("slow", function(){
		$.scrollify.update()
		knowledge_open = false;
		owl_knowledge.trigger('play.owl.autoplay');
		$.scrollify.move("#2");
	});
});
$("#services-tip .back i").on("click", function(){
	$("#services-tip").slideUp("slow", function(){
		$.scrollify.update()
		services_open = false;
		owl_services.trigger('play.owl.autoplay');
		$.scrollify.move("#2");
	});
});

function setTip(tip, title, image, desc){	
	tip.find("h1").text(title);
	tip.find("img").attr("src", image);	
	tip.slideDown("slow");	
	$.scrollify.update()
	$('html, body').animate({
		scrollTop: tip.offset().top
	}, 1000);
}

$(".knowledge .owl-item").on("click", function(){
	setTip($("#knowledge-tip"), $(this).find("h4").text(), $(this).find("img").attr("src"), 0);
	owl_knowledge.trigger('to.owl.carousel', $(this).index()+1);
	knowledge_open = true;
	owl_knowledge.trigger('stop.owl.autoplay');
});

$(".services .owl-item").on("click", function(){
	owl_services.trigger('to.owl.carousel', $(this).index()+1);
	owl_services.trigger('stop.owl.autoplay');
	setTip($("#services-tip"), $(this).find("h4").text(), $(this).find("img").attr("src"), 0);
	services_open = true;
});

$('#knowledge-tip').hide();
$('#services-tip').hide();
$.scrollify.update();