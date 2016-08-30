+function(){
	var t = (new Date()).getTime();
	document.writeln('<link rel="stylesheet" href="bootstrap/css/simple-line-icons.css?'+t+'" type="text/css" />');  
	document.writeln('<link rel="stylesheet" href="bootstrap/css/app.css?'+t+'" type="text/css" />  ');	     
    document.writeln('<link rel="stylesheet" href="bootstrap/css/global.css?'+t+'" type="text/css" />  ');
	document.writeln('<script src="js/plugin/MyAlert.js?'+t+'" type="text/javascript" charset="utf-8"></script>');
	document.writeln('<script src="js/common.js?'+t+'" type="text/javascript" charset="utf-8"></script>');
	document.writeln('<script src="js/PageLoad.js?'+t+'" type="text/javascript" charset="utf-8"></script>');
}();
