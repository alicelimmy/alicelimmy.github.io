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

$(function () {
	function requestFile(url){
		$.ajax(
			{url: url,
			cache: false,
			dataType: "json",
			success: function(data){
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
		})						 
});



//var temp = $(".searchbox").val();
//url = "http://google.com/" + temp;
//window.location(url);



//
//$( "#enter" ).keypress(function(event) {
//  if ( event.which == 13 ) {
//     event.preventDefault();
//  }
//});
//
//
//
//$("#enter").keypress(function (e) {
//  alert("enter");
//});
