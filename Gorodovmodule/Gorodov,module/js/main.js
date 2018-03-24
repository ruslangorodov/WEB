$(".sqr_1").mouseenter( function() {
	$(".tr_b").css("visibility" , "visible");

}
);

$(".tr-up").mouseenter( function() {
	$(".tr_r").css("visibility" , "visible");
	$(".tr-up").css("transform" , "rotate(180deg)");
}
);

$(".sqr_1").mouseleave( function(){
	$(".tr_r").animate({left: '+=550px'}, 2000);
	$(".tr_r").animate({bottom:'+=550px'}, 2000);
});

$(".sqr_1").mouseleave( function(){
	$(".tr_b").animate({bottom:'+=550px'}, 2000);
	$(".tr_b").animate({left: '+=550px'}, 2000);
});
