<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
function universityRegistrySearch() {
	register_rest_route( 'university/v1', 'search', [
		'methods'  => WP_REST_Server::READABLE,
		'callback' => 'university_search_resaults'
	] );
}
add_action( 'rest_api_init', 'universityRegistrySearch' );
function university_search_resaults() {
	return 'Congratulations, you created a route';
}
