
(function($) {
	$.Dialogs=function(obj){
		var that=this;
		var defaults={
			paream:'click',
			add_callback:null,
			delete_callback:null,
			clear_callback:null
			
		};
		
		that.Mth={
			add:function(){
				console.log('add function');
			},
			delete:function(){
				console.log('delete function');
			}
		}
	}
})(jQuery);