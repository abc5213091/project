/*
 *  页面主加载
 */

var PageLoad = function() {

	var self = this;
	/*判断是否登录*/
	self.isLogin = function() {
		var token = common.getCookie('token');

		if (!token) {
			$.MyAlert({
				content: '请重新登录',
				sure_callback: function() {
					location.href = 'index.html';
				}
			});
		}
	}
	/*获取权限*/
	self.getRole=function(level){
		var data;
		var opt={
			async:false,
			data:$.extend({},config.role.show,{powerLevel:level}) ,
			callback:function(db){
				if(db.resultCode=='100'){
					//common.Acc=A[db.info.powerLevel];
					data=db.data;
				}else{
					$.MyAlert({content:'出错了：'+db.msg});
				}
				
			}
		}
		common.Ajax(opt);
		return data;
	}
	
	/*获取用户信息*/
	self.getUserInfo=function(){
		var opt={
			async:false,
			data:config.info,
			callback:function(db){
				if(db.resultCode=='100'){
					//db.info.powerLevel=2;
					common.Acc=(db.info.powerLevel==='0'?'All':self.getRole(db.info.powerLevel));
					$('[field="loginName"]').html(db.info.username);
					self.MenuList();
				}else{
					$.MyAlert({content:'出错了：'+db.msg});
				}
				
			}
		}
		common.Ajax(opt);
	}
	
	self.MenuList=function(){
		var ul=$('[data-ride]');
		var str='',id;
		var l=(env =='dev'?common.module.length-1:common.module.length-2);
		for (var i = 0; i < l; i++) {
		    id=common.module[i]['id'];
		    //if(common.Acc!='All'){
				if(!common.isAccPage(id) && common.Acc!='All'){
					continue;
				}
			//}
			str+='<li class="item-li" aid="'+id+'">';
            str+='<a href="#" class="auto">';
            str+='<span class="pull-right text-muted">';
            str+='<i class="fa fa-angle-left text"></i>';
            str+='<i class="fa fa-angle-down text-active"></i>';
            str+='</span>';
            str+='<i class="icon-user icon '+common.module[i]['name']+'"> </i>';
            str+='<span>'+common.module[i]['cname']+'</span>';
            str+='</a>';
            
            if (common.module[i]['child']) {
				var item = common.module[i]['child'];
            	str+='<ul class="nav dk text-sm">';
				for (var j = 0; j < item.length; j++) {
					if(common.Acc!='All'){
						if(!common.isAccType('show',id,item[j]['id'])){
							continue;
						}
					}
					
					if(item[j].isChild){
						continue;
					}
					
					str+='<li>';
		            str+='<a href="javascript:void(0)" aid="'+item[j]['id']+'" actionAjax="'+item[j]['name']+'" class="pl10">';                                                    
		            str+='<i class="fa fa-angle-right text-xs"></i>';
		            str+='<span>'+item[j]['cname']+'</span>';
		            str+='</a>';
		            str+='</li>';
				}
				   str+='</ul>';
			}
            str+='</li>';
		}
		ul.html(str);
	}

	/*退出登录*/
	self.outLogin = function() {
		common.delCookie('token');
		location.href = 'index.html';
	}

	self.Event = function() {
		//退出登录
		$('.outLogin').click(function() {
			self.outLogin();
		});
	}

	self.Invoke = function() {
		self.isLogin();
		self.getUserInfo();
		self.Event();
	}
}

$(function() {
	new PageLoad().Invoke();
	
	/*当form里只有一个input[type='text'],form表单回车自动提交bug*/
	$(document).on('keydown','form input',function(e){
		if(e.keyCode==13) return false;
	})
	
	/*html容器*/
	var content,view='.content-view';
	
	$(document).on('click', '[actionAjax]', function(e) {
		e.stopPropagation();
		e.preventDefault();
		common.param={};
		
		var name, id, param, href , tmpName,pathName,parentPath,aid,pid,rootPath;

		name = $(this).attr('actionAjax');
		parentPath=$(this).attr('parentpath');
		subPage=$(this).attr('role');
		
		if (!name) return;
		
		/*是否为内页*/
		if(!!parentPath){
			/*内页权限*/
			var s=common.getCookie('o').split(',');
			aid=s[0],
			pid=s[1];
			
			//模板名[本身名字+父级名字]
			tmpName=parentPath+'_'+name;
			//模板路径
			pathName=parentPath+'/'+name;
			
			content='#innerContent';
		}else{
			aid=$(this).attr('aid');
			pid=$(this).closest('.item-li').attr('aid');
			common.setCookie('o',[aid,pid].join());
			
			//模板名
			tmpName=common.getModule(name);
			//模板路径
			pathName=common.getModule(name,'/');
			
			//不在common内页权限
			rootPath=common.innerPage(name);
			if(rootPath.isChild){
				aid=rootPath.aid;
				pid=rootPath.pid;
			}
			
			content='#content';
		}
		$(view).hide();
		$(content).show();
		
		$('[actionajax="' + name + '"]').closest('li').addClass('active').siblings().removeClass('active');
		

		/*参数的传递*/
		id = $(this).attr('ajax-id');
		common.setCookie('param', id);
		
		/*多个参数*/
		param=$(this).attr('ajax-param');
		param && (function(){
			param=common.filter(param.replace(/'/g,'\"'));
			for(var item in param){
				common.setCookie(item,param[item]);
			}
		})();
		
		href = config.temppath + pathName + '.html?t=' + (new Date()).getTime();
		/*模板加载  注：js的加载需要等待模板加载完之后进行加载，否则将出现【找不到对象的错误】*/
		if(!common.htmlData[tmpName]){
			$(content).load(href, function(db) {
				common.htmlData[tmpName]=db;
				/*JS加载*/
				common.loadJS(tmpName,config.temppath_js+pathName+'.js');
				common.AccO.O=common.isAccType('operate',pid,aid);
				common.AccO.E=common.isAccType('export',pid,aid);
				common.AccOperate(common.AccO.O,common.AccO.E);
			});
		}else{
			$(content).html(common.htmlData[tmpName]);
			/*JS加载*/
			common.loadJS(tmpName,config.temppath_js+pathName+'.js');
			common.AccO.O=common.isAccType('operate',pid,aid);
			common.AccO.E=common.isAccType('export',pid,aid);
			common.AccOperate(common.AccO.O,common.AccO.E);
		}
		
		common.templateID && (common.prevID=common.templateID);/*保存上一次对象，用于后退功能*/
		common.templateID = this; /*保存当前对象*/

	});
	
	//初始加载页面
	window.onload=function(){
		$('[data-ride="collapse"]').find('[actionajax]').eq(0).click();
	}   
});
