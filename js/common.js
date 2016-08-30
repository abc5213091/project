var config = {
    /*模板路径*/
    temppath: ROOT_PATH + '/template/',
    temppath_js: ROOT_PATH + '/js/template/',
    /*弹出框模板*/
    popTemppath: ROOT_PATH + '/template/MyPop/poplist.html',
    /*默认图片*/
    defaultImg: ROOT_PATH + '/images/default_logo.png',
    /*登录*/
    login: { p: 'worker', ac: 'login' },
    /*退出登录*/
    logout: { p: 'worker', ac: 'logout' },
    /*用户详情*/
    info:{p:'worker' ,ac :'info'},
    /*网吧信息*/
    Bar: {
        show: { p: 'worker', ac: 'appUserList', operate: 'barDetails' }  //【用户账号】	获取网吧详细信息  
    },
    /*用户账号*/
    User: {
        show: { p: 'worker', ac: 'appUserList', operate: 'show' },  //a.	用户列表
        enable: { p: 'worker', ac: 'appUserList', operate: 'enable' },  //b.	禁用/启用
        unable: { p: 'worker', ac: 'appUserList', operate: 'unable' },  //b.	禁用/启用
        orders: { p: 'worker', ac: 'appUserList', operate: 'appOrderInfo' },  //c.	订单详情
        favorite: { p: 'worker', ac: 'appUserList', operate: 'collectInfo' },  //d.	收藏记录
        detail: { p: 'worker', ac: 'appUserList', operate: 'barDetails' },  //e.	获取网吧详细信息    
        userInfo: { p: 'worker', ac: 'appUserList', operate: 'userInfo' }  //e.	获取网吧详细信息
        
    },
    /*网吧账号*/
    Account: {
        show: { p: 'worker', ac: 'barUserList', operate: 'show' },  //a.	网吧用户列表
        highlight: { p: 'worker', ac: 'barUserList', operate: 'check_highlight' },  //b.	高亮/取消高亮
        orders: { p: 'worker', ac: 'barUserList', operate: 'barOrderInfo' },  //c.	网吧订单详情                        
        detail: { p: 'worker', ac: 'barUserList', operate: 'barDetails' },  //d.	获取网吧详细信息   
        edit: { p: 'worker', ac: 'barUserList', operate: 'edit' },  //e.	编辑网吧信息
        check: { p: 'worker', ac: 'barUserList', operate: 'check' },  //f.	网吧审核
        uploadImg: { p: 'worker', ac: 'barUserList', operate: 'upload' },  //g.	上传图片
        delImg: { p: 'worker', ac: 'barUserList', operate: 'del_image' },  //h.	删除图片
        barIssue:{p: 'worker', ac: 'barUserList', operate: 'barCommentInfo'},//网吧评价数
        issueDel:{p: 'worker', ac: 'barUserList', operate: 'up_down'},
        barHotSale:{p: 'worker', ac: 'hot', operate: 'show'},//网吧订单数-热卖订单
        activityCode:{p: 'worker', ac: 'hot', operate: 'code'}
    },
    /*战神账号*/
    aresAccount:{
    	show:{p: 'worker', ac: 'mars_user', operate: 'show'},
    	order:{p: 'worker', ac: 'mars_user', operate: 'mars_order'},
    	assess:{p: 'worker', ac: 'mars_user', operate: 'mars_evaluate'},
    	follow:{p: 'worker', ac: 'mars_user', operate: 'mars_attention'},
    	aresChecking:{p: 'worker', ac: 'mars_user', operate: 'mars_check_info'},
    	pass:{p: 'worker', ac: 'mars_user', operate: 'mars_check'},
    	realNameCheck:{p: 'worker', ac: 'mars_user', operate: 'mars_rz_info'},
    	realNamePass:{p: 'worker', ac: 'mars_user', operate: 'name_check'},
    	aresInfo:{p: 'worker', ac: 'mars_user', operate: 'mars_details'},
    	/*禁用*/
    	unable:{p: 'worker', ac: 'mars_user', operate: 'unable'},
    	/*启用*/
    	able:{p: 'worker', ac: 'mars_user', operate: 'able'}
    },
    /*订单*/
    Order: {
        //网吧接单设置
        show: { p: 'worker', ac: 'order_set', operate: 'show' },  //a.	查看网吧订单设置信息列表
        limit: { p: 'worker', ac: 'order_set', operate: 'order_limit' }, //b.	网吧每天订单上限设置
        note: { p: 'worker', ac: 'order_set', operate: 'order_note' }, //c.	网吧每天完成订单通知
        //网吧接单设置
        search: { p: 'worker', ac: 'order_accept', operate: 'search' },  //a.	查询
        filtrate: { p: 'worker', ac: 'order_accept', operate: 'filtrate' }, //b.	筛选
        unable: { p: 'worker', ac: 'order_accept', operate: 'unable' }, //c.	禁用网吧
        enable: { p: 'worker', ac: 'order_accept', operate: 'enable' }, //c.	启用网吧
        //待处理订单
        suspendShow: { p: 'worker', ac: 'suspendOrder', operate: 'show' },  //a.	待处理订单列表
        suspendBarDetails: { p: 'worker', ac: 'suspendOrder', operate: 'barDetails' },  //b.	获取网吧详细信息
        //已完成订单
        finishShow: { p: 'worker', ac: 'finishedOrder', operate: 'show' },  //a.	已完成订单列表
        finishBarDetails: { p: 'worker', ac: 'finishedOrder', operate: 'barDetails' },  //b.	获取网吧详细信息
        //已取消订单
        cancelShow: { p: 'worker', ac: 'canceledOrder', operate: 'show' },  //a.	已取消订单列表
        cancelBarDetails: { p: 'worker', ac: 'canceledOrder', operate: 'barDetails' }  //b.	获取网吧详细信息                        
    },
    /*官方活动*/
    OrgActive: {
        show: { p: 'worker', ac: 'official_activity', operate: 'show' },  //a.	官方活动列表
        official: { p: 'worker', ac: 'official_activity', operate: 'up_down' },  //b.	上线/下线
        activeInfo: { p: 'worker', ac: 'official_activity', operate: 'official_activity_details' },  //c.	官方活动参与详情                        
        detail: { p: 'worker', ac: 'official_activity', operate: 'barDetails' },  //d.	获取网吧详细信息   
        edit: { p: 'worker', ac: 'official_activity', operate: 'edit' },  //e.	编辑活动
        add: { p: 'worker', ac: 'official_activity', operate: 'add' },  //f.	发布活动
        uploadImg: { p: 'worker', ac: 'official_activity', operate: 'upload_image' },  //g.	上传图片
        del: { p: 'worker', ac: 'official_activity', operate: 'del' }  //d.	删除活动
    },
    
    /*战神动态*/
   aresDynamic:{
   	show:{p: 'worker', ac: 'mars_dynamic', operate: 'show'},
   	assess:{p: 'worker', ac: 'mars_dynamic', operate: 'dynamic_discuss'},
   	praise:{p: 'worker', ac: 'mars_dynamic', operate: 'dynamic_praise'},
   	offLine:{p: 'worker', ac: 'mars_dynamic', operate: 'dynamic_offline'},
   	delete:{p: 'worker', ac: 'mars_dynamic', operate: 'dynamic_del'}
   },
   
   /*战神陪玩*/
  	aresPlayOrder:{
  		show:{p: 'worker', ac: 'mars_order', operate: 'show'},
  		refund:{p: 'worker', ac: 'mars_order', operate: 'refund'}
  	},
    
    /*网吧活动*/
    BarActive: {
        show: { p: 'worker', ac: 'privilegeManage', operate: 'show' },  //a.	网吧活动列表
        top: { p: 'worker', ac: 'privilegeManage', operate: 'up_down' },  //b.	置顶/取消置顶
        official: { p: 'worker', ac: 'privilegeManage', operate: 'up_down' },  //b.	上线/下线
        highlight: { p: 'worker', ac: 'privilegeManage', operate: 'check_highlight' },  //b.	高亮/取消高亮
        check: { p: 'worker', ac: 'privilegeManage', operate: 'check_pass' },  //d.	网吧活动-审核通过
        checkNo: { p: 'worker', ac: 'privilegeManage', operate: 'check_no_pass' },  //d.	网吧活动-审核【不通过】
        join: { p: 'worker', ac: 'privilegeManage', operate: 'bar_activity_details' },  //g.	网吧活动参与详情                        
        detail: { p: 'worker', ac: 'privilegeManage', operate: 'barDetails' }  //h.	获取网吧详细信息                        
    },
    /*用户反馈*/
    FeedBack: {
        show: { p: 'worker', ac: 'feedback', operate: 'show' }  //a.	用户反馈列表
    },
    /*用户投诉*/
    Complain: {
        show: { p: 'worker', ac: 'complainManage', operate: 'show' }  //a.	用户投诉列表
    },
    /*抽奖*/
    Award: {
        //抽奖比例设置
        showSet: { p: 'worker', ac: 'draw_ratio', operate: 'show' },  //a.   查看抽奖比例列表
        edit: { p: 'worker', ac: 'draw_ratio', operate: 'edit' },  //a.   查看抽奖比例列表
        //抽奖奖品导入
        showImport: { p: 'worker', ac: 'award_input', operate: 'show' },  //a.	各类奖品剩余数
        input: { p: 'worker', ac: 'award_input', operate: 'input' },  //b.	奖品导入
        //抽奖地区控制
        showLotteryArea: { p: 'worker', ac: 'lottery_area', operate: 'show' },  //a.	投放地区展示
        editLotteryArea: { p: 'worker', ac: 'lottery_area', operate: 'edit' }  //b.	修改投放地区
    },
    /*金额结算*/
    Money: {
        //结算
        showMoney: { p: 'worker', ac: 'barClearing', operate: 'show' },  //a.	结算列表
        clearing: { p: 'worker', ac: 'barClearing', operate: 'clearing' },  //b.	设为已结算
        detail: { p: 'worker', ac: 'barClearing', operate: 'barDetails' },  //c.	获取网吧详细信息   
        cycleOrders: { p: 'worker', ac: 'barClearing', operate: 'cycleOrders' },  //d.	结算周期内，在线支付订单列表
        cycleRecharge: { p: 'worker', ac: 'barClearing', operate: 'cycleRecharge' },  //e.	结算周期内，充值详情       
        //玩家补贴
        showSubsidy: { p: 'worker', ac: 'subsidy_setting', operate: 'show' },  //a.	补贴列表
        editMinPayable: { p: 'worker', ac: 'subsidy_setting', operate: 'edit_minPayable' },  //b.	编辑玩家最低应付金额
        editSubsidy: { p: 'worker', ac: 'subsidy_setting', operate: 'edit_subsidy' },  //c.	编辑补贴概率
        subsidyByDay: { p: 'worker', ac: 'subsidy_setting', operate: 'subsidyByDay' },  //d.	每个玩家每天最多补贴次数
        //网吧补贴
        showBarSubsidy: { p: 'worker', ac: 'barSubsidy', operate: 'show' },  //a.	补贴列表
        editBarSubsidy: { p: 'worker', ac: 'barSubsidy', operate: 'edit_subsidy' },  //b.	编辑网吧补贴金额
        history: { p: 'worker', ac: 'barSubsidy', operate: 'history' },  //c.	历史记录   
        //支付
        showPayOnlineArea: { p: 'worker', ac: 'pay_online_area', operate: 'show' },  //a.	投放地区展示
        editPayOnlineArea: { p: 'worker', ac: 'pay_online_area', operate: 'edit' },  //b.	修改投放地区
        //会员充值记录
        showDeposit: { p: 'worker', ac: 'recharge_record', operate: 'show' },  //a.	充值记录列表展示
        refund: { p: 'worker', ac: 'recharge_record', operate: 'refund' },  //b.	退款        
        hotSaleApply:{p: 'worker', ac: 'hot', operate: 'sq'},
        //热卖申请
        hotCheck:{p: 'worker', ac: 'hot', operate: 'sh'},
        hotShow:{p: 'worker', ac: 'hot', operate: 'ck'},
        hotOffLine:{p: 'worker', ac: 'hot', operate: 'xx'},
        //热卖订单
        hotOrder:{p: 'worker', ac: 'hot', operate: 'record'},
        refund:{p: 'worker', ac: 'hot', operate: 'tk'}
    },
    /*删除网吧账号*/
    DelManage: {
        DelBar: { p: 'worker', ac: 'bar_del' },
        DelUser: { p: 'worker', ac: 'appuser_del' },
        ResetPwd: { p: 'worker', ac: 'reset_bar_pwd' }
    },
    /*地区控制*/
   areaControl:{
   	show:{p: 'worker', ac: 'area_control', operate: 'show'},
   	add:{p: 'worker', ac: 'area_control', operate: 'add'},
   	del:{p: 'worker', ac: 'area_control', operate: 'del'}
   },
    /*邀请码管理*/
    Code: {
        //网吧接单设置
        show: { p: 'worker', ac: 'code_manage', operate: 'show' },  //a.	邀请码列表展示
        add: { p: 'worker', ac: 'code_manage', operate: 'add' }, //b.	增加邀请码
        edit: { p: 'worker', ac: 'code_manage', operate: 'edit' }, //c.	修改备注
        check: { p: 'worker', ac: 'code_manage', operate: 'check' }, //c.	启用/禁用网吧                        
        codebar: { p: 'worker', ac: 'code_manage', operate: 'code_bar' },  //e.	使用指定邀请码注册的网吧
        detail: { p: 'worker', ac: 'code_manage', operate: 'barDetails' }  //d.	获取网吧详细信息
    },
    /*优惠券管理*/
    Coupon: {
        //网吧接单设置
        show: { p: 'worker', ac: 'coupon', operate: 'show' },  //a.	优惠券管理展示
        set: { p: 'worker', ac: 'coupon', operate: 'set_reg_share' }, //b.	优惠券发放设置【register、share】
        add: { p: 'worker', ac: 'coupon', operate: 'add' }, //b.	优惠券发放设置【register、share】
        edit: { p: 'worker', ac: 'coupon', operate: 'edit_reg_share' }, //c.	优惠券编辑(新增操作记录) 【注册优惠券、分享优惠券】
        issueRecord: { p: 'worker', ac: 'coupon', operate: 'issue_record' }, //e.	优惠券发放记录                        
        areaUsers: { p: 'worker', ac: 'coupon', operate: 'areaUsers' },  //f.	根据地区获取app用户数
        info: { p: 'worker', ac: 'coupon', operate: 'reg_share_used_info' },  //a.	注册、分享优惠券的使用详情
        issueUsedInfo: { p: 'worker', ac: 'coupon', operate: 'issue_used_info' }  //h.	人工发放优惠券的使用详情
    },
    /*网吧机器配置*/
    BarConfig: {
        show: { 'p': 'worker', 'ac': 'mechine_setting', 'operate': 'show' },
        sort: { 'p': 'worker', 'ac': 'mechine_setting', 'operate': 'mechine_conf_sort' },
        operate: { 'p': 'worker', 'ac': 'mechine_setting', 'operate': 'mechine_conf_curd' },
        brandOperate: { 'p': 'worker', 'ac': 'mechine_setting', 'operate': 'mechine_brand_launch', 'oper': 'show' }
    },
    /*网吧推广人员申请*/
    extension_user: { 'p': 'worker', 'ac': 'extension_user', 'operate': 'show' },
    /*省市区联动*/
    Area: {
        province: { p: 'worker', ac: 'areas', operate: 'province' },
        city: { p: 'worker', ac: 'areas', operate: 'city' },
        county: { p: 'worker', ac: 'areas', operate: 'county' }
    },
    /*手动发券*/
    mencoupon: {
        show: { 'p': 'worker', 'ac': 'coupon', 'operate': 'show', 'type': 'issue','category':'1' },
        /*上传图片*/
        upload: { 'p': 'worker', 'ac': 'coupon', 'operate': 'upload_bg_whLicense', 'type': 'share','category':'1' },
        /*选择地区省*/
        province: { 'p': 'worker', 'ac': 'areas', 'operate': 'province' },
        /*选择地区市*/
        city: { 'p': 'worker', 'ac': 'areas', 'operate': 'province' },
        /*添加地区*/
        area: { 'p': 'worker', 'ac': 'coupon', 'operate': 'areaUsers' },
        /*编辑*/
        edit: { 'p': 'worker', 'ac': 'coupon', 'operate': 'edit_issue', 'type': 'issue','category':'1' },
        /*实发数量*/
        detail: { 'p': 'worker', 'ac': 'coupon', 'operate': 'issue_used_info', 'type': 'issue','category':'1' },
        /*查看记录*/
        reocordList: { 'p': 'worker', 'ac': 'coupon', 'operate': 'issue_record', 'type': 'issue','category':'1' },
        num: { 'p': 'worker', 'ac': 'coupon', 'operate': 'issue_used_info', 'type': 'issue','category':'1' }
    },
    /*新注册发券*/
    newcoupon: {
        show: { 'p': 'worker', 'ac': 'coupon', 'operate': 'show', 'type': "register" },
        /*上传图片*/
        upload: { 'p': 'worker', 'ac': 'coupon', 'operate': 'upload_bg_whLicense', 'type': 'register', 'uploadType': 'noticebg' },
        /*编辑*/
        edit: { 'p': 'worker', 'ac': 'coupon', 'operate': 'edit_reg_share', 'type': 'register', 'action': 'edit' },
        add: { 'p': 'worker', 'ac': 'coupon', 'operate': 'edit_reg_share', 'type': 'register', 'action': 'add' },
        delete: { 'p': 'worker', 'ac': 'coupon', 'operate': 'edit_reg_share', 'type': 'register', 'action': 'delete' },
        history: { 'p': 'worker', 'ac': 'coupon', 'operate': 'issue_record', 'type': 'register' },
        num: { 'p': 'worker', 'ac': 'coupon', 'operate': 'reg_share_used_info', 'type': 'register' }
    },
    /*用户分享发券*/
    sharecoupon: {
        show: { 'p': 'worker', 'ac': 'coupon', 'operate': 'show', 'type': 'share' },
        add: { 'p': 'worker', 'ac': 'coupon', 'operate': 'edit_reg_share', 'type': 'share', 'action': "add" },
        edit: { 'p': 'worker', 'ac': 'coupon', 'operate': 'edit_reg_share', 'type': 'share', 'action': 'edit' },
        /*上传图片*/
        upload: { 'p': 'worker', 'ac': 'coupon', 'operate': 'upload_bg_whLicense', 'type': 'share' },
        delete: { 'p': 'worker', 'ac': 'coupon', 'operate': 'edit_reg_share', 'type': 'share', 'action': 'delete' },
        history: { 'p': 'worker', 'ac': 'coupon', 'operate': 'issue_record', 'type': 'share' },
        num: { 'p': 'worker', 'ac': 'coupon', 'operate': 'reg_share_used_info', 'type': 'share' }
    },
    
    /*战神手动发券*/
   aresCoupon:{
   	show:{'p': 'worker', 'ac': 'coupon', 'operate': 'show', 'type': 'issue','category':'2'},
   	 /*上传图片*/
        upload: { 'p': 'worker', 'ac': 'coupon', 'operate': 'upload_bg_whLicense', 'type': 'share' },
        /*选择地区省*/
        province: { 'p': 'worker', 'ac': 'areas', 'operate': 'province' },
        /*选择地区市*/
        city: { 'p': 'worker', 'ac': 'areas', 'operate': 'province' },
        /*添加地区*/
        area: { 'p': 'worker', 'ac': 'coupon', 'operate': 'areaUsers' },
        /*编辑*/
        edit: { 'p': 'worker', 'ac': 'coupon', 'operate': 'edit_issue', 'type': 'issue','category':'2'},
        /*实发数量*/
        detail: { 'p': 'worker', 'ac': 'coupon', 'operate': 'issue_used_info', 'type': 'issue','category':'2' },
        /*查看记录*/
        reocordList: { 'p': 'worker', 'ac': 'coupon', 'operate': 'issue_record', 'type': 'issue','category':'2' },
        num: { 'p': 'worker', 'ac': 'coupon', 'operate': 'issue_used_info', 'type': 'issue' ,'category':'2'}
   },
   /*新注册战神券*/
  	newAresCoupon:{
  		show: { 'p': 'worker', 'ac': 'coupon', 'operate': 'show', 'type': "register" ,'category':'2'},
        /*上传图片*/
        upload: { 'p': 'worker', 'ac': 'coupon', 'operate': 'upload_bg_whLicense', 'type': 'register', 'uploadType': 'noticebg','category':'2' },
        /*编辑*/
        edit: { 'p': 'worker', 'ac': 'coupon', 'operate': 'edit_reg_share', 'type': 'register', 'action': 'edit','category':'2' },
        add: { 'p': 'worker', 'ac': 'coupon', 'operate': 'edit_reg_share', 'type': 'register', 'action': 'add','category':'2' },
        delete: { 'p': 'worker', 'ac': 'coupon', 'operate': 'edit_reg_share', 'type': 'register', 'action': 'delete','category':'2' },
        history: { 'p': 'worker', 'ac': 'coupon', 'operate': 'issue_record', 'type': 'register' ,'category':'2'},
        num: { 'p': 'worker', 'ac': 'coupon', 'operate': 'reg_share_used_info', 'type': 'register','category':'2' }
  	},
  	/*个人发券*/
  	personalCoupon:{
  		show:{'p': 'worker', 'ac': 'coupon', 'operate': 'single_coupon_list'},
  		postCoupon:{'p': 'worker', 'ac': 'coupon', 'operate': 'set_single_coupon'}
  	},
  	
  	/*战神提现审核*/
  	userClearing:{
  		show:{'p': 'worker', 'ac': 'mars_order_check', 'operate': 'show'},
  		check:{'p': 'worker', 'ac': 'mars_order_check', 'operate': 'check'},
  		order:{'p': 'worker', 'ac': 'mars_order_check', 'operate': 'cycleOrders'},
  		set:{'p': 'worker', 'ac': 'mars_order_check', 'operate': 'set_exception'},
  		cancel:{'p': 'worker', 'ac': 'mars_order_check', 'operate': 'cancel_exception'}
  	},
  	
    /*提现审核*/
    countVerify: {
        /*列表*/
        show: { 'p': 'worker', 'ac': 'clearCheck', 'operate': 'show' },
        /*审核完成*/
        check: { 'p': 'worker', 'ac': 'clearCheck', 'operate': 'check' },
        /*订单数*/
        orderNum: { 'p': 'worker', 'ac': 'clearCheck', 'operate': 'cycleOrders' },
        /*充值详情*/
        rechargeInfo: { 'p': 'worker', 'ac': 'clearCheck', 'operate': 'cycleRecharge' },
        /*订单详情*/
        orderInfo: { 'p': 'worker', 'ac': 'clearCheck', 'operate': 'cycleOrders' },
        /*设为订单异常*/
        exception: { 'p': 'worker', 'ac': 'clearCheck', 'operate': 'cancel_exception' },
        setExcep: { 'p': 'worker', 'ac': 'clearCheck', 'operate': 'set_exception' },
        /*热卖详情*/
       hotSale:{'p': 'worker', 'ac': 'clearCheck', 'operate': 'cycleHotSale' }
    },
    /*网吧财务结款*/
    cashApply: {
        show: { 'p': 'worker', 'ac': 'barClearing', 'operate': 'show' },
        /*设为已提现*/
        set: { 'p': 'worker', 'ac': 'barClearing', 'operate': 'clearing' },
        /*订单详情*/
       orderInfo:{'p': 'worker', 'ac': 'barClearing', 'operate': 'cycleOrders'},
       /*充值详情*/
       rechargeInfo:{'p': 'worker', 'ac': 'barClearing', 'operate': 'cycleRecharge'},
      /*热卖详情*/
       hotSale:{'p': 'worker', 'ac': 'barClearing', 'operate': 'cycleHotSale'}
    },
    /*战神财务结款*/
   aresFinance:{
   	show:{'p': 'worker', 'ac': 'mars_order_clear', 'operate': 'show'},
   	set:{'p': 'worker', 'ac': 'mars_order_clear', 'operate': 'set_clearing'}
   },
    /*玩家补贴设置*/
    subsidy: {
        show: { 'p': 'worker', 'ac': 'userSubsidy', 'operate': 'show' },
        add: { 'p': 'worker', 'ac': 'userSubsidy', 'operate': 'add_edit', 'type': 'add' },
        edit: { 'p': 'worker', 'ac': 'userSubsidy', 'operate': 'add_edit', 'type': 'edit' },
        delete: { 'p': 'worker', 'ac': 'userSubsidy', 'operate': 'del' },
        history: { 'p': 'worker', 'ac': 'userSubsidy', 'operate': 'history' }
    },
    /*财务汇总*/
    gatherFinance:{
    	show:{'p': 'worker', 'ac': 'financial_summary', 'operate': 'financial_all'},
    	list:{'p': 'worker', 'ac': 'financial_summary', 'operate': 'financial_day'}
    },
    /*网吧补贴设置*/
    barSubsidy: {
        show: { 'p': 'worker', 'ac': 'barsSubsidy', 'operate': 'show' },
        edit: { 'p': 'worker', 'ac': 'barsSubsidy', 'operate': 'add_edit', 'type': 'edit' },
        add: { 'p': 'worker', 'ac': 'barsSubsidy', 'operate': 'add_edit', 'type': 'add' },
        delete: { 'p': 'worker', 'ac': 'barsSubsidy', 'operate': 'del' },
        history: { 'p': 'worker', 'ac': 'barsSubsidy', 'operate': 'history' }
    },
    /*约战控制*/
    playControl:{
    	show:{'p': 'worker', 'ac': 'match_control', 'operate': 'show'},
    	add:{'p': 'worker', 'ac': 'match_control', 'operate': 'add'},
    	delete:{'p': 'worker', 'ac': 'match_control', 'operate': 'del'}
    },
    /*app启动页*/
    appStart: {
        show: { 'p': 'worker', 'ac': 'app_start_page', 'operate': 'show' },
        add: { "p": "worker", "ac": "app_start_page", "operate": "add" },
        use: { "p": "worker", "ac": "app_start_page", "operate": "use" },
        delete: { "p": "worker", "ac": "app_start_page", "operate": "del" },
        upload: { "p": "worker", "ac": "app_start_page", "operate": "upload" }
    },
    /*下单留言管理*/
    orderMessage: {
        show: { 'ac': 'msg_management', 'operate': 'show', 'p': 'worker' },
        add: { 'ac': 'msg_management', 'operate': 'add', 'p': 'worker' },
        del: { 'ac': 'msg_management', 'operate': 'del', 'p': 'worker' }
    },
    /*滚动banner管理*/
    scrollBanner: {
        show: { 'ac': 'banner_control', 'operate': 'show', 'p': 'worker' },
        add: { 'ac': 'banner_control', 'operate': 'add', 'p': 'worker' },
        del: { 'ac': 'banner_control', 'operate': 'del', 'p': 'worker' },
        edit: { 'ac': 'banner_control', 'operate': 'edit', 'p': 'worker' },
        upload: { 'ac': 'banner_control', 'operate': 'upload_banner', 'p': 'worker' }
    },
    /*组合banner*/
    groupBanner: {
        show: { 'p': 'worker', 'ac': 'combine_banner_control', 'operate': 'show' },
        add: { 'p': 'worker', 'ac': 'combine_banner_control', 'operate': 'add' },
        deleted: { 'p': 'worker', 'ac': 'combine_banner_control', 'operate': 'del' },
        edit: { 'p': 'worker', 'ac': 'combine_banner_control', 'operate': 'edit' },
        upload: { 'p': 'worker', 'ac': 'combine_banner_control', 'operate': 'upload_banner' }
    },
    /*手机端横排banner*/
   horiBaner:{
   	 show:{'p': 'worker', 'ac': 'position_banner_control', 'operate': 'show'},
   	 edit:{'p': 'worker', 'ac': 'position_banner_control', 'operate': 'edit'}
   },
   
    /*网吧推送设置*/
    barPushSet: {
        addbar: { 'p': 'worker', 'ac': 'push_setting', 'operate': 'addBar' },
        add: { 'p': 'worker', 'ac': 'push_setting', 'operate': 'addBarRule' },
        deleted: { 'p': 'worker', 'ac': 'push_setting', 'operate': 'deleteRule' },
        update: { 'p': 'worker', 'ac': 'push_setting', 'operate': 'editBarRule' },
        show: { 'p': 'worker', 'ac': 'push_setting', 'operate': 'show' }
    },
    /*网吧活动推送设置*/
    activePushSet: {
        addbar: { 'p': 'worker', 'ac': 'push_setting', 'operate': 'addAct' },
        add: { 'p': 'worker', 'ac': 'push_setting', 'operate': 'addActRule' },
        deleted: { 'p': 'worker', 'ac': 'push_setting', 'operate': 'deleteRule' },
        update: { 'p': 'worker', 'ac': 'push_setting', 'operate': 'editActRule' },
        show: { 'p': 'worker', 'ac': 'push_setting', 'operate': 'actShow' }
    },
    /*积分设置*/
    integralset: {
        show: { 'p': 'worker', 'ac': 'integration', 'operate': 'show' },
        edit: { 'p': 'worker', 'ac': 'integration', 'operate': 'edit' }
    },
    /*关键字过滤*/
    filterKeywords: {
        show: { 'p': 'worker', 'ac': 'keywordFilter', 'operate': 'show' },
        del: { 'p': 'worker', 'ac': 'keywordFilter', 'operate': 'del' },
        add: { 'p': 'worker', 'ac': 'keywordFilter', 'operate': 'add' }
    },
    /*标签管理*/
    labelManage: {
        show: { 'p': 'worker', 'ac': 'tagManage', 'operate': 'show' },
        del: { 'p': 'worker', 'ac': 'tagManage', 'operate': 'del' },
        add: { 'p': 'worker', 'ac': 'tagManage', 'operate': 'add' },
        addImg:{ 'p': 'worker', 'ac': 'tagManage', 'operate': 'add_game_icon' },
        delImg:{ 'p': 'worker', 'ac': 'tagManage', 'operate': 'del_game_icon' }
    },
    /*用户约战管理*/
    playerManage: {
        show: { 'p': 'worker', 'ac': 'matchManage', 'operate': 'show' },
        inviteInfo: { 'p': 'worker', 'ac': 'matchManage', 'operate': 'userInfo' },
        acceptInfo: { 'p': 'worker', 'ac': 'matchManage', 'operate': 'accept_invite' },
        checkInfo: { 'p': 'worker', 'ac': 'matchManage', 'operate': 'matchInfo' },
        offLine: { 'p': 'worker', 'ac': 'matchManage', 'operate': 'off_line' },
        delete: { 'p': 'worker', 'ac': 'matchManage', 'operate': 'del_match' }
    },
    /*约战举报*/
    reportGame: {
        show: { 'p': 'worker', 'ac': 'match_report', 'operate': 'show' },
        reporterInfo: { 'p': 'worker', 'ac': 'match_report', 'operate': 'userInfo' },
        matchInfo: { 'p': 'worker', 'ac': 'match_report', 'operate': 'matchInfo' },
        conversation: {}
    },
    /*战神举报*/
    aresReport:{
    	show:{'p': 'worker', 'ac': 'match_report', 'operate': 'mars_report' }
    },
    /*信息采集*/
    collectInfo: {
        show: { 'p': 'worker', 'ac': 'collect_bars', 'operate': 'show' },
        add: { 'p': 'worker', 'ac': 'collect_bars', 'operate': 'add_bars' },
        delete: { 'p': 'worker', 'ac': 'collect_bars', 'operate': 'del_bars' },
        pShow: { 'p': 'worker', 'ac': 'collect_bars', 'operate': 'user_collect' },
        addedTo: { 'p': 'worker', 'ac': 'collect_bars', 'operate': 'add_to_all' }
    },
    /*游戏管理*/
    gamesManger: {
        show: { 'p': 'worker', 'ac': 'gameManage', 'operate': 'show' },
        addg: { 'p': 'worker', 'ac': 'gameManage', 'operate': 'add_game' },
        adds: { 'p': 'worker', 'ac': 'gameManage', 'operate': 'add_child' },
        delete: { 'p': 'worker', 'ac': 'gameManage', 'operate': 'del_game' },
        sort: { 'p': 'worker', 'ac': 'gameManage', 'operate': 'sort' }
    },
    /*手机版本管理*/
    verManage:{
    	show: { 'p': 'worker', 'ac': 'minVer_setting', 'operate': 'show' },
    	edit: { 'p': 'worker', 'ac': 'minVer_setting', 'operate': 'edit' }
    },
     /*七牛图片上传*/
    qiNiu:{
    	upload:{ 'p': 'worker', 'ac': 'qiniu_upload', 'operate': 'get_upToken' },
    	down:{ 'p': 'worker', 'ac': 'qiniu_upload', 'operate': 'get_downloadUrl' }
    },
    /*管理员管理*/
    UserManage:{
    	add:{ 'p': 'worker', 'ac': 'workerList', 'operate': 'add' },
    	edit:{ 'p': 'worker', 'ac': 'workerList', 'operate': 'edit' },
    	del:{ 'p': 'worker', 'ac': 'workerList', 'operate': 'del' }
    },
    /*限制用户每日最多可获取优惠券数量*/
    couponLimit:{
    	show:{ 'p': 'worker', 'ac': 'order_set', 'operate': 'limit_coupons_show' },
    	edit:{ 'p': 'worker', 'ac': 'order_set', 'operate': 'limit_coupons_edit' }
    },
    /*获取所有的游戏*/
	getAllGame:{ 'p': 'worker', 'ac': 'tagManage', 'operate': 'get_all_games' },
	/*网页申请战神列表*/
	applyWarList:{ 'p': 'worker', 'ac': 'mars_apply', 'operate': 'mars_apply_list' },
	/*客服审核时间*/
	serviceDate:{
		show:{'p': 'worker', 'ac': 'order_set', 'operate': 'check_time_show'},
		set:{'p': 'worker', 'ac': 'order_set', 'operate': 'check_time_setting'}
	},
	/*权限*/
	role:{
		showAll:{'p': 'worker', 'ac': 'workerList', 'operate': 'getALlRoleName'},
		show:{'p': 'worker', 'ac': 'workerList', 'operate': 'powerShow'},
		add:{'p': 'worker', 'ac': 'workerList', 'operate': 'addRoleName'},
		edit:{'p': 'worker', 'ac': 'workerList', 'operate': 'editRoleName'},
		del:{'p': 'worker', 'ac': 'workerList', 'operate': 'delRoleName'},
		set:{'p': 'worker', 'ac': 'workerList', 'operate': 'powerSetting'},
		showRule:{'p': 'worker', 'ac': 'workerList', 'operate': 'powerShow'}
	},
	/*数据统计*/
	countData:{
		baseData:{'p': 'worker', 'ac': 'record'}
	},
	
	/*网吧认领*/
	claimBar:{
		show:{'p': 'worker', 'ac': 'barClaim','operate':'show'},
		claim:{'p': 'worker', 'ac': 'barClaim','operate':'affirm'},
		cancel:{'p': 'worker', 'ac': 'barClaim','operate':'cancel'}
	},
	/*网吧留言*/
	barMessage:{
		show:{'p': 'worker', 'ac': 'message','operate':'show'},
		offline:{'p': 'worker', 'ac': 'message','operate':'up_down'}
	},
	/*战神封面票选*/
	marsVote:{
		show:{'p': 'worker', 'ac': 'mars_vote','operate':'show'},
		view:{'p': 'worker', 'ac': 'mars_vote','operate':'showRule'},
		edit:{'p': 'worker', 'ac': 'mars_vote','operate':'editRule'},
		check:{'p': 'worker', 'ac': 'mars_vote','operate':'check'},
		add:{'p': 'worker', 'ac': 'mars_vote','operate':'setVote'},
		offline:{'p': 'worker', 'ac': 'mars_vote','operate':'offline'},
		marsApply:{'p': 'worker', 'ac': 'mars_vote','operate':'marsApplyList'},
		stageShow:{'p': 'worker', 'ac': 'mars_vote','operate':'stageShow'},
		stageAdd:{'p': 'worker', 'ac': 'mars_vote','operate':'add_vote_stage'},
		close_vote:{'p': 'worker', 'ac': 'mars_vote','operate':'close_vote'},
		trueVoteNum:{'p': 'worker', 'ac': 'mars_vote','operate':'voteDetails'}
	},
	
	/*生成用户邀请码*/
	userCodemessage:{
		show:{'p': 'worker', 'ac': 'code_manage_user','operate':'show'},
		add:{'p': 'worker', 'ac': 'code_manage_user','operate':'add'},
		disabled:{'p': 'worker', 'ac': 'code_manage_user','operate':'check'},
		update:{'p': 'worker', 'ac': 'code_manage_user','operate':'edit'}
	},
	/*用户数*/
	userNum:{'p': 'worker', 'ac': 'code_manage_user','operate':'users'},
	
	/*邀请送券活动*/
	letter:{
		show:{'p': 'worker', 'ac': 'invitation','operate':'show'},
		singleSend:{'p': 'worker', 'ac': 'invitation','operate':'send'}, //单个发送
		batchSend:{'p': 'worker', 'ac': 'invitation','operate':'all'}, //批量发送
		num:{'p': 'worker', 'ac': 'invitation','operate':'see'} //查看数量
	},
	
	/*网吧端广告*/
	barAd:{
		show:{'p': 'worker', 'ac': 'bar_login_ad','operate':'ad_now_show'},
		set:{'p': 'worker', 'ac': 'bar_login_ad','operate':'ad_setting'}
	},
	
},
common = {
    /*页面公用元素*/
    ele: {
        box: '[role="Box"]', //页面最外层的容器，阻止重复冒泡事件
        table: '[role="table"]:visible',  //table列表                 
        search: '[role="search"]',  //搜索按钮 
        excel: '[role="excel"]',  //导出按钮
        add: '[role="add"]',  //新增按钮
        save: '[role="save"]',  //保存按钮
        cancel: '[role="cancel"]',  //取消按钮
        back: '[role="back"]',  //取消按钮
        edit: '[role="edit"]',  //编辑按钮
        del: '[role="del"]',  //删除按钮
        form: '[role="form"]',  //表单，用于获取表单所有元素
        searchForm: '[role="searchForm"]'  //搜索表单，用于获取表单所有元素
    },
    /*缓存数据容器*/
    data: {},
    /*缓存html数据容器*/
    htmlData: {},
    /*缓存js数据容器*/
    jsData: {},
    /*参数容器*/
    param: {},
    /*权限*/
    Acc:null,
    AccO:{
    	O:false,
    	E:false
    },
    /*模块*/
    module: [{
        id:1,
        name: 'ManageAccount',
        cname: '账号管理',
        child: [
			{ name: 'userAccount', cname: '用户账号' ,id:1},
			{ name: 'aresAccount', cname: '战神账号' ,id:2 },
			{ name: 'barAccount', cname: '网吧账号' ,id:3 }
        ]
    }, {
        id:2,
        name: 'ManageOrder',
        cname: '订单管理',
        child: [
            { name: 'suspendOrder', cname: '待处理订单' ,id:1 },
            { name: 'finishedOrder', cname: '已完成订单' ,id:2 },
            { name: 'canceledOrder', cname: '已取消订单' ,id:3 }
        ]
    }, {
        id:3,
        name: 'ManageRecharge',
        cname: '充值/热卖管理',
        child: [
            { name: 'rechargeRecord', cname: '会员充值记录' ,id:1 },
            { name: 'hotSaleHistory', cname: '热卖订单记录' ,id:2 },
            { name: 'hotSaleApply', cname: '热卖申请' ,id:3 }
        ]
    }, {
        id:4,
        name: 'ManageActive',
        cname: '活动管理',
        child: [
            //{name: 'officialActivity',cname: '官方活动'},
            { name: 'barActivity', cname: '网吧活动' ,id:1 },
            { name: 'aresPlayOrder', cname: '战神陪玩订单' ,id:2 },
            { name: 'aresDynamic', cname: '战神动态'  ,id:3},
            {name:'claimBar',cname:'网吧认领',id:4},
			{name:'barMessage',cname:'网吧留言',id:5},
			{name:'letterActive',cname:'邀请送券活动',id:6},
        ]
    }, {
        id:5,
        name: 'ManageCoupon',
        cname: '优惠券管理',
        child: [
            { name: 'handCoupon', cname: '手动发券' ,id:1 },
            { name: 'newCoupon', cname: '新注册充值发券' ,id:2 },
            { name: 'newAresCoupon', cname: '新注册战神发券' ,id:3 },
            { name: 'shareCoupon', cname: '用户分享发券'  ,id:4},
            { name: 'personalCoupon', cname: '个人发券' ,id:5 },
            { name: 'aresHandCoupon', cname: '战神手动发券',id:6 },
        ]
    }, {
        id:6,
        name: 'ManageClear',
        cname: '结算管理',
        child: [
        	{ name: 'userCheck', cname: '用户提现审核' ,id:1 },
        	{ name: 'userFinance', cname: '用户财务结款' ,id:2 },
            { name: 'clearCheck', cname: '网吧提现审核' ,id:3 },
            { name: 'barClearing', cname: '网吧财务结款' ,id:4 },
            { name: 'playerSubsidy', cname: '玩家补贴设置' ,id:5 },
            { name: 'barSubsidy', cname: '网吧补贴设置' ,id:6 },
            { name: 'gatherFinance', cname: '财务汇总' ,id:7 },
        ]
    },
		{
        	id:7,
		    name: 'ManageFeedback',
		    cname: '投诉反馈',
		    child: [
				{ name: 'feedback', cname: '用户反馈' ,id:1 },
				{ name: 'complain', cname: '用户投诉' ,id:2 },
				{ name: 'playReport', cname: '约战举报' ,id:3 }
		    ]
		},
		{
        id:8,
		    name: 'ManageMobile',
		    cname: '手机端管理',
		    child: [
				{ name: 'appStartPage', cname: 'app启动页管理' ,id:1 },
				{ name: 'orderMessage', cname: '下单留言管理' ,id:2 },
				{ name: 'bannerControl', cname: '滚动banner管理' ,id:3 },
				{ name: 'groupBanner', cname: '组合bannner管理' ,id:4 },
				{ name: 'barPushSet', cname: '网吧推送设置' ,id:5 },
				{ name: 'activePushSet', cname: '网吧活动推送设置' ,id:6 },
				{ name: 'integralSet', cname: '积分设置' ,id:7 },
				{ name: 'playControl', cname: '约战控制' ,id:8 },
				{ name: 'horiBanner', cname: '横排banner' ,id:9 }
		    ]
		},
		{
        id:10,
		    name: 'ManageGames',
		    cname: '约战管理',
		    child: [
				{ name: 'playerManage', cname: '用户约战管理' ,id:1 },
				{ name: 'collectInfo', cname: '信息采集'  ,id:2},
				{ name: 'filterKeywords', cname: '关键字过滤' ,id:3 },
//				{ name: 'reportGame', cname: '约战举报' ,id:4 },
				{ name: 'labelManage', cname: '标签管理'  ,id:5},
                { name: 'gamesManger', cname: '约战游戏管理' ,id:6 }
		    ]
		},
		{
		
		{
        id:9,
		    name: 'ManageSystem',
		    cname: '系统管理',
		    child: [
				//{name: 'loteryProbability',cname: '抽奖比例设置'},
				//{name: 'loteryImport',cname: '抽奖奖品导入'},
				{ name: 'areaContorl', cname: '地区控制' ,id:1 },
				{ name: 'orderSetting', cname: '网吧订单设置' ,id:3 },
				{ name: 'orderControl', cname: '网吧接单控制' ,id:4 },
                { name: 'barConfig', cname: '网吧机器配置管理' ,id:5 },
				{ name: 'delManage', cname: '删除账号管理' ,id:6 },
				{ name: 'applyBarMember', cname: '网吧推广人员申请' ,id:7 },
				{name: 'codeManage',cname: '管理邀请码' ,id:8},
				{name: 'verManage',cname: '手机版本管理' ,id:9},
				{ name: 'applyWar', cname: '战神陪玩网页申请' ,id:11 },
				{name: 'UserManage',cname: '管理员管理' ,id:10},
				{ name: 'AccManage', cname: '权限管理' ,id:12 },
				{ name: 'stageVote', cname: '票选活动管理' ,id:13 },
				{name:'userCodeManage',cname:'用户邀请码管理',id:14},
				{ name: 'barAd', cname: '网吧登录广告' ,id:15 },
//				{name:'officialBanner',cname:'官网首页banner管理',id:15},
		    ]
		},
		{  
        	id:13,
		    name: 'ManageGameCenter',
		    cname: '游戏中心',
		    child: [
				{ name: 'newsInfo', cname: '资讯信息' ,id:1 },
				{ name: 'gameInfo', cname: '游戏信息' ,id:2 },
				{ name: 'gameClassify', cname: '游戏分类管理' ,id:3 },
				{ name: 'gameNewsSort',cname: '游戏与资讯排序' ,id:4},
				//{ name: 'integral',cname: '积分设置' ,id:5},
				{ name: 'rowBanner',cname: '首页横排banner' ,id:6},
				{ name: 'warsPush',cname: '首页战神推送' ,id:7}
		    ]
		},
		{ //数据统计
			id:12,
			name:'ManageData',
			cname:'数据分析系统',
			child:[
				{ name: 'barData', cname: '网吧基础数据' ,id:1 },
				{ name: 'barAddData', cname: '网吧新增数据' ,id:2 },
				{ name: 'barActiveData', cname: '网吧活跃数据' ,id:3 },
				{ name: 'barConvenData', cname: '网吧转化数据' ,id:4 }
			]
		},
		{  //前端测试模块
        	id:11,
		    name: 'Coder',
		    cname: '前端专用测试',
		    child: [
				{ name: 'tableTx', cname: '生产表格搜索组件' ,id:1 },
				{ name: 'qiniuTx', cname: '七牛图片上传测试' ,id:2 },
				{ name: 'AccManage', cname: '权限设置' ,id:3 },
				{ name: 'codeManage',cname: '管理邀请码' ,id:4}
		    ]
		},
		
		{  //这个模块请保证放在最后一位
		    name: 'Common',
		    cname: '公共内页',
		    child: [
				{ name: 'activeArae', cname: '官方活动—活动详情' },
				{ name: 'activeDetail', cname: '官方活动—参加人数详情' },
				{ name: 'activeInfo', cname: '网吧活动—参加人数' },
				{ name: 'collect', cname: '用户账号—收藏记录' },
				{ name: 'netBar', cname: '网吧详情' },
				{ name: 'barOrder', cname: '网吧订单数' },
          
		    ]
		}
    ],
    /*上一个对象*/
    prevID: null,
    /*当前对象*/
    templateID: null,
    /*
	 * 加载js文件
	 * @param {String} url js路径
	 * @param {function} _module 模块
	 * */
    loadJS: function (_module, url,callback) {
        common.jsData[_module] ? new common.jsData[_module]().Invoke() : (function () {

            $.getScript(url, function () {
                try{
                    new common.jsData[_module]().Invoke();
                    callback && callback();
                }catch(e){
                	//TODO handle the exception
                	throw('页面js出错：'+e);
                }
            });
        })();
    },
    /**/
    /*
	 * 获取模块信息
	 * @param {String} _key 名称
	 * @param {String} c    父级与子级分隔符
	 * */
    getModule: function (_key, c) {
        c ? '' : c = '_';
        for (var i = 0; i < common.module.length; i++) {
            if (common.module[i]['child']) {
                var item = common.module[i]['child'];
                for (var j = 0; j < item.length; j++) {
                    if (item[j]['name'] == _key) {
                        return common.module[i]['name'] + c + item[j]['name'];
                    }
                }
            }
        }
        return null;
    },
    /**
	 * Ajax请求
	 * @param {Object} opt
	 * */
    Ajax: function (opt) {

        var defaults = {
            type: 'post',
            url: API.root,
            data: {},
            async: true,
            dataType: 'json',
            loading: true,
            callback: function () { },
            error: function () { }
        }
        /*加入token*/
        if (['login', 'logout'].indexOf(opt.data.ac) == -1) {
            opt.data.token = common.getCookie('token');
        }
        opt = $.extend(defaults, opt || {});

        /*加载效果*/
        opt.loading && common.loading.show();

        $.ajax({
            type: opt.type,
            url: opt.url,
            data: opt.data,
            async: opt.async,
            success: function (db) {
                db = common.filter(db);
                opt.callback(db);
                common.AccOperate(common.AccO.O,common.AccO.E);
                opt.loading && common.loading.hide();
            },
            error: opt.error
        });
    },
    /**
	 * 设置Cookie
	 * @param {String} name  键
	 * @param {String} value 值
	 * @param {Date} time  过期时间 单位：天
	 * */
    setCookie: function (name, value, time) {
        var date = new Date();
        date.setTime(date.getTime() + time * 24 * 60 * 60 * 1000);  //设置过期时间，单位：毫秒
        document.cookie = name + "=" + escape(value) + ";expires=" + date.toGMTString() + "domain=" + window.location.host + ";path=/";
    },
    /**
	 * 通过键获取Cookie
	 * @param {String} name  键
	 * */
    getCookie: function (name) {
        var strCookie = document.cookie;
        var arrCookie = strCookie.split(";");
        var arr;
        for (var i = 0; i < arrCookie.length; i++) {
            arr = arrCookie[i].split("=");
            if ($.trim(arr[0]) == name) {
                return unescape(arr[1]);
            }
        }
        return "";
    },
    /**
	 * 通过键删除Cookie
	 * @param {String} name  键
	 * */
    delCookie: function (name) {
        var date = new Date();
        date.setTime(date.getTime() - 1);
        var obj = common.getCookie(name);
        if (obj) {
            document.cookie = name + "=abc;expires=" + date.toGMTString() + "domain=" + window.location.host + ";path=/";
        }

    },
    /**
	 * 设置模块数据缓存
	 * @param {String} _module  模块
	 * @param {Object} data  数据对象
	 */
    setData: function (_module, data) {
        if (typeof (common.data[_module]) == 'undefined') {
            common.data[_module] = {};
        }
        common.data[_module] = data;
    },
    /**
	 * 获取模块缓存数据
	 * @param {String} _module  模块
	 * @param {String} key  键
	 * @return {Object}
	 */
    getData: function (_module, key) {
        if (typeof (common.data[_module]) == 'undefined') return {};
        if (typeof common.data[_module] == 'object') {
            var data = common.data[_module].data;
            for (var i = 0; i < data.length; i++) {
                if (data[i].id == key) {
                    return data[i];
                }
            }
        }
    },
    setHtmlData: function (_module, data) {  /* 设置数据缓存*/
        common.htmlData[_module] = data;
    },
    getHtmlData: function (_module) {  /* 获取Html缓存数据*/
        return common.htmlData[_module];
    },
    /**
	 * 获取表单值
	 * @param {dom对象} obj Form对象
	 * @return {JSON}  {a:'11',b:'22'}
	 * */
    getFormValue: function (obj) {
        var formObj, resultObj = {};
        if (!obj) return;
        formObj = obj.serializeArray();
        for (var i = 0; i < formObj.length; i++) {
            if (!resultObj[i]) {
                resultObj[formObj[i].name] = '';
            }
            resultObj[formObj[i].name] = $.trim(formObj[i].value);
        }
        return resultObj;
    },
    /**
	 * 对返回数据处理
	 * @param {Object} db
	 * */
    filter: function (db) {
        if (db instanceof Object) return db;

        try{
			db = JSON.parse(db);
		}catch(e){
			//TODO handle the exception
			window.console && console.error('json数据结构有误！请联系后台程序猿');
		}
		
        /**
		 * 统一返回为v1.2参数
		 * remark: v1.1 返回 msg-代码号， detail-消息
		 * 		v1.2返回resultCode-代码号，msg-消息
		 */

        if (db.detail != undefined) {
            db.resultCode = db.msg;
            db.msg = db.detail;
        }
        if (db.resultCode != '100') {
            $(common.ele.excel).addClass('disabled');
        } else {
            $(common.ele.excel).removeClass('disabled');
        }

        if (db.resultCode == '999') {
            location.href = './index.html';
        }
        return db;
    },
    /**
	 * 分割
	 * @param {String} s
	 * @param {Char} c
	 * @return {Array}
	 * */
    split: function (s, c) {
        c = c ? c : ',';
        return s.split(c);
    },
    substring: function (s, c, n) {  /* 截取字符，添加省略号...*/
        c = c || '...';
        n = n || 20;
        if (!s) return false;
        return s.length < n ? s : s.substring(0, n) + c;
    },
    /*返回上一页*/
    back: function () {
        $(common.prevID).click();
    },
    refresh: function () {  /*刷新页面*/
        /*去掉弹出框*/
        new $.MyAlert().Method.hide();
        /*刷新页面*/
        $(common.templateID).click();
    },
    loading: {  /*加载效果*/
        show: function (type) {
            var width = document.body.clientWidth;
            var str = '<div id="LoadImg" class="loading pageLoadImg"></div>';
            var str1='<div id="LoadImg" class="loading upLoadImg"></div>';
            $('.loading').remove();
            $(document.body).append(type?str1:str);
        },
        hide: function () {
            setTimeout(function () {
                $('.loading').hide();
            }, 100);
        }
    },
    /***********************************************Util***********************************************************/
    request: function (name) {  /*获取url参数*/
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
		 var r = window.location.search.substr(1).match(reg);
		 if (r!=null) return (r[2]); return null;
    },
    isIphone: function () {  /*是否iphone*/
        return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent);
    },
    isWeixn: function (){  /*是否微信*/
        var ua = navigator.userAgent.toLowerCase();
	    if(ua.match(/MicroMessenger/i)=="micromessenger") {
	        return true;
	    } else {
	        return false;
	    }
    },
    /*
     * 判断是否存在页面权限
     * @param {int} id 页面ID
     * */
    isAccPage:function(id){
    	if(!common.Acc) return false;
    	for(var i in common.Acc['show']){
    		if(i==id){
    			return true;
    		}
    	}
    	return false;
    },
    /*
     * 判断是否存在页面显示权限
     * @param {string} type 类型： show,operate,export
     * @param {int} pid 父级ID
     * @param {int} id 页面ID
     * */
    isAccType:function(type,pid,id){
    	if(common.Acc=='All'){
    		return true;
    	}
    	//转为String格式
    	id=''+id;
    	return !!(common.Acc && common.Acc[type] && common.Acc[type][pid] && common.Acc[type][pid].indexOf(id)>-1);
    },
    /*是否能操作*/
    AccOperate:function(isOperate,isExport){
    	if(!isOperate){
    $('[data-motion*="add"],[data-motion*="edit"],[data-btn*="edit"],[data-btn],[e_type],[role="save"],[role="add"],[role="edit"],[data-batch],[data-add]').not('[e_type="info"],[data-btn="filter"]').hide();
    	}
    	if(!isExport){
    		$('[role="excel"]').hide();
    	}
    },
    /**
	 * 上传图片
	 * @param {Object} opt 参数对象
	 * @param {object} obj 操作对象 (.selector | #selector)
	 * @param {String} file 服务端接收的名称
	 * @param {Function} callback 回调函数
	 * @return {String} result
	 * 依赖库：/js/plugin/ajaxupload.js
	 * */
    upLoad: function (opt) {
    	
    	/*
    	 * 默认转到七牛上传
    	 * 需修改 callback(url) 》   callback(name,url) 
    	 * */
    	common.QiNiuUpLoad(opt);
    	return;
    	
        //上传控件ID
        var inputFile = '#absFileInput';

        // 创建一个上传参数
        var uploadOption = {
            // 提交目标
            action:opt.url || API.root, //'http://upload.qiniu.com/', 
            // 参数
            data: $.extend({}, opt.data, {
                token:opt.token || common.getCookie('token')
            }),
            name:opt.file || 'file',
            // 自动提交
            autoSubmit: true,
            // 选择文件之后…
            onChange: function (file, extension) {
                if (opt.changeCallback) {
                    return opt.changeCallback(extension);
                } else {
                    if (new RegExp(/(jpg)|(jpeg)|(bmp)|(png)/i).test(extension)) {

                    } else {
                        $.MyAlert({
                            content: '仅支持jpeg、bmp、png、jpg格式的图片'
                        });
                        return false;
                    }
                }
            },
            // 开始上传文件
            onSubmit: function (file, extension) {
                //正在上传...
                common.loading.show(1);
            },
            // 上传完成之后
            onComplete: function (file, response) {
            	common.loading.hide();
                response = JSON.parse(response);
                if (response.resultCode == '100') {
                    opt.callback && opt.callback(response.result);
                } else {
                    $.MyAlert({
                        content: response.msg
                    });
                }
            }
        }
        /*添加加载效果*/
        //$(opt.obj).after('<i class="fa fa-spin fa-spinner hide" id="spin'+opt.obj+'"></i>');
        // 初始化图片上传框
        var oAjaxUpload = new AjaxUpload(opt.obj, uploadOption);
    },
    /*****************************************七牛上传*******************************************************/
    qnURL:(env=='dev'? 'http://upload.qiniu.com/':'https://up.qbox.me'),
    /*七牛上传控件集合*/
    upLoads:{},
    /*上传Token*/
    upToken:'',
    /*下载Token*/ 
    downToken:'',
    /*获取上传Token*/
    getUpToken:function(){
    	var opt={
    		data:config.qiNiu.upload,
    		async:false,
    		callback:function(db){
    			if(db.resultCode=='100'){
    				common.upToken=db.upToken;
    			}else{
    				$.MyAlert({content:'未获取上传凭证：'+db.msg});
    				return;
    			}
    		}
    	}
    	common.Ajax(opt);
    },
    /*获取下载Token*/
    getDownToken:function(name,callback,css,isAsync){
    	var opt={
    		data: $.extend({},config.qiNiu.down,{key:name,css:css || ''}) ,
    		callback:function(db){
    			if(db.resultCode=='100'){
    				callback && callback(name,db.downloadUrl);
    			}else{
    				$.MyAlert({content:'未获取下载凭证：'+db.msg});
    				return;
    			}
    		}
    	}
    	typeof(isAsync)!='undefined' && (opt.async=isAsync)
    	common.Ajax(opt);
    },
    /*
     * 七牛上传控件
     * 依赖： Qiniu plupload
     * 注： 先获取上传凭证 upToken
     */
    QiNiuUpLoad:function(opt){
    	
    	/*获取上传凭证*/
    	common.getUpToken();
    	
    	var id=common.getID();
    	common.upLoads[id]={};
    	common.upLoads[id]=new QiniuJsSDK();
    	opt=opt || {};
    	opt.obj=opt.obj.replace('#','');
    	var _opt={
                runtimes: 'html5,flash,html4',    //上传模式,依次退化
                browse_button: opt.obj || 'pickfiles',       //上传选择的点选按钮，**必需**
                //uptoken_url: '/token',            //Ajax请求upToken的Url，**强烈建议设置**（服务端提供）
                uptoken : common.upToken || '', //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
                // unique_names: true, // 默认 false，key为文件名。若开启该选项，SDK为自动生成上传成功后的key（文件名）。
                // save_key: true,   // 默认 false。若在服务端生成uptoken的上传策略中指定了 `sava_key`，则开启，SDK会忽略对key的处理
                //domain: 'http://qiniu-plupload.qiniudn.com/',   //bucket 域名，下载资源时用到，**必需**
                //container: opt.box || 'container',           //上传区域DOM ID，默认是browser_button的父元素，
                max_file_size: '100mb',           //最大文件体积限制
                flash_swf_url: 'plugin/plupload/Moxie.swf',  //引入flash,相对路径
                max_retries: 3,                   //上传失败最大重试次数
                dragdrop: false,                   //开启可拖曳上传
                drop_element: 'container',        //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
                chunk_size: '4mb',                //分块上传时，每片的体积
                auto_start: true,                 //选择文件后自动上传，若关闭需要自己绑定事件触发上传
                filters:[ //只允许上传图片文件
                      { title: "图片文件", extensions: "jpg,png" },
                ],
        		domain: 'http://qiniu-plupload.qiniudn.com/',
                init: {
                    'FilesAdded': function(up, files) {
                        plupload.each(files, function(file) {
                            // 文件添加进队列后,处理相关的事情
                        });
                    },
                    'BeforeUpload': function(up, file) {
                           // 每个文件上传前,处理相关的事情
                        return opt.changeCallback && opt.changeCallback();
                    },
                    'UploadProgress': function(up, file) {
                           // 每个文件上传时,处理相关的事情
                           common.loading.show(1);
                    },
                    'FileUploaded': function(up, file, info) {
                           // 每个文件上传成功后,处理相关的事情
                        var res = common.filter(info);
                        common.getDownToken(res.key,opt.callback);
                        common.loading.hide();
                    },
                    'Error': function(up, err, errTip) {
                    	if(err.message=='File extension error.'){
                    		alert('图片上传格式不对，请上传png,jpg')
                    	}else{
                    		alert(errTip)
                    	}
//                  	
                           //上传出错时,处理相关的事情
                           console && console.log(err,errTip);
                           /*重新获取上传token*/
                           common.getUpToken();
                    },
                    'UploadComplete': function() {
                           //队列文件处理完毕后,处理相关的事情
                    },
                    'Key': function(up, file) {
                        // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
                        // 该配置必须要在 unique_names: false , save_key: false 时才生效
                        
                        var n=file.name;
                        var key = (opt.pr || '')+ common.getID()+''+n.substring(n.lastIndexOf('.'));
                        // do something with key here
                        return key
                    }
                }
    	}
    	
    	_opt=$.extend(true, _opt, opt);
    	
    	common.upLoads[id].uploader(_opt);
    },
    Handle: function () {  /* 页面构建后的处理*/
    	common.setImgURL();
    },
    Encode: function (str) {  /*字符转换*/
        var s = "";
        if (str.length == 0) return "";
        s = str.replace(/&/g, "&amp;");
        s = s.replace(/</g, "&lt;");
        s = s.replace(/>/g, "&gt;");
        s = s.replace(/ /g, "&nbsp;");
        s = s.replace(/\'/g, "&#39;");
        s = s.replace(/\"/g, "&quot;");
        s = s.replace(/\n/g, "<br>");
        return s;
    },
    Decode: function (str) {  /*字符转换*/
        var s = "";
        if (str.length == 0) return "";
        s = str.replace(/&amp;/g, "&");
        s = s.replace(/&lt;/g, "<");
        s = s.replace(/&gt;/g, ">");
        s = s.replace(/&nbsp;/g, " ");
        s = s.replace(/&#39;/g, "\'");
        s = s.replace(/&quot;/g, "\"");
        s = s.replace(/<br>/g, "\n");
        return s;
    },
    /*
     * 获取唯一ID值
     */
	getID: function(){
		return [common.getTime(),common.rand()].join('_');
	},
	/*
	 * 随机数
	 * @param {Number} min 最小值
	 * @param {Number} max 最大值
	 * @return {Number} min~max
	 * */
	 rand: function(min,max){
		min=min || 100;
		max=max || 999;
		var range=max-min;
		var r=Math.random();
		return (min+Math.round(r*range));
	},
	/*获取格式化时间 */
	getTime:function(a,b) {
	    var date = new Date();
	    var month = date.getMonth() + 1;
	    var strDate = date.getDate();
		a =a || '';
	    b =b || '';
	    if (month >= 1 && month <= 9) {
	        month = "0" + month;
	    }
	    if (strDate >= 0 && strDate <= 9) {
	        strDate = "0" + strDate;
	    }
	    var currentdate = date.getFullYear() + a + month + a + strDate
	            +date.getHours() + b + date.getMinutes()
	            + b + date.getSeconds();
	    return currentdate;
	},
    /***************************事件类**********************************/
    /*
	 * 表单提交
	 * @param {Object} opt
	 */
    submit: function (_opt) {
        $(common.ele.box).on('click', common.ele.search, function () {
            var formObj = $(this).parents('form');
            var param = common.getFormValue(formObj);
            var opt = {
                data: $.extend({}, _opt.data, param),
                callback: _opt.callback
            }
            common.param = opt.data;
            common.Ajax(opt);
        });
    },
    exportExcel: function (obj) {   /*导出Excel按钮--公用方法*/
        $(common.ele.box).on('click', common.ele.excel, function () {
            var myOpt = { //调用弹出框
                content: '确定导出excel吗？',
                confirm: true,
                sure_callback: function () {

                    var str = '';
                    common.param.output = 1; //设置参数1：导出
                    str += '<form class="exportform" action="' + API.root + '" method="post">';

                    $.each(common.param, function (k, v) {
                        str += ' <input type="hidden" name="' + k + '" value="' + v + '"/>';
                    });
                    str += '</form>';

                    $('.exportform').remove();
                    $(document.body).append(str);
                    $('.exportform').submit();
                    common.param.output = 0; //去掉导出功能

                    new $.MyAlert().Method.hide(); //关闭弹窗
                }
            }
            $.MyAlert(myOpt);
        });
    },
    pages: function (page, totalRows, pageSize, param, CreateHtml) {  //构建分页

        if (page && totalRows >= 0) {
            var p = page;
            var opt = {
                pageIndex: parseInt(p.currentPage),
                pageSize: pageSize,
                count: parseInt(p.totalRows),
                data: param,
                callback: CreateHtml
            }
            new myPager(opt);  //生成分页
        } else {
            $('.m-page').empty();
        }
    },
    /*
     * 按下时产生波纹效果
     * @param {Object} a 对象
     * @param {String} e 对象下的波纹类
     */
    ripple: function (a, e) {
        a = a || '.btn', e = e || 'btn-ripple';
        $(document).on("click", a,
        function (a) {
            var i, s, t, n, l = $(this);
            0 === l.children("." + e).length ? l.prepend('<span class="' + e + '"></span>') : l.children("." + e).removeClass("animate");
            var i = l.children("." + e);
            l.css({
                overflow: "hidden",
                position: "relative"
            }),
            i.height() || i.width() || (s = Math.max(l.outerWidth(), l.outerHeight()), i.css({
                height: s,
                width: s
            })),
            t = a.pageX - l.offset().left - i.width() / 2,
            n = a.pageY - l.offset().top - i.height() / 2,
            i.css({
                "z-index": 9999,
                top: n + "px",
                left: t + "px"
            }).addClass("animate");
        })
    },
    /*模块切换*/
    moduleChange:function(){
    	var obj=$('.content-view');
    	obj.each(function(){
    		if($(this).is(':hidden')){
    			$(this).show();
    		}else{
    			$(this).hide();
    		}
    	});
    	
    },
    /*
     * 查看大图
     * @param {Object} a 对象
     * @param {String} e 对象下的波纹类
     */
    zoomPic: function () {
        $(document).on('click', '[data-toggle="modal"]', function () {
            var str = '';
            str += '<div class="modal zoomPic fade bs-example-modal-lg" tabindex="-1" role="dialog" style="display:block;z-index:999999;background: #25252C;">';
            str += '    <div class="modal-dialog modal-lg">';
            str += '      <div class="modal-content">';
            str += '        <div class="modal-header">';
            str += '          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>';
            str += '          <h4 class="modal-title">' + ($(this).data('title') || '') + '</h4>';
            str += '        </div>';
            str += '        <div class="modal-body">';
            str += '         	<img isrc="' + ($(this).data('src') || '') + '" role="qnImg" style="width:100%;"/>';
            str += '        </div>';
            str += '      </div>';
            str += '    </div>';
            str += '</div>';
            $('.zoomPic').remove();
            $('body').append(str);
            $('.zoomPic').addClass('in');
            common.Handle();
        });
        $(document).on('click', '[aria-label="Close"]', function () {
            $('.zoomPic').remove();
        });
    },
    /*
 * 无限级创建DOM节点
 * @param {Object} data 数据
 * @param {Object} parent 父级容器
 */
    createDOM: function (data, parent) {
        $.each(data, function (k, v) {
            var _e = {}, l;
            /*存在内容时进行赋值，有些是没有的如：img*/
            v['text'] && (_e.text = v['text']);
            /*存在属性时进行赋值，以键/值配对出现*/
            v['attr'] && (_e = $.extend({}, _e, v['attr']));
            /*创建dom节点*/
            l = v.tag ? $('<' + v['tag'] + '/>', _e) : v['text'];
            parent.append(l);
            /*存在子节点时，进行递归*/
            if (v['child']) {
                common.createDOM(v['child'], l);
            }
        });
    },
    /*
     * 创建搜索组件
     * @param {Object} data 参数对象
     */
    createSearch: function (data, box) {
        var f, b;
        b = box || '.row';
        f = $('<form class="form-inline pt15 pb15" role="form"/>');
        data && common.createDOM(data, f);
        $(b).append(f);
    },
    /*
     * 创建数据列表
     * @param {Object} opt 参数
     */
    createTable: function (opt) {
        var table, hstr, str, l, n, _e, box = '.row';
        table = $('<table width="100%" class="tb-default tb_h_48 text_u" role="table"/>');
        opt = $.extend(true, {
            head: null,
            body: null,
            foot: null
        }, opt);
        opt.head && (function () {
            hstr = $('<tr/>');
            for (var i = 0; i < opt.head.length; i++) {
                $('<th>' + opt.head[i] + '</th>').appendTo(hstr);
            }
            table.append(hstr);
        })();
        opt.body && opt.data && (function () {
            var name;
            $.each(opt.data, function (k, v) {
                str = $('<tr/>');
                for (var i in b = opt.body) {
                    if (v[b[i]] != undefined || v[b[i]['field']] != undefined || b[i]['text'] != undefined) {
                        if (typeof b[i] == 'string') {
                            l = $('<td>' + (b[i]['text'] || v[b[i]]) + '</td>');
                        } else if (b[i] instanceof Object) {
                            name = b[i]['text'] || v[b[i]['field']] || '';
                            b[i]['bool'] && (name = b[i]['bool'][name]);
                            _e = { text: name };
                            b[i]['attr'] && (_e = $.extend({}, _e, b[i]['attr']));
                            //注：dataAttr为数组格式
                            b[i]['dataAttr'] && (function () {
                                for (var ii in c = b[i]['dataAttr']) {
                                    _e[c[ii]] = v[c[ii]];
                                }
                            })();
                            var item = (b[i].tag ? $('<' + b[i]['tag'] + '/>', _e) : name);
                            l = $('<td/>').append(item);
                            //当存在子级时，进行构造
                            b[i]['child'] && common.createDOM(b[i]['child'], item);
                        } else {
                            //其他形式
                        }
                    }
                    str.append(l);
                }
                table.append(str);
            });
        })();
        $(box).append(table);
        opt.page && ($(box).append($('<div class="pager_container m-page"/>')), common.pages(opt.page.data, opt.page.data.totalRows, opt.pageSize || 10, common.param, opt.callback));
    },
    /*重构图片URL*/
    setImgURL:function(){
    	$('img[role="qnImg"]').each(function(){
    		var obj=this;
    		var src=$(obj).attr('isrc');
    		var type=!!$(obj).data('css');
    		if(!type){
	    		src && common.getDownToken(src,function(name,url){
	    			$(obj).attr({'src':url,'picname':name});
	    		})
    		}else{
    			var arr=src.split(']');
    			src && common.getDownToken(src,function(name,url){
	    			$(obj).attr({'src':url,'picname':name});
	    		},arr[0].replace(/\-/g,'/').replace(/\[/g,'!'))
    		}
    	});
    }
};

/*
 * 网吧信息
 * @param {String} name 父级名称
 * @param {Object} data 数据源
 * @param {String} type 操作类型
 */
function BarHandle(name, data, type) {
    var obj = $('#' + name);
    $.each(data, function (k, v) {
        if (k == 'cybercafe_address' || k == 'bankOfDeposit') {
            $('[field="' + k + '"]').html(v.replace(/,/g, ' '));
        } else {
            $('[field="' + k + '"]').html((typeof v =='string') && v.replace(/,/g, '-'));
        }
    });

    if (data.logo) {
        $('[srcfield="logo"]').attr({'isrc':data.logo,'role':'qnImg'});
    }
    if (data.tag) {
        var stred = '';
        var labelArr = data.tag.split(',');
        for (var i = 0; i < labelArr.length; i++) {
            if (labelArr[i]) {
                stred += '<span class="btn btn-sm btn-success mb10 mr10" ><p class="disib">' + labelArr[i] + '</p><i class="fa fa-fw fa-times disn" data-btn="del" ></i></span>';

            }
        }
        $('[field=tag]').html(stred);
    }
    if(data.priceDetail){
    	var price='';
    	$.each(data.priceDetail,function(k,v){
    		price+=v.name+' 临时价格:'+v.price_tmp+' 会员价格:'+v.price_vip+v.unit+'<br>';
    	})
    	
    	$('[field="priceDetail"]').html(price);
    }
    
    /*图片列表*/
    if (data.images.length > 0) {
        var str = '';
        var imgArr = data.images.split(',');
        for (var i = 0; i < imgArr.length; i++) {
            if (imgArr[i]) {
                str += '<div class="fl p5 b_e3e2e2 yj2 mr13 mt13 bg_img disi xd">';
                str += '<img style="width:100px;height:90px;cursor: pointer;" data-toggle="modal" data-title="网吧图片" data-src="' + (imgArr[i]) + '" isrc="' + (imgArr[i]) + '" role="qnImg">';
                str += '<div class="j-del jd r5t5  p5 point" e_type="delImg" picname="' + imgArr[i] + '" style="display:none"><i class="fl icon cheng-fff ie6png"></i></div>';
                str += '</div>';
            }
        }
        obj.find('#ImgList').html(str);
    }

    /*营业执照*/
    if (data.businessLicense) {
        obj.find('.charter_img').attr({ 'isrc': data.businessLicense, 'picname': data.businessLicense ,'role':'qnImg'});
        $(".jyzz_pic").data('src', data.businessLicense).show();
    }

    /*文化许可证*/
    if (data.whLicense) {
        obj.find('.license_img').attr({ 'isrc': data.whLicense, 'picname': data.whLicense ,'role':'qnImg'});
        $(".wlwh_pic").data('src', data.whLicense).show();
    }
    /*基本信息审核*/
    data.auditStatus == "3" && $('.baseYTG').show();
    /*财务信息审核*/
    data.bank_status == "3" && $('.moneyYTG').show();
    /*证件信息审核*/
    data.license_status == "3" && $('.codeYTG').show();

    //审核网吧
    if (type) {
        /*基本信息审核*/
        data.auditStatus == "1" && $('[data-type="basic"]').show();
        /*财务信息审核*/
        data.bank_status == "1" && $('[data-type="bank"]').show();
        /*证件信息审核*/
        data.license_status == "1" && $('[data-type="license"]').show();

        /*审核通过*/
        $(document).on('click', '.j-btn', function () {
            var parentObj = $(this).parents('form');
            var e_type = $(this).attr('role');
            var type = parentObj.data('type');
            var param = { c_uid: data.c_uid, infoType: type };

            parentObj.find('.u-tip').empty();
            if (e_type == 'yes') {
                param.status = 3;
            } else if (e_type == 'sure') {
                var val = parentObj.find('[name="remark"]').val();
                if ($.trim(val) == '') {
                    parentObj.find('.u-tip').addClass('cr_O').html('请填写原因！');
                }
                param.status = 2;
                param.reason = val;
            } else if (e_type == 'no') {
                parentObj.find('[role="yes"]').hide();
                parentObj.find('[role="no"]').hide();
                parentObj.find('[role="noPass"]').show();
                return;
            } else if (e_type == 'close') {
                parentObj.find('[role="yes"]').show();
                parentObj.find('[role="no"]').show();
                parentObj.find('[role="noPass"]').hide();
                return;
            }

            var opt = {
                data: $.extend(true, config.Account.check, param),
                callback: function (db) {
                    if (db.resultCode == '100') {
                        parentObj.find('.u-tip').addClass('cr_G').html('操作成功！');
                        parentObj.hide();
                    } else {
                        parentObj.find('.u-tip').addClass('cr_O').html(db.msg);
                    }
                }
            }
            common.Ajax(opt);
        });
    }
	common.Handle();
}

$(function () {
    common.ripple();
    common.zoomPic();
    /*数字验证*/
    $('[data-valid="int"]') && $(document).on('keyup', '[data-valid="int"]', function () {
        $(this).val(($(this).val().match(/\d+/) || [''])[0]);
    });
    /*小数点后一位*/
    $('[data-valid="float1"]') && $(document).on('keyup', '[data-valid="float1"]', function () {
        $(this).val(($(this).val().match(/\d+(\.\d{0,1})?/) || [''])[0]);
    });
    /*小数点后俩位*/
    $('[data-valid="float2"]') && $(document).on('keyup', '[data-valid="float2"]', function () {
        $(this).val(($(this).val().match(/\d+(\.\d{0,2})?/) || [''])[0]);
    });
    /*弹出框*/
    $('[data-pop]') && $(document).on('click', '[data-pop]', function () {
        var id = $(this).attr('ajax-id');
        var name = $(this).data('pop');
        var type = $(this).data('type');
        
        //name='Ares-uxx';
        if (!name || !id) return;
        var opt = {
            data: $.extend({}, config.Bar.show, { c_uid: id }),
            callback: function (db) {
                if (db.resultCode != '100') {
                    $.MyAlert({ content: '数据获取失败！' });
                    return;
                }
                /*------s-调用弹出框-------*/
                var myOpt = {
                    title: '网吧详情',
                    content: { url: config.popTemppath, name: '#' + name },
                    width: 1024,
                    type: 1,
                    sure: "关闭",
                    callback: function () {
                        /*获取缓存数据*/
                        var data = db.data.barInfo[0];
                        BarHandle(name, data, type);
                    }
                }
                $.MyAlert(myOpt);
                /*------e-调用弹出框-------*/
            }
        }
        common.Ajax(opt);
    });
    $(document).on('click', 'input[role="date"]', function () {
        WdatePicker();
    })
    $(document).on('click', common.ele.back, function () {
		common.moduleChange();
	});
});
/*********************************扩展*******************************************/
String.prototype.format=function(data){
	var str=this;
	if(data && typeof(data)=='object'){
		for(var item in data){
			str=str.replace(eval('/{'+item+'}/g'),data[item]);
		}
	}else if(arguments.length>0){
		for(var i=0;i<arguments.length;i++){
			str=str.replace('{'+i+'}',arguments[i]);
		}
	}else{
		//其他
	}
	return str;
}