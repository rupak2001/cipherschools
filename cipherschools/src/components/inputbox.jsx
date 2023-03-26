import React, { useRef } from "react";
import {MdEdit} from "react-icons/md"
export default function InputBox({height}){
    var editModes = useRef([])

    function ToggleEdit(){
        if(editModes.current[0].innerHTML === "Save"){
            editModes.current[0].innerHTML = "Edit"
            editModes.current[1].removeAttribute("disabled")
            editModes.current[2].style.display = "unset"
            
        }
        else if(editModes.current[0].innerHTML === "Edit"){
            editModes.current[0].innerHTML = "Save"
            editModes.current[1].setAttribute("disabled",true)
            editModes.current[2].style.display = "none"
        }
    }
    return(
        <div className="w-full flex flex-col items-center">
            <div className="w-full pt-4 px-12 flex flex-row justify-between justify-start items-start">
                <h4 className="text-left text-lg font-semibold text-white">About Me</h4>
                <button onClick={()=>ToggleEdit()} ref={el=>editModes.current[0]=el} className="bg-orange-400 w-20 h-8 text-white rounded-lg">Save</button>
            </div>
            <div className="w-[95%] mt-6  bg-gray-700 rounded-lg p-4 flex flex-row items-center justify-evenly">
            <textarea disabled ref={el=>editModes.current[1]=el} rows="14" cols="10" wrap="soft" type="text" className={`bg-gray-700 resize-none h-24 w-11/12  text-white flex justify-start items-start outline-none`} placeholder="hello"/>
            <div ref={el=>editModes.current[2]=el} style={{display:"none"}}>
                <MdEdit  color="white"/>
            </div>
            </div>
        </div>
        
    )
}