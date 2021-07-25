import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';

export default function AddTodo(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    
    let submit= (e) =>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title and Description can't be empty");
        }else{
            props.addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
    
    const myStyle ={
        minHeight : "52vh",
        padding: "4px",
        margin:"2% 10% 0% 10% ",
        backgroundColor:"#563d7c",
        border:"2px solid black",
    }



    return (
        <div style={myStyle}>
            <Form onSubmit={submit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} value={desc} onChange={(e)=>setDesc(e.target.value)} />
                    <Button as="input" type="submit" size="sm" />
                </Form.Group>
            </Form>
        </div>
    )
}
