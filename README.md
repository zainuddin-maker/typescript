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










