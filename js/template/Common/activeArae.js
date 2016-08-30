/**
 * work: 网吧活动
 * data:2015年3月4日 
 * author: lihui
 * */
;+function(factory){
	factory && factory(window,document,$);
}(function(window,document,$){

var ActiveArea = function(){
    
	var self=this;
	
	self.CreateHtml=function(db){            
		
                
	}
	
	/*方法集合*/
	self.Method={
		
	}
	
	self.Invoke=function(){
		
		self.param=$.extend({},config.BarActive.show,{nums:pageSize});
		
		var opt={
			url:API.root,
			data:self.param,
			callback:self.CreateHtml
		}
		common.Ajax(opt);
		self.Event();   
	}
}

$(function(){
	common.jsData[common.getModule('activeArea')] = ActiveArea;
});

});