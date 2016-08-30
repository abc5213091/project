/**
 * user: 网吧订单设置
 * date: 2015年4月28日
 * author: hql
 * */
;+function(factory){
	factory && factory(window,document,$);
}(function(window,document,$){

var AccManage = function () {
	var self=this;
	
	
	self.CreateHtml=function(db){
		var ul=$('[role="menu"]');
		var str='',id;
		var l=(env =='dev'?common.module.length-1:common.module.length-2);
		for (var i = 0; i < l; i++) {
		    id=common.module[i]['id'];
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
					str+='<li>';
		            str+='<a href="javascript:void(0)" aid="'+item[j]['id']+'" data-item class="pl10">';                                                    
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
		
		if(!A) return;
		var _option='';
		for(var i in A){
			_option+='<option value="'+i+'">'+getName(i)+'</option>';
		}
		$('[name="rule"]').html(_option);
	}
	
	function getName(id){
		var arr=['超级管理员','活动策划专员','客服专员','客服主管','商务助理','财务结款','活动策划专员'];
		return arr[id];
	}
	
	self.setData=function(id){
		if(!A[id]) return;
		var data=A[id];
		var name=pName=str='';
		var p;
		for(var i in data){
			str='';
			for(var j in a=data[i]){
				p=$('[role="menu"] .item-li[aid="'+j+'"]');
				pName=p.children('a').text();
				str+='<div class="panel panel-success" aid="'+j+'">';
              	str+=' <div class="panel-heading">';
              	str+= pName;
              	str+=' </div>';
              	str+=' <div class="panel-body">';
              	for(var z=0;z<a[j].length;z++){
              		name=p.find('[data-item][aid="'+a[j][z]+'"]').text();
              		console.log(name,a[j][z]);
					str+='	<span class="btn btn-sm btn-danger" aid="'+a[j][z]+'">'+name+'</span>'; 	
				}
              	str+=' </div>';
              	str+='</div>';
				
			}
			$('[data-type="'+i+'"] .panel-body').append(str);
		}
	}
	
	self.Event=function(){
		$(document).on('click','[data-item]',function(){
			var aid,pid,o,p,name,pName,box,isPanel=false,cbox;
			o=$(this);
			p=o.closest('.item-li');
			aid=o.attr('aid');
			pid=p.attr('aid');
			name=o.text();
			pName=p.children('a').text();
			box=$('[type="checkbox"]:checked').closest('.panel');
			
			box.each(function(){
				cbox=$(this).find('.panel[aid="'+pid+'"]');
				isPanel=cbox.length>0;
				if(isPanel){
					/*去重*/
					if(cbox.children('.panel-body').text().indexOf(name)>-1) return false;
					cbox.children('.panel-body').append(' <span class="btn btn-sm btn-danger" aid="'+aid+'">'+name+'</span>');
				}else{
					var str='<div class="panel panel-success" aid="'+pid+'">';
	                  	str+=' <div class="panel-heading">';
	                  	str+= pName;
	                  	str+=' </div>';
	                  	str+=' <div class="panel-body">';
	                  	str+='	<span class="btn btn-sm btn-danger" aid="'+aid+'">'+name+'</span>'; 	
	                  	str+=' </div>';
	                  	str+='</div>';
	                $(this).children('.panel-body').append(str);
				}
			});
			
		});
		
		$('[role="create"]').click(function(){
			var obj={},a,b;
			$('[data-type]').each(function(){
				a=obj[$(this).data('type')]={};
				$(this).find('.panel[aid]').each(function(){
					b=a[$(this).attr('aid')]=[];
					$(this).find('.btn[aid]').each(function(){
						b.push(parseInt($(this).attr('aid')));
					});
				});
			});
			$('textarea').val(JSON.stringify(obj)).show();
			//console.log(JSON.stringify(obj));
		});
		
		$(document).on('click','.btn[aid]',function(){
			if($(this).siblings().length==0){
				$(this).closest('.panel[aid]').remove();
			}else{
				$(this).remove();
			}
		});
		
		$('[name="rule"]').change(function(){
			$('[data-type]').children('.panel-body').empty();
			self.setData($(this).val());
		});
	}
	
	self.Invoke=function(){
		self.CreateHtml();
		self.Event();
	}
}

$(function () {
	common.jsData[common.getModule('AccManage')] = AccManage;
});

});