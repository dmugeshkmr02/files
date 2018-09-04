/*--------------------
 Projects : Apl.com
 UI Developers : Mugeshkumar Devaraj
---------------------*/
$(document).ready(function()
{	
	/*--------------// main_container Height //-------------*/
	var actualHeight = $(window).height();
	var headerHeight = $('header').outerHeight();
	$('.main_container').css({
			"min-height" : actualHeight
	});

	/*--------------// language_picker a //-------------*/
	$(".language_picker a").click(function(){
    	$('.language_picker a').removeClass("active");
		$(this).toggleClass("active");
	});
	
	/*--------------// tabmenu_ul //-------------*/
	$('.tabmenu_ul li a').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('.tabmenu_ul li a').removeClass('active');
		$('.tab_content').removeClass('tab_content_open');
		$(this).addClass('active');
		$('#'+tab_id).addClass('tab_content_open');
		
		/*--------------// setMaintitle //-------------*/
		/*var setMaintitle = $(this).text();
		$('.main_title').text(setMaintitle);*/
	});

	/*---------------------------------------------------
					down_click_btn
	----------------------------------------------------*/
	$('.down_click_btn').click(function() {
		$('.up_arrow_icon,.down_arrow_icon',this).toggle();
	});
	

});

$(window).resize(function(){
	/*--------------// main_container Height //-------------*/
	var actualHeight = $(window).height();
	var headerHeight = $('header').outerHeight();
	$('.main_container').css({
			"min-height" : actualHeight
	});
});

/*--------------// Toggle effects Scroll //-------------*/
$(document).ready(function(){
	$('a[href^="#"]').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		var innerheaderHeight = $('.innerheader').outerHeight();
		if( target.length ) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top - innerheaderHeight
			}, 1000);
		}
	});


	$('.blmenu_ul li a').click(function(){
		$('.blmenu_ul li a').removeClass('active');
		$(this).addClass('active');
	});
});

/*--------------// up_arrow_icon //-------------*/
$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	if(scroll <= 0)
	{ 
		$('.up_arrow_icon').hide();
		$('.down_arrow_icon').show();
	}
});

/*--------------// getFixed //-------------*/
/*$(window).scroll(function(){
	var sticky = $('#getFixed'),
		scroll = $(window).scrollTop();

	if(scroll >= 10)
	{ 
		sticky.addClass('fixedTop');
	}
	else
	{ 
		sticky.removeClass('fixedTop');
	}
});*/