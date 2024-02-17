use("CrudDB")

db.createCollection("inventory")

db.inventory.insertMany( [
    {
       "item": "nuts", "quantity": 30,
       "carrier": { "name": "Shipit", "fee": 3 }
    },
    {
       "item": "bolts", "quantity": 50,
       "carrier": { "name": "Shipit", "fee": 4 }
    },
    {
       "item": "washers", "quantity": 10,
       "carrier": { "name": "Shipit", "fee": 1 }
    }
 ] )

 let a = db.inventory.find( { quantity: { $gt: 20 } } )
 console.log(a)