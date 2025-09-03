import {SideBarItems} from "../components/SideBarItems"
import { TwitterIcons } from "../Icons/TwitterIcons"
import { YouTubeIcons } from "../Icons/YouTubeIcon"
import { DocumentIcons } from "../Icons/DocumentIcons"
import {LinkIcons} from "../Icons/LinkIcons"

export function SideBar(){
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0">
        <div className="pt-4">
            <SideBarItems text="Twitter" icons={<TwitterIcons/>}/>
            <SideBarItems text="Videos" icons={<YouTubeIcons/>}/>
            <SideBarItems text="Documents" icons={<DocumentIcons/>}/>
            <SideBarItems text="Links" icons={<LinkIcons/>}/>
        </div>
    </div>
}