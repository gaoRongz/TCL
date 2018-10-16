var gulp = require("gulp");//require:相当于<script src="gulp.js"></script>


//定义一个复制文件的任务
//task函数的第一个参数：copyHtml是任务名
//task函数的第一个参数function是任务copyHtml对应的功能
gulp.task("copyHtml",function(){
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("TCL.html").pipe(gulp.dest("D:\\WWW\\TCL"));
});

gulp.task("copyCart",function(){
	
	gulp.src("cart.html").pipe(gulp.dest("D:\\WWW\\TCL"));
});
gulp.task("copyGoods",function(){
	
	gulp.src("goodsdetails.html").pipe(gulp.dest("D:\\WWW\\TCL"));
});
gulp.task("copyLogin",function(){
	
	gulp.src("login.html").pipe(gulp.dest("D:\\WWW\\TCL"));
});
gulp.task("copyRegister",function(){

	gulp.src("register.html").pipe(gulp.dest("D:\\WWW\\TCL"));
});
//一起传
gulp.task("build",["copyHtml","copyCart","copyGoods","copyLogin","copyRegister",],function(){
	console.log("ok");
});

//监听
gulp.task("watchall",function(){
	
	gulp.watch("TCL.html",["copyHtml"]);
});
gulp.task("watchall",function(){
	
	gulp.watch("cart.html",["copyCart"]);
});
gulp.task("watchall",function(){

	gulp.watch("goodsdetails.html",["copyGoods"]);
});
gulp.task("watchall",function(){
	
	gulp.watch("login.html",["copyLogin"]);
});
gulp.task("watchall",function(){
	
	gulp.watch("register.html",["copyRegister"]);
});
gulp.task("watchall",function(){
	//一旦index.html的内容发生改变，那么就立即执行任务copyHtml;
	gulp.watch("register.html",["copyCss"]);
});




gulp.task('img',function(){
	gulp.src('img/**/*')
	.pipe(gulp.dest('D:\\WWW\\TCL'));
});

gulp.task('copyallfile',function(){
	gulp.src('*/**/*')
	.pipe(gulp.dest('D:\\WWW\\TCL'));
});
gulp.task('copyCss',function(){
	gulp.src('css/**/*')
	.pipe(gulp.dest('D:\\WWW\\TCL'));
});





