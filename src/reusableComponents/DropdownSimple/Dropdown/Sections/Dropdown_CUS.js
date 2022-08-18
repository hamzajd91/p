import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Dropdown_CUS.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function Dropdown_CUS() {
    const [isActive, setIsActive] = useState(false)
    const [headervalue, setHeadervalue] = useState("Navbar");
    return (
        
        <div style={{width:'100%'}}>
        <div className="dropdown_c">
                <div className="dropdown-btn_c" onClick={(e) =>{
                    setIsActive(!isActive)
                }}>{headervalue}
                
                    <div>
                        +
                    </div>
                </div>
                

               {isActive && (
                <div className="dropdown-content_c">
                {/* {options.map(((option)=>(
                                <div className="dropdown-item_c" onClick={(e)=>{
                                    setHeadervalue(option);
                                    setIsActive(false)
                               }}>
                                  {option}
                                </div>
                            )))
                            } */}
                    <div className="dropdown-item_c" onClick={(e)=>{
                        setHeadervalue(e.target.textContent)
                        setIsActive(false)
                    }}>
                        <div className='d-flex'>About</div>
                    </div>
                    <div className="dropdown-item_c" onClick={(e)=>{
                        setHeadervalue(e.target.textContent)
                        setIsActive(false)
                    }}>
                        Skills
                    </div>
                    
                    <div className="dropdown-item_c" onClick={(e)=>{
                        setHeadervalue(e.target.textContent)
                        setIsActive(false)
                    }} >
                        Contact
                    </div> 


                    
            </div>
               )}
                    

            
     
     </div>
     </div>
    )
}

export default Dropdown_CUS


