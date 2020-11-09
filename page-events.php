<?php
/**
 * Template Name: Events
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
get_header();
?>

<div class="page-banner">
    <div class="page-banner__bg-image"
         style="background-image: url(<?php echo get_template_directory_uri() . '/assets//images/ocean.jpg' ?>);"></div>
    <div class="page-banner__content container container--narrow">
        <h1 class="page-banner__title">All events</h1>
        <div class="page-banner__intro">
            <p>See what it's going on in our world...</p>
        </div>
    </div>
</div>
<div class="container container--narrow page-section">
	<?php
	$events = new WP_Query( [ 'post_type' => 'events', 'posts_per_page' => - 1 ] );
	if ( $events->have_posts() ) :
		while ( $events->have_posts() ) :
			$events->the_post(); ?>
            <div class="event-summary">
                <a class="event-summary__date t-center" href="#">
                    <span class="event-summary__month"><?php the_time( 'M' ); ?></span>
                    <span class="event-summary__day"><?php the_time( 'd' ); ?></span> </a>
                <div class="event-summary__content">
                    <h5 class="event-summary__title headline headline--tiny">
                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    </h5>
                    <p>
                        <span><?php echo wp_trim_words( get_the_content(), 20 ); ?></span>
                        <a href="<?php the_permalink(); ?>" class="nu gray">Learn more</a>
                    </p>
                </div>
            </div>
		<?php endwhile;
		echo paginate_links();
	endif;
	?>
</div>
<?php get_footer() ?>
