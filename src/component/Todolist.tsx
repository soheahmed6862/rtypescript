import React from 'react';
import { Itask } from './interface';
import "./Todolist.css"
interface Props{
    task:Itask;
    complite(tasknametodo:string): void
}
const Todolist = ({task,complite}:Props) => {
    console.log(task)
    return (
        <div className="task">
            <div className="contrnt">
                <span style={{margin:"10px",backgroundColor:"green", border:"1px solid yellow" ,padding:"10px 20px"}}>{task.taskname}</span>
                <span style={{margin:"10px", backgroundColor:"white"}}>{task.deadlinename}</span>
                
            </div>
           
           <button onClick={()=>complite(task.taskname)}>remove</button>
           
        </div>
    );
};

export default Todolist;