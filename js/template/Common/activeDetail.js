/**
 * work:网吧活动人数详情
 * data:2015年3月26日13:40:39
 * author: hql
 * */
;+function(factory){
	factory && factory(window,document,$);
}(function(window,document,$){

var ActiveDetail = function () {    
   
    var pageSize = 13;   //默认每页10条数据
    var self = this;  //当前对象    
    
    self.id = 0;  /*获取传递的id值*/
    
    self.CreateHtml = function (db) {
        
                db=common.filter(db);
                 if(db.data == ""){ //如果没有数据，不显示导出按钮：
                    $(common.ele.excel).hide();
               }  
                var html = '';    
                $(common.ele.table).find("tr").eq(0).nextAll().remove();       
                $.each(db.data, function (k, v) {
                    html += '<tr>';
                    html += '<td>' + ( v.username == '' ? '-' : v.username )  + '</td>';  //用户名
                    html += '<td>' + (  v.enter_time == '' ? '-' : v.enter_time )  + '</td>';  //参加时间
                    html += '<td>' + ( v.is_win == '' ?  '-' : v.is_win ) + '</td>';  //是否获奖
                    html += '<td>' + ( v.win_time == '' ? '-' : v.win_time ) + '</td>';  //获奖时间
                    html += '</tr>';
                });	
		$(html).insertAfter($(common.ele.table).find("tr").eq(0));   
                
                common.pages(db.page, db.page.totalRows, pageSize, common.param, self.CreateHtml);  //构建分页   
                common.Handle(); //页面构建后处理
                   
    };
    
  
    self.Event = function () {
    	/*搜索*/
        common.submit({data:common.param,callback: self.CreateHtml});
        /*导出Excel*/
        common.exportExcel(common.param);
    }


    self.Invoke = function () {
    	
    	self.id = common.getCookie('param') || 0;
    	
    	if(self.id==0){
    		$.MyAlert({content:'未获取到参数'});
    		return;
    	}        
       
	common.param = $.extend({}, config.OrgActive.activeInfo,{id:self.id, nums:pageSize});
    	
    	var opt={
            url: API.root,
            data: common.param,
            callback: self.CreateHtml
        };
        common.Ajax(opt);
        
        self.Event();    
    }
}
$(function () {
	common.jsData[common.getModule('activeDetail')] = ActiveDetail;
});

});