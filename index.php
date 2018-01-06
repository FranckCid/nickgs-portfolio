
<!DOCTYPE html5>
<html lang="pt-br">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Nícollas Gabriel - Portfolio</title>
	<link rel="stylesheet" type="text/css" href="./css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="./css/owl.carousel.min.css">
	<link rel="stylesheet" type="text/css" href="./css/fontawesome-all.min.css">
	<link rel="stylesheet" type="text/css" href="./css/style.css">
</head>
<body>

	<header id="main-header">
		<div class="background">
			<img src="./img/bg.jpg">
		</div>
		<div class="container">
			<div class="info">
				<div class="col-md-6 col-sm-6 left">
					<img src="./img/pic.jpeg">
					<h1>Nícollas Gabriel</h1>
					<p>Informação Adicional, 18 anos</p>
				</div>
				<div class="col-md-6 col-sm-6 right">					
					<div class="short">
						<div class="social">
							<a href="#" target="_blank"><i class="fab fa-github"></i></a>
							<a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
							<a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>
				</div>
			</div>
			<div class="next col-md-12">
				<a href="#showcase"><i class="fas fa-sort-down"></i></a>
			</div>
		</div>
	</header>

	<main id="showcase">
		<div class="container">
			<div class="wrapper">
				
				<div class="knowledge owl-section">
					<h1>Conhecimentos</h1>
					
					<div class="owl-carousel">
						<div>
							<img src="./img/knowledge/html5.svg">
							<h4><strong>HTML5</strong></h4>
						</div>
						<div>
							<img src="./img/knowledge/css3.svg">
							<h4><strong>CSS3</strong></h4>
						</div>
						<div>
							<img src="./img/knowledge/js.svg">
							<h4><strong>JavaScript</strong></h4>
						</div>
						<div>
							<img src="./img/knowledge/vuejs.svg">
							<h4><strong>Vue.JS</strong></h4>
						</div>
						<div>
							<img src="./img/knowledge/nodejs.svg">
							<h4><strong>Node.JS</strong></h4>
						</div>
						<div>
							<img src="./img/knowledge/jquery.svg">
							<h4><strong>JQuery</strong></h4>
						</div>
					</div>
				</div>

				<section class="tip">
					<h1>Title</h1>
					<div class="left col-md-6">
						<img src="./img/pic.jpeg">
					</div>
					<div class="right col-md-6">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>
					<div class="back" style="">
						<a href="#showcase"><i class="fas fa-sort-up"></i></a>
					</div>
				</section>

				<div class="services owl-section">
					<h1>Produções</h1>
					
					<div class="owl-carousel">
						<div>
							<img src="./img/knowledge/html5.svg">
							<h4><strong>HTML5</strong></h4>
						</div>
						<div>
							<img src="./img/knowledge/css3.svg">
							<h4><strong>CSS3</strong></h4>
						</div>
						<div>
							<img src="./img/knowledge/js.svg">
							<h4><strong>JavaScript</strong></h4>
						</div>
						<div>
							<img src="./img/knowledge/vuejs.svg">
							<h4><strong>Vue.JS</strong></h4>
						</div>
						<div>
							<img src="./img/knowledge/nodejs.svg">
							<h4><strong>Node.JS</strong></h4>
						</div>
						<div>
							<img src="./img/knowledge/jquery.svg">
							<h4><strong>JQuery</strong></h4>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</main>

	<div id="back-btn">
		<a href="#main-header"><i class="fas fa-arrow-alt-circle-up"></i></a>
	</div>
	
	<footer id="main-footer">
		<p>Copyright &copy; 2018</p>
	</footer>

	<script type="text/javascript"  src="./js/jquery-3.2.1.min.js"></script>
	<script type="text/javascript"  src="./js/bootstrap.min.js"></script>
	<script type="text/javascript" src="./js/owl.carousel.min.js"></script>
	<script type="text/javascript">
		var owl = $('.owl-carousel');
		owl.owlCarousel({
			center:true,
			loop:true,
			margin:10,
			autoplay:true,
			autoplayTimeout:2000,
			autoplayHoverPause:true,
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

		$(".tip .back i").on("click", function(){
			$(".tip").fadeOut("slow");
		});

		$(".knowledge .owl-item").on("click", function(){
			owl.trigger('to.owl.carousel', $(this).index()+1);
			$(".tip").fadeIn("slow");
		});

		$(".services .owl-item").on("click", function(){
			owl.trigger('to.owl.carousel', $(this).index()+1);
			$(".tip").fadeIn("slow");
		});

		 var $win = $(window);

		$win.scroll(function () {
			if ($win.scrollTop() == 0){
				$('#back-btn').fadeOut(500);
			}else{
				$('#back-btn').fadeIn(500);
			}
		});

		$('#back-btn').hide();

	</script>
	<script type="text/javascript">
				$('a[href*="#"]').not('[href="#"]').not('[href="#0"]')
				.click(function(event) {
					// On-page links
					if (
						location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
						&& 
						location.hostname == this.hostname
						) {
					  // Figure out element to scroll to
				  var target = $(this.hash);
				  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
					  // Does a scroll target exist?
					  if (target.length) {
						// Only prevent default if animation is actually gonna happen
						event.preventDefault();
						$('html, body').animate({
							scrollTop: target.offset().top
						}, 1000, function() {
						  // Callback after animation
						  // Must change focus!
						  var $target = $(target);
						  $target.focus();
						  if ($target.is(":focus")) { // Checking if the target was focused
							return false;
						  } else {
							$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						};
					});
					}
				}
			});
	</script>
</body>
</html>
