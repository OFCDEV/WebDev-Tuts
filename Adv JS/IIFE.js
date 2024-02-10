//IIFE(Immediately Invoke Function Expression) is a javascript func that runs as soon as it is defined.
/*str:- (function (){
        //
        })();

It is used to avoid polluting the gloabal namespace, execute an async-await etc
        */
async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}
// let a = await sleep()
// let b = await sleep() This will thorw an error; await is only valid in async function

(async function main() {
    let a = await sleep();
    console.log(a)
    let b = await sleep();
    console.log(b)
})();