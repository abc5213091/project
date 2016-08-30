/**
 * user: 网吧订单设置
 * date: 2015年4月28日
 * author: hql
 * */
;+function(factory){
	factory && factory(window,document,$);
}(function(window,document,$){

var tableTx = function () {
	var self=this;
	
	self.CreateHtml=function(db){
		var _data=[
				{"id":"1", "IMEI": "---", "state": 1, "tel": "---", "abc": "123", "content": "许都自顾自尽管中国科学", "qq": "1", "email": "请点我", "time": "2015-08-13 11:06:47" },
                { "id": "2", "IMEI": "---", "state": "1", "tel": "---", "content": "give喜欢山西省广西SGS GIS V", "qq": "1181052839", "email": "1181052839@qq.com", "time": "2015-08-13 10:45:10" },
				{ "id": "3", "IMEI": "---", "state": 2, "tel": "---", "content": "该方法功败垂成", "qq": "1181052839", "email": "1181052839@qq.com", "time": "2015-08-13 10:44:05" },
				{ "id": "4", "IMEI": "---", "state": "3", "tel": "18124772032", "content": "功能进一步完善", "qq": "0", "email": "", "time": "2015-07-22 14:08:26" },
                { "id": "5", "IMEI": "---", "state": "4", "tel": "18124772032", "content": "网吧环境有待进一步改进111！", "qq": "10258968", "email": "test@126.com", "time": "2015-06-30 18:03:55" }
				];
		
		var pageData={"totalRows":"34","totalPage":"3","currentPage":"1"};
		

        /*创建table参数*/
		var opt={
		    head: ['反馈日期', '用户名', '联系QQ', 'Email', '反馈内容', '状态','静态字段','操作'],

		    /*
                field 为数据字段 ，可直接写。 与 text互斥
                text  静态数据。  与 field互斥
                tag   为需创建的标签。 【注：当数据为对象时，此属性为必需项】
                attr  为标签的属性 {对象结构}，如 class，name和事件
                dataAttr 为所需数据属性 {数组结构}，如需列出数据的id
                bool  为状态需转换字符，如 状态为【1】转换为【完成】
                child 为当前标签的子项
            */
			body:[
					"time",
					'tel',
					{field:'qq',tag:'a',attr:{href:'http://www.baidu.com',name:'link'}},
					{field:'email',tag:'span',
						attr:{
							name:'hello',
							class:'mr10',
							click:function(){alert(10)}
						},
						child: [
                              { text: '①', tag: 'b', attr: { click: function () { alert('我是①') } } },
                              { text: '②', tag: 'b' }
						]
					},
					{field:'content',tag:'b',dataAttr:["id","state"]},
					{field: 'state', tag: 'span', bool: { 1: '完成', "2": '取消', "3": '删除', 4: '下班' } },
                    {text:'我是静态字段', tag: 'span', dataAttr: ["id", "state"], },
			        {text:'',tag:'span',dataAttr: ["id", "state"],
			            child: [
                             { text: '编辑', tag: 'a', attr: { click: function () { alert('编辑') } } },
                             { text: '审核', tag: 'a', attr: { click: function () { alert('审核') } } },
			            ]
			        },
				],
			data:_data,
			page:{data:pageData,callback:self.CreateHtml}
		}

	    /*创建搜索组件参数*/
		var fOpt=[
			{text:'注册时间'},
			{text:'注册来源',tag:'label'},
			[
				{text:'日期:',tag:'label'},
				{tag:'input',attr:{type:"text",class:"input-sm form-control",role:"date"}},
			],
			[
				{text:'状态:',tag:'label'},
				{
					tag:'select',
					attr:{name:"dateFrom",class:"input-sm form-control input-s-sm inline v-middle"},
					child:[
						{text:'未完成',tag:'option',attr:{value:'0'}},
						{text:'已完成',tag:'option',attr:{value:'2'}},
						{text:'已取消',tag:'option',attr:{value:'3'}}
					]
				},
			],
			{text:'筛选',tag:'span',attr:{class:'btn btn-s-md btn-dark',role:"search"}},
			{
				tag:'span',
				attr:{class:'btn btn-s-md btn-info',role:"excel"},
				child:[
					{text:'导出',tag:'i',attr:{class:"icon-share-alt fa-css3"},
						child:[
							{text:'abc',tag:'span'},
							{text:'132',tag:'span'}
						]
					},
					{text:'再导',tag:'i',attr:{class:"icon-share-alt fa-css3"},
						child:[
							{text:'abc',tag:'span'},
							{text:'132',tag:'span'}
						]
					}
				]
			}
		]
		
		/*创建搜索组件*/
		common.createSearch(fOpt);
		/*创建数据列表*/
		common.createTable(opt);
	}
	
	self.Event=function(){
		//var um = UM.getEditor('edit');
		 $('#edit').editable({inlineMode: false, alwaysBlank: true})
	}
	
	self.Invoke=function(){
		self.CreateHtml();
		self.Event();
	}
}

$(function () {
	common.jsData[common.getModule('tableTx')] = tableTx;
});

});