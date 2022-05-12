import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Button, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from "../../components/Modal/Modal";
import { Link, Route, useNavigate } from "react-router-dom";
import './HomePage.css'




const HomePage = (props) => {
  // The "user" value from this Hook contains the ddecoed logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
 
  const [user, token] = useAuth();
  const [allUsers, setGetAllUsers] =useState([])
  const [projectData, setProjectData] = useState([])
  const [taskData, setTaskData] = useState([])
  const[openModal,setOpenModal]= useState(false)
  const navigate = useNavigate();
  


  useEffect(() => {
    getAllProjects()
    getAllTasks()
  }, [token]);

  const getAllProjects = async () => {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/projects/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setProjectData(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error.message, "Try Again");
    }
  };

  async function createNewProject(newProject){
    try {
      let response = await axios.post('http://127.0.0.1:8000/api/projects/', newProject,  {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }) 
      if(response.status===201)
      await getAllProjects();

    } catch (error) {
      console.log(error.message, 'Try Again');
      console.log(newProject)
    }
  };

  const getProjectById=async(id)=>{
    try{
    let response = await axios.get(`http://127.0.0.1:8000/api/projects/${id}/`,{
      headers: {
        Authorization: 'Bearer ' + token,
     },
    });
    props.setSelectedProject(response.data);
    console.log(response.data)
    
  
  } catch (error){ 
    console.log(error.message)
  }
  
};
const getAllTasks = async () => {
  try {
    let response = await axios.get("http://127.0.0.1:8000/api/projects/tasks/", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    setTaskData(response.data);
    console.log(response.data)
  } catch (error) {
    console.log(error.message, "Try Again");
  }
};
    function handleClick(id){
    getProjectById(id)
    navigate('/Projectpage')
    }
  
  

  return (
    <div>
      <h1> Welcome {user.username}!</h1>
      
     <div>
      <Button onClick={()=>{setOpenModal(true)}} >
        Add New Project
      </Button>
     {openModal && <Modal closeModal={setOpenModal} createNewProject={createNewProject}/>}
      <Col>
      <div className="container" style={{
      }}>
        <div className="col-md-12">Current Projects
        <div>{projectData.map((element)=>{
          return (
            <div class="list-group">
              <a href="#" class="list-group-item list-group-item-action active">Project Priority Level : {element.priority}
              </a>
              <a href="#" class="list-group-item list-group-item-action" onClick={()=>{handleClick(element.id)}} >{element.title}</a>
            </div>
          )
        })};
        </div>
        
        <div className="conatiner">
          <div className="col-md-12">
            <div>{taskData.map((element)=>{
              
              return(
              <div class="list-group"> Tasks
              <a href="#" class="list-group-item list-group-item-action active">Task : {element.taskTitle}
              </a>
              </div>
              )
            })};
                </div>
          </div>
        </div>
        </div>
        </div>
        </Col>
         
        </div>
        <div class="row"></div>
      
      
        
      
      
   
    </div>
  );
};

export default HomePage;
