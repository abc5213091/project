/*
 * work:用户登录
 * date:2015年1月5日 
 * author：李辉
 */
var Login=function(){
	//保存当前对象
	var self=this;
	/**
	 * 登录回调方法
	 * @param {obj} db 返回数据
	 * */
	self.loginHandle=function(db){
		db=common.filter(db);
		if(db.resultCode=='100'){
			common.setCookie('token',db.token);
			location.href='Main.html';
		}else{
			$.MyAlert({content:db.msg});
		}
	}
	
	
	
	/*
	 * 事件
	 * */
	self.Event=function(){	
		/*按回车键登录*/
		$(document).keydown(function(e){
			if(e.keyCode==13){
				self.loginSend();
			}
		});
		
		$(common.ele.search).click(function(){
			self.loginSend();
		});
	}
	
	/*
	 * 发送登录请求
	 * */
	self.loginSend=function(){
        var data=common.getFormValue($(common.ele.form));
        
        data=$.extend(config.login,data);
        
	    var opt={
			data:data,
			callback:self.loginHandle
		  };
        
		common.Ajax(opt);
	}	
	
	/*
	 * 调用入口
	 * */
	self.Invoke=function(){		
		self.Event();
	}
}

$(function(){
    new Login().Invoke();
})




