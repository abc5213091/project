/**
 * work:分页插件
 * date:2015年1月9日
 * author:李辉
 * */

/**
 * @param {Number} pageIndex 当前页
 * @param {Number} pageSize  页面大小
 * @param {Number} count     总数据条数
 * @param {Object} data      发送ajax所需参数
 * @param {Function} callback  回调函数
 */
var myPager = function(opt) {		
        "use strict";		
        var self = this;		
        var pageLength = 6; /*分页数量*/
        var pageTotal = 0;
        var pageHtml = '';

        var type = false;

        var defaults = {
                pageIndex: 1,
                pageSize: 10,
                count: 0,			
                type: false, /*控制分页结构*/
                obj:'.m-page'
        };

        opt = $.extend({}, defaults, opt);
        pageTotal = opt.count % opt.pageSize == 0 ? opt.count / opt.pageSize : Math.floor(opt.count / opt.pageSize) + 1;

        /*设置最小*/
        if(opt.pageIndex<=1){
                opt.pageIndex=1;
        }
        /*设置最大*/
        if(opt.pageIndex>=pageTotal){
                opt.pageIndex=pageTotal;
        }      

        self.CreatePager = function() {     

                if(pageTotal == 1){
                    pageHtml ='<span><font>'+ opt.count + '</font>条数据 | 共<font>' + pageTotal + '</font>页</span>';
                    $(".m-page").css("width","auto");
                }else if(pageTotal == 0){
                    pageHtml = '<div class="wuato cr-6 tc f14">当前没有数据</div>';
                    $(".m-page").css("width","100%");
                }else{
                       $(".m-page").css("width","auto");
                       
                        pageHtml +='<span><font>'+ opt.count + '</font>条数据 | 共<font>' + pageTotal + '</font>页</span>';


                        if (opt.pageIndex > 1) {
                                pageHtml += '<a href="' + (1) + '" >首页</a>';
                                pageHtml += '<a href="' + (opt.pageIndex - 1) + '" class="pageprv">上一页</a>';
                        }

                        if (pageTotal < pageLength) {
                                for (var i = 1; i <= pageTotal; i++) {
                                        if (i === opt.pageIndex) {
                                                pageHtml += '<a href="' + i + '" class="z-crt">' + i + '</a>';
                                        } else {
                                                pageHtml += '<a href="' + i + '">' + i + '</a>';
                                        }
                                }
                        } else {

                                if (opt.pageIndex < 4) {
                                        for (var i = 1; i < opt.pageIndex; i++) {
                                                pageHtml += '<a href="' + i + '">' + i + '</a>';
                                        }
                                        pageHtml += '<a href="' + opt.pageIndex + '" class="z-crt">' + opt.pageIndex + '</a>';
                                        pageHtml += '<a href="' + (opt.pageIndex + 1) + '">' + (opt.pageIndex + 1) + '</a>';
                                        pageHtml += '<a href="' + (opt.pageIndex + 2) + '">' + (opt.pageIndex + 2) + '</a>';
                                        if (opt.type) {
                                                pageHtml += "<i>...</i>";
                                                pageHtml += '<a href="' + pageTotal + '">' + pageTotal + '</a>';
                                        }


                                }
                                if (opt.pageIndex >= 4 && (opt.pageIndex <= pageTotal - 3)) {
                                        if (opt.type) {
                                                pageHtml += '<a href="' + 1 + '">' + 1 + '</a>';
                                                pageHtml += "<i>...</i>";
                                        }
                                        pageHtml += '<a href="' + (opt.pageIndex - 2) + '">' + (opt.pageIndex - 2) + '</a>';
                                        pageHtml += '<a href="' + (opt.pageIndex - 1) + '">' + (opt.pageIndex - 1) + '</a>';
                                        pageHtml += '<a href="' + opt.pageIndex + '" class="z-crt">' + opt.pageIndex + '</a>';
                                        pageHtml += '<a href="' + (opt.pageIndex + 1) + '">' + (opt.pageIndex + 1) + '</a>';
                                        pageHtml += '<a href="' + (opt.pageIndex + 2) + '">' + (opt.pageIndex + 2) + '</a>';
                                        if (opt.type) {
                                                pageHtml += "<i>...</i>";
                                                pageHtml += '<a href="' + pageTotal + '">' + pageTotal + '</a>';
                                        }

                                }
                                if (opt.pageIndex > pageTotal - 3) {

                                        if (opt.type) {
                                                pageHtml += '<a href="' + 1 + '">' + 1 + '</a>';
                                                pageHtml += "<i>...</i>";
                                        }

                                        pageHtml += '<a href="' + (opt.pageIndex - 2) + '">' + (opt.pageIndex - 2) + '</a>';
                                        pageHtml += '<a href="' + (opt.pageIndex - 1) + '">' + (opt.pageIndex - 1) + '</a>';
                                        pageHtml += '<a href="' + opt.pageIndex + '" class="z-crt">' + opt.pageIndex + '</a>';
                                        for (var i = opt.pageIndex + 1; i <= pageTotal; i++) {
                                                pageHtml += '<a href="' + i + '">' + i + '</a>';
                                        }
                                }

                        }

                        if (opt.pageIndex < pageTotal ){
                                pageHtml += '<a href="' + (opt.pageIndex + 1) + '" class="pagenxt">下一页</a>';
                                pageHtml += '<a href="' + (pageTotal) + '" >尾页</a>';
                        }                                

                        if (pageTotal <=1) {
                                pageHtml += '<span>跳转到<input class="inp_focus pageGo" type="text" disabled/>页</span>';
                        }else{
                                pageHtml += '<span>跳转到<input class="inp_focus pageGo" type="text"/>页</span>';
                        }  
                        
                }

                $(opt.obj).html(pageHtml);

                self._Event();

        }

        self._Event = function() {
                /*点击分页*/
                $(opt.obj+' a').click(function() {
                        if ($(this).hasClass('z-dis') || $(this).hasClass('z-crt')) {
                                return false;
                        }

                        var page = $(this).attr('href');
                        pageSend(page);
                        return false;
                });
                /*输入分页*/
                $(opt.obj+' .pageGo').blur(function() {

                       var page = parseInt($(this).val()) || 0;

                       if(page >= pageTotal){
                           page = pageTotal;
                       }else if(page <= 0){
                            page = 1;
                       }      

                       pageSend(page);

                });
                //只能输入数字
		$(opt.obj+' .pageGo').keyup(function(){
			$(this).val( $(this).val().replace(/[^\d]/g,'') );
		});

                /**
                 * 根据当前页获取数据
                 */
                function pageSend(page) {
                        opt.data = $.extend({},opt.data, {pageNo: page});
                        var _opt = {
                                url: API.root,
                                data: opt.data,
                                callback: opt.callback
                        };
                        common.Ajax(_opt);
                        return false;
                }
        }

        /**
         * 外部调用
         */
        self.Invoke = function() {
                self.CreatePager();                
        }

        self.Invoke();
}
