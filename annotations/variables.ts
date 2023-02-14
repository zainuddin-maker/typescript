let apples:number = 5 ;
// if we make as boolean , than error will appear
// const apples:number = true ;

let speed: string = 'fast';
let hasName : boolean = true ;

let nothingMuch:null = null;
let nothing: undefined = undefined;


apples = 10
// apples = 'dkfjkfkdfkdjf'

// built in objects 
let now : Date = new Date(); 
// Array
let colors: string[] = ['red','green','blue']

// class

class Car {}
let car:Car = new Car();

// Object literal

let point :{x : number;y:number}= {

    x: 10,
    y:20
}

// Functipn 
// annotation below is for variable in function  , not the function .

const logNumber : (i :number) => void = (i : number)=>{

    console.log(i);
}

// inference 
// when hover in newcolor below , thereis pop up that say
// that the type is "string"
let newcolor = "red"

// if we make sama case :

let applesnew;
apples = 5 ;

// then if we hover , it says any 


// When to use annotations
// 1) Function that returns the 'any' type 

// const json = '{"x" : 10 , "y":20}';
// const coordinates = JSON.parse(json)

// if we hover to coordinates , than the type is any , because if we hover
//to JSON.parse its say that the output of this function is any type

// why ouput is any , because if we use JSON.parse it will get back very ,very different value types. example
//  if we JSON.parse('false') it will outuput type boolean ,
//  if we JSON.parse ('4') it will output type number
// if we JSON.parse('{"value":5}') it will output type {value:number} , etc.
// because of that typescript cant predict what will get back from the function.

// this is how to fix any type :
const json = '{"x" : 10 , "y":20}';
const coordinates:{x:number;y:number} = JSON.parse(json)
// 2) When we declare a variable on one line and initalizate it later.

let words = ['red','green','blue']
// let foundWord;

// this is how to fix it :
 let foundWord : boolean;
//  or
//  let foundWord =false ;

for (let index = 0; index < words.length; index++) {

    if (words[index] === 'green'){
        foundWord = true
    }
    
}

// 3)  Variable whose type cannot be inferred correctly
let numbers = [-10,-1,12];
let numberAboveZero: boolean | number = false;

for (let index = 0; index < numbers.length; index++) {

    if (numbers[index] > 0){
        numberAboveZero = numbers[index]
    }
    
}



