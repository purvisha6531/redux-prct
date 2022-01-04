import React,{forwardRef} from "react";
function Forwardrefprct(props,ref){
    return(
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
}

export default  forwardRef(Forwardrefprct);