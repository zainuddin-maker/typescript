const add = (a:number,b:number):number =>{
    return a+ b;
}

// a:number and b: number is argument , so no type inference
// for arguments ,

// but in output number , type inference works out output, but we wont use it!

// so if we delete output annotation we can run like below:
// const add = (a:number,b:number) =>{
//     return a+ b;
// }

// we must allways add annotation in output , becasue 
// if output is missing something , typescript not done anything to tell 
//  developer that there are mistake 
// example 

// const subtract = (a:number,b:number) =>{
//      a+ b;
// }

//  when we hover in add , that the output is void ,
// and we miss return , to return some number 
//  but typescript didnt not tell that.

const subtract = (a:number,b:number):number =>{
   return  a+ b;
}

function divide(a:number,b:number):number {
    return a/b 
}

const multiply = function (a:number,b:number):number {
    return a*b
}

// example void output

const logger = (message:string) : void =>{
    console.log(message)
}

// example never output

const throwError = (message :string):never =>{
    throw new Error(message)
}

const throwError1 = (message :string):string =>{

    if (!message){
        throw new Error(message)
    }


    return message
}

const throwError2 = (message :string):void =>{

    if (!message){
        throw new Error(message)
    }


    // return message
}


// destructuring with annotations

const todaysWeather ={

    date : new Date(),
    weather:'sunny'
}

const logWeather = (forecast : {date : Date, weather:string}) : void =>{

    console.log(forecast.date)
    console.log(forecast.weather)
}

const logWeather1 = ({date,weather} : {date : Date, weather:string}) : void =>{

    console.log(date)
    console.log(weather)
}