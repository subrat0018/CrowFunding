import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import CreateDrive from './Pages/CreateDrive'
import SideBar from './Components/SideBar'
import NavBar from './Components/NavBar'


const App = () => {
  return (
    <div className='flex'>
        <div className=' mr-0'>
            <SideBar />
        </div>
        <div className='w-full ml-0'>
            <NavBar />
            <Routes>
                <Route path='/' element = {<Home />}/>
                <Route path='/profile' element = {<Profile />}/>
                <Route path='/create-drive' element = {<CreateDrive/>}/> 
            </Routes>
        </div>

    </div>
  )
}

export default App