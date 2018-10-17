<?php
	header("Content-type:text/html; charset=utf-8");
	
	$userId=$_POST["userId"];
	$userPass=$_POST["userPass"];

	$con=mysql_connect("localhost","root","rootzh");
	if(!$con){
		echo "链接失败";
	}
	else{
		mysql_select_db("client",$con);
		//1)、查询
		$sqlstr="select * from client where userId='$userId'";
		$result = mysql_query($sqlstr,$con);
		$rows = mysql_num_rows($result);
		if($rows<=0){
			//2) 插入语句
			$sqlstr = "insert into client values('$userId','$userPass')";
			$result = mysql_query($sqlstr,$con);
			if($result=="1"){
				echo "1";     //注册成功
			}else{
				echo "0";     //注册失败
			}	
		}else{
			echo "-1"; 		//"该ID已存在";
		}
	}
?>