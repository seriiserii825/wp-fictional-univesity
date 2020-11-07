<?php
get_header();
?>
    <div class="page-banner">
        <div class="page-banner__bg-image" style="background-image: url(<?php echo get_template_directory_uri() . '/assets//images/ocean.jpg' ?>);"></div>
        <div class="page-banner__content container container--narrow">
            <h1 class="page-banner__title"><?php the_title(); ?></h1>
            <div class="page-banner__intro">
                <p>Dont forget to change text</p>
            </div>
        </div>
    </div>
    <div class="container container--narrow page-section">
        <div class="metabox metabox--position-up metabox--with-home-link">
			<?php
			$page_blog_id  = 90;
			$page_blog_url = get_page_link( 90 );
			?>
            <p>
                <a class="metabox__blog-home-link" href="<?php echo $page_blog_url; ?>">
                    <i class="fa fa-home" aria-hidden="true"></i><span>Back to</span><?php echo get_the_title( $page_blog_id ); ?>
                </a>
                <span class="metabox__main">Posted by <strong><?php the_author_posts_link(); ?></strong> in <em style="color: darkcyan;"><?php the_time( 'd-F-Y' ); ?></em> in <strong><?php echo get_the_category_list( ', ' ); ?></strong></span>
            </p>
        </div>
		<?php
		if ( have_posts() ) :
			while ( have_posts() ) :
				the_post(); ?>
                <div class="post-item">
                    <h2 class="headline headline--post-title">
                        <a style="margin-bottom: 20px; display: block;" href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    </h2>
                    <div class="meta-box">Posted by <strong><?php the_author(); ?></strong> in
                        <em style="color: darkcyan;"><?php the_time( 'd-F-Y' ); ?></em> <span>in</span>
                        <strong><?php echo get_the_category_list( ', ' ); ?></strong></div>
                    <div class="generic-content" style="margin-bottom: 20px;"><?php the_excerpt(); ?></div>
                    <p>
                        <a class="btn btn--blue" href="<?php the_permalink(); ?>">Continue reading </a>
                    </p>
                </div>
			<?php endwhile;
			echo paginate_links();
		endif;
		?>
    </div>
<?php
get_footer();
