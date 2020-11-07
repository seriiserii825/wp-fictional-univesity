<?php
get_header();
?>
<div class="page-banner">
    <div class="page-banner__bg-image"
         style="background-image: url(<?php echo get_template_directory_uri() . '/assets//images/ocean.jpg' ?>);"></div>
    <div class="page-banner__content container container--narrow">
        <h1 class="page-banner__title"><?php the_title(); ?></h1>
        <div class="page-banner__intro">
            <p>Dont forget to change text</p>
        </div>
    </div>
</div>

<main id="primary" class="site-main">
	<?php while ( have_posts() ) : the_post(); ?>
        <div class="container container--narrow page-section">
			<?php
			$page_id         = get_the_ID();
			$page_parrent_id = wp_get_post_parent_id( $page_id );
			?>
			<?php if ( $page_parrent_id !== 0 ): ?>
                <div class="metabox metabox--position-up metabox--with-home-link">
                    <p>
                        <a class="metabox__blog-home-link" href="<?php echo get_page_link( $page_parrent_id ); ?>">
                            <i class="fa fa-home" aria-hidden="true">
                            </i>
                            Back to
							<?php echo get_the_title( $page_parrent_id ); ?>
                        </a>
                        <span class="metabox__main"><?php the_title(); ?></span>
                    </p>
                </div>
			<?php endif; ?>

			<?php
			$testArray = get_pages( [
				'child_of' => $page_id
			] );
			if ( $page_parrent_id || $testArray ): ?>
                <div class="page-links">
                    <h2 class="page-links__title">
                        <a href="<?php echo get_the_permalink( $page_parrent_id ) ?>"><?php echo get_the_title( $page_parrent_id ); ?></a>
                    </h2>
                    <ul class="min-list">
						<?php $childOf = null; ?>
						<?php if ( $page_parrent_id ): ?>
							<?php $childOf = $page_parrent_id; ?>
						<?php else: ?>
							<?php $childOf = $page_id; ?>
						<?php endif; ?>

						<?php wp_list_pages( [
							'title_li' => null,
							'child_of' => $childOf,
                            'sort_column' => 'menu_order'
						] ); ?>
                    </ul>
                </div>
			<?php endif; ?>

            <div class="generic-content">
				<?php the_content(); ?>
            </div>
        </div>

	<?php endwhile; // End of the loop. ?>
</main><!-- #main -->
<?php
get_footer();
?>

