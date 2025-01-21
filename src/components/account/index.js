import {Link} from 'react-router-dom'
import {Button, Form, Input, Select} from 'antd'



const Account = function(){
    const layout = {
        labelCol: {
          span: 4,
        },
        wrapperCol: {
          span: 20,
        },
      };
   
  
  return (
    <>
      <div className="md:pt-3 pt-52 bg-slate-50">
        
          <div className='mx-5 xl:mx-32 content-header flex items-center flex-wrap'>
              <Link to="/" className="font-medium text-lg text-stone-500 mr-3 header-nav active">Trang chủ</Link>
              <i className="fa-solid fa-chevron-right text-stone-500 mr-3"></i>
              <h3 className="font-medium text-lg text-stone-500 mr-3">Account</h3>
          </div>
          <div className='mx-5 xl:mx-32 my-5 grid grid-flow-row grid-cols-12 gap-0 lg:gap-9'>
            <div className='col-span-12 lg:col-span-3'>
                <div className='flex items-center'>
                    <i className='fas fa-user-circle text-5xl text-blue-600'></i>
                    <div className='mx-4'>
                        <h6 className='text-base font-semibold'>Tài khoản của,</h6>
                        <h1 className='font-bold text-lg'>Nguyễn Xuân Hồ</h1>
                    </div>
                </div>
                <ul className='pl-0 my-5'>
                    <Link className='font-medium block my-3 py-3 bg-blue-400 text-white px-5  rounded-lg' to={"/account/detail"}>
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
                    <Link className='font-medium block my-3 py-3 hover:bg-blue-400 hover:text-white px-5 bg-stone-200 rounded-lg text-stone-600' to={"/account/password"}>
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
            <div className='col-span-12 lg:col-span-9 p-6 bg-white rounded-2xl shadow-xl'>
                <h2 className='text-xl font-bold pb-3 border-solid border-b-2 border-blue-200'>Cập nhật thông tin cá nhân</h2>
                <Form  {...layout} labelAlign='left' className='my-5'>
                    <Form.Item className='font-bold text-3xl' name="fullname" label="Họ và tên">
                        <Input className='font-normal py-2 text-base' placeholder='Nhập họ và tên' defaultValue="Nguyễn Xuân Hồ"/>
                    </Form.Item>
                    <Form.Item className='font-bold text-3xl' name="email" label="Địa chỉ email">
                        <Input className='font-normal py-2 text-base' placeholder='Nhập địa chỉ email' defaultValue="xuanhodcbas@gmail.com"/>
                    </Form.Item>
                    <Form.Item className='font-bold text-3xl' name="address" label="Chọn địa chỉ">
                        <Select className='font-normal text-base' placeholder='Chọn địa chỉ' defaultValue={"1"}>
                            <Select.Option value="1">Number 12 Nguyen Van Bao, Ward 4, Go Vap District, Ho Chi Minh City.</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item className='font-bold text-3xl' name="phone" label="Số điện thoại">
                        <Input className='font-normal py-2 text-base' placeholder='Nhập số điện thoại' defaultValue="0987654321"/>
                    </Form.Item>
                    <Form.Item labelCol={4} wrapperCol={{offset: 4}} className='text-transparent overflow-hidden'>
                        <Button className='bg-red-500 w-4/5 lg:w-auto button text-white font-bold p-5' type='default' htmlType='submit'>Thay đổi</Button>
                    </Form.Item>
                </Form>
            </div>

          </div>
        
      </div>
    </> 
  );
}

export default Account;