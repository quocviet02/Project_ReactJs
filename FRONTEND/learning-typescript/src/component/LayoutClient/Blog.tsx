import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { IBlog } from '../../interfaces/blog'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
type Props = {}

const Blog = (props: Props) => {
  const [Blog,setBlog] =useState<IBlog[]>([])
  useEffect(()=>{
    (async()=>{
      const {data} = await axios.get("http://localhost:8000/blogs/blog")
      setBlog(data.data)
    })()
  },[])
  return (
    <div>
        <div className="content_blog mt-[90px] mx-[200px] ">
  <h1 className="font-bold text-[35px] mb-[40px] text-[#956237]">All The Tips In One Place</h1>
  {Blog.slice(0,1).map((item)=>{
    return(<>
      <div className="content_blogChild border-[black] border-[1px] ">
    <img className="w-[100%] cursor-zoom-in" src="https://static.wixstatic.com/media/2e2a49_a44bb315fe0e4ef4b04c683eb71debc3~mv2.jpg/v1/fill/w_940,h_529,fp_0.50_0.50,q_90,enc_auto/2e2a49_a44bb315fe0e4ef4b04c683eb71debc3~mv2.jpg" alt="" />
    <div className="info m-[20px]">
      <div className="status flex">
        <p className=" font-normal text-[12px]">6 days ago <i className="fa fa-gg mx-[10px]" aria-hidden="true" />
        </p>
        <p className="font-normal text-[12px]">2 min</p>
      </div>
        <Link to={`/detail-blog/${item._id}`} relative="path">
        <h1 className="text-[25px] font-bold my-[15px] hover:text-[#956237]">{item.title}</h1>
        <p className=" hover:text-[#956237]">{item.content}</p>
        </Link>
      <hr className="my-[17px] font-bold text-[black]" />
      <div className="tym flex pb-[25px] justify-between">
        <div className="cmt flex">
          <p className="mr-[20px] cursor-pointer"><i className="fa fa-eye mr-[7px] " aria-hidden="true" />0</p>
          <p className="cursor-pointer"><i className="fa fa-comment-o mr-[7px] cursor-pointer" aria-hidden="true" />0</p>
        </div>
        <div className="heart cursor-pointer">
          <i className="fa fa-heart-o" aria-hidden="true" />
        </div>
      </div>
    </div>                
  </div>
    </>)
  })}
  <div className="allPost my-[90px]">
    <div className="allPost_title flex justify-between mb-[50px]">
      <h1>All Posts</h1>
      <Link to="/log-in" relative='path'><button type="submit" className=" text-[black] border-[black] border-[1px]  p-2  text-xs hover:opacity-80">Log in / Sign up</button></Link>    </div>
    <div className="content_blogList grid grid-cols-3   gap-6">
      {Blog.map((item)=>{
             return (<><div className="content_blogChild border-[black] border-[1px] ">
              
             <img className="w-[100%] h-[200px] cursor-pointer" src="https://static.wixstatic.com/media/dccc21_1bcac90d11f2484d968884ae7397770b~mv2.jpg/v1/fill/w_740,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/dccc21_1bcac90d11f2484d968884ae7397770b~mv2.jpg" alt="" />
             <div className="info m-[20px]">
               <div className="status flex">
                 <p className=" font-normal text-[12px]">6 days ago <i className="fa fa-gg mx-[10px]" aria-hidden="true" />
                 </p>
                 <p className="font-normal text-[12px]">2 min</p>
               </div>
               <Link to={`/detail-blog/${item._id}`} relative="path">
                 <h1 className="nameBlog text-[25px] font-bold my-[15px] hover:text-[#956237]">{item.title}</h1>
                 <p className="contentBlog hover:text-[#956237]">{item.content}</p>
               </Link>
               <hr className="my-[17px] font-bold bg-[black]" />
               <div className="tym flex pb-[25px] justify-between">
                 <div className="cmt ">
                   <p className="cursor-pointer"><i className="fa fa-comment-o mr-[7px] cursor-pointer" aria-hidden="true" />0</p>
                 </div>
               </div>
             </div>                
           </div></>)
      })}

    </div>
  </div>
</div>
<div className="footer  bottom-0 bg-[#1F232C] py-[30px] px-[15px]">
        <h1 className="mx-[40px] text-[white]">©2035 by Viet vip pro. Proudly created with Wix.com</h1>
    </div>
    <Outlet/>
    </div>
  )
}

export default Blog