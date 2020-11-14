$(document).ready(function(){
    $('.udemyCourse__slick').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: '<i class="fa fa-chevron-right"></i>',
        prevArrow: '<i class="fa fa-chevron-left"></i>',
        responsive: [{
          breakpoint: 415,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
      ]
    });
  });
$(document).ready(function(){
    $('.udemyService__items').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        nextArrow: false,
        prevArrow: false,
        responsive: [{
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              dots: true
            }
          },
        {
            breakpoint: 576,
            settings: {
            slidesToShow: 1,
            dots: true
            }
        }
        ]
    });
}); 

$(document).ready(function(){
  $('.udemyStudents__slide').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      nextArrow: '<i class="fa fa-chevron-right"></i>',
      prevArrow: '<i class="fa fa-chevron-left"></i>',
      responsive: [{
        breakpoint: 1439,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1199,
        settings: {
        slidesToShow: 4,
        }
      },
      {
        breakpoint: 991,
        settings: {
        slidesToShow: 3,
        }
      }
      ,
      {
        breakpoint: 691,
        settings: {
        slidesToShow: 2,
        }
      },
      {
        breakpoint: 501,
        settings: {
        slidesToShow: 2,
        }
      }
    ]
  });
});


$(document).ready(function(){
  $('.udemyFeedback__slide').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: '<i class="fa fa-chevron-right"></i>',
      prevArrow: '<i class="fa fa-chevron-left"></i>',
      responsive: [{
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
        }
      },{
        breakpoint: 501,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  });
});