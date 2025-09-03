import {CrossIcons} from "../Icons/CrossIcons"
import { Button } from "./Button";


export function CreateContentModal({open, onClose}){

    // Controlled Environment
    return <div>
        {open && <div className="w-screen h-screen bg-[#7d7d7d] fixed top-0 left-0 opacity-60 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded">
                    <div className="flex justify-end">
                        <div onClick={onClose} className="cursor-pointer">
                            <CrossIcons/>
                        </div>
                    </div>
                    <div>
                        <Input placeholder= {"Tittle"}/>
                        <Input placeholder = {"Link"}/>
                    </div> 
                    <div className="flex justify-center">
                        <Button varient="Secondary" text="Submit" />
                    </div>
                </span>
            </div>
        </div>}
    </div>
}


function Input({onChange, placeholder}: {onChange: () => void}){
    return <div>
        <input placeholder={placeholder} type="text" className="px-4 py-2 border rounded m-2" onClick={onChange}></input>
    </div>
}