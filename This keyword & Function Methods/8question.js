let person={name:"sai",age:25};

function personInfo(){
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

personInfo.call(person)