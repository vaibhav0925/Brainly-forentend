import { useRef, useState } from "react";
import {CrossIcons} from "../Icons/CrossIcons"
import { Button } from "./Button";
import {Input} from "./Input"
import axios from "axios";
import { BACKEND_URL } from "../config";


enum ContentType {
    youtube = "YouTube",
    twitter = "Twitter"
}


export function CreateContentModal({open, onClose}:{open:boolean, onClose:() => void}){

    const tittleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type, setType] = useState(ContentType.youtube)

    function addContent(){
        const title = tittleRef.current?.value;
        const link = linkRef.current?.value;

        axios.post(`${BACKEND_URL}/api/v1/content`, {
            link,
            title,
            type
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        .then(() => {
        onClose();
    })
    }

    // Controlled Environment
    return <div>
        {open && <div className="w-screen h-screen bg-[#7d7d7d] fixed top-0 left-0 opacity-90 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded">
                    <div className="flex justify-end">
                        <div onClick={onClose} className="cursor-pointer">
                            <CrossIcons/>
                        </div>
                    </div>
                    <div>
                        <Input reference={tittleRef} placeholder= {"Tittle"}/>
                        <Input reference={linkRef} placeholder = {"Link"}/>
                    </div> 
                    <div>
                        <h1>Type</h1>
                        <div className="flex gap-1 justify-center pb-2">
                            <Button text="Youtube" varient={type ===ContentType.youtube ? "Secondary": "Primary"}
                            onClick={() => {
                                setType((ContentType.youtube))
                            }}></Button>
                            <Button text="Twitter" varient={type === ContentType.twitter ? "Secondary" : "Primary"}
                            onClick={() => {
                                setType((ContentType.twitter))
                            }}></Button>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Button onClick={addContent} varient="Secondary" text="Submit" />
                    </div>
                </span>
            </div>
        </div>}
    </div>
}
