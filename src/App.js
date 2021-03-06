import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.module.css';
import classes from './App.module.css'
import {Header} from "./Components/Header/Header";
import {TodoList} from "./Components/TodoList/TodoList";
import {FormTodo} from "./Components/FormTodo/FormTodo";

function App() {
    const [darkTheme, setDarkTheme] = useState(false)

 let cls =[classes.App]
    if(darkTheme){
        cls.push(classes.dark)
    }else {
        cls.push(classes.light)
    }

const [todoArr, setTodoArr] = useState([])

    useEffect(()=>{
        const storage = JSON.parse(localStorage.getItem('postArr'))
        const theme = localStorage.getItem('theme')
        if(storage){
            setTodoArr([...storage])
        }
        if(theme){
            setDarkTheme(JSON.parse(theme))
        }
    },[])
useEffect(()=>{
    localStorage.setItem('theme', JSON.stringify(darkTheme));
},[darkTheme])
    function changeTheme(){
        setDarkTheme(prev => !prev);

    }

  return (
    <div   className={cls.join(' ')}>
    <Header darkTheme={darkTheme} changeTheme={changeTheme}/>
        <FormTodo setTodoArr={setTodoArr} todoArr={todoArr}/>
        <TodoList setTodoArr={setTodoArr} todoArr={todoArr}/>
    </div>
  );
}

export default App;
