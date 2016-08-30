/**
 * work:三级联动插件
 * data:2015年4月14日17:34:30
 * author: lihui
 * use:   new qwbArea({province:'#province1',city:'#city1',county:'#county1',data:'湖南,郴州市,资兴市'});
 * 依赖：  common.js 、  init.js
 * */
//(function($){
	var qwbArea=function(opt){
		
		var self=this;
		
		var parentObj=null;
		
		var defaults={
			/*获取省数据地址*/
			provinceURL:config.Area.province || {} ,
			/*获取市数据地址*/
			cityURL:config.Area.city || {},
			/*获取区数据地址*/
			countyURL:config.Area.county || {},
			/*省对象*/
			province:'#province',
			/*市对象*/
			city:'',
			/*区对象*/
			county:'',
			/*详细地址*/
			address:'',
			/*父级ID*/
			parentID:'parent_id',
			/*传递数据*/
			data:null
		}
		
		/*操作类型*/
		self.type={
			/*省*/
			province:1,
			/*市*/
			city:2,
			/*区*/
			county:3
		}
		
		/*传递的省市区*/
		self.areas=[];
		
		/*选中的ID值*/
		self.id=0;
		
		/*是否选择*/
		self.isChange=false;
		
		opt=$.extend({}, defaults, opt);
		
		//opt.data='湖南,郴州市,资兴市';
		if(opt.data!=null){
			if(opt.data.indexOf(',')>-1){
				self.areas=opt.data.split(',');
				(opt.address && self.areas[3]) && $(opt.address).val(self.areas[3]);
			}
		}
		
		/**
		 * 绑定数据到控件上
		 * */
		self.BindData=function(obj,db){
			db=common.filter(db);
			var str='';
			
			if(!opt.data && !self.isChange){
				str+='<option value="-1">请选择</option>';
			}
			
			if(db.data){
				$.each(db.data,function(k,v){
					if(v.area_name!='全国'){
						str+='<option value='+v.id+'  '+self.SetSelected(v.id,v.area_name)+'>'+v.area_name+'</option>';
					}
				});
			}else{
				str='<option value="-1">请选择</option>';
			}
			
			if(obj==opt.province){
				if(db.data[0].area_name!='全国'){
					self.GetData(self.type.city,self.id || -1);
				}else{
					self.GetData(self.type.city,self.id || db.data[1].id);
				}
				
			}
			
			if(obj==opt.city){
				self.GetData(self.type.county,self.id || -1);
			}
			/*设为默认值，否则对手动选择造成污染*/
			self.id=0;
			
			parentObj?parentObj.find(obj).html(str):$(obj).html(str);
		}
		
		
		
		self.SetSelected=function(id,value){
			if(self.areas && self.areas.length>0){
				for(var i=0;i<self.areas.length;i++){
					if(value.indexOf(self.areas[i])>-1){
						self.id=id;
						return 'selected';
					}
				}
			}
			return '';
		}
		
		/**
		 * 获取数据
		 * @param {Number} type 获取数据类型  ： 省 | 市 | 区
		 * @param {Number} parentID 父级ID
		 */
		self.GetData=function(type,parentID){
			
			var param={};
			var obj='';
			if(type==self.type.province){
				param=opt.provinceURL;
				obj=opt.province;
			}else if(type==self.type.city){
				param=opt.cityURL;
				obj=opt.city;
			}else if(type==self.type.county){
				param=opt.countyURL;
				obj=opt.county;
			}
			
			if(parentID){
				param[opt.parentID]=parentID;
			}
			
			var _opt={
				data:param,
				loading:false,
				callback:function(db){
					self.BindData(obj,db);
				}
			}
			common.Ajax(_opt);
		};
		
		/*事件处理*/
		self._Event=function(){
			/*选择省级事件*/
			$(opt.province).change(function(){
				if($(this).val()<0) return false;
				self.isChange=true;
				parentObj=$(this).parents('[data-area="areaGroup"]');
				opt.city && self.GetData(self.type.city,$(this).val());
			});
			/*选择市级事件*/
			$(opt.city).change(function(){
				self.isChange=true;
				parentObj=$(this).parents('[data-area="areaGroup"]');
				opt.county && self.GetData(self.type.county,$(this).val());
			});
		}
		
		/*外部调用*/
		self._Invoke=function(){
			self.GetData(self.type.province);
			self._Event();
		}
		
		self._Invoke();
	};
//})(jQuery);

