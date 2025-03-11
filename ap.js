// 画面表示時
$(function() {
	setTimeout(function(){
		$('.start p img').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン
	setTimeout(function(){
		$('.start').fadeOut(1000);
	},4000); //n秒後にロゴ含め真っ白背景をフェードアウト
});


// フェードイン
$(function(){
  $(window).scroll(function (){
    $('.fadein').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 200){
            $(this).addClass('fade-scroll');
        }
    });
  });
});


// ループスライダー
$(document).ready(function(){
    $("#loopslider").endlessRiver();
});


// キャラリスト
jQuery(function($){
	$(".chara-pv img").bind("load",function(){
		var ImgHeight = $(this).height();
		$('.chara-pv').css('height',ImgHeight);
	});
	
	$('.chara-list a').click(function(){
		if($(this).children('img').hasClass('active') == false){
		$('.chara-list a').children('img').removeClass('active');
		$(this).children('img').addClass('active');
		$('.chara-pv img').hide().attr('src',$(this).attr('href')).fadeIn();
		};
		 return false;
	}).filter(':eq(0)').click();
});