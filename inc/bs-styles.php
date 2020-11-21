<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
function bs_fictional_scripts()
{
    wp_enqueue_style('bs-fictional-google-fonts', '//fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
    wp_enqueue_style('bs-fictional-font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
    wp_enqueue_style('bs-fictional-style', get_stylesheet_uri(), array(), _S_VERSION);
    wp_enqueue_style('bs-fictional-my', get_template_directory_uri() . '/assets/css/my.css');

    wp_enqueue_script('bs-fictional-webpack-js', get_template_directory_uri() . '/assets/js/dist/webpack.js', [], null, true);
}
add_action('wp_enqueue_scripts', 'bs_fictional_scripts');