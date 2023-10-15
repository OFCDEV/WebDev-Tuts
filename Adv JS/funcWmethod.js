function bellboyFactory(name,age,hasWorkPermit,languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    moveSuitCase:void function() {
        alert("May I take your suitcase?");
    }
}