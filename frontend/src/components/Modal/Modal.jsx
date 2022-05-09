import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modal.css';

function Modal({closeModal}) {

  return (
    <div class='modalBackground'>
        <div className='modalContainer'>
        <div className='titleCloseButton'>
            <button onClick={()=>closeModal(false)}> X </button>
            </div>
            <div className='Title'></div>
                <h2>Enter New Project Info Here</h2>
            <div className='Body'></div>
            {/* <input type='text' class='form-control'>Project Title</input> */}
                <select class="form-select form-select-sm" aria-label=".form-select-sm ">
                    <option selected>Priority Level</option>
                    <option value="1">High Priority</option>
                    <option value="2">Medium Priority</option>
                    <option value="3">Low Priority</option>
                  </select>
                <select class="form-select form-select-sm" aria-label=".form-select-sm">
                    <option selected>Assign Members</option>
                    <option value="1">High Priority</option>
                    <option value="2">Medium Priority</option>
                    <option value="3">Low Priority</option>
                  </select>
                  {/* <input>Project Description</input> */}
                
                              <div className='Footer'></div>
                <button onClick={()=>closeModal(false)}>Cancel</button>
                <button>Submit</button>
        </div>
    </div>
  )
}

export default Modal