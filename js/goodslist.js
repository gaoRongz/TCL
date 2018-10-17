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
//鼠标点击，换页按钮变红色
	$(".changePage .pageNumber a").click(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
		let index = $(this).index();
		console.log(index);
		if(index>2){
			$(this).parent().children(1).css({display:"block",});
			$(this).parent().find("button").css({display:"none"});
		}else if(index==2){
			$(".changePage .pageNumber a.left").css({display:"none"});
			$(this).parent().find("button").css({display:"block"}).attr("disabled","disabled");
		}
		let pageNum = index;
	//点右往右走	
		$(".changePage .pageNumber a.right").click(function(){
			pageNum++;
			if(pageNum>9){
				return;
			}
			console.log(pageNum);
			$(this).parent().children().eq(pageNum).addClass('cur').siblings().removeClass('cur');
		})
		//点左往左走
		$(".changePage .pageNumber a.left").click(function(){
			pageNum--;
			if(pageNum<2){
				return;
			}
			console.log(pageNum);
			$(this).parent().children().eq(pageNum).addClass('cur').siblings().removeClass('cur');
		})
	});
	
	
});
