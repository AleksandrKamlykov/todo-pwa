import React from "react";
import './style.module.css'
import classes from './style.module.css'
import done from '../../img/checked.png'
import cancel from '../../img/cancel.png'
import important from  '../../img/caution.png'

export const TodoList =({todoArr, setTodoArr})=>{

    function changeImportant(id){
        const newState = todoArr.map(elem=>{
            if(elem.id == id){
                elem.important = !elem.important
                return elem;
            }else return elem;
        })

        localStorage.setItem('postArr',JSON.stringify(newState))

         setTodoArr(newState);
    };

    function doneTodo(id){
        const newState = todoArr.map(elem=>{
            if(elem.id == id){
                elem.done = !elem.done
                return elem;
            }else return elem;
        })
        localStorage.setItem('postArr',JSON.stringify(newState))

        setTodoArr(newState);
    };

    function deleteTodo(id){
        const newState = todoArr.filter(elem => elem.id != id)
        localStorage.setItem('postArr',JSON.stringify(newState))

        setTodoArr(newState)
    }


    return(
        <div className={classes.todoWrapper}>

            {
              todoArr.length > 0 && todoArr.map(todo=>{

                    const textStyle = todo.important ? classes.important : todo.done? classes.done : null;
                    const chekDone = todo.done || todo.important ? classes.checked : null
                    const clsItem = [classes.item]
                        if(todo.done){
                            clsItem.push(classes.done)
                        }
                    return(

                        <div key={todo.id}  className={clsItem.join(' ')}>
                            <button onClick={()=>doneTodo(todo.id)}>
                                   <img className={classes.doneBtn} src={done} alt={'done'}/>
                            </button>
                            <p className={textStyle}>{todo.text}</p>
                            <button onClick={()=>changeImportant(todo.id)}>
                                <img className={classes.importantBtn} src={important} alt={'important'}/>
                            </button>
                            <button onClick={()=>deleteTodo(todo.id)}>
                                <img className={classes.cancelBtn} src={cancel} alt={'cancel'}/>
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}