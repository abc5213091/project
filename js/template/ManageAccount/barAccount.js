/**
 * user: 网吧账号
 * date: 2015年4月28日
 * author: hql
 * */
;+function(factory){
	factory && factory(window,document,$);
}(function(window,document,$){

var BarAccount = function () {    
    
    var pageSize = 12;   //默认每页5条数据    
    var self = this;  //当前对象  

    self.CreateHtml = function (db) {   
            /*加载内容，生成table*/
            var html = '';    
            $(common.ele.table).find("tr").eq(0).nextAll().remove();
            $.each(db.data, function (k, v) {   
                    html += '<tr>';  
                    html += '<td>' + v.c_uid + '</td>';  //ID
                    html += '<td>' + ( v.bindName == '' ? '-' : v.bindName ) +  '</td>';  //用户名
                    html += '<td>' + ( v.username == '' ? '-' : v.username )  + '</td>';  //绑定手机号
                    html += '<td><a  href="javascript:void(0)" data-pop="Bar-wbxx" ajax-id="' + v.c_uid + '">' + v.cybercafe_name + '</a></td>'; //网吧名称，要跳出当前页面用：parentpath="Common"
                    html += '<td>' + v.cybercafe_address  + '</td>';  //网吧地址
                    html += '<td>' + ( v.orders!="0" && v.orders!=""?'<a href="javascript:void(0)" parentpath="Common" actionajax="barOrder" ajax-id="' + v.c_uid + '">' + v.orders : '0') +  '</a</td>';  //订单数
                    html += '<td>'+(v.ord_num!='0' && v.ord_num!=''?'<a href="javascript:void(0)" parentpath="Common" actionajax="barIssue" ajax-id="'+v.c_uid+'">'+v.ord_num+'</a>':'0')+'</td>';//评价数
//                  html += '<td>'+(v.collection!='0' && v.collection!=''? v.collection:'0')+'</td>';//收藏数
                    
                    html += '<td>' +self.Method.GetStatus(v.auditStatus,v.auditFailMsg)+ '</td>';  //信息状态
                    html += '<td>' +self.Method.GetStatus(v.license_status,v.licenseMsg)+ '</td>';  //证件审核
                    html += '<td>' +self.Method.GetStatus(v.bank_status,v.bankMsg) + '</td>';  //财务审核
                    html += '<td>' + ( v.regtime == '' ? '-' : v.regtime) + '</td>';  //注册时间
                    html += '<td>' + ( v.lastTime == '' ? '-' :  v.lastTime ) + '</td>';  //最后使用时间
                    html += '<td pid="' + v.c_uid + '" name="' + v.cybercafe_name + '">';
                    html += '<a class="btn2 p6"  parentpath="Common" actionajax="netBar" href="javascript:;" ajax-id="'+v.c_uid+'">编辑</a>'; 
                    if(v.auditStatus==1 || v.license_status==1 || v.bank_status==1){
                       html += '<a class="btn2 p6" href="javascript:;" data-pop="Bar-wbxx" data-type="1" ajax-id="'+v.c_uid+'" >审核</a>'; 
                    }
                    html += '</td></tr>';
             });  
            $(html).insertAfter($(common.ele.table).find("tr").eq(0));              

            $('[data-toggle="tooltip"]').tooltip();  //问号提示内容  
           
            common.pages(db.page, db.page.totalRows, pageSize, common.param, self.CreateHtml);  //构建分页   
	    	common.Handle(); //页面构建后处理
        
    };   

    self.Event = function () {      
       /*搜索*/
        common.submit({data:common.param,callback: self.CreateHtml});
        /*导出Excel*/
        common.exportExcel(common.param);
        
        //禁用账号
        $(common.ele.table).on('click','[e_type="highLight"]',function(){
            debugger;
            
                var pid = $(this).closest('td').attr('pid');
                var hid = $(this).closest('td').attr('hid'); 
                var barName = $(this).closest('td').attr('name');
                
                var html;
                if(hid != 0){
                     html = "<b>确定要取消高亮此网吧账号吗？</b><br/><p class='f13 mt15 cr-0 ls0 fn'>网吧取消高亮后，在手机端不再标红高亮显示。</p> ";
                     hid = 0;
                }else{
                     $("#PopBarName").html(barName);
                    html = $("#GLContent").html();
                    
                    hid = 1;
                   
                }
                
                var param={
                        uid: pid,
                        status: hid             
                 }

                param=$.extend({},config.User.able,param);

                var opt={
                        url : API.root,
                        data : param,
                        callback:function(db){
                            debugger;
                                db=common.filter(db);
                                if(db.resultCode=='100'){
                                        $(common.templateID).click();
                                        common.refresh();
                                }else{
                                        $.MyAlert({content:db.msg});
                                }
                        }
                }

                //调用弹出框
                common.alert_1(html);
        });
        
    }
    
    /*方法集合*/
    self.Method = {
            /**
		 * 根据状态获取对应文字
		 * @param {int} status
		 * @return {String} result
		 * */
		GetStatus:function(status,msg){
			var result='';
			msg=msg || '';
			switch (status) {
				case '1':
					result = '<span class="cr_O">审核中</span>';
					break;
				case '2':
					result = '<span class="cr_R" data-toggle="tooltip" title="'+msg+'">审核未通过</span>';
					break;
				case '3':
					result = '<span class="cr_G">审核通过</span>';
					break;				
				case '0':
					result = '<span class="cr-9">未审核</span>';
					break;
			}
			return result;
		}
    }


    self.Invoke = function () {    
          
            common.param = $.extend({}, config.Account.show,{nums:pageSize});                  
      
            var opt = {
                url: API.root,
                data: common.param,
                callback: self.CreateHtml
            };
            common.Ajax(opt);

            self.Event();    //页面事件处理
    }
    
}

$(function () {
    common.jsData[common.getModule('barAccount')]=BarAccount;
   
});

});