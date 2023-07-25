import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
// import Notification from './pages/Notification';
import DisplayPage from './pages/DisplayPage';
import Navbar from './pages/Navbar'; 
import QuizInterface from './pages/QuizInterface';
import ProtectedPages from './components/protectedPages';
import RankBoard from './pages/RankBoard';
import ProfilePage from './pages/ProfilePage';
// import AddTest from './pages/Admin/AddTest';
import AddTest from './pages/Admin/AddingTests/AddTest';
import Sidebar from './pages/Admin/AdminNav';
import DisplayTests from './pages/Admin/ManagingTests/DisplayTests';
import ManageUsers from './pages/Admin/ManagingUsers/ManageUsers';
function App() {

  return (
   <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<DisplayPage/>}/>
    <Route path='/rankboard' element={<ProtectedPages><RankBoard/></ProtectedPages>}/>
    <Route path='/managetests' element={<ProtectedPages><DisplayTests/></ProtectedPages>}/>
    <Route path='/manageusers' element={<ProtectedPages><ManageUsers/></ProtectedPages>}/>
    <Route path='/addtest' element={<ProtectedPages><AddTest/></ProtectedPages>}/>
    <Route path='/admin' element={<ProtectedPages><Sidebar/></ProtectedPages>}/>
    <Route path='/profilepage' element={<ProtectedPages><ProfilePage/></ProtectedPages>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/home' element={<ProtectedPages><Home/></ProtectedPages>}/>
    <Route path='/navbar' element={<Navbar/>}/>
    <Route path='/quizinterface' element={<ProtectedPages><QuizInterface/></ProtectedPages>}/>
    </Routes>
    </BrowserRouter>
   </div>
    
    )  
}

export default App;
