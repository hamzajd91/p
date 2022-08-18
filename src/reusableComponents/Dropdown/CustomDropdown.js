import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faCaretDown, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useState, useRef, useEffect , memo} from 'react'
import '../../reusableStyles/Dropdown.css'
function CustomDropdown({selected, setSelected, options, id , label, prompt, styles}) {
    const [isactive, setIsactive] = useState(false);
    const ref = useRef(null)
    const [query, setQuery] = useState("")
    console.log('child called .....');
    useEffect(() => {
        document.addEventListener("click",close)
        return () => document.removeEventListener("click", close)
    }, [])
    function filter(options){
        return options.filter((option)=>
            option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
        )
    }
    function close(e){
        setIsactive(e && e.target === ref.current);
    }
    return (
        <div className={`my-auto  ${styles?"w-100":""}`} style={{width:"65%"}}>
            <div className="dropdown_c w-100" >
                <div className={`dropdown-btn_c ${styles?"cus_dropdown_c":""}`} onClick={(e)=>{
                    setIsactive(!isactive)
                }}>
                    {styles && <FontAwesomeIcon icon={faEthereum} /> }
                    {/* {selected? selected : prompt} */}
                    <input type="text"
                    ref={ref}
                    placeholder={selected? selected : prompt}
                    value={selected || query}
                    onChange= {(e)=>{
                        setQuery(e.target.value)
                        setSelected(null);
                    }}
                    onClick={()=> setIsactive(prev => !prev)}
                    className={`w-75 ${styles?"changeStyle_dropdown":""}`}
                    style={{color:"#333"}}
                    />

                    <FontAwesomeIcon icon={faChevronDown}/>
                </div>
                    {isactive && 
                        (<div className="dropdown-content_c">
                            {filter(options).map(((option)=>(
                                <div key={option[id]} className="dropdown-item_c" onClick={(e)=>{
                                    setQuery('')
                                    setSelected(option[label]);
                                    setIsactive(false)
                               }}>
                                  {option[label]}
                                </div>
                            )))
                            }
                        </div>)
                    }

            </div>
        </div>
    );
}

export default memo(CustomDropdown)
