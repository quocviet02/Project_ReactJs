import React, { useLayoutEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { IBlog } from "../../interfaces/blog";
type Props = {};
const DetailBlog = (props: Props) => {
  const { id } = useParams();
  const [blog, setBlog] = useState({} as IBlog);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "http://localhost:8000/blogs/blog/" + id
      );
      setBlog(data.data);

      console.log(blog);
      
      
    })();
  }, [id]);
  const [blogL,setBlogL] =useState<IBlog[]>([])
  useEffect(()=>{
    (async()=>{
      const {data} = await axios.get("http://localhost:8000/blogs/blog")
      setBlogL(data.data)
    })()
  },[])
  
  
  return (
    <div>
      <div className="content_blog mt-[60px] mx-[200px] ">
        <div className="allPost_title flex justify-between mb-[50px]">
          <h1 className="mt-[5px]">Post</h1>
          <button
            type="submit"
            className=" text-[black] border-[black] border-[1px]  p-2  text-xs hover:opacity-80"
          >
            Log in / Sign up
          </button>
        </div>
        <div className="content_blogChild border border-slate-200">
          <div className="bao m-[55px]">
            <div className="status flex mb-[30px]">
              
              <img
                className="w-[25px] h-[25px] mr-[10px]"
                src="data:image/png;base64,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"
                alt=""
              />
              <p>Admin</p>
              <i className="fa fa-gg m-[5px] " aria-hidden="true" />
              <p className="font-normal m-[4px] text-[12px]">5 days ago</p>
              <i className="fa fa-gg m-[5px] " aria-hidden="true" />
              <p className="font-normal m-[4px] text-[12px]">2 min read</p>
            </div>
            <div className="info">
              <div>
                <p className="text-[25px] font-bold my-[15px] hover:text-[#956237]">{blog.title}</p>
                <p className=" hover:text-[#956237]">
                 {blog.content}
                </p>
              </div>
            </div>
            <img
              className="w-[100%] cursor-zoom-in"
              src="https://static.wixstatic.com/media/2e2a49_a44bb315fe0e4ef4b04c683eb71debc3~mv2.jpg/v1/fill/w_940,h_529,fp_0.50_0.50,q_90,enc_auto/2e2a49_a44bb315fe0e4ef4b04c683eb71debc3~mv2.jpg"
              alt=""
            />
            <p className="mt-[40px]">#bloggingtips #positive </p>
            <hr className="my-[17px] font-bold text-[black]" />
            <div className="contact">
              <i className="fa fa-heart-o" aria-hidden="true" />
              <i className="fa fa-heart-o" aria-hidden="true" />
              <i className="fa fa-heart-o" aria-hidden="true" />
              <i className="fa fa-heart-o" aria-hidden="true" />
            </div>
            <hr className="my-[17px] font-bold text-[black]" />
            <div className="tym flex pb-[25px] justify-between">
              <div className="cmt flex">
                <p className="mr-[20px] cursor-pointer">
                  <i className="fa fa-eye mr-[7px] " aria-hidden="true" />0
                </p>
                <p className="cursor-pointer">
                  <i
                    className="fa fa-comment-o mr-[7px] cursor-pointer"
                    aria-hidden="true"
                  />
                  0
                </p>
              </div>
              <div className="heart cursor-pointer">
                <i className="fa fa-heart-o" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
        <div className="allPost my-[90px]">
          <div className="allPost_title flex justify-between mb-[50px]">
            <h1>Similar posts</h1>
            <Link to="/log-in" relative="path">
              <button
                type="submit"
                className=" text-[black] border-[black] border-[1px]  p-2  text-xs hover:opacity-80"
              >
                Log in / Sign up
              </button>
            </Link>
          </div>
          <div className="content_blogList grid grid-cols-3   gap-3">
            
            <div className="content_blogChild border-[black] border-[1px]  my-[10px]">
              <img
                className="w-[100%] h-[200px] cursor-pointer"
                src="https://static.wixstatic.com/media/dccc21_1bcac90d11f2484d968884ae7397770b~mv2.jpg/v1/fill/w_740,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/dccc21_1bcac90d11f2484d968884ae7397770b~mv2.jpg"
                alt=""
              />
              <div className="info m-[20px]">
                <div className="status flex">
                  <p className=" font-normal text-[12px]">
                    6 days ago{" "}
                    <i className="fa fa-gg mx-[10px]" aria-hidden="true" />
                  </p>
                  <p className="font-normal text-[12px]">2 min</p>
                </div>
            
                  <h1 className="text-[25px] font-bold my-[15px] hover:text-[#956237]">
                    
                  </h1>
                  <p className=" hover:text-[#956237]">
                    Create a blog post subtitle that summarizes your post in a
                    few short, punchy sentences and entices your audience to
                    continue reading.
                  </p>
              
                <hr className="my-[17px] font-bold bg-[black]" />
                <div className="tym flex pb-[25px] justify-between">
                  <div className="cmt ">
                    <p className="cursor-pointer">
                      <i
                        className="fa fa-comment-o mr-[7px] cursor-pointer"
                        aria-hidden="true"
                      />
                      0
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content_blogChild border-[black] border-[1px]  my-[10px]">
              <img
                className="w-[100%] h-[200px] cursor-pointer"
                src="https://static.wixstatic.com/media/2e2a49_830e8da378ac4176ae779b1fd2eec443~mv2.jpg/v1/fill/w_740,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2e2a49_830e8da378ac4176ae779b1fd2eec443~mv2.jpg"
                alt=""
              />
              <div className="info m-[20px]">
                <div className="status flex">
                  <p className=" font-normal text-[12px]">
                    6 days ago{" "}
                    <i className="fa fa-gg mx-[10px]" aria-hidden="true" />
                  </p>
                  <p className="font-normal text-[12px]">2 min</p>
                </div>
                <a href="detail">
                  <h1 className="text-[25px] font-bold my-[15px] hover:text-[#956237]">
                    Finding ideas for Your Next Podcast
                  </h1>
                  <p className=" hover:text-[#956237]">
                    Create a blog post subtitle that summarizes your post in a
                    few short, punchy sentences and entices your audience to
                    continue reading.
                  </p>
                </a>
                <hr className="my-[17px] font-bold bg-[black]" />
                <div className="tym flex pb-[25px] justify-between">
                  <div className="cmt flex">
                    <p className="cursor-pointer">
                      <i
                        className="fa fa-comment-o mr-[7px] cursor-pointer"
                        aria-hidden="true"
                      />
                      0
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content_blogChild border-[black] border-[1px]  my-[10px]">
              <img
                className="w-[100%] h-[200px] cursor-pointer"
                src="https://static.wixstatic.com/media/2e2a49_f881e58e37804a2ba5acc65eee4550c6~mv2.jpg/v1/fill/w_740,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2e2a49_f881e58e37804a2ba5acc65eee4550c6~mv2.jpg"
                alt=""
              />
              <div className="info m-[20px]">
                <div className="status flex">
                  <p className=" font-normal text-[12px]">
                    6 days ago{" "}
                    <i className="fa fa-gg mx-[10px]" aria-hidden="true" />
                  </p>
                  <p className="font-normal text-[12px]">2 min</p>
                </div>
                <a href="detail">
                  <h1 className="text-[25px] font-bold my-[15px] hover:text-[#956237]">
                    Finding ideas for Your Next Podcast
                  </h1>
                  <p className=" hover:text-[#956237]">
                    Create a blog post subtitle that summarizes your post in a
                    few short, punchy sentences and entices your audience to
                    continue reading.
                  </p>
                </a>
                <hr className="my-[17px] font-bold bg-[black]" />
                <div className="tym flex pb-[25px] justify-between">
                  <div className="cmt flex">
                    <p className="cursor-pointer">
                      <i
                        className="fa fa-comment-o mr-[7px] cursor-pointer"
                        aria-hidden="true"
                      />
                      0
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content_blogChild border-[black] border-[1px]  my-[10px]">
              <img
                className="w-[100%] h-[200px] cursor-pointer"
                src="https://static.wixstatic.com/media/2e2a49_864c9b4a28d84e8fb5e5ef0102b39476~mv2.jpg/v1/fill/w_740,h_822,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2e2a49_864c9b4a28d84e8fb5e5ef0102b39476~mv2.jpg"
                alt=""
              />
              <div className="info m-[20px]">
                <div className="status flex">
                  <p className=" font-normal text-[12px]">
                    6 days ago{" "}
                    <i className="fa fa-gg mx-[10px]" aria-hidden="true" />
                  </p>
                  <p className="font-normal text-[12px]">2 min</p>
                </div>
                <a href="detail">
                  <h1 className="text-[25px] font-bold my-[15px] hover:text-[#956237]">
                    Finding ideas for Your Next Podcast
                  </h1>
                  <p className=" hover:text-[#956237]">
                    Create a blog post subtitle that summarizes your post in a
                    few short, punchy sentences and entices your audience to
                    continue reading.
                  </p>
                </a>
                <hr className="my-[17px] font-bold bg-[black]" />
                <div className="tym flex pb-[25px] justify-between">
                  <div className="cmt flex">
                    <p className="cursor-pointer">
                      <i
                        className="fa fa-comment-o mr-[7px] cursor-pointer"
                        aria-hidden="true"
                      />
                      0
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content_blogChild border-[black] border-[1px]  my-[10px]">
              <img
                className="w-[100%] h-[200px] cursor-pointer"
                src="https://static.wixstatic.com/media/2e2a49_830e8da378ac4176ae779b1fd2eec443~mv2.jpg/v1/fill/w_740,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2e2a49_830e8da378ac4176ae779b1fd2eec443~mv2.jpg"
                alt=""
              />
              <div className="info m-[20px]">
                <div className="status flex">
                  <p className=" font-normal text-[12px]">
                    6 days ago{" "}
                    <i className="fa fa-gg mx-[10px]" aria-hidden="true" />
                  </p>
                  <p className="font-normal text-[12px]">2 min</p>
                </div>
                <a href="detail">
                  <h1 className="text-[25px] font-bold my-[15px] hover:text-[#956237]">
                    Finding ideas for Your Next Podcast
                  </h1>
                  <p className=" hover:text-[#956237]">
                    Create a blog post subtitle that summarizes your post in a
                    few short, punchy sentences and entices your audience to
                    continue reading.
                  </p>
                </a>
                <hr className="my-[17px] font-bold bg-[black]" />
                <div className="tym flex pb-[25px] justify-between">
                  <div className="cmt flex">
                    <p className="cursor-pointer">
                      <i
                        className="fa fa-comment-o mr-[7px] cursor-pointer"
                        aria-hidden="true"
                      />
                      0
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content_blogChild border-[black] border-[1px]  my-[10px]">
              <img
                className="w-[100%] h-[200px] cursor-pointer"
                src="https://static.wixstatic.com/media/2e2a49_f881e58e37804a2ba5acc65eee4550c6~mv2.jpg/v1/fill/w_740,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2e2a49_f881e58e37804a2ba5acc65eee4550c6~mv2.jpg"
                alt=""
              />
              <div className="info m-[20px]">
                <div className="status flex">
                  <p className=" font-normal text-[12px]">
                    6 days ago{" "}
                    <i className="fa fa-gg mx-[10px]" aria-hidden="true" />
                  </p>
                  <p className="font-normal text-[12px]">2 min</p>
                </div>
                <a href="detail">
                  <h1 className="text-[25px] font-bold my-[15px] hover:text-[#956237]">
                    Finding ideas for Your Next Podcast
                  </h1>
                  <p className=" hover:text-[#956237]">
                    Create a blog post subtitle that summarizes your post in a
                    few short, punchy sentences and entices your audience to
                    continue reading.
                  </p>
                </a>
                <hr className="my-[17px] font-bold bg-[black]" />
                <div className="tym flex pb-[25px] justify-between">
                  <div className="cmt flex">
                    <p className="cursor-pointer">
                      <i
                        className="fa fa-comment-o mr-[7px] cursor-pointer"
                        aria-hidden="true"
                      />
                      0
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content_blogChild border-[black] border-[1px]  my-[10px]">
              <img
                className="w-[100%] h-[200px] cursor-pointer"
                src="https://static.wixstatic.com/media/2e2a49_a44bb315fe0e4ef4b04c683eb71debc3~mv2.jpg/v1/fill/w_940,h_529,fp_0.50_0.50,q_90,enc_auto/2e2a49_a44bb315fe0e4ef4b04c683eb71debc3~mv2.jpg"
                alt=""
              />
              <div className="info m-[20px]">
                <div className="status flex">
                  <p className=" font-normal text-[12px]">
                    6 days ago{" "}
                    <i className="fa fa-gg mx-[10px]" aria-hidden="true" />
                  </p>
                  <p className="font-normal text-[12px]">2 min</p>
                </div>
                <a href="detail">
                  <h1 className="text-[25px] font-bold my-[15px] hover:text-[#956237]">
                    Finding ideas for Your Next Podcast
                  </h1>
                  <p className=" hover:text-[#956237]">
                    Create a blog post subtitle that summarizes your post in a
                    few short, punchy sentences and entices your audience to
                    continue reading.
                  </p>
                </a>
                <hr className="my-[17px] font-bold bg-[black]" />
                <div className="tym flex pb-[25px] justify-between">
                  <div className="cmt flex">
                    <p className="cursor-pointer">
                      <i
                        className="fa fa-comment-o mr-[7px] cursor-pointer"
                        aria-hidden="true"
                      />
                      0
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content_blogChild border-[black] border-[1px]  my-[10px]">
              <img
                className="w-[100%] h-[200px] cursor-pointer"
                src="https://static.wixstatic.com/media/2e2a49_a44bb315fe0e4ef4b04c683eb71debc3~mv2.jpg/v1/fill/w_940,h_529,fp_0.50_0.50,q_90,enc_auto/2e2a49_a44bb315fe0e4ef4b04c683eb71debc3~mv2.jpg"
                alt=""
              />
              <div className="info m-[20px]">
                <div className="status flex">
                  <p className=" font-normal text-[12px]">
                    6 days ago{" "}
                    <i className="fa fa-gg mx-[10px]" aria-hidden="true" />
                  </p>
                  <p className="font-normal text-[12px]">2 min</p>
                </div>
                <a href="detail">
                  <h1 className="text-[25px] font-bold my-[15px] hover:text-[#956237]">
                    Finding ideas for Your Next Podcast
                  </h1>
                  <p className=" hover:text-[#956237]">
                    Create a blog post subtitle that summarizes your post in a
                    few short, punchy sentences and entices your audience to
                    continue reading.
                  </p>
                </a>
                <hr className="my-[17px] font-bold bg-[black]" />
                <div className="tym flex pb-[25px] justify-between">
                  <div className="cmt flex">
                    <p className="cursor-pointer">
                      <i
                        className="fa fa-comment-o mr-[7px] cursor-pointer"
                        aria-hidden="true"
                      />
                      0
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content_blogChild border-[black] border-[1px]  my-[10px]  my-[10px]">
              <img
                className="w-[100%] h-[200px] cursor-pointer"
                src="https://static.wixstatic.com/media/2e2a49_a44bb315fe0e4ef4b04c683eb71debc3~mv2.jpg/v1/fill/w_940,h_529,fp_0.50_0.50,q_90,enc_auto/2e2a49_a44bb315fe0e4ef4b04c683eb71debc3~mv2.jpg"
                alt=""
              />
              <div className="info m-[20px]">
                <div className="status flex">
                  <p className=" font-normal text-[12px]">
                    6 days ago{" "}
                    <i className="fa fa-gg mx-[10px]" aria-hidden="true" />
                  </p>
                  <p className="font-normal text-[12px]">2 min</p>
                </div>
                <a href="detail">
                  <h1 className="text-[25px] font-bold my-[15px] hover:text-[#956237]">
                    Finding ideas for Your Next Podcast
                  </h1>
                  <p className=" hover:text-[#956237]">
                    Create a blog post subtitle that summarizes your post in a
                    few short, punchy sentences and entices your audience to
                    continue reading.
                  </p>
                </a>
                <hr className="my-[17px] font-bold bg-[black]" />
                <div className="tym flex pb-[25px] justify-between">
                  <div className="cmt flex">
                    <p className="cursor-pointer">
                      <i
                        className="fa fa-comment-o mr-[7px] cursor-pointer"
                        aria-hidden="true"
                      />
                      0
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="footer  bottom-0 bg-[#1F232C] py-[20px] px-[15px]">
  <h1>©2035 by Viet vip pro. Proudly created with Wix.com</h1>
    </div>
      </div>
      <Outlet />
    </div>
  );
};

export default DetailBlog;
