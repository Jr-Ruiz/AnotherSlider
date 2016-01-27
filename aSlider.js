$(document).ready(function() {
  $("#derecha").bind("click",derecha);
	$("#izquierda").bind("click",izquierda);
		
	function derecha(){
	
		$("#derecha").unbind();
		$("#izquierda").unbind();

		$("#carrusel ul").css("margin-left",-800);
		$("#carrusel ul li:last").prependTo("#carrusel ul");
		$("#carrusel ul").animate({"margin-Left":0},1000,function(){
			$("#derecha").bind("click",derecha);
			$("#izquierda").bind("click",izquierda);
		});	

	};


	function izquierda(){

		$("#derecha").unbind();
		$("#izquierda").unbind();
			
		$("#carrusel ul").animate({
				"margin-left" : "-=800px"
			}, 1000,function(){

			$("#carrusel ul li:first").appendTo("#carrusel ul");
			$("#carrusel ul").css("margin-left",0);

			$("#derecha").bind("click",derecha);
			$("#izquierda").bind("click",izquierda);
		
		});
	};

});
