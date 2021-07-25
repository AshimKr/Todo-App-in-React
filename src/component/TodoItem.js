import React from 'react'
import { Button } from 'react-bootstrap'


export const TodoItem = (props) => {

    const myStyle ={
        border:"2px solid black",
        margin: "8px",
        padding:"5px 15px 2px 40px"
    }

    return (
        <div style={myStyle}>
            <h2>{props.todo.title}</h2>
            <p>{props.todo.desc}</p>
            <Button variant="outline-primary" onClick={()=>{props.deleteTodo(props.todo)}} >Delete</Button>
        </div>
    )
}
