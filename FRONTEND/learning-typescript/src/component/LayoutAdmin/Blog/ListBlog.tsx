import React,{useEffect,useState} from 'react'
import { Outlet, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { IBlog } from '../../../interfaces/blog'
import axios from 'axios'
type Props = {}

const ListBlog = (props: Props) => {
const [blog,setBlog] =useState<IBlog[]>([])
useEffect(()=>{
  (async ()=>{
    const {data} =await axios.get("http://localhost:8000/blogs/blog")
    setBlog(data.data)
  })()
},[])

console.log(blog);

const removeBlog= async (id:String)=>{
    try {
      const {data}=await axios.delete(`http://localhost:8000/blogs/blog/${id}`)
      setBlog(blog.filter((item)=>item._id!== data.id))
      window.location.reload()
    } catch (error) {
      
    }
}
  return (
    <div>
      <Link to = "add-blog" relative="path"> <button type="button" className="inline-block px-6 ml-[38px] py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Add</button></Link>
      <div className="tab-content " id="tabs-tabContent">
  <div className="flex  flex-col">
    <div className="overflow-x-auto sm:-mx-4 lg:-mx-1 ">
      <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-white border-b">
              <tr>
                <th scope="col" className="text-sm text-center font-medium text-gray-900 px-6 py-4 text-left">
                  STT
                </th>
                <th scope="col" className="text-sm text-center font-medium text-gray-900 px-6 py-4 text-left">
                  Title
                </th>
                <th scope="col" className="text-sm text-center font-medium text-gray-900 px-6 py-4 text-left">
                  Content
                </th>
                <th scope="col" className="text-sm text-center font-medium text-gray-900 px-6 py-4 text-left">
                  Image
                </th>
                <th scope="col" className="text-sm text-center font-medium text-gray-900 px-6 py-4 text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {blog.map((item,index)=>{
                return(<>
                         <tr key={index} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center text-gray-900">{index + 1}</td>
                <td className="text-sm text-gray-900 text-center font-light px-6 py-4 ">
                  {item.title}
                </td>
                <td className="text-sm text-gray-900 text-center font-light text-center px-6 py-4 ">
                  {item.content}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4  ">
                  <img className='w-[100px] h-[100px]' src={`${item.image}`} alt="" />
                  
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <button className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>{if(window.confirm("Có chắc chắn xóa")){removeBlog(item._id!)}}} >Delete</button> 
                  <Link to={`edit-blog/${item._id}`}> <button type="button" className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Edit Blog</button></Link>
                  
                
                </td>
              </tr>
                </>)
              })}
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
    <Outlet/>
    </div>
  )
}

export default ListBlog