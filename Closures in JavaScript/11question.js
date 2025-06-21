function outer(){
    let message="message";
    return function inner(){
        console.log(message);
    }
}


const innerFunction = outer();
innerFunction();