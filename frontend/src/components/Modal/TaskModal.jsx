
import 'bootstrap/dist/css/bootstrap.min.css';
import './TaskModal.css';
import React, {useState, useEffect} from 'react';


function TaskModal(props) {
  
    const[taskTitle,setTaskTitle]=useState('');
    const[taskDescription,setTaskDescription]=useState('');
    const[taskPriority,setTaskPriority]=useState('');
    const[taskStatus,setTaskStatus]=useState('');
    const[selectedProjectId, setselectedProjectId]=useState();
    console.log(selectedProjectId)


    
    useEffect(()=>{
        setselectedProjectId(props.selectedProjectId)
       

    },[]);
    
    function handleSubmit(){
      debugger;
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
            {console.log(props)}
            <button className='titleCloseButton' onClick={()=>props.closeTaskModal(false)} > X </button>
                <h2  className='title'>New Task</h2>
            <div className='body'>
            <input type="text" class="form-control" id="title" placeholder="Task Title" required="" onChange={(event)=>setTaskTitle(event.target.value)}></input>
            <input type="text" class="form-control" id="description" placeholder="Task Description" required=""onChange={(event)=>setTaskDescription(event.target.value)}></input>
                <select class="form-select " onChange={(event)=>setTaskPriority(event.target.value)}>
                    <option selected>Priority Level</option>
                    <option value="High">High Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="Low">Low Priority</option>
                  </select>
                <div className='Footer'></div>
                <select class="form-select " onChange={(event)=>setTaskStatus(event.target.value)}>
                 
                    <option selected>Status of Project/Application</option>
                    <option value="Ok/Working Condition">Ok/Working Condition</option>
                    <option value="Bad/Not Functional">Bad/Not Functional</option>
                    <option value="Great/Functioning Properly">Great/Functioning Properly</option>
                  </select>
                <button className='footerCloseButton' onClick={()=>props.closeTaskModal(false)}>Cancel</button>
                <button className='submitButton'  onClick={()=>handleSubmit()}>Submit</button>
                </div>
                </div>
    </div>
  )
}

export default TaskModal