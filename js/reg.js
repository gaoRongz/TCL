//根据多选框是否被选中，改变button的属性/禁用
	$(function(){
		$(".protocal").click(function(){
			//判断checked是否被选中
			let result = $(".protocal").is(":checked");
			console.log("=="+result);
			//如果为true，
			if(result == true){
			$(".loginBtn").css({background:"#f00",color:"#fff"});
			}else{
				$(".loginBtn").css({
					background:"#ccc",
					color:"#666"
				}).attr({disabled:"disabled"});
				//$("input[class='loginBtn']").prop({disabled: true});
			}
		});
		
	});	

$(function(){
	
//手机号码的正则验证     √
	let content = "";
	
	$(".telInput").blur(function(){     //获取文本框的内容
		let reg = /^1[34578]\d{9}$/;         
		let str = $(this).val();
		if(str!=""){			
			if(reg.test(str)){
				$(this).next().html("") ;
			}else{
				$(this).next().html("请输入合法的手机号码！") ;
			}	
		}else {
			$(this).next().html("手机号码不能为空！") ;
		}
		content +=  $(this).next().html() ;   //为了获取tel  span里的内容
		//console.log(content);
	});
//密码的正则验证     √	
	$(".password").blur(function(){     //获取文本框的内容
		var reg = /^[a-zA-Z_][\w\$\.\;\-\+]{5,}$/;      
		let str = $(this).val();
		if(str!=""){			
			if(reg.test(str)){
				$(this).next().html("") ;
			}else{
				$(this).next().html("密码由8-16位英文字母、数字或者符号组成！！") ;
			}	
		}else {
			$(this).next().html("密码不能为空！") ;
		}
	});
//重复密码的正则验证     √		
	$(".Repeat").blur(function(){     //获取文本框的内容   
		let str = $(this).val();
		let passWord = $(this).parent().prev().children().eq(1).val();
		if(str!=""){	
			if(str == passWord){
				$(this).next().html("") ;
			}else{
				$(this).next().html("两次密码不一致！") ;
			}
		}else {
			$(this).next().html("密码不能为空！") ;
		}
	});
	
// 验证码   √
	let arr = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	let str = "";
	for(let i=0;i<4;i++){
		let index = parseInt(Math.random()*arr.length);
		str += arr[index];
	}
	$(".pic_YZ .pic .ma").html(str);
	
	$(".pic_YZ .pic .ma").click(function(){
		let arr = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		let str = "";
		for(let i=0;i<4;i++){
			let index = parseInt(Math.random()*arr.length);
			str += arr[index];
		}
		$(this).html(str);
	});
//验证码的判断
	$(".picTest").blur(function(){
		var test = $(this).val();        //文本框的输入的值
		var test_btn = $(".pic_YZ .pic .ma").html();//随机验证码的值
		//console.log(test+"<br>"+test_btn);
		if(test == test_btn){
			$(this).next().next().html("") ;
		}else{
			$(this).next().next().html("验证码不正确") ;
		}
	});
	
	$(".loginBtn").click(function(){
		let right = true;
		let telTishi = $(this).parent().children().eq(1).children().eq(2).text();
		console.log("telTishi"+telTishi);
		let testTishi = $(this).parent().children().eq(2).children().eq(2).text();
		console.log("testTishi"+testTishi);
//两个提示框都为空时，让它可以跳转
		$(".loginBox").css({display:"none"});
		let zhanghao = $(this).parent().children().eq(1).children().eq(1).val();
		$(this).parent().next().children().eq(0).children().eq(0).html(zhanghao);
		$(".after").css({display:"block"});	
	});
})
