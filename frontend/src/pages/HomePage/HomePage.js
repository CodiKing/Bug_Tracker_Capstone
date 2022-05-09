import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Button, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from "../../components/Modal/Modal";





const HomePage = (props) => {
  // The "user" value from this Hook contains the ddecoed logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
 
  const [user, token] = useAuth();
  const [projectData, setProjectData] = useState([])
  const [newProject, setNewProject] = useState()
  const[openModal,setOpenModal]= useState(false)

  useEffect(() => {
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
    getAllProjects()
    
  }, [token]);

  async function createNewProject(){
    try {
      let response = await axios.post('http://127.0.0.1:8000/api/projects/', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })

    } catch (error) {
      console.log(error.message, 'Try Again');
    }
  };



  return (
    <div>
      <h1> Welcome {user.username}!</h1>
      
      <div className="container">
      <Button onClick={()=>{setOpenModal(true)}} >
        Add New Project
      </Button>
     {openModal && <Modal closeModal={setOpenModal}/>}
      <Col>
        <div className="col-md-12">Current Projects</div>
        <div>{projectData.map((element)=>{
          return (
            <h2>{element.description}</h2>
          )
        })};
        </div>
        </Col>
         
        </div>
        <div class="row"></div>
      
      
        
      
      
   
    </div>
  );
};

export default HomePage;
