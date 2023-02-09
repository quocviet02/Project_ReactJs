import React from "react";
import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { Navigate } from "react-router";
import { IUser } from "../../interfaces/user";
type Props = {};
const Signup = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>();

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IUser> = async (user) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/blogs/signup",
        user
      );
      console.log(data.message);

      // if (data.message === "mật khẩu sai vui lòng nhập lại") {
      //   console.log(data);
      //   return alert("sai");
      // }
      navigate("/");
      console.log(data);
    } catch (error) {}
  };

  return (
    <div>
      <div className="content-contact h-[940px] flex ">
        <div className="content_left  w-[50%]  bg-[#FFFFFF]">
          <h1 className="text-center mt-[140px] text-[40px] font-bold text-[#a39280]">
            Sign Up
          </h1>
          <div className="formSignIn text-center mt-[40px]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="mr-[260px]  font-bold text-[#4A5568]">
                Display name
              </label>
              <br />
              <input
                {...register("username", {required:true, minLength: 14 })}
                type="text"
                className="border-[1px]  mt-[9px] px-[10px] text-[#4A5568] border-pink-300 w-[350px] h-10 rounded md mr-[10px] outline-none"
              />
              <br />
         
              {errors.username && errors.username.type === "required" && (
                <span className=" text-gray-700 text-[14px]  mr-[230px]">
                  *This field is required.
                </span>
              )}
              {errors.username && errors.username.type === "minLength" && (
                <span className=" text-gray-700 text-[14px]  mr-[230px]">
                  *Your user name must have at least 14 characters
                </span>
              )}
              <br />
              <label className="mr-[320px]  font-bold text-[#4A5568]">
                Email
              </label>
              <br />
              <input
                {...register("email", { required: true })}
                type="email"
                className="border-[1px]  mt-[9px] px-[10px] text-[#4A5568] border-pink-300 w-[350px] h-10 rounded md mr-[10px] outline-none"
              />
              <br />
              {errors.email && errors.email.type === "required" && (
                <span className=" text-gray-700 text-[14px]  mr-[230px]">
                  *This field is required.
                </span>
              )}
              <br />
              <div className="mt-[10px]">
                <label className="mr-[290px]  font-bold text-[#4A5568]">
                  Password
                </label>
                <br />
                <input
                  {...register("password", { required: true, minLength: 8 })}
                  type="password"
                  className="border-[1px] mt-[9px] px-[10px] text-[#4A5568]  border-pink-300  w-[350px] h-10 rounded md mr-[10px] outline-none"
                />
                <br />
                {errors.password && errors.password.type === "required" && (
                  <span className=" text-gray-700 text-[14px]  mr-[230px]">
                    *This field is required.
                  </span>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <span className=" text-gray-700 text-[14px]  mr-[70px]">
                    *Your password must have at least 8 characters.
                  </span>
                )}
              </div>

              <br />
              <button
                type="submit"
                className="bg-[red] my-[15px] h-[40px]  text-[white] w-[350px] mr-[9px] p-2 rounded-md text-xs hover:opacity-90"
              >
                Sign up now
              </button>
              <br />
              <button
                type="submit"
                className="bg-[black] h-[40px] text-[white] w-[350px] p-2  mr-[9px]  rounded-md text-xs hover:opacity-90"
              >
                Or sign up with google
              </button>
            </form>
            <p className="font-medium text-center text-base mt-[30px]">
              You already have an account?{" "}
              <Link
                to="/log-in"
                relative="path"
                className=" font-medium text-center text-base text-[#37A9CD] hover:underline"
              >
                Log in
              </Link>{" "}
            </p>
          </div>
          {/* <form action="">
              <label for="">Display name</label>
              <input class=" text-[15px] text-[#FFFFFF]  border-white-500 pl-[10px]  outline-none border hover:drop-shadow-2xl" >
              <label for="">Email</label>
              <input type="email" class=" text-[15px] text-[#FFFFFF]  border-white-500 pl-[10px]  outline-none border hover:bg-[#1F232C] hover:border-b-[3px]" >
              <label for="">Password</label>
              <input  type="password" class=" text-[15px] text-[#FFFFFF]  border-white-500 pl-[10px]  outline-none border hover:bg-[#1F232C] hover:border-b-[3px]">
          </form> */}
        </div>
        <div className="content_right w-[50%] text-[#FFFFFF]">
          <h1 className="text-center mt-[140px] text-[40px] font-bold text-[#FFFFFF] mb-[20px]">
            Available Here Too
          </h1>
          <div className=" textcon font-light text-center text-[20px] leading-[35px]">
            <a href="mailto:nguyenqv2002mt@gmail.com" target="_self">
              nguyenqv2002mt@gmail.com
            </a>
            <p className="mb-[20px]">Tel: 123-456-7890</p>
            <div>
              <i
                className="fa fa-facebook-official mx-[10px]"
                aria-hidden="true"
              />
              <i
                className="fa fa-facebook-official mx-[10px]"
                aria-hidden="true"
              />
              <i
                className="fa fa-facebook-official mx-[10px]"
                aria-hidden="true"
              />
            </div>
            <p className="mt-[20px]">Looking forward to hearing from you.</p>
          </div>
        </div>
      </div>
      <div className="footer  bottom-0 bg-[#1F232C] py-[30px] px-[15px]">
        <h1 className="mx-[40px] text-[white]">
          ©2035 by Viet vip pro. Proudly created with Wix.com
        </h1>
      </div>
      <Outlet />
    </div>
  );
};

export default Signup;
