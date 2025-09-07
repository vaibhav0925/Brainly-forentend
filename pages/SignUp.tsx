import { useRef } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

export function SignUp(){
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();

    function Signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-8">
            <Input ref={usernameRef} placeholder="Username"/>
            <Input ref={passwordRef} placeholder="Password"/>
            <div className="flex justify-center pt-4">
                <Button onClick={Signup} loading={false} varient="Secondary" text="SignUp" fullWidth={true}/>
            </div>
        </div>
    </div>
}