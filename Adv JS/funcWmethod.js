function bellboyFactory(name,age,hasWorkPermit,languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.moveSuitCase = function() {
        alert("May I take your suitcase?");
    }
}