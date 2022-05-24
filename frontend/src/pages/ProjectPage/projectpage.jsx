import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import "../HomePage/HomePage";
import TaskModal from "../../components/Modal/TaskModal";
import useAuth from "../../hooks/useAuth";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from "react-bootstrap";
import ReadOnlyProjectPage from './ReadOnlyProjectpage';
import EditableProjectPage from './EditableProjectPage';



const ProjectPage = (props) => {
  const [user, token] = useAuth();
  const[openTaskModal,setOpenTaskModal]= useState(false)
  const[allUsers,setAllUsers] = useState([])
  const[editProjectId, setEditProjectId]= useState(null)
  const[assignedUser, setAssignedUser] = useState([]);
  const[assignedTaskId, setAssignedTaskId] =useState();
  console.log(props.selectedProject)
  console.log(props.selectedProject.id)
  console.log(assignedUser)

  useEffect(() => {
    getAllUsers()

  }, [])
  
  
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

  async function getAllUsers(){
    try{
      let response = await axios.get('http://127.0.0.1:8000/api/projects/otherUsers/',{
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
        setAllUsers(response.data)
        console.log(response.data)
    } catch (error) {
      console.log(error.message)
    }
  };

  async function editProject(editProject){
    try{
      let response = await axios.put(`http://127.0.0.1:8000/api/projects/${props.selectedProject.id}/`, editProject, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      if(response.status===200)
      console.log(response.data)
    } catch (error){
      console.log(error.message)
    }
  };


  function handleClick(e){
    e.preventDefault()
    setOpenTaskModal(true)
  };

  const handleEditClick = (event) => {
    event.preventDefault();
    setEditProjectId(props.selectedProjectId);

  };
 
  async function addMemberToProject(assignedUser){
    try{
      let response = await axios.patch(`http://127.0.0.1:8000/api/projects/add/${props.selectedProject.id}/add_member/${assignedUser}/`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    if(response.status===200)
    console.log(response.data)
  }catch (error){
    console.log(error.message)
  }
};
async function addMemberToTask(assignedUser,assignedTaskId){
  try{
    let response = await axios.patch(`http://127.0.0.1:8000/api/projects/add/${assignedTaskId}/add_members/${assignedUser}/`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  if(response.status===200)
  console.log(response.data)
}catch (error){
  console.log(error.message)
}
};



    return (
      <div>
        <form>
          
        <Fragment>{ editProjectId === props.selectedProjectId ? <EditableProjectPage selectedProject={props.selectedProject} editProject={editProject}/> :  <ReadOnlyProjectPage selectedProject={props.selectedProject} handleEditClick={handleEditClick}/> }
        </Fragment>
        </form>
        <select class="form-select form-select-sm" aria-label=".form-select-sm" onChange={(event)=>setAssignedUser(event.target.value)}>
                <option selected> Assign Member To Project</option>
                   {allUsers && allUsers.map((element)=>{
                     console.log(element)
                  return (
                    
                  <option value={element.id}>{element.username}</option>
                  
                  );
                })}
                 </select>
        <Button className="btn btn-primary btn-rounded" onClick={(event)=>addMemberToProject(assignedUser)}>Add Member To Project</Button>
        <div className='container-fluid'>
          <div className="card">
            <div className="card-header py-4 px-5 bg-light border-0">
            <h4 className="mb-0 fw-bold">Project Tasks</h4>
            <div className="card-body px-5">
          {openTaskModal && <TaskModal closeTaskModal={setOpenTaskModal} createNewTask={createNewTask} selectedProjectId={props.selectedProject.id} allUsers={allUsers} />}
         
        
        <div className="col-md-6">
            <div className="text-muted"> {props.selectedProject.tasks_set && props.selectedProject.tasks_set.map((element)=>{
              return(
                <div className='container-fluid'>
                  <div className='card'>
                    <div class="row-md-4">
                      <h5>Task Title</h5>
                  <div key={element.taskTitle}>{element.taskTitle}</div>
                  <h5>Task Description</h5>
                  <div key={element.taskDescription}>{element.taskDescription}</div>
                  <h5>Task Priority</h5>
                  <div key={element.taskPriority}>{element.taskPriority}</div>
                  <h5>Task Status</h5>
                  <div key={element.taskStatus}>{element.taskStatus}</div>
                  <h5>Members Assigned</h5>
                  <div key={20}>{element && element.assigned_members.map((e)=>{
                    return(
                      <div>{e.username}</div>
                    )
                  })}</div>
                  
                  </div>
                </div>
              </div>
              
              )
            })}
            <div className="card-footer text-end py-4 px-5 bg-light border-0">
            <Button type="submit" className="btn btn-primary btn-rounded" onClick={(e)=> handleClick(e)}>
          Add Task
        </Button>
            </div>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        <div className='container-fluid'>
          <div className="card">
          <div className="row-md-6">
        <select class="form-select form-select-sm" aria-label=".form-select-sm" onChange={(event)=>setAssignedUser(event.target.value)}>
                <option selected> Assign Member To Task</option>
                   {allUsers && allUsers.map((element)=>{
                     console.log(element)
                  return (
                    
                  <option value={element.id}>{element.username}</option>
                  
                  );
                })}
                 </select>
                 <select class="form-select form-select-sm" aria-label=".form-select-sm" onChange={(event)=>setAssignedTaskId(event.target.value)}>
                <option selected> Task To Assign</option>
                   {props.selectedProject.tasks_set && props.selectedProject.tasks_set.map((element)=>{
                  return (
                  <option value={element.id}>{element.taskTitle}</option>
                  
                  );
                })}
                 </select>
                 <Button className="btn btn-primary btn-rounded" onClick={(event)=>addMemberToTask(assignedUser, assignedTaskId)}>Add Member To Task</Button>
        </div>
        </div>
        </div>
      </div>

        

      );
}
 
export default ProjectPage;