import React, { useState } from 'react';
import moment from "moment";
import { useColumnOrder, useSortBy } from 'react-table/dist/react-table.development';
const ProjectTable=(props) =>{
    const [data, setData] = useState(props.projectData)
    const [order, setOrder] = useState('ASC')


    const sorting=(col)=>{
        if (order === 'ASC'){
            const sorted = [...data].sort((a,b)=>
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setData(sorted);
            setOrder('DSC')
        }
        if (order === 'DSC'){
            const sorted = [...data].sort((a,b)=>
            a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setData(sorted);
            setOrder('ASC')
        }
    };

    return(
        <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" >Project Title</th>
            <th scope="col"onClick={()=>sorting('priority')}>Priority</th>
            <th scope="col"onClick={()=>sorting('created_date')}>Created Date</th>
            <th scope="col"onClick={()=>sorting('updated_date')}>Updated Date</th>
            <th scope="col">View Project</th>
            
          </tr>
        </thead>
        <tbody>
          {props.projectData && props.projectData.map((element, index)=>{
              
                return (
                  <tr>
                  <th scope="row">{index +1}</th>
                  <td>{element.title}</td>
                  <td>{element.priority}</td>
                  <td>{moment(element.created_date).subtract(10, 'days').calendar()}</td>
                  <td>{moment(element.updated_date).subtract(10, 'days').calendar()}</td>
                  <td><button onClick={()=>{props.handleClick(element.id)}}>View</button></td>
                </tr>
                )
              })}
            
        </tbody>
      </table>

    );
}
export default ProjectTable