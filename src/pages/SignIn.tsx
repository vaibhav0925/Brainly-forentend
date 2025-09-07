import axios from "axios";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function SignIn(){

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    
    async function Signin(){
        try {
            const username = usernameRef.current?.value;
            const password = passwordRef.current?.value;
            const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
                username,
                password
            })
            const jwt = response.data.token;
            localStorage.setItem("token", jwt)
            // Redirect the user to dashboard
            navigate("/dashboard")
        } catch (err: any){
            console.log("SignIn error", err)
            alert("Signin failed: " + (err.response?.data?.message || err.message));
        }
    } 
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-8">
            <Input reference={usernameRef} placeholder="Username"/>
            <Input reference={passwordRef} placeholder="Password"/>
            <div className="flex justify-center pt-4">
                <Button onClick={Signin} loading={false} varient="Secondary" text="SignIn" fullWidth={true}/>
            </div>
        </div>
    </div>
}