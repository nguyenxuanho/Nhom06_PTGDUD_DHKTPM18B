import {Link} from 'react-router-dom'
import {Button, Form, Input} from 'antd'



const Password = function(){
    const layout = {
        labelCol: {
          span: 4,
        },
        wrapperCol: {
          span: 20,
        },
      };

    const handleChangePassword = (e) => {
        console.log(e)
    }
   
  
  return (
    <>
      <div className="container pt-3 bg-slate-50">
        
          <div className='mx-32 content-header flex items-center'>
              <Link to="/" className="font-medium text-lg text-stone-500 mr-3 header-nav active">Trang chủ</Link>
              <i className="fa-solid fa-chevron-right text-stone-500 mr-3"></i>
              <h3 className="font-medium text-lg text-stone-500 mr-3">Account</h3>
          </div>
          <div className='mx-32 my-5 grid grid-flow-row grid-cols-12 gap-9'>
            <div className='col-span-3'>
                <div className='flex items-center'>
                    <i className='fas fa-user-circle text-5xl text-blue-600'></i>
                    <div className='mx-4'>
                        <h6 className='text-base font-semibold'>Tài khoản của,</h6>
                        <h1 className='font-bold text-lg'>Nguyễn Xuân Hồ</h1>
                    </div>
                </div>
                <ul className='pl-0 my-5'>
                    <Link className='font-medium block my-3 py-3 hover:bg-blue-400 hover:text-white px-5 bg-stone-200 rounded-lg text-stone-600' to={"/account/detail"}>
                        <li className='inline-block'>
                            <i className="fa-regular fa-user w-9"></i>
                            <span className='font-medium'>Thông tin tài khoản</span>
                        </li>
                    </Link>
                    <Link className='font-medium block my-3 py-3 hover:bg-blue-400 hover:text-white px-5 bg-stone-200 rounded-lg text-stone-600' to={"/account/order"}>
                        <li className='inline-block'>
                            <i className="far fa-list-alt w-9"></i>
                            <span className='font-medium'>Danh sách đơn hàng</span>
                        </li>
                    </Link>
                    <Link className='font-medium block my-3 py-3 hover:bg-blue-400 hover:text-white px-5 bg-stone-200 rounded-lg text-stone-600' to={"/account/address"}>
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
                    <Link className='font-medium block my-3 py-3 hover:bg-blue-400 hover:text-white px-5 bg-stone-200 rounded-lg text-stone-600' to={"#"}>
                        <li className='inline-block'>
                            <i className="fas fa-sign-out-alt w-9"></i>
                            <span className='font-medium'>Đăng xuất</span>
                        </li>
                    </Link>

                </ul>
            </div>
            <div className='col-span-9 p-6 bg-white rounded-2xl shadow-xl'>
                <h2 className='text-xl font-bold pb-3 border-solid border-b-2 border-blue-200'>Thay đổi mật khẩu</h2>
                <Form onFinish={handleChangePassword} {...layout} labelAlign='left' className='my-5'>
                    <Form.Item className='font-bold text-3xl' name="old-password" label="Mật khẩu hiện tại">
                        <Input.Password  className='font-normal py-2 text-base' placeholder='Nhập mật khẩu hiện tại'/>
                    </Form.Item>
                    <Form.Item className='font-bold text-3xl' name="new-password" label="Mật khẩu mới nhất">
                        <Input.Password  className='font-normal py-2 text-base' placeholder='Nhập mật khẩu mới của bạn'/>
                    </Form.Item>
                    <Form.Item className='font-bold text-3xl' name="renew-password" label="Nhập lại mật khẩu">
                        <Input.Password  className='font-normal py-2 text-base' placeholder='Nhập lại mật khẩu mới của bạn'/>
                    </Form.Item>
                    <Form.Item labelCol={4} wrapperCol={{span: 8, offset: 4}} className='text-transparent'>
                        <Button className='bg-red-500 button text-white font-bold p-5' type='default' htmlType='submit'>Thay đổi</Button>
                    </Form.Item>
                </Form>
            </div>

          </div>
        
      </div>
    </> 
  );
}

export default Password;