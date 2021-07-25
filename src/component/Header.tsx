import React, {FC, ChangeEvent, useState } from 'react';

import './Header.css'
import Todolist from './Todolist';
import {Itask} from './interface';

const Header= () => {
    const [task,setTask] =useState<string>("")
   
    const [deadline,setDeadkine]=useState<number>(0)

    const [todo,setTodo]=useState<Itask[]> ([]);
    console.log(todo)
    const handlechange=(e:ChangeEvent<HTMLInputElement>): void =>{
   
        if ( e.target.name ==="task"){
            setTask(e.target.value)
          
        }
        else{ 

            setDeadkine(Number(e.target.value))
        }

     
       
    }
    const addTask=():void => {
        const newTask ={taskname:task,deadlinename:deadline}
        setTodo([...todo, newTask])
        console.log(setTodo)
        setTask("")
        setDeadkine(0)
    
      
    }
    const complite=(tasknametodo:string):void => {
        setTodo(todo.filter((task)=>{
            return task.taskname !== tasknametodo
        }))
    }
    return (
        <div className="todolistapps">
             <div className="header">
     <div className="inputcontaine">
     <input type="text" placeholder="Task"name="task" value={task} onChange={handlechange} />
     <br />

      <input type="number" placeholder="email" name="deadline" value={deadline} onChange={handlechange}/>
      <br />
      <button onClick={addTask}>add task</button>
     </div>
    </div>
    <div className="todolist">
     
     {
         todo.map((task:Itask,key:number)=><Todolist key={key} task={task} complite={complite}></Todolist>)
     }

    </div>
        </div>
    );
};

export default Header;