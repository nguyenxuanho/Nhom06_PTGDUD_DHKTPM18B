import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";




const Login = function () {


    return (
        <>
            <div className="container h-lvh w-full flex items-center justify-center pt-3 bg-slate-50">
                <div className="max-h-max px-5 bg-white border-2 border-solid border-blue-300 rounded-2xl shadow-xl" style={{ width: "600px" }}>
                    <div className="flex items-center justify-center py-5 border-b-2 border-solid border-blue-300">
                        <Link to={"/user/login"} className="text-2xl hover:text-black text-black font-bold uppercase p-3 border-solid border-r-2 border-stone-200">
                            Đăng nhập
                        </Link>
                        <Link to={"/user/signup"} className="text-2xl hover:text-black text-stone-500 font-bold uppercase p-3 border-solid border-l-2 border-stone-100">
                            Đăng ký
                        </Link>
                    </div>
                    <Form className="mt-5">
                        <Form.Item name="email">
                            <Input className="text-lg py-2.5 bg-blue-100" placeholder="Nhập địa chỉ email của bạn" />
                        </Form.Item>
                        <Form.Item name="password">
                            <Input.Password className="text-lg py-2.5 bg-blue-100" placeholder="Nhập mật khẩu của bạn" />
                        </Form.Item>
                        <Form.Item>
                            <label className="text-stone-500">This site is protected by reCAPTCHA, the Google Privacy Policy, and Terms of Service apply.</label>
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="text-lg py-5 w-full bg-blue-500"
                            >
                                Đăng nhập
                            </Button>
                        </Form.Item>
                    </Form>
                    <div className="flex items-center justify-between py-5">
                        <div className="text-stone-500 cursor-default">Bạn chưa có tài khoản? 
                            <Link to={"/user/signup"} className="text-blue-500 font-bold"> Đăng ký?</Link>
                        </div>
                        <div className="text-stone-500 cursor-default">Bạn quên mật khẩu?
                            <Link className="text-blue-500 font-bold"> Quên mật khẩu?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Login;