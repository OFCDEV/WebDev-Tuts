function whosPaying (names){
    var numberOfPepople = names.length;
    var randomPosition = Math.floor(Math.random() * numberOfPepople);
    var randomPepole = names[randomPosition];
    return randomPepole + " is going to pay."
}