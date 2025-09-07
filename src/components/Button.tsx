import type{ ReactElement } from "react"

interface ButtonProp{
    varient: "Primary" | "Secondary",
    text: String,
    startIcon?: ReactElement,
    onClick?: () => void,
    fullWidth?: boolean,
    loading?: boolean 
}

const varientClasses = {
    "Primary": "bg-[#e0e7ff] text-[#5d56c5]",
    "Secondary": "bg-[#5046e4] text-[#f5f7fc]"
}

const defaultStyle = "px-4 py-2 rounded-md font-normal flex items-center"

export function Button ({varient, text, startIcon, onClick, fullWidth, loading}: ButtonProp){
    return <button onClick={onClick} className={varientClasses[varient] + " " + defaultStyle + 
    `${fullWidth ? " w-full flex justify-center items-center" : ""} ${loading ? "opacity-45" : ""}`} disabled={loading}>
        <div className="pr-2">
            {startIcon}
        </div>
        {text}
    </button>
}