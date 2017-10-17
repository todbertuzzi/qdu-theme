<?php
  // For use with Sagextras (https://github.com/storm2k/sagextras)
?>

<header class="banner" role="banner">
 <a class="navbar-brand" href="<?= esc_url(home_url('/')); ?>"><?php bloginfo('name'); ?></a>      
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler hidden-md-up" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        &#9776;
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
          <a class="shiftnav-toggle shiftnav-toggle-button" data-shiftnav-target="shiftnav-main"><i class="fa fa-bars"></i>Menu</a>
          <?php get_search_form(true); ?>
          <?php
          if (has_nav_menu('primary_navigation')) :
            wp_nav_menu(['theme_location' => 'primary_navigation', 'walker' => new wp_bootstrap_navwalker(), 'menu_class' => 'pull-md-right nav navbar-nav']);
          endif;
          ?>
      </div>
    </nav>
</header>