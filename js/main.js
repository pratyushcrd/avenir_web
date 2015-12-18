var rnum = Math.floor((Math.random() * 7) + 1);
var fakestrk = "spinner"+rnum;
$("#fakeloader").fakeLoader({
timeToHide:1000, //Time in milliseconds for fakeLoader disappear
zIndex:"99999999",//Default zIndex
spinner:fakestrk,//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
bgColor:"#0e0f0e", //Hex, RGB or RGBA colors //If you want can you insert your custom image
});



function checkVisible( elm, eval ) {
    eval = eval || "visible";
    var vpH = $(window).height(), // Viewport Height
        st = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();
    
    if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
    if (eval == "above") return ((y < (vpH + st)));
}

var SCROLL_TIME = 15; // seconds to scroll through
 
$(document).ready(function () {
    var scrollingContent = function() {
        console.log("Scrolling background");
        $('.top_full_content').css('background-position-y', 0);
        $('.top_full_content').animate({
            'background-position-y': 1 * (3000 - ($(this).height()/2) - 170) * $(window).width() / 1300
        }, SCROLL_TIME * 1000, 'linear', scrollingContent);
    };
 
    scrollingContent();
});

var SCROLL_TIME2 = 75; // seconds to scroll through
 
$(document).ready(function () {
    var scrollingContent = function() {
        console.log("Scrolling background");
        $('.top_full_parallex').css('background-position-y', 0);
        $('.top_full_parallex').animate({
            'background-position-y': -1 * (3000 - ($(this).height()/2) - 170) * $(window).width() / 1300
        }, SCROLL_TIME2 * 1000, 'linear', scrollingContent);
    };
 
    scrollingContent();
});



function cproganim(){

	var prog2entry = 100
	var prog1entry = 1;
	var animcompleteprog = true;

		
		var progInterf = setInterval(function(){
			if(prog1entry==35)
			$(".prog1 span").text(prog1entry+"+ Events");
			else
			$(".prog1 span").text(prog1entry+" Events");
			
			if(prog1entry>34)
				clearInterval(progInterf);
			prog1entry+=1;
			},100);
			
$('.prog1').circleProgress({
value: 1,
animation: {
  duration: 4500,
  easing: 'circleProgressEasing'
},
size: 70,
fill: {
  gradient: ['#3aeabb', '#fdd250'] },
});
	
		
		var progInterf2 = setInterval(function(){
			if(prog2entry==400)
			$(".prog2 span").html(prog2entry+"k+ Cash Prizes");
			else
			$(".prog2 span").html(prog2entry+"k Cash Prizes");
			
			if(prog2entry>399)
				clearInterval(progInterf2);
			prog2entry+=1;
			},0.0001);
$('.prog2').circleProgress({
value: 1,
animation: {
  duration: 4500,
  easing: 'circleProgressEasing'
},
size: 70,
fill: {
  gradient: ['#fdd250','#3aeabb'] },
});

}
var cpanimdo = true;


$(window).scroll(function(){
	
	if (cpanimdo&&checkVisible($('.progdis'))){
		cproganim();
		cpanimdo = false;
	}
	
});
$(document).ready(function(){
	
	if (cpanimdo&&checkVisible($('.progdis'))){
		cproganim();
		cpanimdo = false;
	}
	
});
	
	 
	 
	 $(window).click(function(){
		 $('#panel').css('left','-420px')});
		 
	 $('.avcross').click(function(){
		 $('#panel').css('left','-420px')});
		 
	 $('.avmenu').click(function(e){
		 $('#panel').css('left','0px');
		 e.stopPropagation();});
		 
		 $('#panel').click(function(e){
			e.stopPropagation(); 
			 });
			 
			 



$("#morph1").Morphext({
    animation: "fadeInDown",
    separator: "#",
    speed: 6000
});

$("#morph2").Morphext({
    animation: "fadeInLeft",
    separator: "#",
    speed: 6000
});



$('#starfield').html('').starscroll(8,5,9,5,2,[255,255,255],true,true,'8-bit');

setTimeout(function(){
$('#starfield').html('').starscroll(16,5,9,5,2,[255,255,255],false,false,'manual');},13000);



		

$('#starfield').css('background','#252623');
$('#starfield').css('z-index','-4');


var map = new GMaps({
  div: '#map',
  lat: 22.4761817,
  lng: 88.414813
});

map.addMarker({
  lat: 22.4761817,
  lng: 88.414813,
  title: 'NSEC',
  infoWindow: {
  content: 'NSEC Kolkata!!'},
  click: function(e) {
  }
});

map.drawRoute({
  origin: [ 22.4761817 , 88.414813],
  destination: [ 22.584158,88.341237],
  travelMode: 'driving',
  strokeColor: '#131540',
  strokeOpacity: 0.6,
  strokeWeight: 6
});
$('body').show();



$('.fb').load("https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoenix.avenir.2015&width=40&layout=button_count&action=like&show_faces=true&share=true&height=21");





