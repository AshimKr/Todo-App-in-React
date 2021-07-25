import React from 'react'
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
    let myStyle={
        minHeight : "80vh",
        margin:"2% 6% 4% 6%",

        backgroundColor: "#c7d3ee",
        // color:"white",
        // border:"2px solid black"
        
    }

    return (
        <div className="container" style={myStyle}>
            <h2 className="my-3">Todo List</h2>
            { props.todos.length===0 ? <h4>No Todo to show</h4> :
            props.todos.map((todo) => {
                return ( <TodoItem todo={todo} key={todo.sno} deleteTodo={props.deleteTodo} />);
            })}
        </div>
    )
}
