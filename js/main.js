require.config({
	paths: {
		jquery		:	'libs/jquery-1.7.1.min',
		loader		:	'libs/loader',
		underscore	:	'libs/underscore',
		backbone	:	'libs/backbone',
		text		:	'libs/text',
		order		:	'libs/order'
	}
});

require([//load all modules here
         'app',
         /*'order!libs/jquery-1.7.1.min',*/
         'order!libs/underscore-min',
         'order!libs/backbone-min'
         //load any jquery plugins here
         ],function(App){
	
	App.initialize();
	
});