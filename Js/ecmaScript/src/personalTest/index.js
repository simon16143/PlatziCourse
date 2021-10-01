//Arrow function
let hello = (num1,num2)=>{

    return num1 + num2;
}

console.log(hello(5,2));

//Parameter into the object
let names = 'Symon';
let lastName = 'Lopez';
obj1 = {
    names:names,
    lastName:lastName,
}
obj2={names,lastName};
const values = Object.values(obj1);
console.log(values);

//promises
let Hello = new Promise((resolve,reject)=>{
    setTimeout(()=>{
         let exs = true;
         if (exs){
             resolve('Hi everyone');
         }
         else{
             reject('I hate you');
         }


    },5000);   

})
Hello.then(result=>{
    console.log(result);
}).catch(error=>{
    console.log(error);
})

let farewell = require('./module');
console.log(farewell());

class nonename{
    constructor(){
        this.num1 = 0;
        this.num2 = 0;
    }
    sum(num1,num2){
        return num1+num2
    }

}
let exp2 = new nonename();
console.log(exp2.sum(5,10))

let arrayx = [1,2,3,5];
if(arrayx.includes(5)){
    console.log('Hi');
}
