var name= prompt("what is your name?");

document.getElementById("xholder").innerHTML = name;

var xholder = document.getElementById("xholder");
xholder.innterHTML= name;

var color= prompt("what is your favorite color?");

if (color == "red")
{ color= "green";
}



document.getElementById("color").innerHTML = color;


//document.body.style.backgroundColor=color;
document.getElementById("color").style.color=color;
xholder.style.color= color;
