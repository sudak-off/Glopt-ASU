$(document).ready(function(){
	
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
	
	
  });
  