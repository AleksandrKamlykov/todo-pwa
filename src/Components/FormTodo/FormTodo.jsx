import React, {useState} from "react";
import classes from './style.module.css'

export const FormTodo =({todoArr, setTodoArr})=>{
    const [text, setText]= useState('')
function addPost(event){
    event.preventDefault()
   const newPost ={
        id: todoArr.length+1,
       text: event.target.text.value,
       important: false,
       done:false
   }
   const newState = [newPost,...todoArr]
    localStorage.setItem('postArr',JSON.stringify(newState))

   setTodoArr(newState)
    setText('')


}
    function getImportants(){
        const state = JSON.parse(localStorage.getItem('postArr'))
        const newState = state.filter(elem=> elem.important === true)
        setTodoArr(newState)
    }
    function getDones(){
        const state = JSON.parse(localStorage.getItem('postArr'))
        const newState = state.filter(elem=> elem.done === true)
        setTodoArr(newState)
    }
    function getAll(){
        const newState = localStorage.getItem('postArr')
        setTodoArr(JSON.parse(newState))
    }
    return(
        <div className={classes.wrapper}>
            <form onSubmit={e=> addPost(e)}>
                <input value={text} onChange={(e)=> setText(e.target.value)} name='text' placeholder="Запишите тут следующую задачу" type='text' />
            </form>
            <button onClick={getDones} className={classes.dones}>Выполненные</button>
            <button onClick={getImportants} className={classes.importants}>Важные</button>
            <button onClick={getAll} className={classes.all}>Все</button>

        </div>
    )
}