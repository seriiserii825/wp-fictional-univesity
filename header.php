<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
	<?php wp_head(); ?>
</head>
<body <?php body_class();?>>
<header class="site-header">
    <div class="container">
        <h1 class="school-logo-text float-left">
            <a href="<?php echo home_url();?>"><strong>Fictional</strong> University</a>
        </h1>
        <div class="js-search-trigger site-header__search-trigger"> <i class="fa fa-search" aria-hidden="true"></i></div>
        <i class="site-header__menu-trigger fa fa-bars" aria-hidden="true"></i>
        <div class="site-header__menu group">
            <nav class="main-navigation">
                <?php wp_nav_menu( [
                	'theme_location'  => 'menu-1',
                	'menu'            => '',
                	'container'       => '',
                	'container_class' => '',
                	'container_id'    => '',
                	'menu_class'      => '',
                	'menu_id'         => '',
                	'echo'            => true,
                	'fallback_cb'     => 'wp_page_menu',
                	'before'          => '',
                	'after'           => '',
                	'link_before'     => '',
                	'link_after'      => '',
                	'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                	'depth'           => 0,
                	'walker'          => '',
                ] ); ?>

            </nav>
            <span id="search-open" class="search-trigger js-search-trigger">
                <i class="fa fa-search" aria-hidden="true"></i>
            </span>
        </div>
    </div>
</header>
