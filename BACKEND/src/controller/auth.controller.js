import User from "../models/user";
import bcrypt from 'bcrypt';

export const signup = async (req, res) => { //đăng ký
    try {
        const body = req.body;
        const existUser = await User.findOne({ email: body.email });

        if (existUser) {
            return res.status(200).json({
                message: "Email đã tồn tại",
            });
        }
        const passwordVerify = bcrypt.hashSync(req.body.password, 10) //mã hóa
        const data = await User({...req.body,password:passwordVerify}).save()
        return res.status(200).json({
            data: data,
        });
    } catch (error) {
      
    }
};

export const signin = async (req, res) => { //đăng nhập
    try {
        const body = req.body;
        const user = await User.findOne({ email: body.email });
        // check email ton tai
        if (!user) {
            return res.status(200).json({
                message: "Email không tồn tại",
            });
        }
     
        // check mat khau
        const comparePassword = bcrypt.compareSync(req.body.password,user.password) //so sánh req.body.password với user.password trong db
        if (!comparePassword) {
            return res.status(200).json({
                message:'mật khẩu sai vui lòng nhập lại'
            })
        }else{
            res.json({user}) 
        }
        

       

        // check mat khau
    } catch (error) {}
};