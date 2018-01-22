var a;
var b;
var yhmmm = localStorage.getItem('yh');
var dgyhmm = eval('(' + yhmmm + ')');
$("[type='button']").click(function() {
	a = $('.fg1 input').val();
	b = $('.fg2 input').val();
	$.each(dgyhmm, function(i, item) {
		if(dgyhmm[i].zh != a && dgyhmm[i].mm != b) {
			$('.fg1 span').css({
				'display': 'inline-block'
			});
			$('.fg2 span').css({
				'display': 'inline-block'
			});
		}
		if(dgyhmm[i].zh == a && dgyhmm[i].mm != b) {
			$('.fg1 span').css({
				'display': 'none'
			});
			$('.fg2 span').css({
				'display': 'inline-block'
			});
			return false;
		}
		if(dgyhmm[i].zh != a && dgyhmm[i].mm == b) {
			$('.fg1 span').css({
				'display': 'inline-block'
			});
			$('.fg2 span').css({
				'display': 'none'
			});
			return false;
		}
		if(a == dgyhmm[i].zh && b == dgyhmm[i].mm) {
			$('.fg1 span').css({
				'display': 'none'
			});
			$('.fg2 span').css({
				'display': 'none'
			});

			setTimeout(function() {
//				window.cookie =“zh = dgyhmm[i].zh; var mm = dgyhmm[i].mm”; 
				swal({
					title: "登陆成功", // 标题，自定
					text: "即将进入管理员后台，为什么不是用户后台呢？你猜......", // 内容，自定
					type: "success", // 类型，分别为error、warning、success，以及info
					showCancelButton: true, // 展示取消按钮，点击后会取消接下来的进程（下面那个function）
					confirmButtonColor: '#9afa47', // 确认用途的按钮颜色，自定
					confirmButtonText: '进入后台!', // 确认用途的按钮内容，自定
					cancelButtonText: "取消登录", // 取消用途的按钮内容，自定
					closeOnConfirm: true, // 确认按钮被关闭后，Alert也被关闭，设为false将自动调用下面的函数——也就是启动后续Alert。
					closeOnCancel: true, // 这个在官方文档没有出现，小发现啊~嘿嘿，作用与closeOnConfirm类似
					allowOutsideClick: false //点击模态款之外是否关闭模态框
					//imageUrl: "images/thumbs-up.jpg" 用于替换Title上方的图
				});
				$('.swal2-confirm').click(function(){
					window.location.href = '../system/backstage.html';
				});
			}, 500);
			return false;
		}
	});
});