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

function stopIfKnowledgeOpen(){
if(knowledge_open){
		owl_knowledge.trigger('stop.owl.autoplay');
	}
}
function stopIfServicesOpen(){
if(services_open){
		owl_services.trigger('stop.owl.autoplay');
	}
}

owl_knowledge.on("translate.owl.carousel", function(e){
	stopIfKnowledgeOpen();
	owl_knowledge.trigger("prev.owl.carousel", 10000000);
});

owl_services.on("translate.owl.carousel", function(e){
	stopIfServicesOpen();
});

owl_knowledge.on("dragged.owl.carousel", function(e){
	stopIfKnowledgeOpen();
});

owl_services.on("dragged.owl.carousel", function(e){
	stopIfServicesOpen();
});

owl_knowledge.on("resized.owl.carousel", function(e){
	stopIfKnowledgeOpen();
});

owl_services.on("resized.owl.carousel", function(e){
	stopIfServicesOpen();
});

// Event handle

$('#knowledge-carousel').mouseleave(function(e){
	if(!isMobile()){
		if(!knowledge_open){
			//owl_knowledge.trigger('next.owl.carousel');
			owl_knowledge.trigger('play.owl.autoplay');
		}else{
			owl_knowledge.trigger('stop.owl.autoplay');
		}
	}
})
$('#services-carousel').mouseleave(function(e){
	if(!isMobile()){
		if(!services_open){
		//owl_services.trigger('next.owl.carousel');
		owl_services.trigger('play.owl.autoplay');
	}else{
		owl_services.trigger('stop.owl.autoplay');
	}
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
	owl_knowledge.trigger('to.owl.carousel', $(this).find("div").data('position'));
});

$(document).on("click", '#services-carousel .owl-item', function(){
	owl_services.trigger('to.owl.carousel', $(this).find("div").data('position'));
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

$(".knowledge .owl-item").on("click", function(){
	if($("#knowledge-tip h1").text() == $(this).find("h4").text()){
		closeKnowledgeTip();
		return;
	}
	setTip($("#knowledge-tip"), $(this).find("h4").text(), $(this).find("img").attr("src"), $(this).find("p").text());
	topOf("#showcase");
	owl_knowledge.trigger('stop.owl.autoplay');
	knowledge_open = true;
});

$(".services .owl-item").on("click", function(){
	if($("#services-tip h1").text() == $(this).find("h4").text()){
		closeServicesTip();
		return;
	}
	topOf("#services-carousel");
	owl_services.trigger('stop.owl.autoplay');
	setTip($("#services-tip"), $(this).find("h4").text(), $(this).find("img").attr("src"),  $(this).find("p").text());
	services_open = true;
});

$('#knowledge-tip').hide();
$('#services-tip').hide();
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