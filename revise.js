var name = prompt("Enter your group name: ");

function whosPayingFor(name) {
    var totalPerson = name.length;
    var randomPos = Math.floor(Math.random() * totalPerson);
    var randomName = name[randomPos];

    return +randomName +" is going to pay."
}