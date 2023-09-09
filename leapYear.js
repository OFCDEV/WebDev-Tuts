function isLeap(year) {
    if(year % 4 === 0){
        if(year % 100 === 0){

        }else{
            return "Leap Year."
        }
    }else{
        return "Not leap year."
    }
}