//顶部置顶
	$(window).scroll (function(){
		let offset1 = $("#details").offset().top;	
		//console.log(offset1);
		//获取页面滚动的距离
		let  _top = document.body.scrollTop || document.documentElement.scrollTop;
		if(_top>= offset1 ){
			$("#fixed").css({"margin-top":"0px"});
			$(".side_Box").css({position:"fixed",right:"157px"})
		}else {
			$("#fixed").css({"margin-top":"-60px"});
			$(".side_Box").css({position:"relative",right:"0px"})
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
		if($(".shouC span").text() == "收藏"){
			$(this).find("i").css({color:"#ff0"});
			$(this).find("span").html("取消收藏").css({color:"#f00"});	
		}else{
			$(this).find("i").css({color:"#999"});
			$(this).find("span").html("收藏").css({color:"#999"});	
		}	
	});	
});

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
	$(".color>span").click(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
	})
})
//sideBox固定
	$(window).scroll (function(){
		let offset1 = $("#details").offset().top;	
		let height = $("#detailsIntr").height();	
		let offset = offset1+height;
		//获取页面滚动的距离
		let  _top = document.body.scrollTop || document.documentElement.scrollTop;
		$(".side_Box ul li:nth-child(1) span").css({"background":"red"});
		if(_top>= offset ){
			$(this).addClass('cur').siblings().removeClass('cur');
		}else if(_top>= (offset1 +2*height)){
			$(this).addClass('cur').siblings().removeClass('cur');
		}
	});

//加入购物车弹出对话框
$(function(){
	$("#purchase .w .goodsDetail  .serise .toCart").bind("click", function(){
    	alert( "已加入购物车");
	});
});



