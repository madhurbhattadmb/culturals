$(function(){

  // window.sr = ScrollReveal();

  // if ($(window).width() < 768) {
  //
  //   $('.time').addClass('js--fadeInRight');
  // 	if ($('.box').hasClass('js--fadeInLeft')) {
  // 		$('.box').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
  // 	}
  //   // if ($('.box').hasClass('box-left')) {
  // 	// 	$('.box').removeClass('box-left').addClass('box-right');
  // 	// }
  //
  //
  // 	sr.reveal('.js--fadeInRight', {
	//     origin: 'right',
	//     distance: '300px',
	//     easing: 'ease-in-out',
	//     duration: 800,
	//   });
  //
  // }
  if($(window).width() <= 920){
    $('.swiper-container').removeClass('timeline');
    $('.swiper-slide').removeClass('box');
    $('.swiper-slide').removeClass('box-left');
    $('.swiper-slide').removeClass('box-right');
    $('.rm').removeClass('box-content');

    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      autoplay: {
       delay: 4000,
       disableOnInteraction: false,
     },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
  else {
    window.sr = ScrollReveal();
  	sr.reveal('.js--fadeInLeft', {
	    origin: 'left',
	    distance: '300px',
		  easing: 'ease-in-out',
	    duration: 800,
	  });

	  sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });

  }

  // sr.reveal('.js--fadeInLeft', {
	//     origin: 'left',
	//     distance: '300px',
	// 	  easing: 'ease-in-out',
	//     duration: 800,
	//   });
  //
	//   sr.reveal('.js--fadeInRight', {
	//     origin: 'right',
	//     distance: '300px',
	//     easing: 'ease-in-out',
	//     duration: 800,
	//   });
  //

});
