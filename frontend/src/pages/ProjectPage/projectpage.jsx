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
  console.log(props.selectedProject)

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
  function handleClick(e){
    e.preventDefault()
    setOpenTaskModal(true)
  };

  const handleEditClick = (event) => {
    event.preventDefault();
    setEditProjectId(props.selectedProjectId);

  }
 
  


//   async function addMemberToProject(props.selectedProjectId, selectedMemberId){
//     try{
//       let response = await axios.patch(`http://127.0.0.1:8000/api/projects/add/${props.selectedProjectId}/add_member/${selectedMemberId}/`, {
//       headers: {
//         Authorization: 'Bearer ' + token,
//       },
//     });
//   }catch (error){
//     console.log(error.message)
//   }
// };


    return (
      <div>
        <form>
        <Fragment>{ editProjectId === props.selectedProjectId ? <EditableProjectPage selectedProject={props.selectedProject} /> :  <ReadOnlyProjectPage selectedProject={props.selectedProject} handleEditClick={handleEditClick}/> }
       
        </Fragment>
      
        <div className='container-fluid'>
        <div className="card">
          
          <div className="card-header py-4 px-5 bg-light border-0">
            
          <Button type="submit" className="btn btn-primary btn-rounded" onClick={(e)=> handleClick(e)}>
          Add Task
        </Button>
          {openTaskModal && <TaskModal closeTaskModal={setOpenTaskModal} createNewTask={createNewTask} selectedProjectId={props.selectedProject.id} allUsers={allUsers} />}
        <h4 className="mb-0 fw-bold">Project Tasks</h4>
        <div className="col-md-4">
            <div className="text-muted"> {props.selectedProject.tasks_set && props.selectedProject.tasks_set.map((element)=>{
              return(
                <div class="row-md-4">
                  <h5>Task Title</h5>
              <div key={element.id}>{element.taskTitle}</div>
              <h5>Task Description</h5>
              <div>{element.taskDescription}</div>
              <h5>Task Priority</h5>
              <div>{element.taskPriority}</div>
              <h5>Task Status</h5>
              <div>{element.taskStatus}</div>
              </div>
              
              )
            })}
            </div>
            </div>
        </div>
        
        </div>
        </div>
        </form>
      </div>

        

      );
}
 
export default ProjectPage;