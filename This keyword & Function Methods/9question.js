let obj={ name: "Alice", hobbies: ["reading", "traveling"] };

function deepClone(){
    const deepCopy = JSON.parse(JSON.stringify(obj));
    deepCopy.hobbies.push("coding");
    console.log(obj)
    console.log(deepCopy);
}

deepClone()