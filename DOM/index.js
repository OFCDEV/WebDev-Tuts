console.log("Hello World")

//document.body.children --> Gives an array of elements present in the body

//let cont = doucment.body.childNodes -->Shows all the child elements including whitespaces as text

//document.body.childNodes[1]--> Accessing the index 1 element

//document.body.firstElementChild --> Shows first child element not including whitespace

//document.body.firstElementChild.children --> Gives the array of all elements in first element

// document.body.firstElementChild.nextElementSibling-->Gives next element of the container

// document.body.firstElementChild.previousElementSibling-->Gives prev element of the container

//document.getElementsByTagName("div")


console.log(document.getElementsByClassName("box"))


document.querySelector(".box").style.backgroundColor ="red"
document.querySelectorAll(".box").forEach(e=>{e.style.backgroundColor = "green"})
