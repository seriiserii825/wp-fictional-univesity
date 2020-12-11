<footer class="site-footer">
	<div class="site-footer__inner container container--narrow">
		<div class="group">
			<div class="site-footer__col-one">
				<h1 class="school-logo-text school-logo-text--alt-color">
					<a href="#"><strong>Fictionalit</strong> University</a>
				</h1>
				<p>
					<a class="site-footer__link" href="#">555.555.5555</a>
				</p>
			</div>

			<div class="site-footer__col-two-three-group">
				<div class="site-footer__col-two">
					<h3 class="headline headline--small">Explore</h3>
					<nav class="nav-list">
						<ul>
							<li>
								<a href="<?php echo site_url('/about-us'); ?>">About Us</a>
							</li>
							<li>
								<a href="#">Programs</a>
							</li>
							<li>
								<a href="#">Events</a>
							</li>
							<li>
								<a href="#">Campuses</a>
							</li>
						</ul>
					</nav>
				</div>

				<div class="site-footer__col-three">
					<h3 class="headline headline--small">Learn</h3>
					<nav class="nav-list">
						<ul>
							<li>
								<a href="#">Legal</a>
							</li>
							<li>
								<a href="<?php echo site_url('/privacy-policy'); ?>">Privacy</a>
							</li>
							<li>
								<a href="#">Careers</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>

			<div class="site-footer__col-four">
				<h3 class="headline headline--small">Connect With Us</h3>
				<nav>
					<ul class="min-list social-icons-list group">
						<li>
							<a href="#" class="social-color-facebook">
								<i class="fa fa-facebook" aria-hidden="true"></i>
							</a>
						</li>
						<li>
							<a href="#" class="social-color-twitter">
								<i class="fa fa-twitter" aria-hidden="true"></i>
							</a>
						</li>
						<li>
							<a href="#" class="social-color-youtube">
								<i class="fa fa-youtube" aria-hidden="true"></i>
							</a>
						</li>
						<li>
							<a href="#" class="social-color-linkedin">
								<i class="fa fa-linkedin" aria-hidden="true"></i>
							</a>
						</li>
						<li>
							<a href="#" class="social-color-instagram">
								<i class="fa fa-instagram" aria-hidden="true"></i>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</footer>
<div class="search">
	<h2 class="search__title">Find your favorite post...</h2>
	<div class="search-wrap">
		<input type="text">
		<button>Search</button>
	</div>
	<ul class="search__list">
		<li class="search__list-item">
			<h3 class="search__list-title">
				<a href="#" class="search__list-link">Biology</a>
			</h3>
		</li>
		<li class="search__list-item">
			<h3 class="search__list-title">
				<a href="#" class="search__list-link">History</a>
			</h3>
		</li>
	</ul>
</div>
<?php wp_footer();?>
</body>

</html>