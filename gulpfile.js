var gulp = require("gulp");//require:相当于<script src="gulp.js"></script>


//定义一个复制文件的任务
//task函数的第一个参数：copyHtml是任务名
//task函数的第一个参数function是任务copyHtml对应的功能
gulp.task("copyHtml",function(){
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("index.html").pipe(gulp.dest("D:\\WWW\\TCL"));
});

//监听
gulp.task("watchall",function(){
	//一旦index.html的内容发生改变，那么就立即执行任务copyHtml;
	gulp.watch("index.html",["copyHtml"]);
});
gulp.task('copyallfile',function(){
	gulp.src('*/**/*')
	.pipe(gulp.dest('D:\\WWW\\TCL'));
});

