/**
 * user: 网吧订单设置
 * date: 2015年4月28日
 * author: hql
 * */
;+function(factory){
	factory && factory(window,document,$);
}(function(window,document,$){

var qiniuTx = function () {
	var self=this;
	
	self.CreateHtml=function(db){
		
	}
	
	self.Event=function(){
		
		common.getUpToken();
		
		var key = ('test')+ common.getID()+'.jpg';
		
		$('#editor').editable({
		 	inlineMode: false,
		 	alwaysBlank: true,
		 	allowedImageTypes: ["jpeg", "jpg", "png", "gif"],
          	imageUploadURL: common.qnURL,
          	imageUploadParams: { token: common.upToken || ''},
          	qncb:function(hash){
          		var _url='',_name;
          		common.getDownToken(
          			hash.key,
          			function(name,url){
		    			_url=url;
		    			_name=name;
		    		},
		    		null,
		    		false
          		)
          		return {url:_url,name:_name};
          	}
		 })
	}
	
	self.Invoke=function(){
		self.CreateHtml();
		self.Event();
	}
}

$(function () {
	common.jsData[common.getModule('qiniuTx')] = qiniuTx;
});

});