import React from 'react'
import { Outlet } from 'react-router'
import { Player } from '@lottiefiles/react-lottie-player'
type Props = {}

const Author = (props: Props) => {
  return (
    <div>
        <div>
  <div className="author_floor bg-[#FFFFFF]">
    <div className="author_floor_one h-[600px] flex ">
      <div className="author_floor_one_left  w-[50%] bg-[#1F232C]">
        <h1 className=" leading-[50px] mt-[70px] text-[30px] w-[570px] font-bold  ml-[70px]  text-[#FFFFFF]">
          <strong className="text-[#a39280]">Hi, I'm Viet.<br /></strong>
          I am the author of this blog site. Created with the purpose of keeping people updated with news, positive stories help people be happy, love life and work for society.</h1>
        {/* <form action="">
                  <label for="">Display name</label>
                  <input class=" text-[15px] text-[#FFFFFF]  border-white-500 pl-[10px]  outline-none border hover:drop-shadow-2xl" >
                  <label for="">Email</label>
                  <input type="email" class=" text-[15px] text-[#FFFFFF]  border-white-500 pl-[10px]  outline-none border hover:bg-[#1F232C] hover:border-b-[3px]" >
                  <label for="">Password</label>
                  <input  type="password" class=" text-[15px] text-[#FFFFFF]  border-white-500 pl-[10px]  outline-none border hover:bg-[#1F232C] hover:border-b-[3px]">
              </form> */}
      </div>
      <div className="author_floor_one_right w-[50%] text-[#FFFFFF]">
      </div>
    </div>
    <div className="author_floor_margin mx-[210px] mt-[50px] b">
      <div className="author_floor_tow bg-[#FFFFFF] h-[400px] flex ">
        <div className="author_floor_tow_left  w-[50%] bg-[#FFFFFF]">
          <h1 className=" leading-[26px] mt-[150px] text-[15px] w-[370px]  font-light   text-[#black]">
            <strong className="text-[#a39280] text-[25px]  font-bold ">Hi, I'm Viet.<br /></strong>
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</h1>
          {/* <form action="">
                      <label for="">Display name</label>
                      <input class=" text-[15px] text-[#FFFFFF]  border-white-500 pl-[10px]  outline-none border hover:drop-shadow-2xl" >
                      <label for="">Email</label>
                      <input type="email" class=" text-[15px] text-[#FFFFFF]  border-white-500 pl-[10px]  outline-none border hover:bg-[#1F232C] hover:border-b-[3px]" >
                      <label for="">Password</label>
                      <input  type="password" class=" text-[15px] text-[#FFFFFF]  border-white-500 pl-[10px]  outline-none border hover:bg-[#1F232C] hover:border-b-[3px]">
                  </form> */}
        </div>
        <div className="author_floor_tow_right w-[50%] ml-[90px] text-[#FFFFFF]">
        <Player className=" w-[380px] h-[350px] player"
        src='https://lottie.host/7d012d20-b5f5-4358-9264-1f260bbd2b69/fyzoNCmMV5.json'
        loop
        autoplay
        />
        </div>
      </div>
      <div className="author_floor_three bg-[#FFFFFF]  h-[400px] flex ">
        <div className="author_floor_three_right  w-[50%] text-[#FFFFFF]">
        <Player className=" w-[450px]  h-[400px] player"
        src='https://lottie.host/a35992d2-0834-4b72-8132-62d2a54bc6bb/rWz3nhsyTt.json'
        loop
        autoplay
        />
         
        </div>
        <div className="author_floor_three_left  w-[50%] bg-[#FFFFFF]">
          <h1 className=" leading-[26px] mt-[160px] ml-[100px] text-[15px] w-[370px] font-light   text-[#black]">
            <strong className="text-[#a39280] text-[25px]  font-bold ">Hi, I'm Viet.<br /></strong>
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</h1>
          {/* <form action="">
                      <label for="">Display name</label>
                      <input class=" text-[15px] text-[#FFFFFF]  border-white-500 pl-[10px]  outline-none border hover:drop-shadow-2xl" >
                      <label for="">Email</label>
                      <input type="email" class=" text-[15px] text-[#FFFFFF]  border-white-500 pl-[10px]  outline-none border hover:bg-[#1F232C] hover:border-b-[3px]" >
                      <label for="">Password</label>
                      <input  type="password" class=" text-[15px] text-[#FFFFFF]  border-white-500 pl-[10px]  outline-none border hover:bg-[#1F232C] hover:border-b-[3px]">
                  </form> */}
        </div>
      </div>
      <div className="author_floor_four bg-[#FFFFFF] mt-[100px] h-[400px] flex ">
        <div className="author_floor_four_left  w-[50%] bg-[#FFFFFF]">
          <h1 className=" leading-[26px] mt-[110px] text-[15px] w-[370px] font-light   text-[#black]">
            <strong className="text-[#a39280] text-[25px]  font-bold ">Hi, I'm Viet.<br /></strong>
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</h1>
          {/* <form action="">
                      <label for="">Display name</label>
                      <input class=" text-[15px] text-[#FFFFFF]  border-white-500 pl-[10px]  outline-none border hover:drop-shadow-2xl" >
                      <label for="">Email</label>
                      <input type="email" class=" text-[15px] text-[#FFFFFF]  border-white-500 pl-[10px]  outline-none border hover:bg-[#1F232C] hover:border-b-[3px]" >
                      <label for="">Password</label>
                      <input  type="password" class=" text-[15px] text-[#FFFFFF]  border-white-500 pl-[10px]  outline-none border hover:bg-[#1F232C] hover:border-b-[3px]">
                  </form> */}
        </div>
        <div className="author_floor_four_right w-[50%] ml-[170px]  text-[#FFFFFF]">
        <Player className=" w-[380px] h-[350px] player"
        src='https://assets10.lottiefiles.com/packages/lf20_djl4b3kd.json'
        loop
        autoplay
        />
        </div>
      </div>
    </div>
  </div>
  <div className="after_footer bg-[#ceeeed] h-[380px]">
    <h1 className="text-center pt-[130px]  text-[30px] text-[black] font-bold">I'd Love to Hear From You. <br /> Here's How You Can Reach Me</h1>
    <button type="submit" className=" hehe ml-[610px] bg-[#8C6135] border-black mt-[40px] text-[#000000] font-normal  w-[150px] text-[14px] h-[40px] p-2 rounded-[20px] text-xs hover:bg-transparent hover:border-black border-2 hover:text-[black]">Get In Touch</button>
  </div>
  <div className="footer  bottom-0 bg-[#1F232C] py-[30px] px-[15px]">
    <h1 className="mx-[40px] text-[white]">©2035 by Viet vip pro. Proudly created with Wix.com</h1>
  </div>
</div>
    <Outlet/>
    </div>
  )
}

export default Author