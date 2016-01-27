$(document).ready(function() {
	$("#right").bind("click",right);
	$("#left").bind("click",left);
		
	function right(){
	
		$("#right").unbind();
		$("#left").unbind();

		$("#slider ul").css("margin-left",-800);
		$("#slider ul li:last").prependTo("#slider ul");
		$("#slider ul").animate({"margin-Left":0},1000,function(){
			$("#right").bind("click",right);
			$("#left").bind("click",left);
		});	

	};


	function left(){

		$("#right").unbind();
		$("#left").unbind();
			
		$("#slider ul").animate({
				"margin-left" : "-=800px"
			}, 1000,function(){

			$("#slider ul li:first").appendTo("#slider ul");
			$("#slider ul").css("margin-left",0);

			$("#right").bind("click",right);
			$("#left").bind("click",left);
		
		});
	};

});
