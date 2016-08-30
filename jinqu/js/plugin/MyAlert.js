/*
 *
                   _ooOoo_
                  o8888888o
                  88" . "88
                  (| -_- |)
                  O\  =  /O
               ____/`---'\____
             .'  \\|     |//  `.
            /  \\|||  :  |||//  \
           /  _||||| -:- |||||-  \
           |   | \\\  -  /// |   |
           | \_|  ''\---/''  |   |
           \  .-\__  `-`  ___/-. /
         ___`. .'  /--.--\  `. . __
      ."" '<  `.___\_<|>_/___.'  >'"".
     | | :  `- \`.;`\ _ /`;.`/ - ` : | |
     \  \ `-.   \_ __\ /__ _/   .-` /  /
======`-.____`-.___\_____/___.-`____.-'======
                   `=---='
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
      佛祖保佑         永无BUG		永不修改

 *  module：对话框插件
 *  author: lihui
 *  date:   2015年3月11日17:01:33
 * */
(function($) {
    $.BigAlert = function(opt) {
		var self = this;
		/*设置参数*/
		var defualts = {			
			title: "", /*设置标题*/
			type: 0,			
			sure: "确定",/*确定按钮文本*/			
			cance: "取消",/*取消按钮文本*/			
			confirm: false,	/*是否开启confirm对话*/		
			content: "这里是内容...",			
			isShade: true  /*是否开启遮罩*/
		}
		var Myalert = ".BigPop",
                MyalertShade = ".maskBig",
                popbox = '.pop-mainBig';
		opt = $.extend({},defualts, opt || {});
		/*创建html结构*/
		self.CreateHtml = function() {
			var html = "";
			html += '<div id="wbxx_cktp" class="pop BigPop">';
			
			if (opt.isShade) { /*是否遮罩*/
				html += '<div class="maskBig" style="z-index:90001" ></div>';
			}                         
			html += '<div id="Pop_Content" class="pop-mainBig tc" style="z-index: 110002;">';      
			
			if (typeof(opt.content) == 'string') { /*内容*/
				html += opt.content;
			}
                        html += '<a href="javascript:;" class="f-close btn-close-1 jd fr f20"></a>';
			html += '</div></div>'; 

			$(Myalert).remove();
			$(document).find("body").append(html);
                        
			var imgWidth = $("#Pop_Content img").width();
                        var imgHeight = $("#Pop_Content img").height();
                        var left = imgWidth / 2;
                        var height = imgHeight / 2 ;                      
                        $(".pop-mainBig").css({"margin-left":"-" + left +"px","width":imgWidth,"left":"50%","margin-top": "-" + height +"px"});

			if (opt.content instanceof Object) {
				$('#Pop_Content').load(opt.content.url + '?t=' + (new Date()).getTime() + " " + opt.content.name, function(db) {
					opt.callback && opt.callback();					
				});
			}
		}		
		self.Method = {  /*方法*/
			show: function() {
				$(Myalert).fadeIn();                               
			},
			hide: function() {
                               $(".pop-mainBig").hide();                               	
                               $(".maskBig").css({opacity:"0.5"}).slideUp(); 
			}			
		}		
		self._Event = function() {  /*事件*/
			$(".f-close").click(function() {
				self.Method.hide();
			});                        
                       $(".maskBig").click(function() {
				self.Method.hide();
			});
		}		
		self.init = function() {  /*初始化*/
			self.CreateHtml();
			self._Event();
		}		
		self.init();  /*调用*/
	}
    
	$.MyAlert = function(opt) {
		var self = this;

		/*设置参数*/
		var defualts = {
			box:'body',
			/*设置标题*/
			title: "",
			width: 460,
			/**
			 * 弹出框类型
			 */
			type: 0,
			/*确定按钮文本*/
			sure: "确定",
			/*取消按钮文本*/
			cance: "取消",
			/*是否开启confirm对话*/
			confirm: false,
			/**
			 * 内容区域
			 * @param {String} 直接字符
			 * @param {Object} 异步加载内容 ,包括三个属性 url:链接， name：要加载的容器名 （例：'#box1' || '.box1'）
			 * */
			content: "这里是内容...",
			/*是否开启遮罩*/
			isShade: true,
			/*是否进行拖动*/
			isDrag: false,
			/*加载成功后回调方法*/
			callback: null,
			/*确定按钮事件回调*/
			sure_callback: null,
			/*取消按钮事件回调*/
			cance_callback: null
		}

		var Myalert = ".MyPop",
			MyalertShade = ".mask",
			popbox = '.popbox';

		opt = $.extend({},defualts, opt || {});

		/*创建html结构*/
		self.CreateHtml = function() {
			var html = "";

			html += '<div class="pop MyPop" id="MyPop" style="">';

			/*是否遮罩*/
			if (opt.isShade) {
				html += '  <div class="mask" style="z-index:90001"></div> ';
			}

			html += '<div class="popbox z_i10002" style="width:' + opt.width + 'px; z-index:90002;">  ';

			if (opt.title) {
				html += '<div class="pop-title">' + opt.title + '<a href="javascript:;" class="f-close btn-close jd icon icon-close tr f20"></a></div>';
			}

			html += '<div class="pop-main scrollable" style="border: 0;padding:5px 20px;max-height:'+($(window).outerHeight()-150)+'px">';
			if (opt.type) { //type =1  居中显示
				html += '<div id="Pop_Content" class="panel_con disib wauto pt10 pb5 tl"> ';
			} else {
				html += '<div id="Pop_Content" class="panel_con disib wauto pt10 pb10  f14"> ';
			}

			/*内容*/
			if (typeof(opt.content) == 'string') {
				html += opt.content;
			}
			html += '</div></div>';

			/*设置底部结构*/
			if (opt.type) { //type =1  居中显示
				html += ' <div class="pop-foot tr b-e1e1e1"> <span class="disib pt20"> ';
				html += ' <a href="javascript:;" class="f-sure btn_qx">' + opt.sure +'</a> ';
				if (opt.confirm) {
					html += ' <a href="javascript:;" class="f-cancel btn_qx ml10 disib" style="padding:8px 25px"> ' + opt.cance + ' </a> ';
				}
				html += ' </span></div>';
			} else {
				html += '<div class="pop-foot-del tc" style="background: #fff;height:60px;"><span class="disib">';
				html += '     <a href="javascript:;" class="f-sure btn_qx disib">' + opt.sure +'</a> ';
				if (opt.confirm) {
					html += '     <a href="javascript:;" class="f-cancel btn_qx ml20 disib"> ' + opt.cance + '  </a> ';
				}
				html += '</span></div>';
			}

			html += ' </div></div>';

			$(Myalert).remove();
			$(document).find(opt.box).append(html);
			if (opt.content instanceof Object) {
				$('#Pop_Content').load(opt.content.url + '?t=' + (new Date()).getTime() + " " + opt.content.name, function(db) {
					opt.callback && opt.callback();
					self.Method.setStyle();
				});
			}else{
				
				opt.callback && opt.callback($(html));
				
				if($(html).find('img').length){
					$(popbox).css({top:20,left:($(window).width() - $(popbox).width()) / 2});
				}else{
					self.Method.setStyle();
				}
			}

			//拖动
			//if(opt.isDrag){
			$(".pop-title").Drag();
			//}
		}

		/*方法*/
		self.Method = {
			show: function() {
				$(Myalert).fadeIn();
			},
			hide: function() {
				$(Myalert).remove();
			},
			/*加载样式*/
			loadStyle: function(url) {
				try {
					document.createStyleSheet(url)
				} catch (e) {
					var cssLink = document.createElement('link');
					cssLink.rel = 'stylesheet';
					cssLink.type = 'text/css';
					cssLink.href = url;
					var head = document.getElementsByTagName('head')[0];
					head.appendChild(cssLink)
				}
			},
			setStyle: function() {
				var left = ($(window).width() - $(popbox).width()) / 2;
				var top = ($(window).height() - $(popbox).height()) / 2;
				$(popbox).css({
					left: left,
					top: top
				});
			}
		}

		/*事件*/
		self._Event = function() {

			$(".f-close").click(function() {
				self.Method.hide();
			});
			$(".f-cancel").click(function() {
				if (opt.cance_callback) {
					opt.cance_callback() && self.Method.hide();

				} else {
					self.Method.hide();
				}
			});
			$(".f-sure").click(function() {
				if (opt.sure_callback) {
					opt.sure_callback() && self.Method.hide();

				} else {
					self.Method.hide();
				}
			});
		}

		/*初始化*/
		self.init = function() {
			self.CreateHtml();
			self._Event();
		}

		/*调用*/
		self.init();
	}

	/*
	 * module：拖动插件
	 * author:lihui
	 * data: 2015年3月11日17:04:04
	 * @parameter： box-外层被移动的块
	 */
	$.fn.Drag = function(box) {
		var isDown = false;
		var X, Y
		box ? box = $(box) : box = this.parent();
		this.attr("style", "cursor:move");
		this.mousedown(function(e) {
			var offset = $(this).offset();
			X = e.pageX - offset.left;
			Y = e.pageY - offset.top;
			isDown = true;
		});
		this.unbind("mouseup").bind("mouseup", function(e) {
			isDown = false;
		});
		this.unbind("mouseout").bind("mouseout", function(e) {
			isDown = false;
		});
		this.unbind("mousemove").bind("mousemove", function(e) {
			if (isDown) {
				box.offset({
					top: e.pageY - Y,
					left: e.pageX - X
				});
			}
		});
	}

})(jQuery);