$(function(){
	$(window).scroll (function(){
//页面元素距离浏览器工作区顶端的距离 =  DOM元素对象.offsetTop - document.documentElement.scrollTop
	//获取支付框上一个dl的offsetTop
	let pay_top = $(".shopContent .shopbox:nth-last-child(2)").offset().top;
	//获取支付框上一个dl的height
	let pay_height = $(".shopContent .shopbox:nth-last-child(2)").height();
	//console.log(pay_height);
	let top = pay_top-pay_height;
	//获取页面滚动的距离
	let  _top = document.body.scrollTop || document.documentElement.scrollTop;
	//console.log("_top"+_top);
	let y = top - _top;
	//console.log("页面元素距离浏览器工作区顶端的距离"+y);
	if(_top>= y ){
		$("._down .shopContent div.last").css({
			position:"relative",
			"border-bottom": "1px solid #ccc"
		});
	}else if(_top<= y ){
		$("._down .shopContent div.last").css({
			position:"fixed",
			border:0,
			bottom:0,
			background:"#fff"
		});
	}
	});	
});

$(function(){
	let num = $(".val").val(); //获取input里的值
	$(".num_info .add").click(function(){
		num++;
		$(this).next().val(num); //将+后的值赋给input
	});
	$(".num_info .reg").click(function(){	
		$(this).prev().val(num);      //将-后的值赋给input
		num--;
		if(num<=1){
			num=1;
		}
	})
	$(".oper-info .delete").click(function(){
		let dele = $(this).parent().parent().index();
		if(confirm('确认要删除该宝贝吗？')==true ) { 
          //removeChild 删除节点  
			let cell = $(this).parent().parent().parent();
			cell.empty($(this).parent().parent().eq(dele));	
        } 
	})
})	