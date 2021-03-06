import React from "react";
import Todo from "./todo";

const TodoList = ({todos,setTodos}) =>{
    return (
    <div className="todo-container">
      <ul className="todo-list">
          {todos.map((todo)=> (
              <Todo setTodos={setTodos} 
              todos={todos} 
              todo = {todo}
              key={Todo.id} 
              text={todo.text} 
              id={todo.id}/>
          ))}
      </ul>
    </div>
    );
}
export default TodoList;