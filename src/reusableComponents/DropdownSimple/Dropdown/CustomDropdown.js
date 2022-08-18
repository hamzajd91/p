import React,{useState} from 'react'
import Dropdown_CUS from './Sections/Dropdown_CUS'

function CustomDropdown() {
    const [headervalue, setHeadervalue] = useState("choose language");
    const Catagoryoptions = ["view","angular","react Native"];
    return (
        <div className="my-5">
            <Dropdown_CUS headervalue={headervalue} setHeadervalue={setHeadervalue} options={Catagoryoptions} />
        </div>
    )
}

export default CustomDropdown
