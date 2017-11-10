/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function($) {

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Sage = {
    'allButHome':{
      init: function() {
        // JavaScript to be fired on all pages
        //var draw = SVG('#qdu_barra_2')
        //draw.animate().move(100, 100)
         console.log("not show_intro not home");
         skipAnimation();
        //startAnimLogo();
      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      }
    },
    // All pages
    'common': {
      init: function() {
        // JavaScript to be fired on all pages
        //var draw = SVG('#qdu_barra_2')
        //draw.animate().move(100, 100)
        console.log("common");
        

      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      }
    },

    // Home page
    'home': {
      init: function() {
        console.log("home")

        var cookie_anim_logo= Cookies.get('show_intro');
        if(cookie_anim_logo!=="false" || !cookie_anim_logo  ){
          console.log("show_intro "+cookie_anim_logo);
          startAnimLogo();
        }else{
          console.log("not show_intro "+cookie_anim_logo);
         // skipAnimation();
          startAnimLogo();
        }
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    'vertical_layout':{
      init: function() {
          console.log("vertical_layout");
          testAnimIcon();
          verticalLayout_init();  
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // About us page, note the change from about-us to about_us.
    'about_us': {
      init: function() {
        // JavaScript to be fired on the about us page
      }
    },
    // About us page, note the change from about-us to about_us.
    'vertical_layout_alt': {
      init: function() {
        console.log("vertical_layout_alt");

        //.page-template-template-vertical-layout-alt navbar-brand
        //.page-template-template-vertical-layout-alt wrapper-vertical-header-inner nav
        //415
          var height = window.innerHeight;
          console.log("resizeVertical "+height);
          var marginTop= (height-315)/2
          //marginTop = marginTop-20;
          // jQuery('.page-template-template-vertical-layout-alt .navbar-brand').css("margin-top",marginTop  )
           jQuery('.page-template-template-vertical-layout-alt .wrapper-vertical-header-inner nav').css("margin-top",marginTop  )
              
      }
    }
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Sage;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    }
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
