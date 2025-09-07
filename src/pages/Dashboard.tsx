import {Button} from "../components/Button"
import {Card} from "../components/Card"
import {CreateContentModal} from "../components/CreateContentModal"
import {SideBar} from "../components/SideBar"
import {PlusIcon} from "../Icons/PlusIcon"
import {ShareIcon} from "../Icons/ShareIcon"
import { useEffect, useState } from 'react'
import { YouTubeIcons } from '../Icons/YouTubeIcon'
import { TwitterIcons } from '../Icons/TwitterIcons'
import { useContent } from "../hooks/useContent"
import axios from "axios"
import { BACKEND_URL } from "../config"

export function DashBoard() {
  const [modalOpen, setModelOpen] = useState(false)
  const {content, refresh} = useContent()

  useEffect(() => {
    refresh()
  }, [modalOpen])


  return <div>
    <div>
      <SideBar/>
    </div>
    <div className='p-4 ml-72 min-h-screen bg-[#ffffff] border'>
        <CreateContentModal open={modalOpen} onClose={() => {
          setModelOpen(false);
        }}/>
       <div className="p-4">
        <div className="flex justify-end gap-4">
          <Button onClick={async()=> {
            const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
              share: true
            },{
              headers: {
                "Authorization": localStorage.getItem('token')
              }
            });
            const shareURL = `http://localhost:5173/${response.data.hash}`;
            alert(shareURL);
          }} varient="Primary" text="Share Brain" startIcon={<ShareIcon/>}></Button>
          <Button onClick={() => {setModelOpen(true)}} varient="Secondary" text="Add Content" startIcon={<PlusIcon/>}></Button>
        </div>
        <div className='flex gap-4 flex-wrap'>
          <Card type='YouTube' title='Youtube Link' link='https://www.youtube.com/watch?v=CEGN-LbiX4Y' icon={<YouTubeIcons/>}/>
          {content.map(({type, link, title}) => <Card 
            type={type}
            link={link}
            title={title}
            // icon={icon}
        />)}  
        </div>
       </div>
    </div>
  </div>  
}