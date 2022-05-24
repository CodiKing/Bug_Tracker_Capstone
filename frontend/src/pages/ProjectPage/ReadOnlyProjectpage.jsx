import React from 'react';
import { Button} from "react-bootstrap";

const ReadOnlyProjectPage = (props) => {


    return ( 
        
        <div className='container-fluid'>
        <div className="card">
          <form>
          <div className="card-header py-4 px-5 bg-light border-0">
            <h4 className="mb-0 fw-bold">{props.selectedProject.title}</h4>
          </div>
          <div className="card-body px-5">

          {/* -- Body -- */}
          <div className="row gx-xl-6">
          <div className="col-md-4">
            <h5>Project Description</h5>
            <p className="text-muted">{props.selectedProject.description}</p>
            </div>
          <div className="row gx-md-8">
          <div className="col-md-4">
            <h5>Priority</h5>
            <p className="text-muted">{props.selectedProject.priority}</p>
            </div>
          <div className="row gx-md-8">
          <div className="col-md-4">
            <h5>Status</h5>
            <p className="text-muted">{props.selectedProject.status}</p>
            </div>
          <div className="row gx-md-8">
          <div className="col-md-4">
            <h5>Deadline</h5>
            <p className="text-muted">{props.selectedProject.deadline}</p>
            </div>
            <div className="row gx-md-8">
          
            <div className="row gx-md-8">
          <div className="col-md-4">
            <h5>Assigned Members</h5>
            <div className="text-muted">{props.selectedProject.assigned_members && props.selectedProject.assigned_members.map((element)=>{
              return(
                <div>{element.username}</div>
              )
            }) }</div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
          </div>
          {/* -- Footer-- */}
          <div className="card-footer text-end py-4 px-5 bg-light border-0">
        <button className="btn btn-link btn-rounded"  type='button' onClick={(event)=> props.handleEditClick(event)}>Edit</button>
        
        
        </div>
          </form>
          
          
          </div>
          </div>
     );
}
 
export default ReadOnlyProjectPage;