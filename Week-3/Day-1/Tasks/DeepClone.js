const firstObject={
    name:"Ritesh",
    age:"21",
    cars:{
        engine1: "4000cc",
        engine2: "3000cc",
    
    },
    address:{
        house:{
            houseNumber:23,
            block:{
                type:"Colony"
            }
        },
        city:"MAthura",
        state:"UP"
    }
}
console.log(cloneObject(firstObject));
const clonedObj=cloneObject(firstObject);

clonedObj.address.house.block.type="Flat";

console.log(JSON.stringify(clonedObj));
console.log(JSON.stringify(firstObject));


// console.log(JSON.stringify(cloneObject));


function cloneObject(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj; 
    }
    let clonedObj;
    if(Array.isArray(obj)){
        clonedObj=[]
    }else{
        clonedObj={}
    }

    for (let key in obj) {
        clonedObj[key] = cloneObject(obj[key]);
    }

    return clonedObj;
}
