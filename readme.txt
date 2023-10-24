=== Bitcoin Price Component ===
Contributors:      Abel Rogers
Tags:              block, bitcoin, cryptocurrency, rate, component, price
Tested up to:      6.1
Stable tag:        0.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

A dynamic block that displays current Bitcoin prices in USD, GBP, and EUR.

== Description ==

The **Bitcoin Price Component** is a dynamic WordPress block that fetches and displays the current price of Bitcoin in three major currencies: USD, GBP, and EUR. The component is able to indicate if the price has increased, decreased, or remained unchanged since the last update.

The block is highly customizable to include/exclude virtually all elements with font sizes, colors and much more adjustable.

For a live demo, visit [this link](https://www.ajpartnersltd.com/react-component-and-wordpress-plugin-in-action/).

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/bitcoin-price-component` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress.
3. Once activated, you can add the Bitcoin Price Component block to your posts or pages.

== Frequently Asked Questions ==

= How frequently does the component update the Bitcoin prices? =

The component fetches the latest Bitcoin prices each time the page is loaded. For real-time updates, there is also a "refresh" button included for users' to see the latest.

= Does the component support other cryptocurrencies? =

Currently, the Bitcoin Price Component only supports Bitcoin. Future updates might introduce support for additional cryptocurrencies.

= Where does the Bitcoin exchange data come from? =

The data is retrieved from Coindesk API https://api.coindesk.com/v1/bpi/currentprice.json

= Can multiple blocks be placed on a single page/post? = 

Absolutely yes! Each time the refresh button is pressed, all instances will be updated simultaneously.

== Screenshots ==

1. A screenshot showing the Bitcoin Price Component in a post with the current price of Bitcoin in USD, GBP, and EUR. 
2. A screenshot showing the backend interface where users can add the Bitcoin Price Component to their posts or pages.

== Changelog ==

= 0.1.0 =
* Initial release with support for USD, GBP, and EUR.

== Credits ==

This plugin was developed by [Abel Rogers](https://www.ajpartnersltd.com/). Special thanks to The WordPress Contributors for their invaluable input.
