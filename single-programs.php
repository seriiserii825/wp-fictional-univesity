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
			$page_blog_id  = 76;
			$page_blog_url = get_page_link( 76 );
			?>
			<p>
				<a class="metabox__blog-home-link" href="<?php echo $page_blog_url; ?>">
					<i class="fa fa-home" aria-hidden="true"></i> <span>Back to </span><?php echo get_the_title( $page_blog_id ); ?>
				</a>
				<span class="metabox__main"><?php the_title();?></span>
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

					<?php
					$today  = date( 'Ymd' );
					$events = new WP_Query( [
						'posts_per_page' => - 1,
						'post_type'      => 'events',
						'meta_key'       => 'event_date',
						'orderby'        => 'meta_value_num',
						'order'          => 'ASC',
						'meta_query'     => [
							[
								'key'     => 'event_date',
								'compare' => '>=',
								'value'   => $today,
								'type'    => 'numeric'
							],
							[
								'key'     => 'related_programs',
								'compare' => 'LIKE',
								'value'    => '"'.get_the_ID().'"'
							],
						]
					] ); ?>

					<?php if ( $events->have_posts() ): ?>
						<?php while ( $events->have_posts() ): ?>
							<?php $events->the_post(); ?>
                            <div class="event-summary">
                                <a class="event-summary__date t-center" href="#">
                            <span class="event-summary__month">
                                <?php
                                $eventDate = new DateTime( get_field( 'event_date' ) );
                                echo $eventDate->format( 'M' );
                                ?>
                            </span> <span class="event-summary__day">
                                <?php
                                $eventDay = new DateTime( get_field( 'event_date' ) );
                                echo $eventDay->format( 'd' );
                                ?>
                            </span> </a>
                                <div class="event-summary__content">
                                    <h5 class="event-summary__title headline headline--tiny">
                                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                    </h5>
                                    <p>
                                        <span><?php the_excerpt(); ?></span>
                                        <a href="<?php the_permalink(); ?>" class="nu gray">Learn more</a>
                                    </p>
                                </div>
                            </div>
						<?php endwhile; ?>
						<?php wp_reset_postdata(); ?>
					<?php endif; ?>

                </div>
			<?php endwhile;
			echo paginate_links();
		endif;
		?>
	</div>
<?php
get_footer();
