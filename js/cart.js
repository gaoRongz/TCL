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
	//购物车删除功能
	$(".oper-info .delete").click(function(){
		if(confirm('确认要删除该宝贝吗？')==true ) { 
         	//remove 删除节点  
			$(this).parent().parent().remove();	
        }
//判断是否有dl，没有的话让空购物车显示  
		if($(".shopContent").find("dl").length==0){
			$("#buy-box-after").css({display:"none"});
			$("#buy-box").css({display:"block"});
		}else{
			$("#buy-box").css({display:"none"});
			$("#buy-box-after").css({display:"block"});
		}
		total();
	})	
//多选框的点击事件		
})	
//购物车+
function increase(btn){
    //先获取商品信息
    let text = $(btn).next();
    let num = parseInt($(text).val());
    $(text).val(++num);
    //单价
    let price = parseFloat($(text).parent().prev().children(0).html());
    //把单价赋单价给盒子
    $(text).parent().prev().children(0).val(price)
    //总价
    let subTotal1 = (price*num).toFixed(2);
    //把总价赋总价给盒子
    $(text).parent().next().children().eq(0).text(subTotal1);
    //打折之前被划掉的价格
    let discount = parseFloat($(text).parent().prev().children().eq(1).html());
    let subTotal2 = (discount*num).toFixed(2);
    $(text).parent().next().children().eq(1).html(subTotal2+"元");
    total();
}
//购物车-
function decrease(btn){
    //先获取商品信息
    let text = $(btn).prev();
    let num = parseInt($(text).val());
    //判断num不能小于1
    if(num<2){
		return;
	}
    $(text).val(--num);
    //单价
    let price = parseFloat($(text).parent().prev().children().eq(0).html());
    //总价
    let subTotal1 = (price*num).toFixed(2);
//把总价赋总价给盒子
    $(text).parent().next().children().eq(0).text(subTotal1);
    let discount = parseFloat($(text).parent().prev().children().eq(1).html());
    let subTotal2 = (discount*num).toFixed(2);
    $(text).parent().next().children().eq(1).html(subTotal2+"元");
    total();
}
//购物车
function total(){
	let dls = $(".shopContent dl");
	let sum = 0;
	let sum_d = 0;
	let index = $(".shopContent dl").length;
	
	for(let i=0; i<dls.length; i++) {
		let price = parseFloat(dls.eq(i).children().eq(4).children().eq(0).text());
		let discount = parseFloat(dls.eq(i).children().eq(4).children().eq(1).text())
		sum += price;
		sum_d += discount;
	}
	$(".totalPrice").children().eq(0).text(sum+".00元");
	$(".totalPrice").children().eq(1).text(sum_d+".00元");
	$(".totalNum").text(index);
	$(".selected").text()
}
//多选框的点击事件×
function check(btn){
	let length = $("input[type='checkbox']:checked").length;
	if(length>0){
		$(".pay").css({background:"#f00"})
	}else{
		$(".pay").css({background:"#ccc"})
	}
	console.log(length);
	let num = $(this).parent().parent().children().eq(3).children(1).val();   //个数的值
	console.log(typeof(num));
	$(".selected").text(num);
}