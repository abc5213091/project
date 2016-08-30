 // 字符验证       
 jQuery.validator.addMethod("stringCheck", function(value, element) {       
   return this.optional(element) || /^[\u0391-\uFFE5\w]+$/.test(value);       

 }, "只能包括中文字、英文字母、数字和下划线");   
 

 // 中文字两个字节 
 jQuery.validator.addMethod("byteRangeLength", function(value, element, param) {       
   var length = value.length;       
   for(var i = 0; i < value.length; i++){       
       if(value.charCodeAt(i) > 127){       
       length++;       
       }       
   }       
   return this.optional(element) || ( length >= param[0] && length <= param[1] );       

 }, "请确保输入的值在3-15个字节之间(一个中文字算2个字节)");   
 

 // 身份证号码验证 
 jQuery.validator.addMethod("isIdCardNo", function(value, element) {       
   return this.optional(element) || isIdCardNo(value);       

 }, "请正确输入您的身份证号码");    
    

 // 手机号码验证  
 jQuery.validator.addMethod("isMobile", function(value, element) {       
   var length = value.length;   
   var mobile = /^((0{0,1}(13[0-9]|15[0-9]|14[5-7]|17[6-8]|170|18[0-9])[0-9]{8}))$/;   
   return this.optional(element) || (length == 11 && mobile.test(value));       

 }, "手机号码错误，请重新输入");  
 
 jQuery.validator.addMethod("isMobileTel", function(value, element) {  
   var mobile = /^((0{0,1}(13[0-9]|15[0-9]|14[5-7]|17[6-8]|170|18[0-9])[0-9]{8})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)$/;   
   return this.optional(element) ||  mobile.test(value);       

 }, "请正确填写您的手机号码或者电话号码");    
    

 // 电话号码验证  
 jQuery.validator.addMethod("isTel", function(value, element) {       
   var tel = /^\d{3,4}-?\d{7,9}$/;    //电话号码格式010-12345678   
   return this.optional(element) || (tel.test(value));       

 }, "请正确填写您的电话号码");   
 

 // 联系电话(手机/电话皆可)验证 
 jQuery.validator.addMethod("isPhone", function(value,element) {   
   var length = value.length;   
   var mobile = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/;   
   var tel = /^\d{3,4}-?\d{7,9}$/;   
   return this.optional(element) || (tel.test(value) || mobile.test(value));   

 }, "请正确填写您的联系电话");   
    

 // 邮政编码验证  
 jQuery.validator.addMethod("isZipCode", function(value, element) {       
   var tel = /^[0-9]{6}$/;       
   return this.optional(element) || (tel.test(value));       

 }, "请正确填写您的邮政编码");    
 
  // 验证邀请码：由字母、数字组成；长度为8位，字母区分大小写； 必填项 
 jQuery.validator.addMethod("isYQM", function(value, element) {       
   var tel = /^(?![^a-zA-Z]+$)(?!\D+$).{8}$/;       
   return this.optional(element) || (tel.test(value));       

 }, "邀请码错误，请重新输入");    
 
 /*验证密码*/
 jQuery.validator.addMethod("vPassword", function(value, element) {       
  // var tel = /^(?![^a-zA-Z]+$)(?!\D+$).{6,15}$/;   
    var tel = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,15}$/;   
   return this.optional(element) || (tel.test(value));       
 }, "6-15位字母、数字组合");  

//验证网吧地址
jQuery.validator.addMethod("barAddress", function(value, element) { 
   return $('[name="province"]').val()!=0 && 
		   $('[name="city"]').val()!=0 && 
		   $('[name="county"]').val()!=0 &&
		   $.trim($('[name="Address"]').val())!='';
 }, "请填写详细网吧地址");  
  
//验证网吧地址
jQuery.validator.addMethod("bankAddress", function(value, element) {  
   return $('[name="bankprovince"]').val()!=0 && 
		   $('[name="bankcity"]').val()!=0 && 
		   $('[name="bankcounty"]').val()!=0 &&
		   $.trim($('[name="bankAddress"]').val())!='';
 }, "请填写开户支行");  
 
 //价格区间验证 【100以内的数字（包含100），最多保留一位小数】
jQuery.validator.addMethod("vprice", function(value, element) {  
	return $('[name="min_price"]').val()!='' && $('[name="max_price"]').val()!='' && parseFloat($('[name="min_price"]').val())<=100 && parseFloat($('[name="max_price"]').val())<=100 && parseFloat($('[name="min_price"]').val())<=parseFloat($('[name="max_price"]').val());
 }, "请输入100以内的数字，且后面必须大于等于前面");  
 
 //验证用户是否存在
jQuery.validator.addMethod("isExistUser", function(value, element) {  
	
	var opt={
		data:$.extend({},config.findPwd.existIphone,{username:value}),
		async:false,
		callback:function(db){
			db=common.filter(db);
			console.log(db.resultCode=='100');
			return db.resultCode=='100';
		}
	}
	common.Ajax(opt);
	return false;
}, "账号不存在");  

//银行验证
jQuery.validator.addMethod("isBank", function(value, element) {  
   return /^\d{19}$/g.test(value);
 }, "卡号格式不正确");  
