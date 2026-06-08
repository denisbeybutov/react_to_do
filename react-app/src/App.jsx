import { useState } from 'react'


import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ToDoList from './ToDoList/ToDoList.jsx'
import Modal from './Modal/Modal.jsx'
import Drop from './Drop/drop.jsx'
import UserList from './UserList/UserList.jsx'
import MemoryGame from './MemoryGame/MemoryGame.jsx'

function App() {
  
  const [modals, setModals] = useState(false);
 
  return (
    <>
      
      <MemoryGame
        images={[
              "https://images.unsplash.com/photo-1626808642875-0aa545482dfb",
              "https://images.unsplash.com/photo-1546842931-886c185b4c8c",
              "https://images.unsplash.com/photo-1520763185298-1b434c919102",
              "https://images.unsplash.com/photo-1442458017215-285b83f65851",
              "https://images.unsplash.com/photo-1496483648148-47c686dc86a8",
              "https://images.unsplash.com/photo-1591181520189-abcb0735c65d",
        ]}
      />
      {/*-----------Список пользователей 1-------------*/}
      {/* <UserList/> */}

      {/* ----------модально окно-------------- */}
      {/* <button className='more__button' onClick={()=>{
        
        setModals(true)}}>Больше информации</button>
      
      
      <Modal 
        isOpen={modals}
        onClose={()=>{setModals(false)}}
        title='Больше информации'
      >
        <p>Здесь подробнее о ...</p>
      </Modal> */}
      
      {/* -----------To Do list------------- */}
      {/* <ToDoList/> */}
      
    </>
  )
}

export default App
