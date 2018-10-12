//鼠标移上，二级列表出现
	$(function(){
		$(".banner-nav ul li").hover(function(){
			$(this).css({
				"background-color":"rgba(255,255,255,.9)"
			});
		},
		function(){
			$(this).css({
				"background-color":"rgba(0,0,0,.0)"
			});
		});
	});
//goods列表的效果
	$(function(){	
		$(".goods ul li").hover(function(){
			$(this).css({
				"box-shadow":" 0 0 15px 5px #ccc"
			})
			.animate({
				top:"-8px"
			});
		},function(){
			$(this).css({
				"box-shadow":"0px 0px 0px 0px #fff"
			})
			.animate({
				top:"0px"
			});
		});
		
//置顶盒子鼠标移上变色
		$("#Top a").hover(function(){
			$(this).css({
				"color":"#f00"
			});
		},function(){
			$(this).css({
				"color":"#999"
			});
			}
		)
//置顶
		$("#Top ul li.toTop").click(function(){
			$('body,html').animate({scrollTop:0},200);
			
		});
});
//导航上的二级菜单鼠标滑过出现
	$(function(){
		$("#nav .big ul li.tv a").hover(function(){
			$("#tv").animate({
				height:"210px"
			},200).css({
				"display":"block"
			});
		},
		function(){
			$("#tv").slideUp(100);		
		});
	});
	
	
//侧边ul
//给窗口添加滚动条事件
window.onscroll = function(){
	//TV的位置
	let tv_top = $("#series .tv").offset().top;	
//	console.log(tv_top);
	//洗衣机的位置
	let xiyiji_top = $("#series .xiyiji").offset().top;	
	//冰箱的位置
	let bingxiang_top = $("#series .bingxiang").offset().top;	

	//空调的位置
	let kongtiao_top = $("#series .kongtiao").offset().top;	

	let health_top = $("#series .health").offset().top;	

	//获取页面滚动的距离
	let  _top = document.body.scrollTop || document.documentElement.scrollTop;
	let top = _top+190;    //不需要盒子到顶时就消失或变色。
	if(top>= tv_top && _top<=health_top){
		$(".side_ul").css({
		"display" :"block",				
		});
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
	
	
	
	
}


