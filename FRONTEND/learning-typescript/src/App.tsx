import React,{useState} from 'react'
import { Route,Routes,Outlet   } from 'react-router-dom'
import Blog from './component/LayoutClient/Blog'

import Home from './pages/client/Home'
import HomeAdmin from './pages/admin/HomeAdmin'
import BgVideo from './component/LayoutClient/BgVideo'
import DetailBlog from './component/LayoutClient/DetailBlog'
import Signup from './component/LayoutClient/Signup'
import Login from './component/LayoutClient/Login'
import Author from './component/LayoutClient/Author'
import ListBlog from './component/LayoutAdmin/Blog/ListBlog'
import AddBlog from './component/LayoutAdmin/Blog/AddBlog'
import EditBlog from './component/LayoutAdmin/Blog/EditBlog'
import PrivateRouter from './component/PrivateRouter'


function App() {
  return(
    <>
      <Routes>
        <Route path='/' element={<Home />}>
        <Route index element={<BgVideo/>}/>
        <Route path='blog-list' element={<Blog />}/>
        <Route path='detail-blog/:id' element={<DetailBlog />}/>
        <Route path='work-with-me' element={<Author/>}/>
        <Route path='sign-up' element={<Signup/>}/>
        <Route path='log-in' element={<Login/>}/>
        </Route>


        
        <Route path='/admin' element={<HomeAdmin/>}>
        <Route index element ={<ListBlog/>}/>
        <Route path='add-blog' element={<AddBlog/>}/>
        <Route path='edit-blog/:id' element={<EditBlog/>}/>
        </Route>
      </Routes>
    </>
  )
}
export default App