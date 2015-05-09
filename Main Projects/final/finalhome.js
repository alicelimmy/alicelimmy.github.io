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
				complete: function(data){
				
					$("#result").html("THANK YOU!");	
				
					
				}
				
		
			}
		);
		
		}
	
		
		$(".submit").click(function(){
			if($("#newsletterform").val() == "") {
				$("#result").html("Uh Oh, Please Fill In a Full Email");	
				return;
				$("#result").css({"color":"red"});
			}
		 	requestFile("data.json");
	}
	 )
								
								 
								 					 
								 
	});

