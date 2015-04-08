//var myWords ={
//    x:"noun",
//    y:"verb",
//    z:"Noun",
//    
//    askForThreeWords: function() {
//        myWords.x = prompt("Pick a word 1");
//        myWords.y = prompt("Pick a second word");
//        myWords.z = prompt("what is the third word?");
//        if (myWords.x != null) {
//        document.getElementById("noun1").innerHTML = 
//            "This is the first word= " + myWords.x ;
//       
//         }
//    },
//
//
//window.onload = function() {
//    
//    myWords.askForThreeWords()
//    
//    var link = document.getElementById("final");
//    
//    link.onclick = function() {
//        myWords.showThreeWords();
//        
//    }
////}
////
//function colormywords() {
//    document.getElementById("noun1").style.color = "#33FFCC";
//    document.getElementById("verb1").style.color = "#33FFCC";
//    document.getElementById("noun2").style.color = "#33FFCC";
//    document.getElementById("verb2").style.color = "#33FFCC";
//	document.getElementById("noun3").style.color = "#33FFCC";
//}
////    
////   
//    
//}
var words = {
    noun1:"meeeps",
    verb1:"meeepss",  
    noun2:"meeepsss",
    verb2:"meeepssss",
    noun3:"meeepssss",
    
}


function myFunction()  {
    words.noun1 = prompt("What's your favorite dog name");
    words.verb1 = prompt("Name a rando verb with -ing at the end");
    words.noun2 = prompt("Name the most weridest place ever");
    words.verb2 = prompt("Name a physical acivity (verb without -ing)");
    words.noun3 = prompt("Name a celebrity you are repulsed by");
    
    if (words.noun1 != null) {
        document.getElementById("madlib").innerHTML =
        "If I ever had a child I would name it" + '&nbsp;<span class= words>' + words.noun1 +"</span>." + '&nbsp;' +
        "I would go" + '&nbsp;<span class= words>' + words.verb1 + '</span>&nbsp;' + "with them 50 times a day."  + '&nbsp;' 		+ "Then we would go to" + '&nbsp;<span class= words>' + words.noun2  + '</span>&nbsp;' + "and" +
        '&nbsp;<span class= words>' + words.verb2 + '</span>&nbsp;' + " with" + '&nbsp;<span class= words>' + words.noun3 +"</span>.";
		
		document.getElementById("madlib").style.visibility = "visible";
		
    }
	
	

}

