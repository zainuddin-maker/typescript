# **TYPESCRIPT**
---

TypeScript  adalah bahasa pemrograman open source yang dikembangkan oleh tim Microsoft. Sebenarnya TypeScript adalah JavaScript dengan tambahan beberapa sintaks untuk type system atau mengatur tipe data pada JavaScript. menambahkan fitur strong-typing & konsep pemrograman OOP klasik ( class, interface)



---

### **SO WHAT IS TYPESCRIPT ?**

![Chat Preview](https://github.com/zainuddin-maker/typescript/blob/master/diagrams-01%20-%20int.png?raw=true)

Benefit from TS :

![Chat Preview](https://github.com/zainuddin-maker/typescript/blob/master/diagrams-02%20-%20types.drawio.png?raw=true)

How typescript working :

![Chat Preview](https://github.com/zainuddin-maker/typescript/blob/master/diagrams-04%20-%20run.drawio.png?raw=true)

summary :

![Chat Preview](https://github.com/zainuddin-maker/typescript/blob/master/diagrams-07%20-%20summary.drawio.png?raw=true)
---

### **ENVIRONTMENT SETUP**
---
![Chat Preview](https://github.com/zainuddin-maker/typescript/blob/master/diagrams-08%20-%20tsc.png?raw=true)

---

### **FIRST APP**

were going to make a little tiny application thats just going to make a network request to some outside API to fetch some JSON and print the result .

- Take a look at the API we'll use to fetch data .
- Create a new project directory
- Create a package.json file
- Install axios to make a request
- Write code!

API we will use is `jsonplaceholder.typicode.com/todos/:id`

we use folder `1_first_APP_fetchdata`

run inside the folder
 `tsc index`

 after that , `index.js file` will be create , and then run `node index.js`.

 but we can combine 2 command into one , we suse `ts-node`

 so we can just run `ts-node index.ts`. 

 in `index.ts` there is `interface` that is for we told to Typescript about this type of object thats going to exist inside of my application. 

 so when we make some data as object in interface that we can catch error if the data didnt match with interface .

 try to uncomment the scrift in before , that the error will be appair.

 if we see in `case 1` we will get error if we uncommnet it , that because the second argument has to be a string , A boolean is not a string , that why we are seeing this error.
 so we can fix that with `answer case 1`

 ---

## **What is a Type System?**

![Chat Preview](https://github.com/zainuddin-maker/typescript/blob/master/diagrams-06%20-%20interfaces.png?raw=true)


--- 
 ### **understand basic types in TS**


Type is Easy way to refer to the different properties + functions that a `value` has.

value in Javascript and TypeScript is anything that we can assign to a variable.

easy way to refer to different properties and functions is example is we write "red" , that mean it is a value that has all the properties methods that we assume that a string has like CharAt(),include() and etc .

![Chat Preview](https://github.com/zainuddin-maker/typescript/blob/master/diagrams-07%20-%20basic%20types.png?raw=true)


thre is 2 types :
- Primitive Types ( very basic types  ) : number,boolean,void,undifined,string,symbol,null 
- Object Types () : functions , arrays , classes,objects.

why do we care about types :
- Types are used by the Typescript Compiler to analyze our code for erroes.
- Types allow other engineers to understand what values are flowing around our codebase.

where do we use types ? 
### **`EVERYWHERE`**

---

Type Annotations + Type Inference 

- Variables
- Functions
- Objects 

>Type annotations -> code we add to tell Typescript what type of value a variable will refer to.

>Type inference -> Typescript tries to figure out what type of value a varibale refers to.


so the main different between type annotations and Type inference is in Type annotations we (developers) tell typescript the type whereas type inference is Typescript guesses the type.

example for annotations variable we can see in `variables.ts`.

for understanding unference we will make some example :

```
const color = 'red'
```

`const color` is variable declaration and `'red'` us variable initialization .
than if declaration and initialization are on the same line , Typescript will figure out the type of `color` for us.

but if we make like :

```javascript
let apples;
apples = 5;
```

then the pop up after hover in apples is any .

of if typescript can figure out these different types for us , why would we go throught the process of writing out the annotations manually ?

so , we use Type annotations when :
- we declare a variable on one line then initialize it later
- we want a variable to have a type that cant be inferred
- a function returns the 'any' type and we need to clarify the value.

for more example se `varibales.ts`

so , when to use Type inference is :
## **ALWAYS!!**

any type is :
- A type, just as 'string' or 'boolean' are
- Means TS has no idea what this is - cant check for corret property references.
- **Avoid variables with 'any' at all costs** beacuse typescript cant do any error checking whatsoever around that value. example , if `coordinates` is any type that we can write like `coordinates.dfdsgsgsgsgsdg` and typescript does nothing because typescript cant checking.

to know how to fix 'any' type see in `variables.ts`

---
**Type annotations for functions**

>Type annotations for functions -> Code we add to tell Typescript what type of arguments a function will receive and what type of values it will return.

>Type inference for functions -> Typescript tries to figure out what type of value a function will return.

to see the example in `functions.ts`


`void` mean that we have a function thats going to not return anything technically , but can retun  `null` and can return `undefined`

`never` mean that we are never going to actually reach the end of this function. so we only annotate a function with the type never when we really truly never expect a function to return anything ever.   

destructuring with annotations can check `functions.ts`

for Objects in annotations can check `objects.ts`

---

Arrays in Typescript

Same as array in javascript
see in `araay.ts`

why do we care :
- TS can do type inference when extracting values from an array
- TypeScript can help us prevent  from adding in incompatible values into
- we get a lot of help with built in functions like map for each reduce and so on
- we can, in fact, put different types of elements inside of an array.

--- 

## **Tuples in TS**

Tuples -> Array-like structure where each element represents some property of a record ,
example if we have object :

```
{
    color :"brown",
    carbonation : true ,
    sugar : 40
}
```

in tuples :
```
["brown" , true , 40]
```

index 0 must be color , index 1 must be carbonation and index 2 must be sugar , developer must memorize that.

example in `tuples.ts`

we not going to use tupples because when we are working at the tuple much harder to understand exactly what is going on at a glance different if we make that data into object.

example :

```javascript
  const carSpecs: [number, number] = [400, 3354];
  
  const carStats = {
    horsepower: 400,
    weight: 3354
  };
```
we can see , with easy we can know that 400 is horsepower ,and 3354 is weight in object however in tuples we are difficult to know what is the value mean.

---

## **Interface**

interfaces -> Creates a new type, describing the property names and value types of an object .

General Strategy for Reusable Code :

- Create functions that accept arguments that are typed with interfaces.
- Object/classes can decide to 'implement' a given interface to work with a function.

![Chat Preview](https://github.com/zainuddin-maker/typescript/blob/master/diagrams-08%20-%20imp.png?raw=true)

we can see the example in `interface.ts`

---
## **Classes**

>Classes is Blueprint to create an object with some fields(values) and methods (functions) to represent a 'thing'.

in class we can use another class in new class using `extends` , and inside that class we can override the initial function.

different between ES2015 classes and classes in TS :
- The Existence of something called modifiers.

Modifiers are a keyword so we can place on different methods and properties inside of a class :
 - public (default) : This method can be called any where ,any time 
 - private : This method can only be called by other methods in class 
 - protected : This method can be called by other methods in this class, or by other methods in child classes (inheritance).


 only resason to marked something as private is to restrict the different methods that other developer can call. if we might have a method that very deeply manipulates a class and maybe theres some like really complicated, special way to use it , and maybe you and I dont trust other developers to call that method safely .

 to add input or field to class we use `constructor()`

 ```javascript
 class Vehicle {
    color : string;

    constructor(color:string){
        this.color = color;
    }
 }
 ```

 can change to 

 ```typescript
 class Vehicle {
    constructor (public color:string){

    }
 }
 ```

 modifier can implementation in field.

 different between : 
 ```javascript
    constructor(public wheels:number, color ;string){
        super(color)
    }
 ```
 and 
  ```javascript
    constructor(public wheels:number,public color ;string){
        super(color)
    }
 ```

 in first example , that not make new `color` , but refer to parent color , but in example 2 if we use composer than that make new color.

 we can see the example in `classes.ts`

 --- 
 we make app for implement design patern in Typescript













