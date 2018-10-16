$(function(){
//选择框里点击向下的图标，显示隐藏的盒子
	let count = 0;
	$(".toggle").click(function(){
		count++;
		if(count%2==0){
			$(".features:nth-child(3)").toggle();
			$(this).html("︿");
		}else{
			$(".features:nth-child(3)").toggle();
			$(this).html("﹀");
		}	
	});	
//点击排序，销量，价格
	$(".sort a").click(function(){
		$(this).css({color:"red"});
		$(this).siblings().css({color:"#666"});
		
	});
	
	$(".shop-list ul li div.text a").hover(function(){
		$(this).css({
			background:"red",
			color:"#fff"
		})
	},
	function(){
		$(this).css({
			background:"#fff",
			color:"#f00"
		})
	})
//鼠标移上，换页按钮变红色
	$(".changePage .pageNumber a").mouseenter(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
	});
	$(".changePage .pageNumber a").mouseleave(function(){
		$(this).removeClass('cur');
	});

});
