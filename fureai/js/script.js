var l = 0;
jQuery(function($){
	//要素追加
	var swiper = new Swiper(".slide_horse", {
		loop: true,
		slidesPerView: 1.35,
		spaceBetween: 0,
		centeredSlides : true,
		effect: "coverflow",
		autoplay: {
			delay: 3500,
		},
		coverflowEffect: {
			rotate: 0,
			stretch: 0, // スライドの間隔（px単位）
			depth: 700, // 奥行きの設定（translateをZ方向にpx単位で移動）
			modifier: 1, //
			slideShadows : false, // 先頭スライドのbox-shadowを有効化
		},
		breakpoints: {
			769: {
				slidesPerView: 1.5,
				spaceBetween: 0,
				coverflowEffect: {
					depth: 600,
				}
				
			},
		}
	});
	
	$('.swiper-slide-active a').prepend('<span class="f">');

	swiper.on('slideChange', function () {
		$('.horse_nav li').removeClass('on');
		$('.horse_nav li').eq(swiper.realIndex).addClass('on');
	});
	swiper.on('transitionEnd', function () {
		$('.f').appendTo('.swiper-slide-active a');
		$('.uma_active_1').appendTo('.swiper-slide-active a');		
	});
		

	$('.horse_nav li').eq(0).addClass('on');
	$('.horse_nav li').each(function(index, element) {
		var ind = index;
		$(this).find('a').on('click',function(e){
			swiper.slideToLoop(ind);
			e.preventDefault();
		});
	});
	$('.slide_horse a').each(function(index, element) {
		var link = $(this).attr('href')
		$(this).on('click',function(e){
			$('.ov').fadeIn(100);
			$('.pop_main').hide();
			$(link).fadeIn(100);
			$('html').addClass('scr_off');
			
			e.preventDefault();
		});
	});
	$('.ov,.btn_close').on('click',function(e){
		$('.ov').fadeOut(100);
		$('.pop_main').fadeOut(100);
		$('html').removeClass('scr_off');
		e.preventDefault();
	});
		
	$(window).on('resize load',function(){
		$('.f').css('height',$('.f').parent().height());
	});
	var fubuki = 50;
	for (var i=1 ; i<=fubuki ; i++){
		$('.swiper-slide-active .f').prepend('<i>');
	}
	$('.uma_active_1').appendTo('.swiper-slide-active a');
	$('.swiper-slide-active i').each(function(index, element) {
		var r1 = Math.floor(Math.random() * $('.f').parent().width());
		var r2 = (Math.random() * 3) + 0.5 +'s';
		var r3 = (Math.random() * 3) + 1 +'s';
		var r5 = Math.floor(Math.random() * 12) + 1;
		$(this).addClass('c'+r5);
		$(this).css({'left':r1,'animation-delay':r2,'animation-duration':r3}).addClass('rakka');
	});
	var params1 = {
		container: document.querySelector('.uma_active_1'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: "./js/hureaiuma01.json"
	};
	var anim = lottie.loadAnimation(params1);
	
	/*$('.slide_horse').slick({
		slidesToShow: 3,
		centerMode: true,
		centerPadding: "0",
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				centerPadding: "0",
			}
		}]
	});*/
});
$(window).on('load',function(){
	$('html').addClass('load_on');
});
