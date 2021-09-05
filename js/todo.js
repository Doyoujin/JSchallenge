const todoForm=document.getElementById("todo-form");
const todoList=document.getElementById("todo-list");
const InputValue=todoForm.querySelector("input");
let todos=[];
const TODOS_KEY="todos"

function paintToDo(newTodo){
    const li=document.createElement("li");
    li.id=newTodo.id;
    const span=document.createElement("sapn");
    span.innerText=newTodo.text;
    const button=document.createElement("button");
    button.innerText="❌";
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
    button.addEventListener("click",handleDelete);

}
function HandleToDoSubmit(event){
    event.preventDefault();
    const newTodo=InputValue.value;
    InputValue.value="";
    const newTodoObj={
        text:newTodo,
        id: Date.now(),
    };
    todos.push(newTodoObj);
    paintToDo(newTodoObj);//todo를 그려주는 함수 호출
    SaveToDos();
}

function handleDelete(event){
    const li=event.target.parentElement;
    li.remove();
    todos=todos.filter((todo)=>todo.id!=parseInt(li.id));
    SaveToDos();
}
function SaveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}
todoForm.addEventListener("submit",HandleToDoSubmit);
const SaveToDo=localStorage.getItem(TODOS_KEY);
if(SaveToDo){// SaveToDos===True일 때, SaveToDos안에 뭐라도 있을 때. SaveToDos!==null도 가능함. 
    const parsedToDos=JSON.parse(SaveToDo);
    todos=parsedToDos;
    parsedToDos.forEach(paintToDo);
}