+function($){
	$.AreaList=function(opt){
		var self=this;
		//数据缓存
		var cache={};
		
		var defaults={
			/*获取省数据地址*/
			provinceURL:config.Area.province || {} ,
			/*获取市数据地址*/
			cityURL:config.Area.city || {},
			/*获取区数据地址*/
			countyURL:config.Area.county || {}
		}
		
		
		//获取数据
		self.getData=function(callback,id){
			var data,str='';
			if(id){
				data=config.Area.city,
				data['parent_id']=id;
			}else{
				data=config.Area.province;
			}
			var _opt={
				data:data,
				loading:false,
				async:false,
				callback:function(db){
					str=callback(db.data,id);
				}
			}
			common.Ajax(_opt);
			return str;
		}
		
		//创建地区列表
		self.createAreaList=function(data,id){
			var str='';
			str+='<ol class="dd-list">';
			if(data){
				for(var i in b=data){
                    str+='<li class="dd-item" data-id="'+b[i].id+'" data-pid="'+b[i].parent_id+'">';
                    	if(!id){
                    		str+='<button data-action="collapse" type="button" style="display: none;">Collapse</button><button data-action="expand" type="button">Expand</button>';
                    	}
                        str+='<div class="dd-handle"><input type="checkbox" class="areaCheck '+(id?'child':'')+'" >'+b[i].area_name+'</div>';
                    str+='</li>';          
				}
			    str+='</ol>';
			}
			return str;
		}
		
		//点击地区列表时触发
		$(document).on('click','[data-action="expand"]',function(){
			 var p=$(this).closest('.dd-item');
			 var id=p.data('id');
			 var c=p.children('.dd-list');
			 var isChild=c.length>0;
			 var isHide=c.is(':hidden');
			 //console.log(p.html());
			 if(!isChild){
			 	var str=self.getData(self.createAreaList,id);
			 	p.append(str);
			 }
			 c['show']();
			 p.siblings().children('.dd-list').hide();
			 $(this).hide();
			 p.find('[data-action="collapse"]').show();
		});
		
		$(document).on('click','[data-action="collapse"]',function(){
			var p=$(this).closest('.dd-item');
			var c=p.children('.dd-list');
			c['hide']();
			$(this).hide();
			p.find('[data-action="expand"]').show();
		});
		
		$(document).on('click','[data-toggle="AreaList"]',function(){
			var str='<div class="row"><div class="col-sm-6">';
			
			str+='<section class="panel panel-default portlet-item">';
            str+='    <header class="panel-heading">请选择地区 </header>';
            str+='    <section class="panel-body">';
			
			str+='<div class="dd" id="nestable1">';
			str+=self.getData(self.createAreaList);
			str+='</div>';
			
			str+='</section>';
            str+='</section>';
			
			str+='</div>';
			
                  
			str+='<div class="col-sm-6">';
			str+='<section class="panel panel-default portlet-item">';
            str+='    <header class="panel-heading">已选择地区 </header>';
            str+='    <section class="panel-body">';
			str+='<div class="dd" id="nestable2">';
			
			str+='</div>';
			str+='</section>';
            str+='</section>';
			str+='</div>';
			str+='</div>';
			$.MyAlert({content:str,confirm:true,sure_callback:function(){
				var str='';
				$('#nestable2').find('input.child').each(function(){
					str+=$(this).parent().text()+",";
				});
				str=str.substring(0,str.length-1);
				opt.callback(str);
				return true;
			}});
		});
		
		$(document).on('click','#nestable1 .areaCheck',function(){
			var p=$(this).closest('.dd-item');
			var pid=p.data('pid');
			var isCheck=$(this).is(':checked');
			var isChild=$(this).hasClass('child');
			/*模拟点击*/
			p.find('[data-action="expand"]').click();
			p.find('.areaCheck').attr('checked',isCheck?true:false);
			$('.dd-item[data-id="'+pid+'"]').children('.dd-handle').children('.areaCheck').attr('checked',true);
			
			if(!isCheck && isChild && p.siblings().length==0){
				$('#nestable1 [data-id="'+pid+'"]').children('.dd-handle').children('.areaCheck').attr('checked',false);
			}
			
			var data=$('#nestable1').clone();
			data.find('.areaCheck').each(function(){
				var _isCheck=$(this).is(':checked');
				if(!_isCheck){
					$(this).closest('li').remove();
				}
				//$(this).remove();
			});
			$('#nestable2').html(data.html());
		});
		$(document).on('click','#nestable2 .areaCheck',function(){
			var p=$(this).closest('.dd-item');
			var isCheck=$(this).is(':checked');
			var isChild=$(this).hasClass('child');
			var id=p.data('id');
			var pid=p.data('pid');
			if(!isCheck){
				if(isChild && p.siblings().length==0){
					p.parents('.dd-item').remove();
					$('#nestable1 [data-id="'+pid+'"]').find('.areaCheck').attr('checked',false);
				}else{
					p.remove();
				}
				$('#nestable1 [data-id="'+id+'"]').find('.areaCheck').attr('checked',false);
			}
		});
	}
}(jQuery);
