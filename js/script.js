$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		adaptiveHeight:true,
		slidesToShow:5,
		slidesToScroll:1,
		asNavFor:".sliderbig",
		focusOnSelect:true,
		centerMode:false,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:4,
				}
			},{
				breakpoint: 480,
				settings: {
					slidesToShow:3,
				}
			}
		]
	});
	$('.sliderbig').slick({
		arrows:true,
		fade:false,
		speed:2000,
		autoplay:true,
		autoplaySpeed:4000,
		centerMode:false,
		variableWidht:true,
		asNavFor:".slider",
	});
});