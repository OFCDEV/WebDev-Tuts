//CRUD--> Create Read Update Delete
 use("CrudDB")

db.createCollection("courses")

db.courses.insertOne({
    name: "My WebDev Course1",
    price:0,
    assignments:12,
    projects:2
})

db.courses.insertMany([
    [
        {
            "name": "My WebDev Course",
            "price": 0,
            "assignments": 12,
            "projects": 2
        },
        {
            "name": "Data Science Bootcamp",
            "price": 1500,
            "assignments": 8,
            "projects": 3
        },
        {
            "name": "Mobile App Development",
            "price": 800,
            "assignments": 10,
            "projects": 1
        },
        {
            "name": "Intro to Python Programming",
            "price": 0,
            "assignments": 6,
            "projects": 0
        },
        {
            "name": "Frontend Web Design",
            "price": 500,
            "assignments": 15,
            "projects": 2
        },
        {
            "name": "Database Management",
            "price": 1200,
            "assignments": 10,
            "projects": 1
        },
        {
            "name": "Cybersecurity Fundamentals",
            "price": 0,
            "assignments": 8,
            "projects": 2
        },
        {
            "name": "Machine Learning Workshop",
            "price": 300,
            "assignments": 5,
            "projects": 1
        },
        {
            "name": "Game Development",
            "price": 700,
            "assignments": 12,
            "projects": 3
        },
        {
            "name": "UI/UX Design",
            "price": 400,
            "assignments": 8,
            "projects": 1
        }
    ]
    
])

//read

let a = db.courses.find({price:0})
console.log(a)
console.log(a.count()) //Returns number of courses with price:0
console.log(a.toArray()) //Returns an array

// let b = db.courses.findOne({price:0})   //Returns the first 


//UPDATE

db.courses.updateOne({price:0},{$set:{price:100}})


db.courses.updateMany({price:0},{$set:{price:100}})


//DELETE

db.courses.deleteOne({price:0})

db.courses.deleteMany({price:500})