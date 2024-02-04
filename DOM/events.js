let btn = document.getElementById("btn")

//Mouse Event MDN Link
//https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// button.addEventListener("EventName",function)
btn.addEventListener("click",()=>{
    // alert("I was clicked")
    document.querySelector(".box").innerHTML="<b>Your Clicked</b>"
})