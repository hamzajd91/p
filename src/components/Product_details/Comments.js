import React from 'react'
import './Product_details.css'
import Heading1 from '../../reusableComponents/Headings/Heading1';
import Styled_text from '../../reusableComponents/styled_text/Styled_text';


function Comments() {
    return (
        <div className='d-flex FS RR w-100 my-3'>
            <div>
                <div className='Comments_image'></div>
            </div>
            <div className='d-flex CR px-2 '>
                <Heading1           
                    size="15px"
                    SMsize="15"
                    weight="700"
                    marginBottom="0px"
                    SMmarginBottom="0px"
                    color="blue"
                    JFcontent='left'
                    className=''

                    style={{marginTop:'2px'}}
                >
                    @Username
                </Heading1>
                <div>
                    <Heading1
                        color=" #999999"
                        paddingInline="0px"
                        paddingBlock="0px"
                        size="15px"
                        weight="400"
                        marginBottom=""
                        SMsize="15px"
                    >
                        Lorem ipsum d
                        Lorem ipsum d
                        Lorem ipsum d
                        Lorem ipsum d
                        Lorem ipsum d
                    </Heading1>  
                </div>
            </div>
        </div>
    )
}

export default Comments
