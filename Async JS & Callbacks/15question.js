function taskone(){
    console.log("Task 1 completed")
}

function tasktwo(fcn){
    console.log("Task 2 completed")
    fcn()
}
tasktwo(taskone)


