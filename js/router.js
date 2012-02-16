define(['jquery','underscore','backbone'],function($, _, Backbone){
	var AppRouter = Backbone.Router.extend({
		routes	:	{
			"*action"	:	"defaultAction"
		},
		
		defaultAction	:	function(action){
			
		}
	});
		
	var initialize = function(){
		var app_router = new AppRouter();
		Backbone.history.start();
	};
	
	return {initialize	:initialize};
});