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

	$("#enter").on('keydown', function(event) {
	  if(event.which === 13)
		  window.location.replace("http://google.com/");
	});	
		
	$("#enter2").on('keydown', function(event) {
	  if(event.which === 13)
		  window.location.replace("http://google.com/");
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
				$("#result").css({"color":"red"});
				return;
			}
			
		 	requestFile("data.json");
		})						 
});

//___________nav bar animation ____________________

$(window).scroll(
	{
		previousTop: 0
	},
	function () {
		var currentTop = $(window).scrollTop();
		if (currentTop < this.previousTop) {
			$(".navscroll").fadeIn();
		}else {
			$(".navscroll").hide(); 
	}
	this.previousTop = currentTop; 
	});


