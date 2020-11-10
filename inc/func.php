<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
function get_short_text_clear( $content, $count ) {
	$short_text = $content;
	return mb_substr( $short_text, 0, $count );
}
function get_short_text( $content, $count ) {
	$short_text    = $content;
	$text_ro       = '{:ro}';
	$text_ru       = '{:ru}';
	$text_en       = '{:en}';
	$pos_ro        = strpos( $short_text, $text_ro ) + 5;
	$pos_ru        = strpos( $short_text, $text_ru ) + 5;
	$pos_en        = strpos( $short_text, $text_en ) + 5;
	$short_text_ro = mb_substr( $short_text, $pos_ro, $count );
	$short_text_ru = mb_substr( $short_text, $pos_ru, $count );
	$short_text_en = mb_substr( $short_text, $pos_en, $count );
	if ( get_lang() === '_ro' ) {
		$short_text = $short_text_ro;
	} elseif ( get_lang() === '_ru' ) {
		$short_text = $short_text_ru;
	} else {
		$short_text = $short_text_en;
	}
	$short_text = str_replace( [ '<strong>', '</strong>' ], '', $short_text );
	return $short_text;
}
function getThePostThumbSrc( $width, $height ) {
	$id = get_the_ID();
	return kama_thumb_src( 'w=' . $width . ' &h=' . $height . ' &post_id=' . $id . '' );
}
function clear_phone( $phone ) {
	return str_replace( [ '(', ')', '-', '+', ' ' ], '', $phone );
}
function vardump( $var ) {
	echo '<pre>';
	var_dump( $var );
	echo '</pre>';
}
add_filter( 'big_image_size_threshold', '__return_zero' );
function carbon_lang() {
	$suffix = '';
	if ( ! defined( 'ICL_LANGUAGE_CODE' ) ) {
		return $suffix;
	}
	$suffix = '_' . ICL_LANGUAGE_CODE;
	return $suffix;
}
function trim_content( $content, $count ) {
	$trimmed_content = wp_trim_words( $content, $count, '<a href="' . get_permalink() . '"></a>' );
	return $trimmed_content;
}
function get_lang() {
	$suffix = '';
	if ( get_locale() == 'en_US' ) {
		$suffix = '_en';
	}
	if ( get_locale() == 'ru_RU' ) {
		$suffix = '_ru';
	}
	if ( get_locale() == 'ro_RO' ) {
		$suffix = '_ro';
	}
	if ( get_locale() == 'it_IT' ) {
		$suffix = '_it';
	}
	if ( get_locale() == 'de_DE' ) {
		$suffix = '_de';
	}
	return strtolower( $suffix );
}
function my_revisions_to_keep( $revisions ) {
	return 3;
}
add_filter( 'wp_revisions_to_keep', 'my_revisions_to_keep' );
function formatAttributes() {
	global $product;
	$formatted_attributes = array();
	$attributes           = $product->get_attributes();
	foreach ( $attributes as $attr => $attr_deets ) {
		$attribute_label = wc_attribute_label( $attr );
		if ( isset( $attributes[ $attr ] ) || isset( $attributes[ 'pa_' . $attr ] ) ) {
			$attribute = isset( $attributes[ $attr ] ) ? $attributes[ $attr ] : $attributes[ 'pa_' . $attr ];
			if ( $attribute['is_taxonomy'] ) {
				$formatted_attributes[ $attribute_label ] = implode( ', ', wc_get_product_terms( $product->id, $attribute['name'], array( 'fields' => 'names' ) ) );
			} else {
				$formatted_attributes[ $attribute_label ] = $attribute['value'];
			}
		}
	}
	return $formatted_attributes;
}

function acf_field ($field) {
	return get_field( $field ) ? get_field( $field ) : '';
}

function convertToMB($file_id){
	$file_bytes = filesize( get_attached_file( $file_id ) );
	$file_mb = $file_bytes * 0.00000095367432;
	return number_format( $file_mb, 1, '.', '' ).' Mb';
}
function get_full_lang() {
	$text = '';
	if ( get_locale() == 'en_US' ) {
		$text = 'English Language';
	}
	if ( get_locale() == 'ru_RU' ) {
		$text = 'Русский Язык';
	}
	if ( get_locale() == 'ro_RO' ) {
		$text = '_ro';
	}
	if ( get_locale() == 'it_IT' ) {
		$text = 'Lingua Italiana';
	}
	if ( get_locale() == 'de_DE' ) {
		$text = 'Deutsche Sprache';
	}
	return $text;
}
//add_filter( 'show_admin_bar', '__return_false' );