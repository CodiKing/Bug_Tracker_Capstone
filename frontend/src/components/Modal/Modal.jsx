
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modal.css';
import React, {useState} from 'react';
import '../../add_New_Project'


function Modal(props) {
  
    const[title,setTitle]=useState();
    const[description,setDescription]=useState();
    const[priority,setPriority]=useState();
    const[deadline,setDeadline]=useState();
    const[comments,setComments]=useState();
    const[status,setStatus]=useState();
    const[tasks,setTasks]=useState();
    
    
    function handleSubmit(){
        let newProject = {
            title:title,
            description:description,
            priority:priority,
            deadline:deadline,
            comments:comments,
            status:status,   
            tasks:tasks,
                
        };
        props.createNewProject(newProject)
      };


  return (
    <div class='modalBackground'>
        <div className='modalContainer'>
        <div className='titleCloseButton'>
            <button onClick={()=>props.closeModal(false)}> X </button>
            </div>
            <div className='Title'></div>
                <h2>New Project</h2>
            <div className='Body'></div>
            <input type="text" class="form-control" id="title" placeholder="Project Title" required="" onChange={(event)=>setTitle(event.target.value)}></input>
            <input type="text" class="form-control" id="description" placeholder="Project Description" required=""onChange={(event)=>setDescription(event.target.value)}></input>
                <select class="form-select form-select-sm" aria-label=".form-select-sm "onChange={(event)=>setPriority(event.target.value)}>
                    <option selected>Priority Level</option>
                    <option value="High">High Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="Low">Low Priority</option>
                  </select>
                <select class="form-select form-select-sm" aria-label=".form-select-sm" onChange={(event)=>setStatus(event.target.value)}>
                 
                    <option selected>Status of Project/Application</option>
                    <option value="Ok/Working Condition">Ok/Working Condition</option>
                    <option value="Bad/Not Functional">Bad/Not Functional</option>
                    <option value="Great/Functioning Properly">Great/Functioning Properly</option>
                  </select>
                  <input type="text" class="form-control" id="tasks" placeholder="First Task" required="" onChange={(event)=>setTasks(event.target.value)}></input>
                  <input type="text" class="form-control" id="comments" placeholder="Comments" required="" onChange={(event)=>setComments(event.target.value)}></input>
                  <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
                    <input placeholder="Select Deadline" type="date" id="example" class="form-control" onChange={(event)=>setDeadline(event.target.value)}></input>
                    <label for="example"></label>
                      <i class="fas fa-calendar input-prefix"></i>
                        </div>
                       
                
                <div className='Footer'></div>
                <button onClick={()=>props.closeModal(false)}>Cancel</button>
                <button onClick={()=>handleSubmit()}>Submit</button>
        </div>
    </div>
  )
}

export default Modal