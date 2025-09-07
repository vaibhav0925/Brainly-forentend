import type { ReactElement } from "react"

export function SideBarItems({text, icons}:{
    text:string,
    icons: ReactElement
}){
    return <div className="flex text-gray-700 py-2 cursor-pointer hover:bg-gray-200 rounded max-w-48 pl-4
        transition-all duration-150">
        <div className="pr-2">
            {icons}
        </div>
        <div>
            {text}
        </div>
    </div>
}