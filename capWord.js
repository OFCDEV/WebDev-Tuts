var name = prompt("Enter your name: ");

var letter1 = name.slice(0,1);

var capLetter = letter1.toUpperCase();

var restLetter = name.slice(1,name.length);

var smallLetter = restLetter.toLowerCase();

var capName = capLetter + samllLetter ;

alert("Hello "+capName);