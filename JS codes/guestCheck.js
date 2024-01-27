var guestList = ["Sambhav","Dev" , "Shreyo" , "Anandita" , "Roshu" ];

var guestName = prompt("Enter your guest ID: ");

if(guestList.includes(guestName)) {
    alert("You're welcome.")
}else{
    alert("Sorry! Maybe next time.")
}