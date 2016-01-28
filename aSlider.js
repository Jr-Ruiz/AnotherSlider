$(document).ready(function(){
	
	$("#slider").before('<span id="left" class="controls"><</span>');	
	$("#slider").after('<span id="right" class="controls">></span></div>');	
	
	var image_width=$("#slider li img").width();
  	var no_li=$("#slider ul li").size();

  	$("#slider, #slider ul li").css(
  		"width", image_width
  	);

  	$("#slider ul").css(
  		"width", image_width*no_li
  	);

	add_click();
		
	function move_right(){



		remove_click();

		$("#slider ul").css("margin-left",-image_width);
		$("#slider ul li:last").prependTo("#slider ul");
		$("#slider ul").animate({"margin-Left":0},1000,function(){
			add_click();
		});	

	};


	function move_left(){

		remove_click();

		$("#slider ul").animate({
			"margin-left" : "-="+image_width+"px"
			}, 1000,function(){

			$("#slider ul li:first").appendTo("#slider ul");
			$("#slider ul").css("margin-left",0);

			add_click();
				
		});
	};

	function remove_click(){
		$("#right").unbind();
		$("#left").unbind();
	}

	function add_click(){
		$("#right").bind("click", move_right);
		$("#left").bind("click", move_left);
	}
		
});
