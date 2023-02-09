import axios from "axios";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IBlog } from "../../../interfaces/blog";
import { useNavigate, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";

const EditBlog = () => {
  const {
    register,// đăng ký
    handleSubmit, //check validate
    reset,
    formState: { errors },
  } = useForm<IBlog>();

  const { id } = useParams();//lấy param trên url
  console.log(useParams());
  
  //get dataOne
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8000/blogs/blog/" + id
        );
        console.log(data.data);
        
        reset(data.data);//đổ dữ liệu ra form
      } catch (error) {}
    })();
  }, []);

  const navigate = useNavigate();


  const onSubmit: SubmitHandler<IBlog> = async (blog) => {
    try {
      const { data } = await axios.put(
        `http://localhost:8000/blogs/blog/${id}`,
        blog
      );
      navigate("/admin");
    } catch (error) {}
  };
  console.log(errors);
  return (
    <div>
    <h1 className="text-gray-700 text-[25px] ml-[40px] font-bold mt-[40px]">EDIT AND UPDATE BLOG</h1>
    <form className="pb-[100px]" onSubmit={handleSubmit(onSubmit)}>
    <div className="w-[500px] " >
<label htmlFor="exampleText0" className="form-label inline-block mb-2 text-gray-700 mt-[30px] ml-[38px]">Title</label>
<input type="text" className="
form-control
block
w-full
px-3
py-1.5
text-base
font-normal
text-gray-700
bg-white bg-clip-padding
border border-solid border-gray-300
rounded
transition
ease-in-out
  ml-[38px]
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
" id="exampleText0" placeholder="title"{...register("title",{required:true,minLength:15})} />
{errors.title && errors.title.type === "required" &&(
  <span className="mb-2 text-gray-700 mt-[30px] ml-[38px]">Chưa nhập trường này</span>
)}
{errors.title && errors.title.type === "minLength"&&(
  <span className="mb-2 text-gray-700 mt-[30px] ml-[38px]">Title phải nhiều hơn 5 ký tự</span>
)}
</div>
<label htmlFor="exampleText0" className="form-label inline-block mb-2 text-gray-700 mt-[30px] ml-[38px]">Content</label>
      <textarea
      className=" form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
     ml-[38px]
      h-[150px]
      w-[499px]
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id=""
        placeholder="Content"{...register("content",{required:true,minLength:60})}
        cols={30}
        rows={10}
      ></textarea>
      {errors.content && errors.content.type ==="required"&&(
        <span className="mb-2 text-gray-700 mt-[30px] ml-[38px]">Chưa nhập</span>
      )}
      {errors.content && errors.content.type ==="minLength"&&(
        <span className="mb-2 text-gray-700 mt-[30px] ml-[38px]">Content phải lớn hơn 60 ký tự</span>
      )}
       <input type="file" className="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100 m-9
      "/>
      <button  className="inline-block px-6 py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out ml-[38px]">Cập nhật Blog</button>
    </form>
    <Outlet/>
  </div>
  );
};
export default EditBlog