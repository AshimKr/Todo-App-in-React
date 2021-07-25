import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header'
import { useEffect, useState } from 'react';
import { Todos } from './component/Todos';
import Footer from './component/Footer';
import AddTodo from './component/AddTodo';

function App() {

  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  let deleteTodo =(todo)=>{
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  let addTodo =(title,desc)=>{
    let sno =todos.length +1;
    console.log(sno);
    const myTodo ={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
  };



  const [todos, setTodos] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);

  return (
    <>
     <Header />
     <AddTodo addTodo={addTodo} />
     <Todos todos={todos} deleteTodo={deleteTodo}/>
     <Footer />
    </>
  );
}

export default App;
