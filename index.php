<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1">
	<title>Nícollas Gabriel - Portfolio</title>
	<link rel="stylesheet" type="text/css" href="./css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="./css/owl.carousel.min.css">
	<link rel="stylesheet" type="text/css" href="./css/fontawesome-all.min.css">
	<link rel="stylesheet" type="text/css" href="./css/style.css">
	<!-- <link rel="stylesheet" type="text/css" href="./css/portfolio.min.css"> -->
</head>
<body>
	<header id="main-header" class="sec">
		<div class="background">
			<img src="./img/bg.jpg">
		</div>
		<div class="container">
			<div class="info">
				<div class="col-md-6 col-sm-6 left">
					<div class="short">
						<img src="./img/pic.jpg">
						<h1>Nícollas Gabriel</h1>
						<p>Inglês avançado, 18 anos</p>
					</div>
				</div>
				<div class="col-md-6 col-sm-6 right">					
					<div class="short">
						<div class="social">
							<a href="#" target="_blank"><i class="fab fa-github"></i></a>
							<a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
							<a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
						</p>
					</div>
				</div>
			</div>
			<div class="next col-md-12" onclick="$.scrollify.move('#2');">
				<i class="fas fa-sort-down"></i>
			</div>
		</div>
	</header>

	<main id="showcase" class="sec">
		<div class="container">
			<div class="wrapper">

				<div class="knowledge owl-section">
					<h1>Conhecimentos</h1>

					<div class="owl-carousel" id="knowledge-carousel">
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

				<section class="tip" id="knowledge-tip">
					<h1>Title</h1>
					<div class="left col-md-6">
						<img src="">
					</div>
					<div class="right col-md-6">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
					<div class="back" style="">
						<a href="#knowledge-carousel"><i class="fas fa-sort-up"></i></a>
					</div>
				</section>

				<div class="services owl-section">
					<h1>Produções</h1>

					<div class="owl-carousel" id="services-carousel">
						<div>
							<img src="./img/services/tivit.svg">
							<h4><strong>TIVIT</strong></h4>
						</div>
						<div>
							<img src="./img/services/senai.svg">
							<h4><strong>SENAI</strong></h4>
						</div>
						<div>
							<img src="./img/services/spacex.svg">
							<h4><strong>SpaceX</strong></h4>
						</div>
						<div>
							<img src="./img/services/atari.svg">
							<h4><strong>Atari</strong></h4>
						</div>
					</div>
				</div>

				<section class="tip" id="services-tip">
					<h1>Title</h1>
					<div class="left col-md-6">
						<img src="">
					</div>
					<div class="right col-md-6">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
					<div class="back" style="">
						<a href="#services-carousel"><i class="fas fa-sort-up"></i></a>
					</div>
				</section>

			</div>
		</div>
	</main>

	<script type="text/javascript"  src="./js/jquery-3.2.1.min.js"></script>
	<script type="text/javascript"  src="./js/bootstrap.min.js"></script>
	<script type="text/javascript" src="./js/owl.carousel.min.js"></script>
	<script type="text/javascript" src="./js/jquery.scrollify.js"></script>
	<script type="text/javascript" src="./js/script.js"></script>
</body>
</html>
