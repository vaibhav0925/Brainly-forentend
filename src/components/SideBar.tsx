import {SideBarItems} from "../components/SideBarItems"
import { TwitterIcons } from "../Icons/TwitterIcons"
import { YouTubeIcons } from "../Icons/YouTubeIcon"
import { DocumentIcons } from "../Icons/DocumentIcons"
import {LinkIcons} from "../Icons/LinkIcons"
import {BrainIcons} from "../Icons/BrainIcons"
import { HashIcon } from "../Icons/hashIcons"

export function SideBar(){
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
        <div className="flex text-2xl pt-8 items-center">
            <div className="pr-2 text-purple-700">
                <BrainIcons/>
            </div>
            Brainly
        </div>
        <div className="pt-4 pl-4">
            <SideBarItems text="Twitter" icons={<TwitterIcons/>}/>
            <SideBarItems text="Videos" icons={<YouTubeIcons/>}/>
            <SideBarItems text="Documents" icons={<DocumentIcons/>}/>
            <SideBarItems text="Links" icons={<LinkIcons/>}/>
            <SideBarItems text="Tags" icons={<HashIcon/>}/>
        </div>
    </div>
}


