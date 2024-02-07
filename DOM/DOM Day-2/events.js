let btn = document.getElementById("btn")

//Mouse Events MDN Link
//https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

//keyboard Events MDN Link
// https://developer.mozilla.org/en-US/docs/Web/API/Element#keyboard_events


// button.addEventListener("EventName",function (having an event object "e"))
btn.addEventListener("click",()=>{
    // alert("I was clicked")
    document.querySelector(".box").innerHTML="<b>Your Clicked</b>"
})
btn.addEventListener("contextmenu",()=>{
    alert("Don't hack us by right clicking")
})

document.addEventListener("keydown",(e)=>{
    console.log(e)
})

//We can also remove an event by .removeEventListner() method

