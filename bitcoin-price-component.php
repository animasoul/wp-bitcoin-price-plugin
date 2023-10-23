<?php
/**
 * Plugin Name:       Bitcoin Price Component
 * Description:       A simple plugin to display the current price of Bitcoin.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.2.0
 * Author:            Abel Rogers
 * Author URI:		  https://www.ajpartnersltd.com.com
 * Plugin URI:        https://www.ajpartnersltd.com.com
 * GitHub Plugin URI: https://github.com/animasoul/wp-bitcoin-price-plugin
 * GitHub Branch:     main
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       bitcoin-price-component
 * Keywords:          bitcoin, price, component
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function bitcoin_price_component_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'bitcoin_price_component_block_init' );
