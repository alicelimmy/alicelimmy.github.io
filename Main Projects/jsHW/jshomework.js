var name= prompt ("What's your name?");
document.getElementById("name").innerHTML = name;

var birthday= prompt ("When's your birthday? ");
document.getElementById("birthday").innerHTML = birthday;

var color= prompt ("Copy/Paste ONE of these colors that's your favorite: aqua black blue fuchsia gray green lime maroon navy olive purple red silver teal or yellow");

var icon= prompt ("Do you like or dislike birthdays? ");


if (icon== "like" ) {
        
           icon = "like" ;
           document.getElementById("icon").innerHTML =  "&#9786;";
               
        }

else if (icon== "dislike" ) {
        
           icon = "dislike" ;
           document.getElementById("icon").innerHTML =  "&#9785;";
               
        }

//if (input.toUpperCase()icon === “LIKE”)

document.body.style.backgroundColor=color;
color.style.color= color;


//var name = 'My name is' + ' ' + name 
//var birthday = 'I better get cake on' + ' ' + birthday
//
//document.write(name);
//document.write(birthday);
// Ask about this in class
