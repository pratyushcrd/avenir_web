jQuery_15(document).ready(function(){

	var shcontainer = jQuery_15('#shcontainer'),
		li = shcontainer.find('li');

	// Using the tzShutter plugin. We are giving the path
	// to he shutter.png image in the plugin folder and two
	// callback functions.

	shcontainer.tzShutter({
		imgSrc: 'assets/jquery.shutter/shutter.png',
		closeCallback: function(){

			// Cycling the visibility of the li items to
			// create a simple slideshow.

			li.filter(':visible:first').hide();
			
			if(li.filter(':visible').length == 0){
				li.show();
			}
			
			// Scheduling a shutter open in 0.1 seconds:
			setTimeout(function(){shcontainer.trigger('shutterOpen')},100);
		},
		loadCompleteCallback:function(){
			setInterval(function(){
				shcontainer.trigger('shutterClose');
			},4000);
			
			shcontainer.trigger('shutterClose');
		}
	});
	
});
