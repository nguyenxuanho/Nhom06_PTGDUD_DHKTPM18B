import {Link} from 'react-router-dom'
import {Button, Form, Image, Input} from 'antd'
import TextArea from 'antd/es/input/TextArea';


const Contact = function(){

  return (
    <>
      <div className="container pt-3 bg-slate-50">
        
          <div className='mx-32 content-header flex items-center'>
              <Link to="/" className="font-medium text-lg text-stone-500 mr-3 header-nav active">Trang chủ</Link>
              <i className="fa-solid fa-chevron-right text-stone-500 mr-3"></i>
              <h3 className="font-medium text-lg text-stone-500 mr-3">Liên hệ</h3>
          </div>
          
          <h3 className='text-center mx-32 uppercase py-4 my-5 font-bold text-5xl'>Liên hệ</h3>
          <div className='mx-32 my-10 gap-5 grid grid-flow-row grid-cols-12'>
             <div className='col-span-4 bg-white rounded-lg shadow-xl p-5'>
                <div className='flex cursor-default items-center my-3'>
                    <i className="mr-3 p-2 border-2 border-black border-solid rounded-full fa-solid fa-location-dot"></i>
                    <h2>260 Lý Thường Kiệt, Phường 14, Quận 10, Hồ Chí Minh</h2>
                </div>
                <div className='flex cursor-default items-center my-3'>
                    <i className="mr-3 p-2 border-2 border-black border-solid rounded-full fa-solid fa-phone"></i>
                    <h2>0968.123.666</h2>
                </div>
                <div className='flex pb-10 border-b-2 border-solid border-stone-300 cursor-default items-center my-3'>
                    <i className="mr-3 p-2 border-2 border-black border-solid rounded-full fa-regular fa-envelope"></i>
                    <h2>hoanghapcws@gmail.com</h2>
                </div>
                <div className='pt-10'>
                    <h2 className='font-bold text-xl'>Liên hệ với chúng tôi</h2>
                    <Form className='mt-5'>
                        <Form.Item name="fullname">
                            <Input className='font-medium text-base py-2' placeholder='Họ và tên' />
                        </Form.Item>
                        <Form.Item name="email">
                            <Input className='font-medium text-base py-2' placeholder='Email' />
                        </Form.Item>
                        <Form.Item name="content">
                            <TextArea className='font-medium text-base py-2 rounded-2xl' placeholder='Nhập nội dung' rows={7} />
                        </Form.Item>
                        <Button htmlType='submit' className='button font-semibold text-base py-5 bg-blue-100 px-10 rounded-xl' >
                            Gửi liên hệ
                        </Button>
                    </Form>
                </div>
             </div>
             <div className='col-span-8'>
                <Image src='./map.png' />
             </div>
          </div>
      </div>
    </> 
  );
}

export default Contact;