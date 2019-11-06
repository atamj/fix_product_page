<?php
/*
Plugin Name:        Fix product page
Plugin URI:         https://github.com/atamj/scroll_down_after_search
Description:        Plugin  qui permet d'atteindre les résultats de recherche directement après une recherche et reset les filtres à chaque recherche ainsi que d'ajouter un bouton reset à la page produit
Version:            1.2.0
Author:             Jaël Atam
Author URI:         portfolio.jaelatam.com
*/

class Fix_product_page
{
    public function __construct()
    {
        add_action('init', [$this, 'init']);
    }
    public function init()
    {
        wp_enqueue_script('fix_product_page', plugins_url('js/fix_product_page.js', __FILE__), false, '1.2.0', true);
    }
}
new Fix_product_page();
