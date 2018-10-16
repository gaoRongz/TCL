
$(function(){
//鼠标移上，二级列表出现	
	$(".banner-nav ul li").hover(function(){
		$(this).css({"background-color":"rgba(255,255,255,.9)"});
	},
	function(){
		$(this).css({"background-color":"rgba(0,0,0,.0)"});
	});
});
//goods列表的效果
$(function(){	
	$(".goods ul li").hover(function(){
		$(this).css({"box-shadow":" 0 0 15px 5px #ccc"})
		.animate({top:"-8px"},200);
	},function(){
		$(this).css({"box-shadow":"0px 0px 0px 0px #fff"})
		.animate({top:"0px"},200);
	});
});	
//侧边ul
//给窗口添加滚动条事件
$(function(){
	$(window).scroll(function(){
	let tv_top = $("#series .tv").offset().top;	
//	console.log(tv_top);
	let xiyiji_top = $("#series .xiyiji").offset().top;	
	let bingxiang_top = $("#series .bingxiang").offset().top;	
	let kongtiao_top = $("#series .kongtiao").offset().top;	
	let health_top = $("#series .health").offset().top;	

	//获取页面滚动的距离
	let  _top = document.body.scrollTop || document.documentElement.scrollTop;
	let top = _top+190;    //不需要盒子到顶时就消失或变色。
	if(top>= tv_top && _top<=health_top){
		$(".side_ul").css({"display" :"block",});
		//滚动到tv范围时，tv变色
		if(top <= bingxiang_top){	
			$(".side_ul a").css({color:"#999"});
			$(".side_ul li.side_li_tv a").css({color:"#f00"});
		} if(top >= bingxiang_top){
			//统一
			$(".side_ul a").css({color:"#999"});
			$(".side_ul li.side_li_bingX a").css({"color":"#f00"});	
		} if(top >= kongtiao_top){
			//统一
			$(".side_ul  a").css({	color:"#999"});
			$(".side_ul li.side_li_airC a").css({"color":"#f00"});	
		}if(top >= xiyiji_top){
			//统一
			$(".side_ul  a").css({	color:"#999"});
			$(".side_ul li.side_li_xiyiJ a").css({"color":"#f00"});	
		}if(top >= health_top){
			//统一
			$(".side_ul  a").css({	color:"#999"});
			$(".side_ul li.side_li_health a").css({"color":"#f00"});	
		}	
	}else {
		$(".side_ul").css({	"display" : "none"});
	}
	});
});



