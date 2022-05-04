import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";



const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [projectData, setProjectData] =useState()

  useEffect(() => {
    const getAllProjects = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/projects", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setProjectData(response.data);
        console.log(response.data)
      } catch (error) {
        console.log(error.message);
      }
    };
    getAllProjects();
    
  }, [token]);

  // async function getAllProjects(){
  //   let res = await axios.get('http://127.0.0.1:8000/api/projects');
  //   setProjectData(res.data.items);
  // }


  return (
    <div className="container">
      <div>{projectData}</div>
    </div>
  );
};

export default HomePage;
 {/* {projectData.map((element, index)=>{
       if (element.author === user.id){

       }
     })} */}