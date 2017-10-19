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
    // All pages
    'common': {
      init: function() {
        // JavaScript to be fired on all pages
        //var draw = SVG('#qdu_barra_2')
        //draw.animate().move(100, 100)
      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      }
    },
    // Home page
    'home': {
      init: function() {
        // JavaScript to be fired on the home page
        
       // qdu_university_logo.animate(500, '>', 400).attr({ opacity: '1' })
        //var s = Snap("#shape");
/*
        var qdu_quasar_logo = SVG.get('qdu_quasar_svg')
        qdu_quasar_logo.style('opacity', '0') 
        qdu_quasar_logo.animate(1000, '>', 0).style('opacity', '1') 

        var qdu_barra_1_logo = SVG.get('qdu_barra_1');
        // qdu_design_logo.style('opacity', '0') 
        var w_barra_1= qdu_barra_1_logo.width();
        qdu_barra_1_logo.width(0) 
        qdu_barra_1_logo.animate(200, '>', 500).width(w_barra_1) ;
       

        var qdu_design_logo = SVG.get('qdu_design_svg')
        qdu_design_logo.style('opacity', '0') 
        qdu_design_logo.animate(1000, '>', 300).style('opacity', '1')

       
        var qdu_barra_2_logo = SVG.get('qdu_barra_2');
        // qdu_design_logo.style('opacity', '0') 
        var w_barra_2= qdu_barra_2_logo.width();
        qdu_barra_2_logo.width(0) 
        qdu_barra_2_logo.animate(200, '>', 1000).width(w_barra_2) ;


        var qdu_university_logo = SVG.get('qdu_university_svg')
        qdu_university_logo.style('opacity', '0') 
        qdu_university_logo.animate(1000, '>', 600).style('opacity', '1')  

        var qdu_q_logo = SVG.get('qdu_q')
        //qdu_q_logo.attr('stroke-dasharray', 1000)
        //qdu_q_logo.attr('stroke-dashoffset', 1000)
        //qdu_q_logo.attr('fill', '#ffffff')
        //qdu_q_logo.attr('stroke', '#0095D5')
        qdu_q_logo.animate(3000, '<', 1600).attr('stroke-dashoffset', 0). animate(500, '>', 0).attr('fill', '#ffffff') 

        var  qdu_barra_q_logo = SVG.get('qdu_barra_q');
        var w_barra_q= qdu_barra_q_logo.width();
        qdu_barra_q_logo.width(0) 
        qdu_barra_q_logo.animate(200, '>', 3000).width(w_barra_q) ;
        
        
        var altezza = $(".home").height();
 */       
        shapeEl = $('div.morph-shape');


        // RESET OPACITY LOGO
        var qdu_quasar_logo =  new Snap('#qdu_quasar_svg')
         qdu_quasar_logo.attr({
          opacity: 0
        }); 
         var qdu_design_logo =  new Snap('#qdu_design_svg')
         qdu_design_logo.attr({
          opacity: 0
        }); 
         var qdu_university_logo =  new Snap('#qdu_university_svg')
         qdu_university_logo.attr({
          opacity: 0
        });
        // RESET BARRE WIDTH
        var qdu_barra_1_logo = new Snap('#qdu_barra_1');
        var w_barra_1=  qdu_barra_1_logo.attr( 'width' )
        qdu_barra_1_logo.attr({
          width: 0
        });         
        var qdu_barra_2_logo = new Snap('#qdu_barra_2');
        var w_barra_2=  qdu_barra_2_logo.attr( 'width' )
        qdu_barra_2_logo.attr({
          width: 0
        }); 
        // RESET BARRA SOTTO Q
        var qdu_barra_q_logo = new Snap('#qdu_barra_q');
        var w_barra_q=  qdu_barra_q_logo.attr( 'width' )
        qdu_barra_q_logo.transform( 'r180' ); 
        qdu_barra_q_logo.attr({
          width: 0
        });  
        

        // COMPARSA SCRITTE
        setTimeout(function () {
          qdu_quasar_logo.animate({ "opacity" : 1 }, 500, mina.easeout );
        }, 100);
        setTimeout(function () {
          qdu_design_logo.animate({ "opacity" : 1 }, 500, mina.easeout );
        }, 400);
        setTimeout(function () {
          qdu_university_logo.animate({ "opacity" : 1 }, 500, mina.easeout );
        }, 700);
        
        // ANIMAZIONI BARRE
        setTimeout(function () {
           qdu_barra_1_logo.animate({ width : w_barra_1 }, 500, mina.easeinout );       
        }, 1200);
        setTimeout(function () {
          qdu_barra_2_logo.animate({ width : w_barra_2 }, 500, mina.easeinout );
        }, 1200);
        
        // DRAWING Q LOGO
        var qdu_q_logo = new Snap('#qdu_q');
        qdu_q_logo.animate({ "stroke-dashoffset" : 0 }, 2000, mina.easeout );
        // CAMBIO COLORE Q
        setTimeout(function () {
          qdu_q_logo.animate({ "fill" : "#ffffff" }, 500, mina.easeinout );
        }, 1400);
        // ANIMAZIONE BARRA Q
        setTimeout(function () {
          qdu_barra_q_logo.animate({ width : w_barra_q }, 500, mina.easeinout );
        }, 1200);
        
        // ANIMAZIONE MASCHERA CONTENUTI
        //var s = Snap( shapeEl.querySelector( 'svg' ) );
        var s = new Snap('div.morph-shape svg')
        var pathEl = s.select( 'path' );
        //console.log("shapeEl "+shapeEl);
        var morph_1 = shapeEl.attr( 'data-morph-1' )
        var morph_2 = shapeEl.attr( 'data-morph-2' )
        var morph_3 = shapeEl.attr( 'data-morph-3' )
        //console.log("pathEl "+pathEl);
        //console.log("pathOpen "+pathOpen);
        var pathReset = pathEl.attr( 'd' );
        
       // s.transform( 'r180' ); 


        setTimeout(function () {
          pathEl.animate({ d:morph_1 }, 500, mina.easeinout, fase_2);
        }, 1800);

        function fase_2(){
          pathEl.animate({ d:morph_2 }, 800, mina.easeout,nascondoSvg);
          console.log("fase_2")
        }
        function fase_3(){
            //pathEl.animate({ d:morph_3 }, 500, mina.easeout,nascondoSvg);
            console.log("fase_3")
        }
        function nascondoSvg(){
                  $('div.morph-shape').hide();
        }
/*
        pathEl.stop().animate( { 'path' : pathOpen }, 320, mina.easeinout, function() {
          pathEl.stop().animate( { 'path' : pathReset }, 1000, mina.elastic );
        } );
       

        $('#wrapperMask').css({
            'transform-origin': 'center top',
            '-webkit-transform-origin': 'center bottom'
        });

        $( "#wrapperMask" ).stop(true, true).delay(1000).animate({
          //left: "+=50",
          top: - (altezza+100)
        }, 3000,"linear", function() {
         console.log("daie");
        });
 */       
         
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
