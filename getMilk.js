function getMilk(money) {   

    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");


    console.log("Buy " +calcBottles(money, 1.5) + " number of bottles of Milk.")

    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    return calcChange(money , 1.5);
  }

  function calcBottles (startingMoney , perBottleCost){

    var numOfBottles = Math.floor(startingMoney / perBottleCost) ;

    return numOfBottles;  
  }
  function calcChange(startingMoney , perBottleCost){

    var change = startingMoney % perBottleCost;

    return change;
  }

  getMilk(4);