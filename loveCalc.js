prompt("Enter your name: ");
prompt("Enter your loved one's name: ");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1 ;

if(loveScore > 70){
    alert("Your love percentage is: " +loveScore+ "%" +" and You're love is like Kayne loves kayne");
}else{
    alert("Your love percentage is: " +loveScore+ "%");
}
/* 
Equal to ===
Not equal to !==
greater than >
smaller than <
greater equal >=
*/