var num = 0;
$('.yhxy input').click(function(){
	num++;
	if(num % 2 == 1){
		$('.yhxy input').attr('checked','none');
	}else{
		$('.yhxy input').removeAttr('checked');
	}
	
});
var reg = /[a-z0-9A-Z@_\.]{6,20}/;
'AhdfjkhAsdfkghASDF'
var reg1 = /(?![A-Z]+$)(?![a-z]+$)(?![0-9]+$)(?![\W_]+$)\S{6,16}$/;

var reg2 = /\w+/;
var a;
var b;
var c;
var d;
var e;
var yhmmm1 = localStorage.getItem('yh');
var dgyhmm1 = eval('('+ yhmmm1 +')');
//判断是否用户名重复
function pdsfcf(){
	$('#exampleInputEmail1').blur(function(){
		a = $('.fg1 input').val();
		$.each(dgyhmm1,function(i,item){
			if(dgyhmm1[i].zh == a){
				$('.fg1span2').css({
					'display':'inline-block'
				});
				return false;
			}else{
				$('.fg1span2').css({
					'display':'none'
				});
			}
		});
	});
}
pdsfcf();
//立即注册的点击事件
$('.btn1').click(function() {
	a = $('.fg1 input').val();
	b = $('.fg2 input').val();
	c = $('.fg3 input').val();
	d = $('.fg4 input').val();
	if(!reg.test(a)) {
		$('.fg1 span').css({
			'display': 'inline-block'
		});
	}else{
		$('.fg1 span').css({
			'display': 'none'
		});
	}
	if(!reg1.test(b)) {
		$('.fg2 span').css({
			'display': 'inline-block'
		});
	}else{
		$('.fg2 span').css({
			'display': 'none'
		});
	}
	if((c=='nloh')||(c=='NLOH')) {
		$('.fg3 span').css({
			'display': 'none'
		});
	}else{
		$('.fg3 span').css({
			'display': 'inline-block'
		});
	}
	if(!reg2.test(d)) {
		$('.fg4 span').css({
			'display': 'inline-block'
		});
	}else{
		$('.fg4 span').css({
			'display': 'none'
		});
	}
	if(reg.test(a) && reg1.test(b)&&(c=='nloh'||c=='NLOH')&&reg2.test(d)&&$('.yhxy input').attr('checked') == 'checked') {
		var yhxxdg1 = {
			zh:a,
			mm:b
		};
		dgyhmm1.push(yhxxdg1);
		console.log(dgyhmm1);
		var yhString = JSON.stringify(dgyhmm1);
		localStorage.setItem('yh',yhString);
		console.log('yh');
		window.location.href = "file:///Users/xalo/Desktop/%E9%A1%B9%E7%9B%AE%E8%B5%84%E6%96%99/%E5%8A%AA%E6%AF%94%E4%BA%9A%E6%89%8B%E6%9C%BA%E5%AE%98%E7%BD%91/web/login.html";	
	}
});
