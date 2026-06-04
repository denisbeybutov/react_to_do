import React, { useState } from "react";
import { useId } from "react";
import './ToDoList.css'

export default function ToDoList(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [completedTasks, setCompletedTasks] = useState([]);
    const [hiddens, setHiddens] = useState([]);
    

    function handleInputChange(event){
    
        setNewTask(event.target.value);
    }

    function addTask () {
        
        if(newTask.trim() !== ''){
            const taskId = crypto.randomUUID();
            setTasks(t => [...t, {
                id: taskId,
                value: newTask
            }]);
            setNewTask('');
            setHiddens(h =>[...h, true])
            
        }
        
    }

    function deleteTask(index){
        const updatedCompletedTasks = tasks.filter((task,i) => i === index);        
        setCompletedTasks(prev=>[...prev,...updatedCompletedTasks]);

        const updatedTasks = tasks.filter((_,i) => i!== index );
        setTasks(updatedTasks);
        
        

    }

    function revert(index){
        const updatedTasks = completedTasks.filter((_,i) => i===index)
        setTasks(prevTask => [...prevTask, ...updatedTasks]);
        const updatedTasks1 = completedTasks.filter((_,i) => i!==index)
        setCompletedTasks(updatedTasks1)
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]]  = [updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length -1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]]  = [updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function handleChange(e,index){
       
        const newTasks = [...tasks];
        newTasks[index].value = e.target.value;
        setTasks(newTasks);
    }

    function edit(index){
        
        const newHiddens = [...hiddens];
        newHiddens[index] = false
        setHiddens(newHiddens)
        
    }

    function saveTask(index) {
        const newHiddens = [...hiddens];
        newHiddens[index] = true
        setHiddens(newHiddens)
    }
   
    

    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input 
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button
                    className="add-button"
                    onClick={addTask}>
                        Add
                </button>
            </div>

            <ol>
                {tasks.map((task,index) => 
                    <li key={index}>
                        <div className={'edit' + (hiddens[index] ? ' hidden' : '')}>
                            <input
                                value={task.value}
                                className="text"
                                onChange={(e)=>handleChange(e,index)}
                                disabled={false}/>
                            <button
                                className="save-button"
                                onClick={()=>saveTask(index)}>
                                Save
                            </button>
                        </div>
                        
                        <div className={"not-edit row" + (hiddens[index] ? '' : ' hidden')}>
                            <span
                                className="text"
                                onClick={()=>edit(index)}>
                                {task.value}
                            </span>
                            <button
                                className="delete-button"
                                onClick={()=>deleteTask(index)}>
                                Delete
                            </button>
                            <button
                                className="move-button"
                                onClick={()=>moveTaskUp(index)}>
                                Up
                            </button>
                            <button
                                className="move-button"
                                onClick={()=>moveTaskDown(index)}>
                                Down
                            </button>
                            <button
                                className="done-button"
                                onClick={()=>done(index)}>
                                Done
                            </button>
                        </div>
                        
                    </li>    
                )}
            </ol>

            <h1>Completed tasks</h1>
            <ol>
                {completedTasks.map((task,index) => 
                    <li key={index}>
                        <span className="text">{task.value}</span>
                        <button
                            className="revert-button"
                            onClick={()=>revert(index)}>
                            Revert
                        </button>
                        
                    </li>    
                )}
            </ol>
        </div>
    )

}