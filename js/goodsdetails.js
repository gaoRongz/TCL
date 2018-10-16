
//顶部置顶
	$(window).scroll (function(){
		let offset1 = $("#details").offset().top;	
		//console.log(offset1);
		//获取页面滚动的距离
		let  _top = document.body.scrollTop || document.documentElement.scrollTop;
		
		if(_top>= offset1 ){
			$("#fixed").css({"margin-top":"0px"});
		}else {
			$("#fixed").css({"margin-top":"-60px"});
		}
	});

//服务政策点击li切换不同的div
$(function(){  
   	 $(".listOrd ul li").click(function(){    
		 //console.log("==========");
	   	 $(this).addClass('cur').siblings().removeClass('cur');
	   	 $('.listBox .curr').eq($(this).index()).show().siblings().hide();
   	});
//淡入淡出
   	$(".center .pic ul li").click(function(){
		//console.log("=======");
		var imgurl=$(this).find('img').attr('src');
		$(".bigPic").find("img").fadeOut(300,function(){
			$(this).attr("src",imgurl)
		}).fadeIn(300);
	});	
});
//点击收藏变色及内容
$(function(){
	$(".shouC").click(function(){
		$(this).find("i").css({color:"#ff0"});
		$(this).find("span").html("取消收藏").css({color:"#f00"});		
	});	
})

//	$(".center .pic ul li").click(function(){
//		//console.log("=======");
//		let opacity1 = 1;
//		var timer =	setInterval(function(){
//			//1. 处理数据
//			opacity1 -= 0.1;
//			if(opacity1<=0){
//				opacity1 = 0;
//				clearInterval(timer);
//			}
//			//2. 改变外观
//			let opacity2 = 1-opacity1;
//			console.log(opacity2);
//			var imgurl=$(this).find('img').attr('src');
//			$("bigPic").find("img").animate({"opacity":"opacity1"},200);
//			$(".bigPic").find("img").attr("src",imgurl).animate({"opacity":"opacity2"},200);
//		},20);
//	});	

//点击+ - 变换input里的数量
$(function(){
	let num = $(".val").val(); //获取input里的值
	$(".mun .add").click(function(){
		num++;
		//console.log(num);
		$(".val").val(num); //将+后的值赋给input
	});
	$(".mun .reg").click(function(){	
		
		$(".val").val(num);      //将-后的值赋给input
		num--;
		if(num<=1){
			num=1;
		}
	})
})
//点击选择型号，变换边框的颜色
$(function(){
	$(".color a").click(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
	})
})
//sideBox固定
	$(window).scroll (function(){
		let d_top = $("#detailsIntr").offset().top;	
		let p_top = $("#parameter").offset().top;	
		let s_top = $("#servicePolicy").offset().top;	
		let c_top = $("#commonProblem").offset().top;	
		let e_top = $("#evaluate").offset().top;	
		//获取页面滚动的距离
		let  _top = document.body.scrollTop || document.documentElement.scrollTop;
		$("#details .w .side_Box ul li:nth-child(1) span").css({"background":"red"});
		if(_top>= d_top ){
			$("#details .w .side_Box ul li:nth-child(1) span").css({"background":"red"});
		}else if(_top>= p_top ){
			$("#details .w .side_Box ul li:nth-child(2) span").css({"background":"red"});
		}
	});

//加入购物车弹出对话框
//$(function(){
//	$("#purchase .w .goodsDetail  .serise .toCart").bind("click", function(){
//  	("温馨提示", "已加入购物车");
//	});
//});



