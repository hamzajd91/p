import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Dropdown_CUS.css'

function Dropdown_CUS() {
    const [isActive, setIsActive] = useState(false)
    return (
        
        <div style={{width:'100%'}}>
        <div className="dropdown_c">
                <div className="dropdown-btn_c" >Navbar
                
                    <div onClick={(e) =>{
                    setIsActive(!isActive)
                }}>
                        +
                    </div>
                </div>
                

               {isActive && (
                <div className="dropdown-content_c">
                    <div className="dropdown-item_c" onClick={(e)=>{
                        setIsActive(false)
                    }}>
                        About
                    </div>
                    <div className="dropdown-item_c" onClick={(e)=>{
                        setIsActive(false)
                    }}>
                        Skills
                    </div>
                    <div className="dropdown-item_c" onClick={(e)=>{
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


