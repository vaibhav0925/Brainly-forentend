import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function SignUp(){

    
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    
    async function Signup(){
        try {
            const username = usernameRef.current?.value;
            const password = passwordRef.current?.value;
            const res = await axios.post(BACKEND_URL + "/api/v1/signup", {
                username,
                password
            })
            alert("You are SignUp!")
            console.log("Response", res.data)
        } catch (err: any){
            console.log("SignUp error", err)
            alert("Signup failed: " + (err.response?.data?.message || err.message));
        }

        navigate("/signin")
    }   
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-8">
            <Input reference={usernameRef} placeholder="Username"/>
            <Input reference={passwordRef} placeholder="Password" type="password"/>
            <div className="flex justify-center pt-4">
                <Button onClick={Signup} loading={false} varient="Secondary" text="SignUp" fullWidth={true}/>
            </div>
        </div>
    </div>
}