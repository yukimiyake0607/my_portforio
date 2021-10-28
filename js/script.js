$(function(){

    //slider
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        fade: true,
        arrows: false,
        infinite: true,
        pauseOnHover: false,
        cssEase: 'linear'
    });




    //fade
    $(window).scroll(function() {
        $(".fade-block").each(function() {
          var scroll = $(window).scrollTop();
          var blockPosition = $(this).offset().top;
          var windowHeight = $(window).height();
          if (scroll > blockPosition - windowHeight + 300) {
            $(this).addClass("blockIn");
          }
        });
    });




    //スムーススクロール
    $('a').click(function(){
		// 移動先の調整をする。20と書けば20px下にずれる。
		var adjust = 0;

		// スクロールの速度(ミリ秒)
		var speed = 400;

		// 飛び先のhrefを取得して、変数hrefに格納する
		var href = $(this).attr("href");

		// 飛び先(hrefと同じidを持つ要素)を探して、targetに格納する
		var target = $(href == "#" || href == "" ? 'html' : href);

		// 飛び先の位置座標をoffset()で取得して、positionに格納する
		var position = target.offset().top + adjust;

		// スクロールにアニメーションをつける linear(等速) or swing(変速)
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});




    //ハンバーガーメニューの開閉
    $('.burger-btn').on('click', function () {
        $('.burger-btn').toggleClass('cross');
        $('.header-nav').fadeToggle(300);
        $('body').toggleClass('noscroll');
    });




    $('.header-nav').find('a').on('click', function() {
        // ここのif文の位置が変わっています。
        if( $(window).width() <= 768){
            $('.header-nav').fadeToggle(300);
            $('.burger-btn').removeClass('cross');
            $('body').removeClass('noscroll');
        }
    }); 
    $(window).resize(function() {
        if( $(window).width() <= 768){
            // リサイズされて900px以下なので、ハンバーガーメニュー範囲のサイズ変更
            // メニューを開いたままウィンドウを広げたとき、メニューがＸのままになるのを防ぐ
            $('.burger-btn').removeClass('cross'); 
            // ハンバーガーメニューを出すのでヘッダは隠す
            $('.header-nav').hide();
        } else {
            // リサイズされて900pxを超えているで、通常ヘッダ
            $('.header-nav').show();           
        }
    })




    //sticky header
    var $win = $(window),
        $fv = $('.fv'),
        $header = $('.header'),
        fvHeight = $fv.outerHeight(),
        fixedClass = 'fixed';

    $win.on('load scroll',function(){
        var value = $(this).scrollTop();
         if($win.width()>768)

          if ( value > fvHeight) {
              $header.addClass(fixedClass);

          } else {
              $header.removeClass(fixedClass);
          }
    });
});