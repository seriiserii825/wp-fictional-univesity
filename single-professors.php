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
			$page_blog_id  = 74;
			$page_blog_url = get_page_link( 74 );
			?>
            <p>
                <a class="metabox__blog-home-link" href="<?php echo $page_blog_url; ?>">
                    <i class="fa fa-home" aria-hidden="true"></i>
                    <span>Back to </span><?php echo get_the_title( $page_blog_id ); ?>
                </a> <span class="metabox__main"><?php the_title(); ?></span>
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
                    <div style="margin-bottom: 40px" class="meta-box">Posted by
                        <strong><?php the_author(); ?></strong> in
                        <em style="color: darkcyan;"><?php the_time( 'd-F-Y' ); ?></em> <span>in</span>
                        <strong><?php echo get_the_category_list( ', ' ); ?></strong></div>
                    <div class="generic-content" style="margin-bottom: 20px;"><?php the_content(); ?></div>

                    <hr class="section-break">

					<?php $related_programs = get_field( 'related_programs' ); ?>
					<?php if ( $related_programs ): ?>
                        <h2 class="headline headline--medium">Subjects Taught</h2>
                        <ul class="link-list min-list">
							<?php foreach ( $related_programs as $program ): ?>
                                <li>
                                    <a href="<?php echo get_the_permalink( $program ); ?>">
                                        <h3><?php echo get_the_title( $program ); ?></h3>
                                    </a>
                                </li>
							<?php endforeach; ?>
                        </ul>
					<?php endif; ?>
                </div>
			<?php endwhile;
			echo paginate_links();
		endif;
		?>
    </div>
<?php
get_footer();
