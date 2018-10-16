

$(function(){
	
//手机号码的正则验证     √
	let content = "";
	
	$(".telInput").on("blur",function(){     //获取文本框的内容
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
		console.log(test+"<br>"+test_btn);
		if(test == test_btn){
			$(this).next().next().html("") ;
		}else{
			$(this).next().next().html("验证码不正确") ;
		}
	});
	
	//console.log("====="+content);
	
	$(".loginBtn").click(function(){
		$(".loginBox").css({display:"none"});
		let zhanghao = $(".telInput").val();
		$(".after .zhanghao span").html("zhanghao");
		$(".after").css({display:"block"});
		
		
		console.log(c+"----");
	});
})
