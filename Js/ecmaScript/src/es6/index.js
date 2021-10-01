
let hello = 'Hello';
let world = 'World';
let epicPhrase = `${hello} ${world}`;
console.log(epicPhrase);

const learnJs = {
     version:{
         Before:'ES5',
         Now:'ES6'
     },
     frameworks:['Django']
}


console.log(learnJs.version.Now)
let {version,frameworks} = learnJs;
console.log(version,frameworks);




let team1 = ['Symon', 'Yuli', 'Vianka'];
let team2 = ['Peter', 'Mary', 'Juan'];
let team3 = ['Joaquin', ...team1, ...team2];

console.log(team3);

let x = 'Juan';

if (6>5){
 let x = 'Pedro';
}
console.log(x);

class calculator{

    constructor(){
        this.num1 = 0;
        this.num2 = 0;
    }
    sum(num1,num2){
        this.num1 = num1;
        this.num2 = num2;
        return (num1 + num2);

    }
}

let calc = new calculator();
console.log(calc.sum(5,15));


const hello = require('./module');
console.log(hello());

const helloWorld = (()=>{
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(()=>resolve('Hello World'),5000)
        : reject(new Error('Test Error'))
    })

})

const helloAsync = async()=>{
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();















const helloWorld = (()=>{
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(()=>resolve('Hello World'),5000)
        : reject(new Error('Test Error'))
    })
})
helloWorld()
.then(response => console.log(response))
.catch(reject => console.log(reject))
.finally(()=>console.log('Finalizo')) 

const regexdata = /([0-9]{4})([0-9]{2})([0-9]{2})/
const match = regexdata.exec('2021-10-09');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year)