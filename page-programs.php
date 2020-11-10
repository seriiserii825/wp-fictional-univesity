<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
get_header();
?>

<div class="page-banner">
    <div class="page-banner__bg-image"
         style="background-image: url(<?php echo get_template_directory_uri() . '/assets//images/ocean.jpg' ?>);"></div>
    <div class="page-banner__content container container--narrow">
        <h1 class="page-banner__title">All programms</h1>
        <div class="page-banner__intro">
            <p>Something for everyone</p>
        </div>
    </div>
</div>
<div class="container container--narrow page-section">
    <ul class="link-list min-list">
		<?php
		$today  = date( 'Ymd' );
		$events = new WP_Query( [
			'posts_per_page' => - 1,
			'post_type'      => 'programs',
            'orderby' => 'title',
            'order' => 'ASC'
		] );
		if ( $events->have_posts() ) :
			while ( $events->have_posts() ) :
				$events->the_post(); ?>
                <li><a href="<?php the_permalink();?>"><?php the_title();?></a></li>
			<?php endwhile;
			echo paginate_links();
		endif;
		?>
    </ul>
</div>
<?php get_footer() ?>
