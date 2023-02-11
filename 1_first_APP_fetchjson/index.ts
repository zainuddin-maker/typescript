
import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com/todos/1'


interface Todo {
    finished: any;
    id : number;
    title: string ;
    completed:boolean;
}
axios.get(url).then(response =>{

    console.log(response.data)

    const todo = response.data as Todo
    //before
    // const ID = todo.ID;
    // const title = todo.Title;
    // const finished = todo.Finished;

    // after
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    // case 1
    // logTodo(id,completed,title)
    
    // answer case 1

    logTodo(id,title,completed)

})

const logTodo = (id:number,title:string,completed:boolean)=>{

    console.log(`
    The Todo wit h ID: ${id}
    Has a tittle of: ${title}
    Is it finished? ${completed}
`)

}
