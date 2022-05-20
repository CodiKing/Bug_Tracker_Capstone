
import React, { useState } from 'react';



const EditableProjectPage = (props, selectedProject) => {

    const[title,setTitle]=useState();
    const[description,setDescription]=useState();
    const[priority,setPriority]=useState();
    const[deadline,setDeadline]=useState();
    const[status,setStatus]=useState();
    console.log(props.selectedProject)





    function handleProjectChanges(){
        let editProject = {
            title:title,
            description:description,
            priority:priority,
            deadline:deadline,
            status:status,   
    };
     props.editProject(editProject);
     console.log(editProject);
     window.location.reload(false);
  };

    return (
        <div className='container-fluid'>
        <div className="card">
          <form>
          <div className="card-header py-4 px-5 bg-light border-0">
          <input type='text' required='required' name='title' placeholder={props.selectedProject.title}  onChange={(event)=>setTitle(event.target.value)}></input>
          </div>
          <div className="card-body px-5">

          {/* -- Body -- */}
          <div className="row gx-xl-6">
          <div className="col-md-4">
            <h5>Project Description</h5>
           <h4> <input type='text' required='required'  name='description' placeholder={props.selectedProject.description}  onChange={(event)=>setDescription(event.target.value)}></input></h4>
            </div>
          <div className="row gx-md-8">
          <div className="col-md-4">
            <h5>Priority</h5>
            <h4><select class="form-select form-select-sm" aria-label=".form-select-sm " placeholder={props.selectedProject.priority}  onChange={(event)=>setPriority(event.target.value)}>
                    <option selected>Priority Level</option>
                    <option value="High">High Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="Low">Low Priority</option>
                  </select></h4>
            </div>
          <div className="row gx-md-8">
          <div className="col-md-4">
            <h5>Status</h5>
            <h4> <select class="form-select form-select-sm" aria-label=".form-select-sm" placeholder={props.selectedProject.status}  onChange={(event)=>setStatus(event.target.value)}>
                 
                 <option selected>Status of Project/Application</option>
                 <option value="Ok/Working Condition">Ok/Working Condition</option>
                 <option value="Bad/Not Functional">Bad/Not Functional</option>
                 <option value="Great/Functioning Properly">Great/Functioning Properly</option>
               </select></h4>
            </div>
          <div className="row gx-md-8">
          <div className="col-md-4">
            <h5>Deadline</h5>
            <h4 id="date-picker-example" className="md-form md-outline input-with-post-icon datepicker" inline="true">
                    <input type="date" id="example" class="form-control" placeholder={props.selectedProject.deadline}  onChange={(event)=>setDeadline(event.target.value)}></input></h4>
            </div>
            <button onClick={handleProjectChanges}>Submit Changes</button>
        
    
            </div>
            </div>
            </div>
            </div>
            </div>
            </form>
            </div>
            </div>
          
         
          
       
      );
}
 
export default EditableProjectPage;