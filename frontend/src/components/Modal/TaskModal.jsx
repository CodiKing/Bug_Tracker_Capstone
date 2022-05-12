
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modal.css';
import React, {useState, useEffect} from 'react';


function TaskModal(props) {
  
    const[taskTitle,setTaskTitle]=useState('');
    const[taskDescription,setTaskDescription]=useState();
    const[taskPriority,setTaskPriority]=useState();
    const[taskStatus,setTaskStatus]=useState();
    const[selectedProjectId, setselectedProjectId]=useState();
 
    
    useEffect(()=>{
        setselectedProjectId(props.selectedProjectId)
    },[]);
    
    function handleSubmit(){
        let newTask = {
            taskTitle:taskTitle,
            taskDescription:taskDescription,
            taskPriority:taskPriority,
            taskStatus:taskStatus,   
            projects:selectedProjectId,
                
        }; console.log(newTask)
        props.createNewTask(newTask)
      };


  return (
    <div class='modalBackground'>
        <div className='modalContainer'>
        <div className='titleCloseButton'>
            {console.log(props)}
            <button onClick={()=>props.closeTaskModal(false)}> X </button>
            </div>
            <div className='Title'></div>
                <h2>New Task</h2>
            <div className='Body'></div>
            <input type="text" class="form-control" id="title" placeholder="Task Title" required="" onChange={(event)=>setTaskTitle(event.target.value)}></input>
            <input type="text" class="form-control" id="description" placeholder="Task Description" required=""onChange={(event)=>setTaskDescription(event.target.value)}></input>
                <select class="form-select form-select-sm" aria-label=".form-select-sm "onChange={(event)=>setTaskPriority(event.target.value)}>
                    <option selected>Priority Level</option>
                    <option value="High">High Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="Low">Low Priority</option>
                  </select>
                <select class="form-select form-select-sm" aria-label=".form-select-sm" onChange={(event)=>setTaskStatus(event.target.value)}>
                 
                    <option selected>Status of Project/Application</option>
                    <option value="Ok/Working Condition">Ok/Working Condition</option>
                    <option value="Bad/Not Functional">Bad/Not Functional</option>
                    <option value="Great/Functioning Properly">Great/Functioning Properly</option>
                  </select>
                <div className='Footer'></div>
                <button onClick={()=>props.closeTaskModal(false)}>Cancel</button>
                <button onClick={()=>handleSubmit()}>Submit</button>
                </div>
    </div>
  )
}

export default TaskModal