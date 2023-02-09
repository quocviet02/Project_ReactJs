import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Outlet } from 'react-router'

type Props = {}

const BgVideo = (props: Props) => {

  return (
    <div>
        <div className="tongcontent w-auto relative">
  <div className="sum-content">
    <video autoPlay muted loop className="videoPlayer">
      <source src="https://res.cloudinary.com/dyraccecs/video/upload/v1669554460/Tuy%C3%A1%C2%BA_t_-_63970_b99qw1.mp4" type="video/mp4" />
    </video>
    <div className="content m-[100px]">
      <h1 className="text-[55px] font-extrabold text-[#FFFFFF]">Don't Let <span className="text-[#7A83CE]">Yourself</span> Be<br /> a Coward.</h1>
      <p className="text-[20px] font-normal my-[12px] text-[#FFFFFF]">Stories that will inspire you to work.</p>
      <div className="search mt-[29px]  flex">
        <input className=" text-[15px] text-[#FFFFFF]  border-white-500 pl-[10px]   outline-none bg-[#1E394087] hover:bg-[#142C32E3] hover:border-b-[3px]" placeholder="Email Address*" />
        <button type="submit" className="bg-[#8C6135] hehe text-[#000000] font-normal ml-[20px] w-[100px] text-[14px] h-[40px] p-2 rounded-[20px] text-xs hover:bg-transparent hover:border-2 hover:text-[#FFFFFF]">Tell me</button>
      </div>
    </div>
  </div>
</div>
    <Outlet/>
    </div>
  )
}

export default BgVideo