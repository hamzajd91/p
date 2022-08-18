import React from 'react'
import {Button, Collapse} from 'react-bootstrap'
function ReactTransition(props) {
    const {open, setOpen, title } = props
    return (
        <>
        <Button
            onClick={() => {
                setOpen(!open)
                console.log("click open" , open);
            }}
            aria-controls="example-collapse-text"
            aria-expanded={open}
        >
            click
        </Button>
        <Collapse in={open}>
            <div id="example-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
            </div>
        </Collapse>
    </>
    )
}

export default ReactTransition
