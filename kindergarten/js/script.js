$(document).ready(function() {
	
	$('.header__menu-item').mouseenter(function(){
		$('.header__submenu').removeClass('header__submenu_active').addClass('hidden');
		$('.header__menu-link').removeClass('menu__link_active');
		if ($(this).find('.header__submenu').length > 0) {
			$(this).find('.header__menu-link').addClass('menu__link_active');
			$(this).find('.header__submenu').removeClass('hidden').addClass('header__submenu_active');
		}
		
	});
	$('.header__submenu').mouseleave(function(){
		$(this).removeClass('header__submenu_active').addClass('hidden');
		$('.header__menu-link').removeClass('menu__link_active');
	});

	
	$('.header__mobile-panel-button, .footer__mobile-panel-button').click(function(){
		$('.mobile-panel').addClass('mobile-panel_active');
	});
	
	$('.mobile-panel__close').click(function(){
		$('.mobile-panel').removeClass('mobile-panel_active');
	});
});

$(window).on('load resize orientationchange', function(){
	var headerHeight = $('.header').outerHeight();
	$('.page__container').css('padding-top', headerHeight + 'px');
});
