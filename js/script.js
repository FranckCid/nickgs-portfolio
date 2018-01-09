var owl_knowledge = $('#knowledge-carousel');
var owl_services = $('#services-carousel');
var knowledge_open = false;
var services_open = false;

// Give an index to each item
owl_knowledge.children().each( function( index ) {
  $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
});

owl_services.children().each( function( index ) {
  $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
});

// Smooth Scroll

function isMobile(){
	return (/Android|webOS|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent) );
}

if(!isMobile()){
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
}else{
	console.log("This is Mobile");
}

// Owl carousel

function startKnowledgeOwl(play){
	owl_knowledge.owlCarousel({
		center:true,
		loop:true,
		margin:10,
		autoplay:play,
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
}

function startServicesOwl(play){
	owl_services.owlCarousel({
		center:true,
		loop:true,
		margin:10,
		autoplay:play,
		autoplayTimeout: 2000,
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
}

function stopIfKnowledgeOpen(){
	if(knowledge_open){
		owl_knowledge.trigger('stop.owl.autoplay');
		//simple one (EDIT: not enough to make it work after testing it):
		//$('.owl-carousel').trigger('changeOption.owl.carousel', { autoplay: false });

		//or more complicated (will work for one carousel only, or else use 'each'):
		//EDIT: this one seems to work
		var carousel = owl_knowledge.data('owl.carousel');
		carousel.settings.autoplay = false; //don't know if both are necessary
		carousel.options.autoplay = false;
		owl_knowledge.trigger('refresh.owl.carousel');
		startKnowledgeOwl(false);
	}
}
function stopIfServicesOpen(){
	if(services_open){
		owl_services.trigger('stop.owl.autoplay');
		//simple one (EDIT: not enough to make it work after testing it):
		//$('.owl-carousel').trigger('changeOption.owl.carousel', { autoplay: false });

		//or more complicated (will work for one carousel only, or else use 'each'):
		//EDIT: this one seems to work
		var carousel = owl_services.data('owl.carousel');
		carousel.settings.autoplay = false; //don't know if both are necessary
		carousel.options.autoplay = false;
		owl_services.trigger('refresh.owl.carousel');
		startServicesOwl(false);
	}
}

setTimeout(function(){stopIfKnowledgeOpen(); stopIfServicesOpen();},800);
alert("v1");

// Event handle

$('#knowledge-carousel').mouseleave(function(e){
	if(!isMobile()){
		stopIfKnowledgeOpen();
	}
})
$('#services-carousel').mouseleave(function(e){
	if(!isMobile()){
		stopIfServicesOpen();
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
		$.scrollify.update();
	});
	topOf("#showcase");
}

function closeServicesTip(){
	$("#services-tip").slideUp("fast", function(){
		$("#services-tip h1").text("Title");
		services_open = false;
		owl_services.trigger('play.owl.autoplay');
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
	tip.find("p").text(desc);
	tip.slideDown("fast");
	$.scrollify.update()
}

$(document).on("click", '#knowledge-carousel .owl-item', function(){
	if($("#knowledge-tip h1").text() == $(this).find("h4").text()){
		closeKnowledgeTip();
		return;
	}
	knowledge_open = true;
	owl_knowledge.trigger('stop.owl.autoplay');
	owl_knowledge.trigger('to.owl.carousel', $(this).find("div").data('position'));
	owl_knowledge.trigger('stop.owl.autoplay');
	setTip($("#knowledge-tip"), $(this).find("h4").text(), $(this).find("img").attr("src"), $(this).find("p").text());
	topOf("#showcase");
});

$(document).on("click", '#services-carousel .owl-item', function(){
	owl_knowledge.trigger("stop.owl.autoplay");
	owl_services.trigger('to.owl.carousel', $(this).find("div").data('position'));
	owl_knowledge.trigger("stop.owl.autoplay");
	services_open = true;
	if($("#services-tip h1").text() == $(this).find("h4").text()){
		closeServicesTip();
		return;
	}
	setTip($("#services-tip"), $(this).find("h4").text(), $(this).find("img").attr("src"),  $(this).find("p").text());
	topOf("#services-carousel");
});

function updateTip(tip, isOpen, carousel){
	if(isOpen){
		var nxt = $(carousel+" .owl-item.center");
		setTip($(tip), nxt.find("h4").text(), nxt.find("img").attr("src"), nxt.find("p").text());
		$(carousel).trigger('stop.owl.autoplay');
	}
}

$("#knowledge-carousel .owl-next").on("click", function(){	
	updateTip("#knowledge-tip", knowledge_open, "#knowledge-carousel");
	knowledge_open = true;
	if (isMobile()) 
		topOf("#knowledge-carousel");
	else
		topOf("#showcase");
});

$("#services-carousel .owl-next").on("click", function(){
	updateTip("#services-tip", services_open, "#services-carousel");
	services_open = true;
	topOf("#services-carousel");
});

$("#knowledge-carousel .owl-prev").on("click", function(){	
	updateTip("#knowledge-tip", knowledge_open, "#knowledge-carousel");
	if (isMobile()) 
		topOf("#knowledge-carousel");
	else
		topOf("#showcase");
});

$("#services-carousel .owl-prev").on("click", function(){	
	updateTip("#services-tip", services_open, "#services-carousel");
	topOf("#services-carousel");
});

$('#knowledge-tip').hide();
$('#services-tip').hide();
startKnowledgeOwl(true);
startServicesOwl(true);
$.scrollify.update();

// Scroll reveal

window.sr = ScrollReveal();
sr.reveal("#main-header .left img", {
	duration: 1000,
	origin: 'top'
});

sr.reveal("#main-header .left h1, #main-header  .left p", {
	duration: 2000,
	origin: 'left'
});

sr.reveal("#main-header .right p", {
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