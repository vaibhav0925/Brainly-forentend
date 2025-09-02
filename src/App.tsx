import './App.css'
import {Button} from "../components/Button"
import {Card} from "../components/Card"
import {PlusIcon} from "../Icons/PlusIcon"
import {ShareIcon} from "../Icons/ShareIcon"

function App() {
  

  return (
    <>
       <div className="p-4">
        <div className="flex justify-end gap-4">
          <Button varient="Primary" text="Share Brain" startIcon={<ShareIcon/>}></Button>
          <Button varient="Secondary" text="Add Content" startIcon={<PlusIcon/>}></Button>
        </div>
        <div className='flex gap-4'>
          <Card type='YouTube' title='Youtube Link' link='https://www.youtube.com/watch?v=CEGN-LbiX4Y'/>
          <Card type='Twitter' title='Twitter Post' link='https://x.com/nandini__bagga/status/1962514884115181621' />
        </div>
       </div>
    </>
  )
}

export default App
