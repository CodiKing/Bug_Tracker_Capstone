import React, { useEffect, useState } from 'react';
import moment from "moment";
import './ProjectTable.css'
const ProjectTable=(props) =>{
 

    function sortTableByColumn(table, column, asc = true){
      const dirModifier = asc ? 1 :-1;
      const tBody = table.tBodies[0];
      const rows = Array.from(tBody.querySelectorAll('tr'));

      const sortedRows = rows.sort((a, b)=>{
        const aColText = a.querySelector(`td:nth-child(${column + 1})`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${column + 1})`).textContent.trim();
        return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);

      });

      while (tBody.firstChild){
        tBody.removeChild(tBody.firstChild);
      }

      tBody.append(...sortedRows);
      /// Rember how table is sorted
      table.querySelectorAll('th').forEach(th => th.classList.remove('th-sort-asc', 'th-sort-desc'));
      table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle('th-sort-asc', asc);
      table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle('th-sort-desc', !asc);
    };

    document.querySelectorAll('.table-sortable th').forEach(headerCell =>{
      headerCell.addEventListener('click', () => {
        const tableElement = headerCell.parentElement.parentElement.parentElement;
        const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
        const currentIsAscending = headerCell.classList.contains('th-sort-asc');

        sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
      });
    });
    return(
        <table class="table table-sortable">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Project Title</th>
            <th scope="col">Priority</th>
            <th scope="col">Created Date</th>
            <th scope="col">Updated Date</th>
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

