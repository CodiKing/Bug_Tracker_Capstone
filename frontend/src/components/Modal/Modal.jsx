
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modal.css';
import React, {useState} from 'react';



function Modal(props) {
  
    const[title,setTitle]=useState();
    const[description,setDescription]=useState();
    const[priority,setPriority]=useState();
    const[deadline,setDeadline]=useState();
    const[status,setStatus]=useState();

    
    
    function handleSubmit(){
        let newProject = {
            title:title,
            description:description,
            priority:priority,
            deadline:deadline,
            status:status,   
                
        };
        props.createNewProject(newProject)
      };


  return (
    <div class='modalBackground'>
        <div class='modalContainer'>
          <div className='closeButtonBorder'>
        <button className='titleCloseButton' onClick={()=>props.closeModal(false)}> X </button>
        </div>
            
                <h2 className='title'>New Project</h2>
            <div className='body'>
            <input type="text" class="form-control" id="title" placeholder="Project Title" required="" onChange={(event)=>setTitle(event.target.value)}></input>
            <input type="text" class="form-control" id="description" placeholder="Project Description" required=""onChange={(event)=>setDescription(event.target.value)}></input>
                <select class="form-select " onChange={(event)=>setPriority(event.target.value)}>
                    <option selected>Priority Level</option>
                    <option value="High">High Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="Low">Low Priority</option>
                  </select>
                <select class="form-select" onChange={(event)=>setStatus(event.target.value)}>
                 
                    <option selected>Status of Project/Application</option>
                    <option value="Ok/Working Condition">Ok/Working Condition</option>
                    <option value="Bad/Not Functional">Bad/Not Functional</option>
                    <option value="Great/Functioning Properly">Great/Functioning Properly</option>
                  </select>
                  <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
                    <input placeholder="Select Deadline" type="date" id="example" class="form-control" onChange={(event)=>setDeadline(event.target.value)}></input>
                    <label for="example"></label>
                      <i class="fas fa-calendar input-prefix"></i>
                        </div>
                        </div>
                       
                
                <div className='Footer'>
                <button className='footerCloseButton' onClick={()=>props.closeModal(false)}>Cancel</button>
                <button className='submitButton' onClick={()=>handleSubmit()}>Submit</button>
                </div>
        </div>
    </div>
  )
}

export default Modal