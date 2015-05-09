$(function (){
	$("#navigation").click(function(){
		
		$("#hamburger").toggleClass ("show");
	});
	
	
});

$(function (){
	$("#search").click(function(){
		
		$("#searchbar").toggleClass ("show");
	});
	
	
});

$(function (){
	$("#search2").click(function(){
		
		$("#searchbar2").toggleClass ("show");
	});
	
	
});


//__________________ajax_____________________

$(
	function () {
		function requestFile(url){
		$.ajax(
			{
				url: url,
				cache: false,
				dataType: "json",
				success: function(data){
				
					$("#result").html("Thank You!");	
				
					
				}
				
		
			}
		);
		
		}
	
		
		$(".submit").click(function(){
			if($("#newsletterform").val() == "") {
				$("#result").html("Oh Noez!");	
				return;
			}
		 	requestFile("data.json");
	}
	 )
								
								 
								 					 
								 
	});

