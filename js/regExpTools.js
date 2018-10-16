
//参数：验证的数据类型
//要验证的字符串

function checkAll(type,value){ 		 //type是你要验证的类型（自定），value验证该值
    switch(type) {				//判断该类型       
		case 'phone':   			//如果类型是Phone的话，就执行下面的判断  
			var reg = /^1[34578]\d{9}$/;                                   
			break;                                                         
		case 'email':                                                      
			var reg = /^\w+@\w+\.(com|cn|net)$/;  // /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;      
			break;                                                         
	    case 'card1':                                                      
			var reg = /^61\d{8}(0[1-9]|1[0-2])\d{2}\d{3}[\dX]$/;
			break;  
		case 'card2':                                                      
			var reg = /^61(\d{4}){2}(\d{2}){2}\d{3}(\d|X)$/;
			break;  
		case 'birthday': 
			var reg = /^\d{4}(\-|\.|\s)(0[1-9]|1[0-2])(\-|\.|\s)\d{2}$/;
			break;  
		case 'username': 
			var reg =/^[\u4e00-\u9fa5]{2,4}$/; 
			break;  
		case 'password': 
			var reg = /^[a-zA-Z_][\w\$\.\;\-\+]{5,}$/;
			break;  
		case 'ip': 
			var reg = /^((\d|\d{2}|1\d{2}|2[0-4]\d|25[0-5])\.){3}(\d|\d{2}|1\d{2}|2[0-4]\d|25[0-5])$/;
			break;  
		case 'postId': 
			var reg = /^[1-9][0-9]{5}$/;  
			break;  
		default:;
		  
	}
	return reg.test(value);
	/*
	if(reg.test(value)==true){
		return true;
	}else{
		return false;
	}
	*/
} 
