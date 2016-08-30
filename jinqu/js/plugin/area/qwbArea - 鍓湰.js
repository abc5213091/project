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
		
		var parentObj=null;//parentObj为最外围的选择器
		
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
			
			if(db.data){//获取所有的省份数据，并且把数据拼接为字符串
				$.each(db.data,function(k,v){
					if(v.area_name!='全国'){
						str+='<option value='+v.id+'  '+self.SetSelected(v.id,v.area_name)+'>'+v.area_name+'</option>';
					}
				});
			}else{
				str='<option value="-1">暂无数据</option>';
			}
			
			if(obj==opt.province){//如果是省的话
				if(db.data[0].area_name!='全国'){//第一个option不是全国的话，获取所有该生对于的市
					self.GetData(self.type.city,self.id || db.data[0].id);
				}else{
					self.GetData(self.type.city,self.id || db.data[1].id);
				}
				
			}
			
			if(obj==opt.city){//如果是市的话
				self.GetData(self.type.county,self.id || db.data[0].id);//获取该市下面的数据
			}
			/*设为默认值，否则对手动选择造成污染*/
			self.id=0;
			
			parentObj?parentObj.find(obj).html(str):$(obj).html(str);//有parentObj的话，
		}
		
		
		
		self.SetSelected=function(id,value){
			if(self.areas && self.areas.length>0){//self.areas传递的完整地址
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
				param[opt.parentID]=parentID;//把parent的id值放入param对象中
			}
			
			var _opt={
				data:param,
				callback:function(db){
					console.log(obj);
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
