/**
 * user: 战神账号
 * date: 0918
 * author: wll
 * */
; + function(factory) {
	factory && factory(window, document, $);
}(function(window, document, $) {

	var aresAccount = function() {
		var pageSize = 12; //默认每页12条数据    
		var self = this; //当前对象   
		self.CreateHtml = function(db) {
			/*加载内容，生成table*/
			var html = '';
			$(common.ele.table).find("tr").eq(0).nextAll().remove();
			$.each(db.data, function(k, v) {
				html += '<tr>';
				html += '<td>' + v.id + '</td>';
				html += '<td>' + v.ctime + '</td>'; 
				html += '<td>' + (v.username == '' ? '-' : v.username) + '</td>'; //战神账号
				html += '<td>' + (v.mars_orders == '0' ? '0' : '<a href="javascript:void(0)" parentpath="Common" actionajax="aresOrder"  ajax-id="' + v.a_uid + '">' + v.mars_orders) + '</a</td>'; //订单数
				html += '<td>' + (v.mars_evaluates == '0' ? '0' : '<a href="javascript:void(0)" parentpath="Common" actionajax="assessNum"  ajax-id="' + v.a_uid + '">' + v.mars_evaluates) + '</a</td>'; //评价数
				html += '<td>' + (v.mars_attentions == '0' ? '0' : '<a href="javascript:void(0)" parentpath="Common" actionajax="followNum" ajax-id="' + v.a_uid + '">' + v.mars_attentions) + '</a></td>'; //关注数
				html += '<td>' + (v.receive_status == 2 ? '关闭' : v.receive_status == 1 ? '开启' : '-') + '</td>'; //接单状态
				html += '<td>' + (v.sh_status == 3 ? '审核通过' : v.sh_status == 2 ? '<a class="cr-ff0" href="javascript:void(0)" reason="'+v.sh_reason+'" data-btn="reason" >审核不通过</a>' : '<a class="cr_Y" href="javascript:void(0)" data-btn="checking" aid="'+v.a_uid+'">审核中</a>') + '</td>'; //战神审核
				html += '<td>' + (v.rz_status == 3 ? '审核通过' : v.rz_status == 2 ? '<a class="cr-ff0" href="javascript:void(0)" reason="'+v.rz_reason+'" data-btn="reason">审核不通过</a>' : v.rz_status == 1 ? '<a class="cr_Y" href="javascript:void(0)" aid="'+v.a_uid+'" data-btn="idcheck">审核中</a>':'未提交') + '</td>'; //实名认证审核
				html += '<td pid="' + v.a_uid + '" sid="' + v.fbd_status + '">\n\
                             <a href="javascript:;" parentpath="Common" actionajax="aresInfo"  ajax-id="' + v.a_uid +'">查看详情</a>';
                             
                             if(v.sh_status!='1'){
                             	 html +='  <a href="javascript:;" e_type="able">' + (v.fbd_status == '2' ? '<span class="cr_O">启用</span>' : '禁用') + '</a></td>'; //操作：启用、禁用
                             }
                            
				html += '</tr>';
			});
			$(html).insertAfter($(common.ele.table).find("tr").eq(0));

			common.pages(db.page, db.page.totalRows, pageSize, common.param, self.CreateHtml); //构建分页   
		};

		self.Event = function() {
			/*搜索*/
	        common.submit({data:common.param,callback: self.CreateHtml});
	        /*导出Excel*/
	        common.exportExcel(common.param);

			
			//禁用和启用账号
			$(common.ele.table).on('click', '[e_type="able"]', function() {

				var pid = $(this).closest('td').attr('pid');
				var status = $(this).closest('td').attr('sid');

				var html;
				if (status == 2) { //0的时候要启用，1时要禁用
					html = "<b>确定要启用此用户账号吗?</b><br/><p class='f13 mt15 cr-0 ls0 fn'>账号启用后，可再次登录手机端应用。</p> ";
				} else {
					html = "<b>选择禁用时长</b><br/>";
					html+='<div class="row mt35 mb20 cr-3"><label class="col-sm-4 control-label tr">禁用时长：</label>';
					html+='<div class="col-sm-8 ">';
                    html+='    <label class="checkbox-inline">';
                    html+='      <input type="radio" name="fbd_expire" value="1" checked> 7天';
                    html+='    </label>';
                    html+='    <label class="checkbox-inline">';
                    html+='      <input type="radio" name="fbd_expire" value="2"> 1个月';
                    html+='    </label>';
                    html+='    <label class="checkbox-inline">';
                    html+='      <input type="radio" name="fbd_expire" value="3"> 不限';
                    html+='    </label>';
                    html+='  </div></div>';
				}

				/*------s-调用弹出框-------*/
				var myOpt = {
					content: html,
					confirm: true,
					sure_callback: function() {

						var param = {
							id: pid
						}
						
						if(status==2){
							param = $.extend({}, config.aresAccount.able,param);
						}else{
							param = $.extend({}, config.aresAccount.unable,param);
							param.fbd_long = $('[name="fbd_expire"]:checked').val();
						}

						var opt = {
							data: param,
							callback: function(db) {
								if (db.resultCode == '100') {
									common.refresh();
								} else {
									$.MyAlert({
										content: db.msg
									});
								}
							}
						}
						common.Ajax(opt);
					}
				}
				$.MyAlert(myOpt);
				/*------e-调用弹出框-------*/

			});
			
			
			/*战神审核中*/
			$('[role="Box"]').on('click','[data-btn="checking"]',function(){
				var aid=$(this).attr('aid');
				var param=$.extend({}, config.aresAccount.aresChecking, {a_uid:aid});
				var opt={
					data:param,
					callback:function(db){
//						db=common.filter(db);
						if(db.resultCode!='100'){
							console.log(db.msg);
						}
						if(!db.data[0]){
							return false;
						}
						var cStr;
							cStr='<div class="verify">'+
							      	'<div class="wauto pt10">'+
										'<label class="fb f15 mb10 cr-4c">基本信息：</label><br />'+
										'<div class="mb5"><label class="f14 cr-4c">姓名：</label><span class="cr-9">'+(!db.data[0].compellation?'':db.data[0].compellation)+'</span></div>'+
										'<div class="mb5"><label class="f14 cr-4c">手机号：</label><span class="cr-9">'+(!db.data[0].telephone?'':db.data[0].telephone)+'</span></div>'+
										'<div class="mb5"><label class="f14 cr-4c">城市：</label><span class="cr-9">'+(!db.data[0].city?'':db.data[0].city)+'</span></div>'+
									'</div>';
									cStr+='<div class="wauto pt10 cr-4c">'+
										'<label class="fb f15 mb10">游戏信息：</label><br />'+
										'<div class="mb5"><label class="f14 cr-4c">游戏名：</label><span class="cr-9">'+(!db.data[0].game_details[0]?'':db.data[0].game_details[0].gameName)+'</span></div>'+
										'<div class="mb5"><label class="f14 cr-4c">服务器：</label><span class="cr-9">'+(!db.data[0].game_details[0]?'':db.data[0].game_details[0].gameServer)+'</span></div>'+
										'<div class="mb5"><label class="f14 cr-4c">角色名称：</label><span class="cr-9"> '+(!db.data[0].game_details[0]?'':db.data[0].game_details[0].roleName)+'</span></div>'+
										'<div class="mb5"><label class="f14 cr-4c">等级：</label><span class="cr-9">'+(!db.data[0].game_details[0]?'':db.data[0].game_details[0].gameLevel)+'</span></div>'+
									'</div>';
//									});
									cStr+='<div class="wauto pt10">'+
										'<label class="fb f15 mb10 cr-4c">图片：</label>';
//										if(!db.data[0].mars_images){
//											cStr+='<div class="">-</div>';
//										}else{
											var imgArray=(db.data[0].mars_images);
											cStr+='<div class="">';
											for(var i=0;i<imgArray.length;i++){
												cStr+='<img role="qnImg" class="mr5 mb5" style="width:50px;height:50px" isrc="'+imgArray[i]+'">'
											}
//											cStr+='</div>';
//										}
									cStr+='</div>'+
									'<div class="wauto pt10">'+
										'<label class="fb f15 mb10 cr-4c">身份证信息：</label>'+
										'<span class="front disb"><img src="" style="max-width:100%;display:block;margin-bottom:10px" role="qnImg" isrc="'+db.data[0].idcard_front+'"></span>'+
										'<span class="front disb"><img src="" style="max-width:100%;display:block;" role="qnImg" isrc="'+db.data[0].idcard_back+'"></span>'+
									'</div>'+
									'<div class="wauto pt10 disn" box="reason">'+
										'<textarea class="mb10 p10" field="reason" placeholder="原因" style="resize:none;width:100%;" ></textarea><br>'+
										'<button class="btn btn-s-md btn-info mr10" data-btn="nopass" flag="1"  pid="'+aid+'">确定</button>'+
										'<button class="btn btn btn-negative btn-s-md" data-btn="cancel" >取消</button>'+
									'</div>'+
									'<div class="cr_R mt10" error="tip"></div>'+
							   '</div>';
							var dialog={
								box:'[role="Box"]',
								title:'审核战神信息',
								sure:'通过',
								cance:'不通过',
								confirm:true,
								content:cStr,
								sure_callback:function(){
									var pass={
										data:$.extend({}, config.aresAccount.pass, {status:'3',a_uid:aid}),
										callback:function(db){
											db=common.filter(db);
											if(db.resultCode=='100'){
												common.refresh();
											}else{
												$('[error="tip"]').html(db.msg);
											}
										}
										
									}
									common.Ajax(pass);
									new $.MyAlert().Method.hide();
								},
								cance_callback:function(){
									$('[box="reason"]').removeClass('disn');
									$('.pop-foot-del').hide();
								}

							}
							$.MyAlert(dialog);
							common.Handle();
						}
					}
				common.Ajax(opt);
			
			})
			
			/*战神or实名审核不通过*/
			$('[role="Box"]').on('click','[data-btn="nopass"]',function(){
				var data={};
				if($(this).attr('flag')=='1'){
					data=$.extend({}, config.aresAccount.pass, {status:'2',a_uid:$(this).attr('pid'),sh_reason:$(this).siblings('textarea').val()});
				}else{
					data=$.extend({}, config.aresAccount.realNamePass, {status:'2',a_uid:$(this).attr('pid'),rz_reason:$(this).siblings('textarea').val()});
				}
				var reason=$(this).siblings('textarea').val()
				if(!reason){
					$('[error="tip"]').html('不通过原因要填写！');
					return false;
				}
				var noPass={
					data:data,
					callback:function(db){
						db=common.filter(db);
						if(db.resultCode=='100'){
							common.refresh()
						}else{
							$('[error="tip"]').html(db.msg);
						}
					}
				}
				common.Ajax(noPass);
				new $.MyAlert().Method.hide();
			});
			
			/*取消通过*/
			$('[role="Box"]').on('click','[data-btn="cancel"]',function(){
				$('[error="tip"]').html('');
				$(this).parent().addClass('disn');
				$('.pop-foot-del').show();
			});
			
			/*查看审核or实名不通过原因*/
			$('[role="Box"]').on('click','[data-btn="reason"]',function(){
				$.MyAlert({
					title:'原因',
					content:$(this).attr('reason')
				});
			});
			
			/*实名认证中*/
			$('[role="Box"]').on('click','[data-btn="idcheck"]',function(){
				var id=$(this).attr('aid');
				var idOpt={
					data:$.extend({}, config.aresAccount.realNameCheck, {a_uid:id}),
					callback:function(db){
						db=common.filter(db);
						if(db.resultCode!='100'){
							alert(db.msg);
						}
						var html='<div class="mb5"><label class="f14 cr-4c">姓名&nbsp;&nbsp;：</label><span class="cr-9">'+db.data[0].rz_name+'</span></div>'+
								  '<div class="mb5"><label class="f14 cr-4c">身份证号：</label><span class="cr-9">'+db.data[0].rz_idCard+'</span></div>'+
								  '<div class="wauto pt10 disn" box="nameReason">'+
										'<textarea class="mb10 p10" field="reason" placeholder="原因" style="resize:none;width:100%;"></textarea><br>'+
										'<button class="btn btn-s-md btn-info mr10" data-btn="nopass" flag="2"  pid="'+id+'">确定</button>'+
										'<button class="btn btn btn-negative btn-s-md" data-btn="cancel">取消</button>'+
									'</div>'+
									'<div class="cr_R mt10" error="tip"></div>';
						$.MyAlert({
							box:'[role="Box"]',
							title:'审核实名认证',
							content:html,
							sure:'通过',
							cance:'不通过',
							confirm:true,
							sure_callback:function(){
								var namePpass={
										data:$.extend({}, config.aresAccount.realNamePass, {status:'3',a_uid:id}),
										callback:function(db){
											db=common.filter(db);
											if(db.resultCode=='100'){
												common.refresh();
											}else{
												$('[error="tip"]').html(db.msg);
											}
										}
										
									}
									common.Ajax(namePpass);
									new $.MyAlert().Method.hide();
							},
							cance_callback:function(){
								$('[box="nameReason"]').removeClass('disn');
								$('.pop-foot-del').hide();
							}
						});
					}
				}
				common.Ajax(idOpt);
			});
			
		}

		self.Invoke = function() {

			common.param = $.extend({}, config.aresAccount.show, {
				nums: pageSize
			});

			var opt = {
				data: common.param,
				callback: self.CreateHtml
			};
			common.Ajax(opt);
			self.Event(); //页面事件处理
		}
	}

	$(function() {
		common.jsData[common.getModule('aresAccount')] = aresAccount;
	});

});