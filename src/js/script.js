$(document).ready(function(){
	
	//tabs 

	function toggleSlide(item) {
	    $(item).each(function(i) {
		    $(this).on('click', function (e) {
			    e.preventDefault();
			    $('.price__info').eq(i).toggleClass('price__info_active');
			    $('.price__list').eq(i).toggleClass('price__list_active');
		    });
	    });
	}
  
	toggleSlide('.price__btn');
	toggleSlide('.price__back');
	
	// slide 

	$('.carousel__inner').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/slick_prev.png" alt="prev"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/slock_next.png" alt="next"></button>',
	});
	    
	// modal 
	
	$('[data-modal = callback]').on('click', function () {
		$('.overlay, #callback').fadeIn('slow');
	});

	$('.modal__close').on('click', function () {
		$('.overlay, #callback').fadeOut('slow');
	});
  });
  