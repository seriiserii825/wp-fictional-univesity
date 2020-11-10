<?php
function university_adjust_query( $query ) {
	if (!is_admin() && is_post_type_archive('events') && $query->is_main_query()) {
		$query->set('meta_key', 'event_date');
		$query->set( 'order_by', 'meta_value_num' );
	}
}
add_action('pre_get_posts', 'university_adjust_query');
?>