(function( $ ){

				/*
				* Lazy Line Painter
				* SVG Stroke animation.
				*
				* https://github.com/camoconnell/lazy-line-painter
				*
				* Copyright 2014
				* Cam O'Connell - http://www.camoconnell.com  http://www.behance.net/camoconnell
				* Released under the MIT license
				*
				*/

				// goto http://lazylinepainter.info to convert your svg into a svgData object.
				var svgData = {
					"lazyd" :
					{
						"strokepath" : [
            {
                "path": "M18.578,42.235H2.234v-5.273h5.799V26.419h5.273V15.874h5.271V5.329   h21.089v31.633h5.273v5.274l0,0H34.395V26.419H23.85v5.272h-5.272V42.235 M34.395,21.146V10.602h-5.272v5.272H23.85v5.272    M23.85,21.146h10.545",
                "duration": 2050
            },
            {
                "path": "M81.791,21.146L81.791,21.146h-5.272v5.272h-5.272v10.544h-5.272   v5.273H49.631v-5.273h-4.745",
                "duration": 450
            },
            {
                "path": "M76.518,15.874h5.272l0.001,5.272",
                "duration": 450
            },
            {
                "path": "M71.246,21.146h5.272v-5.272",
                "duration": 450
            },
            {
                "path": "M65.974,26.419h-5.272V15.874h10.544v5.272",
                "duration": 450
            },
            {
                "path": "M55.43,36.962h10.544V26.419",
                "duration": 450
            },
            {
                "path": "M44.886,36.962V15.874H55.43v21.088",
                "duration": 450
            },
            {
                "path": "M108.145,31.691h5.273l0.001,5.272l0,0h-5.271v5.273H86.536v-5.273    M92.334,31.691v5.271h15.811v-5.271 M86.536,36.963h-4.745V21.146h4.745v-5.272h16.34v15.817H92.334 M97.608,26.419v-5.272h-5.274   v5.272H97.608",
                "duration": 450
            },
            {
                "path": "M145.057,31.691h5.272l-0.004,5.272l0,0h-5.273v5.273h-15.813v-21.09   h-5.271",
                "duration": 450
            },
            {
                "path": "M139.785,36.962h5.271v-5.271",
                "duration": 450
            },
            {
                "path": "M123.968,21.146v21.089h-10.545V15.874h21.091v5.272h5.271v15.816",
                "duration": 450
            },
            {
                "path": "M150.323,10.602V5.33h10.545v5.272H150.323 M166.145,31.691h5.271   v5.272h-0.001h-5.272v5.273h-15.814V15.874 M160.873,36.962h5.271v-5.271 M150.328,15.874h10.545v21.088",
                "duration": 450
            },
            {
                "path": "M197.773,21.146h-5.271v5.272h-10.545v15.817h-10.543V15.874h16.342",
                "duration": 450
            },
            {
                "path": "M192.502,21.146v-5.272h5.271v5.272",
                "duration": 450
            },
            {
                "path": "M187.756,15.874v5.272h4.746",
                "duration": 450
            },
            {
                "path": "M34.396,79.152v-5.273h5.271v-5.271h16.344v5.271h4.745v5.273   L50.212,89.695",
                "duration": 450
            },
            {
                "path": "M66.028,94.969v5.271h-5.272v5.271H44.412v-5.271h-4.746v5.271   h-5.271V89.695l15.816-15.816H39.667v5.273h-5.271",
                "duration": 450
            },
            {
                "path": "M50.212,89.695v10.545h10.544v-5.271h5.272",
                "duration": 450
            },
            {
                "path": "M92.918,73.879h4.746l-0.002,26.361l0,0h-4.746v5.271H76.573v-5.271   h-5.272V73.879h5.272v-5.271h16.345V73.879 M87.118,100.24V73.879H76.573v26.361H87.118L87.118,100.24",
                "duration": 450
            },
            {
                "path": "M124.016,100.238h5.273l0.001,5.273l0,0h-21.092v-5.271h5.272V79.152   h-5.272v5.271h-5.271V73.878h5.271v-5.271h10.547v5.271h5.271V100.238",
                "duration": 450
            },
            {
                "path": "M134.563,94.969h5.271v5.271h10.545V89.17h-15.815V68.607h26.36   v5.271h-15.815v5.272",
                "duration": 450
            },
            {
                "path": "M145.107,79.15h7.908l7.907,7.906v13.184l0,0h-4.746v5.271h-16.344   v-5.271h-5.271v-5.271",
                "duration": 450
            }
        ],
        "dimensions": {
            "width": 200,
            "height": 110 }
					}
				}

				$(document).ready(function(){

					// Setup your Lazy Line element.
					// see README file for more settings
					
					
					$('#lazyd').html('').lazylinepainter({
							'svgData' : svgData,
							'strokeWidth':1,
							'strokeColor':'#ddd',
							'onComplete' : function(){
								console.log('>> onComplete');
							},
							'responsive':true,
							'onStart' : function(){
								console.log('>> onStart');
								
							}
						}
					)


					// Paint your Lazy Line, that easy!
					var state = 'paint';
					$('#lazyd').lazylinepainter(state);

					$('.top_full_content').on('click', function(){
						state = (state === 'erase') ? 'paint':'erase' ;
						$('#demo').lazylinepainter(state);

						console.log('>> ' + state);
					});
					
				})



			})( jQuery );
			
			    function GetCookie(name) {
        var arg=name+"=";
        var alen=arg.length;
        var clen=document.cookie.length;
        var i=0;

        while (i<clen) {
            var j=i+alen;
                if (document.cookie.substring(i,j)==arg)
                    return "here";
                i=document.cookie.indexOf(" ",i)+1;
                if (i==0) 
                    break;
        }

        return null;
    }
			
$(document).ready(function () {
		
		setTimeout(function(){
			
			 var visit=GetCookie("COOKIE1");
			 
			 if(visit==null){
					if($(window).width()>1000)
					{
					$.magnificPopup.open({
					items: {
		  	        src: 'a.php',
   		 		    type: 'ajax'
				  	}
					});
					}
			
  				  var expire=new Date();
  				  expire.setTime(expire.getTime() - 5.5*60*60*1000 + 5*60*1000);
  				  document.cookie="COOKIE1=here; expires="+expire;
			 }
			
			},1100);
			
	

});