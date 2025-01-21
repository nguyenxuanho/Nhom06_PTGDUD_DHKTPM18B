
import {Link} from 'react-router-dom'

import {Button, Form, Input, Select} from 'antd'
import TextArea from 'antd/es/input/TextArea'
import CartProduct from '../cart_product'



const Cart = function(){

    const handlePlaceOrder = (e) => {
        console.log(e)
    }

    const selectAddress = (e) => {
        console.log(e)
    }
   
  
  return (
    <>
      <div className="md:pt-3 pt-52 bg-slate-50">
        
          <div className='mx-5 xl:mx-32 content-header flex items-center flex-wrap'>
              <Link to="/" className="font-medium text-lg text-stone-500 mr-3 header-nav active">Trang chủ</Link>
              <i className="fa-solid fa-chevron-right text-stone-500 mr-3"></i>
              <h3 className="font-medium text-lg text-stone-500 mr-3">Thông tin giỏ hàng</h3>
          </div>
          <h1 className='mx-5 xl:mx-32 py-2 border-b-blue-400 border-solid border-b-2 md:w-2/3 xl:w-1/3 font-bold text-xl lg:text-3xl uppercase text-blue-500'>Giỏ hàng của tôi
            <span className='ml-2 text-sm border-none text-stone-400 lowercase font-medium'>(1 sản phẩm)</span>
          </h1>
          <div className='mx-5 xl:mx-32 my-5 content-body grid grid-flow-row grid-cols-12 gap-8 '>
            <div className='col-span-12 lg:col-span-7 max-h-max bg-white shadow-lg rounded-lg'>
                <div className='cart-list-product overflow-y-scroll' style={{maxHeight: "550px"}}>
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                </div>
                <div className='subtotal border-solid border-2 border-stone-100 p-4 flex items-center justify-between'>
                    <h2 className='font-bold text-stone-500'>Tổng giá trị đơn hàng: </h2>
                    <p className='font-bold text-blue-500 text-lg md:text-2xl'>49.050.000 đ</p>
                </div>
            </div>
            <div className='col-span-12 lg:col-span-5 py-3 px-5 border-solid border-2 rounded-lg shadow-xl border-blue-500'>
                <h2 className='font-bold text-xl text-blue-500'>Thông tin thanh toán</h2>
                <p className='my-5 font-medium text-base text-stone-500'>
                    Để tiếp tục đặt hàng, quý khách xin vui lòng 
                    <Link to={"#"} className='text-blue-500 font-bold'> đăng nhập </Link>
                     hoặc nhập thông tin bên dưới
                </p>
                <Form onFinish={handlePlaceOrder}>
                    <Form.Item name='fullname'>
                        <Input name='fullname' className='text-base py-2 font-medium' placeholder='Nhập họ và tên'/>
                    </Form.Item>
                    <Form.Item name='phone'>
                        <Input name='phone' className='text-base py-2 font-medium' placeholder='Nhập số điện thoại'/>
                    </Form.Item>
                    <Form.Item name='email'>
                        <Input name='email' className='text-base py-2 font-medium' placeholder='Nhập email'/>
                    </Form.Item>
                    <Select onChange={selectAddress} className='mb-5 w-full h-10 font-bold text-lg' placeholder="Chọn địa chỉ có sẵn" >
                        <Select.Option value=''>Phía dưới</Select.Option>
                        <Select.Option value='123'>123</Select.Option>
                        <Select.Option value='321'>321</Select.Option>
                    </Select>
                    <Form.Item name='address'>
                        <Input name='address' className='text-base py-2 font-medium' placeholder='Nhập địa chỉ'/>
                    </Form.Item>
                    <Form.Item name='note'>
                        <TextArea name='note' rows={7} className='text-base font-medium' placeholder='Ghi chú'/>
                    </Form.Item>
                    <Button type='primary' htmlType='submit' className='h-24 block text-center w-full'>
                        <h2 className='font-bold uppercase text-2xl'>Đặt hàng</h2>
                        <div className='text-sm '>Tư vấn viên sẽ gọi điện thoại để xác nhận</div>
                    </Button>
                </Form>
            </div>
          </div>
      </div>
    </> 
  );
}

export default Cart;