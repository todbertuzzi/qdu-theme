function skipAnimation(){shapeEl=jQuery("div.morph-shape"),shapeEl.hide(),new Snap("#qdu_q").attr({"stroke-dashoffset":0,fill:"#ffffff"}),jQuery(".navbar-brand svg").css("visibility","visible")}function startAnimLogo(){function a(){f.animate({d:c},800,mina.easeout,t),console.log("fase_2")}function t(){jQuery("div.morph-shape").hide(),Cookies.set("show_intro","false",{expires:600})}jQuery(".home").height();shapeEl=jQuery("div.morph-shape"),jQuery(shapeEl).css("visibility","hidden");var i=new Snap("#qdu_quasar_svg");i.attr({opacity:0});var e=new Snap("#qdu_design_svg");e.attr({opacity:0});var n=new Snap("#qdu_university_svg");n.attr({opacity:0});var s=new Snap("#qdu_barra_1"),o=s.attr("width");s.attr({width:0});var r=new Snap("#qdu_barra_2"),u=r.attr("width");r.attr({width:0});var h=new Snap("#qdu_barra_q"),m=h.attr("width");h.transform("r180"),h.attr({width:0}),jQuery(shapeEl).css("visibility","visible"),jQuery(".navbar-brand svg").show(),jQuery(".navbar-brand svg").css("visibility","visible"),setTimeout(function(){i.animate({opacity:1},500,mina.easeout)},100),setTimeout(function(){e.animate({opacity:1},500,mina.easeout)},400),setTimeout(function(){n.animate({opacity:1},500,mina.easeout)},700),setTimeout(function(){s.animate({width:o},500,mina.easeinout)},1200),setTimeout(function(){r.animate({width:u},500,mina.easeinout)},1200);var d=new Snap("#qdu_q");d.animate({"stroke-dashoffset":0},2e3,mina.easeout),setTimeout(function(){d.animate({fill:"#ffffff"},500,mina.easeinout)},1400),setTimeout(function(){h.animate({width:m},500,mina.easeinout)},1200);var p=new Snap("div.morph-shape svg"),f=p.select("path"),v=shapeEl.attr("data-morph-1"),c=shapeEl.attr("data-morph-2");shapeEl.attr("data-morph-3"),f.attr("d");setTimeout(function(){f.animate({d:v},500,mina.easeinout,a)},1800)}
//# sourceMappingURL=anim_logo.js.map