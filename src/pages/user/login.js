import { Button, Form, Input } from "antd";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { get, post } from "../../components/utils/request";
import { toast } from "react-toastify";




const Login = function () {
    const navigation = useNavigate();

    useEffect(() => {

        const fetchLogOut = async () => {
            await get("users/logout");
        }

        fetchLogOut();

    }, []);

    const handleLogin = async (data) => {
      
        if(data.email === undefined || data.email.trim() === ""){
            toast.error("Không được để trống")
            return;
        }

        if(data.password === undefined || data.password.trim() === ""){
            toast.error("Không được để trống")
            return;
        }

      
        const statusResgiter = await post("users/login", data);
        if(statusResgiter.code === 200){
            toast.success("Đăng nhập tài khoản thành công !!")
            setTimeout(() => {
                navigation("/")
            }, 2000)
        } else toast.error(statusResgiter.message)
        
    }


    return (
        <>
            <div className="md:pt-3 h-lvh w-full flex items-center justify-center dark:bg-slate-900">
                <div className="max-h-max px-5 bg-blue-500 dark:bg-blue-800 border-2 border-solid border-blue-300 rounded-2xl shadow-xl mx-2.5 w-420 md:w-600">
                    <div className="relative">
                        <Link className="dark:hover:text-gray-500 hover:text-red-500 dark:text-white" to={"/"}>
                            <i className="fa-solid font-bold text-3xl fa-arrow-left absolute left-0 top-1/3"></i>
                        </Link>
                        <div className="flex items-center justify-center py-5 border-b-2 border-solid border-blue-300">
                            <Link to={"/user/login"} className="text-2xl dark:text-blue-500 text-blue-800  font-bold uppercase p-3 border-solid border-r-2 border-stone-200">
                                Đăng nhập
                            </Link>
                            <Link to={"/user/signup"} className="text-2xl dark:hover:text-blue-500 hover:text-blue-800 dark:text-white font-bold uppercase p-3 border-solid border-l-2 border-stone-100">
                                Đăng ký
                            </Link>
                        </div>
                    </div>
                    <Form className="mt-5" onFinish={handleLogin}>
                        <Form.Item name="email">
                            <Input className="text-lg py-2.5 dark:bg-gray-400" placeholder="Nhập địa chỉ email của bạn" />
                        </Form.Item>
                        <Form.Item name="password">
                            <Input.Password className="text-lg py-2.5 dark:bg-gray-400" placeholder="Nhập mật khẩu của bạn" />
                        </Form.Item>
                        <Form.Item>
                            <label className="text-white">This site is protected by reCAPTCHA, the Google Privacy Policy, and Terms of Service apply.</label>
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="text-lg font-semibold hover:!bg-blue-300 py-5 w-full bg-white text-black dark:bg-blue-500"
                            >
                                Đăng nhập
                            </Button>
                        </Form.Item>
                    </Form>
                    <div className="md:flex items-center justify-between py-5">
                        <div className="text-white my-2 md:my-0 cursor-default">Bạn chưa có tài khoản?
                            <Link to={"/user/signup"} className="text-blue-200 hover:text-blue-800 font-bold "> Đăng ký?</Link>
                        </div>
                        <div className="text-white cursor-default">Bạn quên mật khẩu?
                            <Link className="text-blue-200 hover:text-blue-800  font-bold"> Quên mật khẩu?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Login;