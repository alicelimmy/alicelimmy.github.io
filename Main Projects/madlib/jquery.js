$(function(){
	
	function madlib() {
    var noun1 = $("#noun1").val();
    var verb1 = $("#verb1").val();
    var noun2 = $("#noun2").val();
    var verb2 = $("#verb2").val();
    var noun3 = $("#noun3").val();
//	var drag= $("#sentence").val();
		
	$("#sentence").slideDown();	
    $("#noun1holder").html(noun1);
	$("#verb1holder").html(verb1);
	$("#noun2holder").html(noun2);
	$("#verb2holder").html(verb2);
	$("#noun3holder").html(noun3);
//	$("#sentence").draggable(drag);
		
		
    }
	

   
  	
	
	$("#sentence").hide();
	$("#submit").click(madlib);
	
	})
	



