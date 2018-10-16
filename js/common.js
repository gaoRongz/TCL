
function addEvent(){
//置顶盒子鼠标移上变色
	$("#Top span").hover(function(){
		$(this).css({color:"#f00"});
	},
	function(){
		$(this).css({color:"#999"});
	})	
//置顶	
	$("#Top  span.toTop").click(function(){
		$('body,html').animate({scrollTop:0},500);
	});
	
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
}
