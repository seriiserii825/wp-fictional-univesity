<?php
if (!defined('ABSPATH')) {
    exit;
}

function university_register_search()
{
    register_rest_route('university/v1', 'search', [
        'methods' => WP_REST_SERVER::READABLE,
        'callback' => 'universitySearchResults',
    ]);
}
add_action('rest_api_init', 'university_register_search');
function universitySearchResults($data)
{
    $university_result = [];
    $university = new WP_Query([
        'post_type' => ['post', 'page'],
        's' => sanitize_text_field($data['term']),
        'posts_per_page' => -1,
    ]);
    while ($university->have_posts()) {
        $university->the_post();
        array_push($university_result, [
            'title' => get_the_title(),
	        'permalink' => get_the_permalink()
        ]);
    }
    return $university_result;
}
