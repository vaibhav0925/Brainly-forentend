import { ReactElement } from "react"

export function SideBarItems({text, icons}:{
    text:string,
    icons: ReactElement
}){
    return <div className="flex">
        {icons} {text}
    </div>
}