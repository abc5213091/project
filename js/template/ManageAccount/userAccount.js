/**
 * user: 用户账号
 * date: 2015年4月28日
 * author: hql
 * */
; + function(factory) {
	factory && factory(window, document, $);
}(function(window, document, $) {

	var UserAccount = function() {
		var pageSize = 12; //默认每页12条数据    
		var self = this; //当前对象   
		self.CreateHtml = function(db) {


			/*加载内容，生成table*/
			var html = '';
			$(common.ele.table).find("tr").eq(0).nextAll().remove();
			$.each(db.data, function(k, v) {
				html += '<tr>';
				html += '<td>' + v.id + '</td>'; //ID
				html += '<td>' + (v.username == '' ? '-' : v.username) + '</td>'; //用户账号
				html += '<td>' + (v.third == '' ? '-' : v.third) + '</td>'; //第三方登录
				html += '<td>' + (v.orders == '0' ? '0' : '<a href="javascript:void(0)" parentpath="Common" actionajax="orderInfo"  ajax-id="' + v.id + '">' + v.orders) + '</a</td>'; //订单数
				html += '<td>' + (v.collects == '0' ? '0' : '<a href="javascript:void(0)" parentpath="Common" actionajax="collect" ajax-id="' + v.id + '">' + v.collects) + '</a></td>'; //收藏数
				html += '<td class="' + (v.status == 0 ? 'cr-ff0' : v.status == 1 ? '-' : '-') + '">' + (v.status == 0 ? '禁用' : v.status == 1 ? '-' : '-') + '</td>'; //账号状态
				html += '<td>' + (v.dateFrom == '' ? '-' : v.dateFrom) + '</td>'; //注册来源
				html += '<td>' + (v.IMEI == '' ? '-' : v.IMEI) + '</td>'; //设备号
				html += '<td>' + (v.regtime == '' ? '-' : v.regtime) + '</td>'; //注册时间
				html += '<td>' + (v.lasttime == '' ? '-' : v.lasttime) + '</td>'; //最后使用时间
				html += '<td pid="' + v.id + '" sid="' + v.status + '">\n\
                             <a href="javascript:;" e_type="info">查看详情</a>\n\
                             <a href="javascript:;" e_type="able">' + (v.status == '2' ? '<span class="cr_O">启用</span>' : '禁用') + '</a></td>'; //操作：启用、禁用
				html += '</tr>';
			});
			$(html).insertAfter($(common.ele.table).find("tr").eq(0));

			$('[data-toggle="tooltip"]').tooltip(); //问号提示内容  

			common.pages(db.page, db.page.totalRows, pageSize, common.param, self.CreateHtml); //构建分页   
			common.Handle(); //页面构建后处理
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
							a_uid: pid,
							status: status
						}
						
						if(status==2){
							param = $.extend({}, config.User.enable,param);
						}else{
							param = $.extend({}, config.User.unable,param);
							param.fbd_expire = $('[name="fbd_expire"]:checked').val();
						}

						var opt = {
							url: API.root,
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

			//查看详情
			$(common.ele.table).on('click', '[e_type="info"]', function() {

			var obj = this;
			var uid = $(obj).closest('td').attr('pid');
	
			var param = $.extend({}, config.User.userInfo, {
				uid: uid
			});
			var opt = {
				data:param,
				callback: function(db) {
					var data = db.data,
						str='';
					if(db.resultCode!='100'){
						$.MyAlert({content:db.msg});
					}
					/*------s-调用弹出框-------*/
					var myOpt = {
						title: '手机用户详细信息',
						content: {
							url: config.popTemppath,
							name: '#zhgl_yhzh_ckxq'
						},
						width: 450,
						type: 1,
						sure: "关闭",
						callback: function() {
							/*------e-调用弹出框-------*/
							data && $.each(data, function(k, v) {
								
								if (k == 'head_image_url') {
									$('[field="' + k + '"]').attr('isrc', v);
								}else if(k=='sex'){
									$('[field="' + k + '"]').html(v==0?'男':'女');
								}else if(k=='tag' && v!=''){
									for(var i=0,len=v.split(',').length;i<len;i++){
										str+='<a href="#" class="btn btn-rounded btn-sm btn-info mr10 mb5">'+v.split(',')[i]+'</a>';
									}
									$('[field="tag"]').html(str);
								}else{
									$('[field="' + k + '"]').html(v == '' ? ' ' : v);
								}
								
								
								
								
								
							});
							common.Handle();
						}
					}
					$.MyAlert(myOpt);
					
				}
				
			}
			
			common.Ajax(opt); //执行ajax 
			});

		}

		self.Invoke = function() {

			common.param = $.extend({}, config.User.show, {
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
		common.jsData[common.getModule('userAccount')] = UserAccount;
	});

});