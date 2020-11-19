<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
function universityRegistrySearch() {
	register_rest_route( 'university/v1', 'search', [
		'methods'  => WP_REST_Server::READABLE,
		'callback' => 'university_search_results'
	] );
}
add_action( 'rest_api_init', 'universityRegistrySearch' );
function university_search_results($data) {
	$mainQuery = new WP_Query([
		'post_type' => [ 'professors', 'post', 'page', 'programs', 'event'],
		's' => sanitize_text_field( $data['term'])
	]);

	$results = [
		'generalInfo' => [],
		'professors' => [],
		'programs' => [],
		'events' => [],
		'campuses' => []
	];

	while($mainQuery->have_posts()) {
		$mainQuery-> the_post();

		if(get_post_type() === 'post' || get_post_type() === 'page'){
			array_push( $results['generalInfo'], [
				'title'     => get_the_title(),
				'permalink' => get_the_permalink()
			] );
		}
		if ( get_post_type() === 'professors') {
			array_push( $results['professors'], [
				'title'     => get_the_title(),
				'permalink' => get_the_permalink()
			] );
		}
		if ( get_post_type() === 'programs' ) {
			array_push( $results['programs'], [
				'title'     => get_the_title(),
				'permalink' => get_the_permalink()
			] );
		}
		if ( get_post_type() === 'events' ) {
			array_push( $results['events'], [
				'title'     => get_the_title(),
				'permalink' => get_the_permalink()
			] );
		}
	}
	return $results;
}
