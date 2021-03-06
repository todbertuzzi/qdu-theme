<?php

namespace Roots\Sage\Extras;

use Roots\Sage\Setup;

/**
 * Add <body> classes
 */
function body_class($classes) {
  // Add page slug if it doesn't exist
  if (is_single() || is_page() && !is_front_page()) {
    if (!in_array(basename(get_permalink()), $classes)) {
      $classes[] = basename(get_permalink());
    }
  }
  if ( !is_front_page()){
    $classes[] = 'allButHome';
  }
  if ( is_page_template('template-vertical-layout.php')  ){
    $classes[] = 'vertical-layout';
  }
  // Add class if sidebar is active
  if (Setup\display_sidebar()) {
    $classes[] = 'sidebar-primary';
  }

  return $classes;
}
add_filter('body_class', __NAMESPACE__ . '\\body_class');

/**
 * Clean up the_excerpt()
 */
function excerpt_more() {
  return ' &hellip; <a href="' . get_permalink() . '">' . __('Continued', 'sage') . '</a>';
}
add_filter('excerpt_more', __NAMESPACE__ . '\\excerpt_more');


add_filter( 'manage_corsi_posts_columns', __NAMESPACE__ . '\\set_custom_edit_corsi_columns' );

function set_custom_edit_corsi_columns( $columns ) {
  $date = $colunns['date'];
  unset( $columns['date'] );

  $columns['tipologia_corsi'] = __( 'Tipologia Corso', 'tipologia_corsi' );
  
  $columns['date'] = $date;

  return $columns;
}

add_action( 'manage_corsi_posts_custom_column' , __NAMESPACE__ . '\custom_corsi_column', 10, 2 );

function custom_corsi_column( $column, $post_id ) {
  switch ( $column ) {

    
    // display a list of the custom taxonomy terms assigned to the post 
    case 'tipologia_corsi' :
      $terms = get_the_term_list( $post_id , 'tipologia_corsi' , '' , ', ' , '' );
      echo is_string( $terms ) ? $terms : '—';
      break;

  }
}


function set_custom_corsi_sortable_columns( $columns ) {
  $columns['tipologia_corsi'] = 'tipologia_corsi';
  return $columns;
}
add_filter( 'manage_edit-corsi_sortable_columns', __NAMESPACE__ . '\\set_custom_corsi_sortable_columns' );


// TEST BEAVER TUNNEL
add_filter( 'beaver_tunnels', __NAMESPACE__ . '\\custom_beaver_tunnels_actions' );
function custom_beaver_tunnels_actions( $actions = array() ) {
    $actions[] = array(
        'title' => __( 'My Custom Actions', 'your-textdomain' ),
        'actions' => array(
            'first_action',
            'second_action',
            'third_action',
            'vertical-home-after-news',
        )
    );
    return $actions;
}   