import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";




const Signup = function () {


    return (
        <>
            <div className="md:pt-3 h-lvh w-full flex items-center justify-center bg-blue-950">
                <div className="max-h-max px-5 bg-blue border-2 border-solid border-blue-300 rounded-2xl shadow-xl mx-2.5 w-420 md:w-600">
                    <div className="relative">
                        <Link className="hover:text-blue-500" to={"/"}>
                            <i className="fa-solid font-bold text-3xl fa-arrow-left absolute left-0 top-1/3"></i>
                        </Link>
                        <div className="flex items-center justify-center py-5 border-b-2 border-solid border-blue-300">
                            <Link to={"/user/login"} className="text-2xl hover:text-gray-500  text-white font-bold uppercase p-3 border-solid border-r-2 border-stone-200">
                                Đăng nhập
                            </Link>
                            <Link to={"/user/signup"} className="text-2xl hover:text-gray-100 text-white font-bold uppercase p-3 border-solid border-l-2 border-stone-100">
                                Đăng ký
                            </Link>
                        </div>
                    </div>
                    <Form className="mt-5">
                        <Form.Item name="fullname">
                            <Input className="text-lg py-2.5 bg-blue-100" placeholder="Nhập họ và tên của bạn" />
                        </Form.Item>
                        <Form.Item name="email">
                            <Input className="text-lg py-2.5 bg-blue-100" placeholder="Nhập email của bạn" />
                        </Form.Item>
                        <Form.Item name="password">
                            <Input.Password className="text-lg py-2.5 bg-blue-100" placeholder="Nhập mật khẩu của bạn" />
                        </Form.Item>
                        <Form.Item name="repassword">
                            <Input.Password className="text-lg py-2.5 bg-blue-100" placeholder="Nhập lại mật khẩu của bạn" />
                        </Form.Item>
                        <Form.Item>
                            <label className="text-white">This site is protected by reCAPTCHA, the Google Privacy Policy, and Terms of Service apply.</label>
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="text-lg py-5 w-full bg-blue-500"
                            >
                                Đăng ký
                            </Button>
                        </Form.Item>
                    </Form>
                    <div className="flex items-center justify-between py-5">
                        <div className="text-white cursor-default">Bạn đã có tài khoản?
                            <Link to={"/user/login"} className="text-white hover:text-gray-500 font-bold"> Đăng nhập ngay</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Signup;