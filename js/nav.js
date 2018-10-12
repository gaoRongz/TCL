	
//电视	
	$(function(){
		$("#nav .big ul li.tv").hover(function(){	
			$("#tv").animate({
				height:"210px"
			},200).css({
				"display":"block"
			});
			
			$("#tv").hover(function(){
				$("#tv").animate({
					height:"210px"
				},200).css({
					"display":"block"
				});
			
			},
			function(){
				$("#tv").delay(200).slideUp(100);	
			});	
		},
		function(){	
			$("#tv").delay(200).slideUp(100);	
			
		});
	});
//鼠标移到tv下的二级菜单时，不消失	
	$(function(){
		
		
	});
	
	
//空调	
	$(function(){
		$("#nav .big ul li.airC ").hover(function(){
			
			$("#airC").animate({
				height:"210px"
			},200).css({
				"display":"block"
			});
			$(".slideline").css({
				left:"62px"
			});
		},
		function(){
			
			$("#airC").slideUp(100);	
			
		});
	});
//冰箱	
		$(function(){
		$("#nav .big ul li.bingX").hover(function(){			
			$("#bingX").animate({
				height:"210px"
			},200).css({
				"display":"block"
			});
			$(".slideline").css({
				left:"262px"
			});
			$("#bingX ul").hover(function(){				
			},)
		},
		function(){
			$("#bingX").slideUp(100);	
			
		});
	});
//洗衣机	
		$(function(){
		$("#nav .big ul li.xiyiJ").hover(function(){			
			$("#xiyiJ").animate({
				height:"210px"
			},200).css({
				"display":"block"
			});
			$(".slideline").css({
				left:"262px"
			});
			$("#xiyiJ ul").hover(function(){				
			},)
		},
		function(){
			$("#xiyiJ").slideUp(100);	
		});
	});	
	
//健康电器
		$(function(){
		$("#nav .big ul li.health_D").hover(function(){			
			$("#health_D").animate({
				height:"210px"
			},200).css({
				"display":"block"
			});
			$(".slideline").css({
				left:"262px"
			});
			$("#health_D ul").hover(function(){				
			},)
		},
		function(){
			$("#health_D").slideUp(100);	
		});
	});	