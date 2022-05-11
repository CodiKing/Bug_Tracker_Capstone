import React, { useState } from 'react';
import axios from 'axios';
import "../HomePage/HomePage";
import TaskModal from "../../components/Modal/TaskModal";
import useAuth from "../../hooks/useAuth";

const ProjectPage = (props) => {
  const [user, token] = useAuth();
  const[openTaskModal,setOpenTaskModal]= useState(false)
  console.log(props.selectedProject.id)
  async function createNewTask(newTask,){
    try {
      let response = await axios.post('http://127.0.0.1:8000/api/projects/tasks/', newTask, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }) 
      if(response.status===201)
      console.log(response.data)

    } catch (error) {
      console.log(error.message, 'Try Again');
      console.log(newTask)
    }
  };


    return (
      <div className='container-fluid'>
        <div className="card">
          <form>
          <div class="card-header py-4 px-5 bg-light border-0">
            <h4 class="mb-0 fw-bold">{props.selectedProject.title}</h4>
          </div>
          <div class="card-body px-5">

          {/* -- Body -- */}
          <div class="row gx-xl-6">
          <div class="col-md-4">
            <h5>Project Description</h5>
            <p class="text-muted">{props.selectedProject.title}</p>
            </div>
          <div class="row gx-md-8">
          <div class="col-md-4">
            <h5>Priority</h5>
            <p class="text-muted">{props.selectedProject.priority}</p>
            </div>
          <div class="row gx-md-8">
          <div class="col-md-4">
            <h5>Status</h5>
            <p class="text-muted">{props.selectedProject.status}</p>
            </div>
          <div class="row gx-md-8">
          <div class="col-md-4">
            <h5>Deadline</h5>
            <p class="text-muted">{props.selectedProject.deadline}</p>
            </div>
            <div class="row gx-md-8">
          <div class="col-md-4">
            <h5>Tasks</h5>
            <p class="text-muted">{props.selectedProject.tasks}</p>
            </div>
            <div class="row gx-md-8">
          <div class="col-md-4">
            <h5>Assigned Members</h5>
            <p class="text-muted">{props.selectedProject.assigned_Members}</p>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
          </div>
          {/* -- Footer-- */}
          <div class="card-footer text-end py-4 px-5 bg-light border-0">
        <button class="btn btn-link btn-rounded" data-ripple-color="primary">Edit</button>
        </div>
          </form>
          
        </div>
        <div className='container-fluid'>
          <button type="submit" class="btn btn-primary btn-rounded" onClick={()=>{setOpenTaskModal(true)}}>
          Add Task
        </button>
        {openTaskModal && <TaskModal closeTaskModal={setOpenTaskModal} createNewTask={createNewTask} selectedProjectId={props.selectedProject.id}/>}
        </div>
      </div>

        

      );
}
 
export default ProjectPage;