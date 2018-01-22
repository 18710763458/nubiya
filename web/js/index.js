	$(document).ready(function () {
	 var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal',
	    loop: false,
	    autoplay:true,
	    // 如果需要分页器
	    pagination: '.swiper-pagination',
	    paginationClickable:'ture',
//	    paginationType:'custom',
	    
	    // 如果需要前进后退按钮
	    nextButton: '.swiper-button-prev',
	    prevButton: '.swiper-button-next'
	    
	  }) 
	})

$('#example-navbar-collapse .nav li').mouseenter(function(){
	var a = this.getAttribute('data');
	console.log(a);
	switch(a){
		case 'sj':
			$('.xlcd').slideDown();
			$('.xlcd>.dhpj>div').css({
				'display':'none'
			});
			$('.xlcd>.dhpj>span').css({
				'display':'none'
			});
			$('.xlcd>.dhsy>div').css({
				'display':'none'
			});
			$('.xlcd .dhsj .dhsjdg').css({
				'display':'inline-block'
			});
			$('.xlcd>.dhui>div').css({
				'display':'none'
			});
			$('.xlcd>.dhsy').css({
				'padding':'0'
			});
			$('.xlcd .dhsj span').css({
				'display':'inline-block'
			});
			break;
		case 'pj':
			$('.xlcd').slideDown();
			$('.xlcd>.dhsj>.dhsjdg').css({
				'display':'none'
			});
			$('.xlcd>.dhsj>span').css({
				'display':'none'
			});
			$('.xlcd>.dhsy>div').css({
				'display':'none'
			});
			$('.xlcd .dhpj .dhpjdg').css({
				'display':'inline-block'
			});
			$('.xlcd>.dhui>div').css({
				'display':'none'
			});
			$('.xlcd>.dhsy').css({
				'padding':'0'
			});
			$('.xlcd .dhpj span').css({
				'display':'inline-block'
			});
			break;
		case 'sy':
			$('.xlcd').slideDown();
			$('.xlcd>.dhsj>.dhsjdg').css({
				'display':'none'
			});
			$('.xlcd>.dhsj>span').css({
				'display':'none'
			});
			$('.xlcd>.dhpj>div').css({
				'display':'none'
			});
			$('.xlcd>.dhpj>span').css({
				'display':'none'
			});
			$('.xlcd>.dhui>div').css({
				'display':'none'
			});
			$('.xlcd .dhsy .dhsydg').css({
				'display':'inline-block'
			});
			$('.xlcd>.dhsy').css({
				'padding':'60px 10%'
			});
			break;
		case 'ui':
			$('.xlcd').slideDown();
			$('.xlcd>.dhsj>.dhsjdg').css({
				'display':'none'
			});
			$('.xlcd>.dhsj>span').css({
				'display':'none'
			});
			$('.xlcd>.dhpj>div').css({
				'display':'none'
			});
			$('.xlcd>.dhpj>span').css({
				'display':'none'
			});
			$('.xlcd>.dhsy>div').css({
				'display':'none'
			});
			$('.xlcd>.dhsy').css({
				'padding':'0'
			});
			$('.xlcd .dhui .dhuidg').css({
				'display':'inline-block'
			});
			break;
	}
});
$('.xlcd').mouseleave(function() {
	$('.xlcd').slideUp();
	$('.dhpj .dhpjdg').css({
		'display': 'none'
	});
	$('.dhpj span').css({
		'display': 'none'
	});
});

var dhString = localStorage.getItem('dh');
var dhList = eval('('+ dhString +')');
console.log(dhList);
$.each(dhList,function(i,item){
	var newObject = $('<div class="dhsjdg"><img src="'+ item.imgurl +'" alt="" /><span>'+ item.name +'</span></div>');
	$('.dhsj').append(newObject);
});
$('.navbar-toggle').click(function(){
	$('#shopping').show();
	$('.glyphicon-user').show();
});
