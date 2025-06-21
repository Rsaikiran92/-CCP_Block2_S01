let count=0
let id=setInterval(() => {
    console.log("Loading...")
    count++
    if(count===5){
        clearInterval(id)
        console.log("Loaded successfully!")
    }
}, 1000);