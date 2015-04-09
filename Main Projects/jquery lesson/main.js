$(function(){
	
	function favorites() { 
		
		
		var name=$("#name").val();
			
		var favfood =$("#favoriteFood").val();
		
		var favcolor= $("#favoriteColor").val();
		
		$("#sentence").fadeIn();
		$("#nametext").html(name);
		$("#favfood").html(favfood);
		$("#sentence").css("color", favcolor);

	}
	
	
	$("#sentence").hide();
	$("#submit").click(favorites);
	
	
})