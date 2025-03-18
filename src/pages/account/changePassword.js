import {Link} from 'react-router-dom'
import {Button, Form, Input} from 'antd'
import { useUser } from '../../components/layout/index';
import { toast } from 'react-toastify';
import { patch } from '../../components/utils/request';



const Password = function(){
    const {inforUser} = useUser();
    const layout = {
        labelCol: {
          span: 4,
        },
        wrapperCol: {
          span: 20,
        },
      };

    const handleChangePassword = async (data) => {
        if(data.renew_password === undefined || data.new_password === undefined || data.old_password === undefined){
            toast.error("Không được để trống !!")
            return;
        }

        if (data.renew_password.trim() === "" || data.new_password.trim() === "" || data.old_password.trim() === ""){
            toast.error("Không được để trống !!")
            return;
        }


        if (data.renew_password !== data.new_password){
            toast.error("Mật khẩu mới không khớp !!")
            return;
        }

        const statusUpdatePassword = await patch(`users/password/${inforUser._id}`, data)
        if(statusUpdatePassword.code === 200)
            toast.success("Cập nhật mật khẩu thành công")
        else toast.error(statusUpdatePassword.message)




    }
   
  
  return (
    <>
      <div className="md:pt-3 pt-52 bg-slate-50 dark:bg-slate-900 dark:text-white">
        
          <div className='mx-5 xl:mx-32 content-header flex items-center flex-wrap'>
              <Link to="/" className="font-medium text-lg text-stone-500 dark:text-white mr-3 header-nav active">Trang chủ</Link>
              <i className="fa-solid fa-chevron-right text-stone-500 mr-3"></i>
              <h3 className="font-medium text-lg text-stone-500  dark:text-white mr-3">Account</h3>
          </div>
          <div className='mx-5 xl:mx-32 mt-5 pb-5 grid grid-flow-row grid-cols-12 gap-0 lg:gap-9'>
            <div className='col-span-12 lg:col-span-3'>
                <div className='flex items-center'>
                    <i className='fas fa-user-circle text-5xl text-blue-600'></i>
                    <div className='mx-4'>
                        <h6 className='text-base font-semibold dark:text-white'>Tài khoản của,</h6>
                        <h1 className='font-bold text-lg dark:text-white'>{inforUser?.fullname}</h1>
                    </div>
                </div>
                <ul className='pl-0 my-5'>
                    <Link className='font-medium block my-3 py-3 hover:bg-blue-400 dark:bg-gray-200 hover:text-white px-5 bg-stone-200 rounded-lg text-stone-600' to={"/account/detail"}>
                        <li className='inline-block'>
                            <i className="fa-regular fa-user w-9"></i>
                            <span className='font-medium'>Thông tin tài khoản</span>
                        </li>
                    </Link>
                    <Link className='font-medium block my-3 py-3 hover:bg-blue-400 dark:bg-gray-200 hover:text-white px-5 bg-stone-200 rounded-lg text-stone-600' to={"/account/order"}>
                        <li className='inline-block'>
                            <i className="far fa-list-alt w-9"></i>
                            <span className='font-medium'>Danh sách đơn hàng</span>
                        </li>
                    </Link>
                    <Link className='font-medium block my-3 py-3 hover:bg-blue-400 dark:bg-gray-200 hover:text-white px-5 bg-stone-200 rounded-lg text-stone-600' to={"/account/address"}>
                        <li className='inline-block'>
                            <i className="fa-solid fa-location-dot w-9"></i>
                            <span className='font-medium'>Thêm địa chỉ mới</span>
                        </li>
                    </Link>
                    <Link className='font-medium block my-3 py-3 bg-blue-400 text-white px-5 rounded-lg' to={"/account/password"}>
                        <li className='inline-block'>
                            <i className="fas fa-lock w-9"></i>
                            <span className='font-medium'>Thay đổi mật khẩu</span>
                        </li>
                    </Link>
                    <Link className='font-medium block my-3 py-3 hover:bg-blue-400 dark:bg-gray-200 hover:text-white px-5 bg-stone-200 rounded-lg text-stone-600' to={"/user/login"}>
                        <li className='inline-block'>
                            <i className="fas fa-sign-out-alt w-9"></i>
                            <span className='font-medium'>Đăng xuất</span>
                        </li>
                    </Link>

                </ul>
            </div>
            <div className='col-span-12 lg:col-span-9 p-6 bg-white dark:bg-gray-800 dark:text-white rounded-2xl shadow-xl'>
                <h2 className='text-xl font-bold pb-3 border-solid border-b-2 dark:border-slate-900 border-blue-200'>Thay đổi mật khẩu</h2>
                {inforUser._id && 
                    <Form onFinish={handleChangePassword} {...layout} labelAlign='left' className='my-5'>
                        <Form.Item className='font-bold text-3xl' name="old_password" label={<span className="dark:text-white">Mật khẩu hiện tại</span>}>
                            <Input.Password  className='font-normal py-2 text-base dark:bg-gray-400' placeholder='Nhập mật khẩu hiện tại'/>
                        </Form.Item>
                        <Form.Item className='font-bold text-3xl' name="new_password" label={<span className=" dark:text-white">Mật khẩu mới nhất</span>}>
                            <Input.Password  className='font-normal py-2 text-base dark:bg-gray-400' placeholder='Nhập mật khẩu mới của bạn'/>
                        </Form.Item>
                        <Form.Item className='font-bold text-3xl' name="renew_password" label={<span className="dark:text-white">Nhập lại mật khẩu</span>}>
                            <Input.Password  className='font-normal py-2 text-base dark:bg-gray-400 dark:text-white' placeholder='Nhập lại mật khẩu mới của bạn'/>
                        </Form.Item>
                        <Form.Item labelCol={4} wrapperCol={{offset: 4}} className='text-transparent overflow-hidden'>
                            <Button className='bg-red-500 dark:bg-red-600 w-4/5 lg:w-auto button text-white font-bold p-5' type='default' htmlType='submit'>Thay đổi</Button>
                        </Form.Item>
                    </Form>
                }
            </div>

          </div>
        
      </div>
    </> 
  );
}

export default Password;