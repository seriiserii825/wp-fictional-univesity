<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'init', 'my_custom_init' );
function my_custom_init() {
	register_post_type( 'events', array(
		'labels'             => array(
			'name'              => 'Events', // Основное название типа записи
			'singular_name'     => 'Events', // отдельное название записи типа Book
			'add_new'           => __( 'Add new' ),
			'add_new_item'      => __( 'Add new' ),
			'edit_item'         => __( 'Edit new' ),
			'new_item'          => __( 'New item' ),
			'view_item'         => __( 'View' ),
			'search_items'      => __( 'Search' ),
			'parent_item_colon' => '',
			'menu_name'         => 'All Events'
		),
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => true,
		'capability_type'    => 'post',
		'has_archive'        => false,
		'show_in_rest' => true,
		'hierarchical'       => false,
		'menu_position'      => null,
		'menu_icon'          => 'dashicons-calendar-alt',
		'supports'           => array( 'title', 'editor', 'thumbnail', 'excerpt' )
	) );
}