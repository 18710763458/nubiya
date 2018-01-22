//点击导航栏背景变色
$('.navbar-nav li').click(function(){
	$('.navbar-nav li').removeClass('active');
	$(this).addClass('active');
});
//从数据库取出数据并转化,打印到后台管理页面
var dh;
var dhList;
function sjlb(){
	dh = localStorage.getItem('dh');
	dhList = eval('(' + dh + ')');
	$.each(dhList, function(i, item) {
		var newEle = $(' <tr><td><img id="htsjimg" src="' + item.imgurl + '" alt="" /></td><td id="htsjname">' + item.name + '</td><td><button id="revise" type="button" data="' + i + '" onclick="revise(this)" class="btn btn-primary" data-toggle="modal" data-target="#myModal">更改</button><button type="button" id="del" onclick="del(this)" data="'+ i +'" class="btn btn-danger">删除</button></td></tr>');
		$('tbody').append(newEle);
	});
}
sjlb();
//设置导航栏编辑---手机列表模态框
var index;
function revise(a){
	index = $(a).attr('data');
	//提交更改
	$('#tjgg').click(function(){
		history.go(0);
		hq(index);
		var dh = localStorage.getItem('dh');
		var dhList = eval('(' + dh + ')');
		console.log(dhList);
		$.each(dhList, function(i, item) {
			var newEle1 = $(' <tr><td><img id="htsjimg" src="' + item.imgurl + '" alt="" /></td><td id="htsjname">' + item.name + '</td><td><button id="revise" type="button" data="' + i + '" onclick="revise(this)" class="btn btn-primary" data-toggle="modal" data-target="#myModal">更改</button><button type="button" id="del" data="' + i + '" onclick="del(this)" class="btn btn-danger">删除</button></td></tr>');
		$('tbody').append(newEle1);
		});
	});
}
//获取并且添加进数据库
function hq(){
	var iw = $('#imgWay').val();
	var hn = $('#handsetName').val();
	var arr = {imgurl:iw,name:hn};
	dhList.splice(index,1,arr);
	var newArr = JSON.stringify(dhList);
	localStorage.setItem('dh',newArr);
}
//设置删除元素
var index2;
function del(b){
	swal({
		title: "是否确认删除", // 标题，自定
		text: "删除之后数据将无法恢复，请慎重!", // 内容，自定
		type: "warning", // 类型，分别为error、warning、success，以及info
		showCancelButton: true, // 展示取消按钮，点击后会取消接下来的进程（下面那个function）
		confirmButtonColor: '#fa474d', // 确认用途的按钮颜色，自定
		confirmButtonText: '是', // 确认用途的按钮内容，自定
		cancelButtonText: "否", // 取消用途的按钮内容，自定
		closeOnConfirm: true, // 确认按钮被关闭后，Alert也被关闭，设为false将自动调用下面的函数——也就是启动后续Alert。
		closeOnCancel: true, // 这个在官方文档没有出现，小发现啊~嘿嘿，作用与closeOnConfirm类似
		allowOutsideClick: false //点击模态款之外是否关闭模态框
	});
	$('.swal2-confirm').click(function() {
		index2 = $(b).attr('data');
		dhList.splice(index2,1);
		var newString2 = JSON.stringify(dhList);
		localStorage.setItem('dh',newString2);
		history.go(0);
	});
	
}
//添加商品
$('#tjspqr').click(function() {
	var iw1 = $('#imgWay1').val();
	var hn1 = $('#handsetName1').val();
	console.log(iw1, hn1);
	var arr1 = {
		imgurl: iw1,
		name: hn1
	};
	dhList.push(arr1);
	var newArr1 = JSON.stringify(dhList);
	localStorage.setItem('dh', newArr1);
	console.log(dh);
	history.go(0);
});
$('#fhsy').click(function(){
	window.open("../web/index.html");
});
//手机列表点击事件
$('#sjlb').click(function(){
	$('tbody').empty();
	sjlb();
	return false;
});
$('.btn-info').click(function(){
	window.location.href = "../web/login.html";
});
//写配件列表的数据
$('#pjlb').click(function(){
	$('tbody').empty();
	dhpj = localStorage.getItem('dhpj');
	dhpjList = eval('(' + dhpj + ')');
	$.each(dhpjList, function(i, item) {
		console.log(1);
		var newEle1 = $(' <tr><td><img id="htsjimg" src="' + item.imgurl + '" alt="" /></td><td id="htsjname">' + item.name + '</td><td><button id="revise" type="button" data="' + i + '" onclick="revise(this)" class="btn btn-primary" data-toggle="modal" data-target="#myModalpj">更改</button><button type="button" id="del" onclick="del(this)" data="'+ i +'" class="btn btn-danger">删除</button></td></tr>');
		$('tbody').append(newEle1);
	});
	return false;
});
//摄影列表数据
$('#sylb').click(function(){
	$('tbody').empty();
	dhsy = localStorage.getItem('dhsy');
	dhpjList = eval('(' + dhsy + ')');
	$.each(dhpjList, function(i, item) {
		var newEle2 = $(' <tr><td><img id="htsjimg" src="' + item.imgurl + '" alt="" /></td><td id="htsjname">' + item.name + '</td><td><button id="revise" type="button" data="' + i + '" onclick="revise(this)" class="btn btn-primary" data-toggle="modal" data-target="#myModal">更改</button><button type="button" id="del" onclick="del(this)" data="'+ i +'" class="btn btn-danger">删除</button></td></tr>');
		$('tbody').append(newEle2);
	});
	return false;
});
//UI列表数据
$('#uilb').click(function(){
	$('tbody').empty();
	dhui = localStorage.getItem('dhui');
	dhpjList = eval('(' + dhui + ')');
	console.log(dhui);
	$.each(dhpjList, function(i, item) {
		var newEle2 = $(' <tr><td><img id="htsjimg" src="' + item.imgurl + '" alt="" /></td><td id="htsjname">' + item.name + '</td><td><button id="revise" type="button" data="' + i + '" onclick="revise(this)" class="btn btn-primary" data-toggle="modal" data-target="#myModal">更改</button><button type="button" id="del" onclick="del(this)" data="'+ i +'" class="btn btn-danger">删除</button></td></tr>');
		$('tbody').append(newEle2);
	});
	return false;
});