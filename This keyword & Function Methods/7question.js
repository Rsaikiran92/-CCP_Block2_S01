function multiplyNumber(a,b){
    return a*b;
}

let val=multiplyNumber.apply(null,[2,10]);
console.log(val)