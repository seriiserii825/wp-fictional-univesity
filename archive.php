<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package fictional-univesity
 */
get_header();
?>
    <div class="page-banner">
        <div class="page-banner__bg-image" style="background-image: url(<?php echo get_template_directory_uri() . '/assets//images/ocean.jpg' ?>);"></div>
        <div class="page-banner__content container container--narrow">
            <h1 class="page-banner__title">
				<?php if ( is_category() ): ?>
					<?php single_cat_title(); ?>
				<?php elseif ( is_author() ): ?>
					<?php the_archive_title(); ?>
				<?php endif; ?>
            </h1>
            <div class="page-banner__intro">
                <p>Keep up with our news</p>
            </div>
        </div>
    </div>
    <div class="container container--narrow page-section">
		<?php
		if ( have_posts() ) :
			while ( have_posts() ) :
				the_post(); ?>
                <div class="post-item">
                    <h2 class="headline headline--post-title">
                        <a style="margin-bottom: 20px; display: block;" href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    </h2>
                    <div class="meta-box">Posted by <strong><?php the_author_posts_link(); ?></strong> in
                        <em style="color: darkcyan;"><?php the_time( 'd-F-Y' ); ?></em> in
                        <strong><?php echo get_the_category_list( ', ' ); ?></strong></div>
                    <div class="generic-content" style="margin-bottom: 20px;"><?php the_excerpt(); ?></div>
                    <p>
                        <a class="btn btn--blue" href="<?php the_permalink(); ?>">Continue reading</a>
                    </p>
                </div>
			<?php endwhile;
			echo paginate_links();
		endif;
		?>
    </div>
<?php
get_footer();
