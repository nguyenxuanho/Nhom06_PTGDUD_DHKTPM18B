import {Link} from 'react-router-dom'

import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import emailjs from "@emailjs/browser";
import {toast} from 'react-toastify'



const Contact = function(){
  
        const [form] = Form.useForm();
        
        const sendEmail = (values) => {
            const templateParams = {
              name: values.name, 
              email: values.email,
              message: values.message, 
            };
            
          
            emailjs.send(
              "service_9u4fh1a", 
              "template_qs0qt1f", 
              templateParams,
              "nQca_Au1Iq_qqtlO8" 
            )
            .then((response) => {
              console.log("Email sent successfully!", response.status, response.text);
              toast.success("Gửi email thành công!")
              form.resetFields();
            })
            .catch((err) => {
              console.error("Failed to send email:", err);
              toast.error("Gửi email thất bại!")
            });
          };
          
  return (
    <>
      <div className="md:pt-3 pt-52 bg-slate-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        
          <div className='mx-5 xl:mx-32 content-header flex items-center flex-wrap'>
              <Link to="/" className="font-medium text-stone-500 mr-3 text-lg header-nav active">Trang chủ</Link>
              <i className="fa-solid fa-chevron-right text-stone-500 mr-3"></i>
              <h3 className="font-medium text-lg dark:text-white text-stone-400 mr-3">Liên hệ</h3>
          </div>
          
          <h3 className='text-center mx-5 xl:mx-32 uppercase py-4 my-5 font-bold text-gray-900 dark:text-white md:text-3xl'>Liên hệ</h3>
          <div className='mx-5 xl:mx-32 mt-10 pb-10 gap-5 grid grid-flow-row grid-cols-12'>
             <div className='col-span-12 lg:col-span-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-5'>
                <div className='flex cursor-default items-center my-3'>
                    <i className="mr-3 p-2 border-2 border-gray-900 dark:border-white border-solid rounded-full fa-solid fa-location-dot"></i>
                    <h2>260 Lý Thường Kiệt, Phường 14, Quận 10, Hồ Chí Minh</h2>
                </div>
                <div className='flex cursor-default items-center my-3'>
                    <i className="mr-3 p-2 border-2 border-gray-900 dark:border-white border-solid rounded-full fa-solid fa-phone"></i>
                    <h2>0968.123.666</h2>
                </div>
                <div className='flex pb-10 border-b-2 border-solid border-stone-300 dark:border-gray-700 cursor-default items-center my-3'>
                    <i className="mr-3 p-2 border-2 border-gray-900 dark:border-white border-solid rounded-full fa-regular fa-envelope"></i>
                    <h2>hoanghapcws@gmail.com</h2>
                </div>
                <div className='pt-10'>
                    <h2 className='font-bold text-xl'>Liên hệ với chúng tôi</h2>
                    <Form form={form} onFinish={sendEmail}  className='mt-5'>
                        <Form.Item name="name" rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}>
                            <Input className='font-medium text-base py-2 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-300' placeholder='Họ và tên' />
                        </Form.Item>
                        <Form.Item name="email" rules={[{ required: true, message: "Vui lòng nhập email!" }]}>
                            <Input className='font-medium text-base py-2 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-300' placeholder='Email' />
                        </Form.Item>
                        <Form.Item name="message" rules={[{ required: true, message: "Vui lòng nhập nội dung!" }]}>
                            <TextArea className='font-medium text-base py-2 rounded-2xl dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-300' placeholder='Nhập nội dung' rows={7} />
                        </Form.Item>
                        <Button htmlType='submit' className='button font-semibold text-base py-5 dark:text-white bg-blue-100 dark:bg-blue-900 px-10 rounded-xl' >
                            Gửi liên hệ
                        </Button>
                    </Form>
                </div>
             </div>
             <div className="col-span-12 lg:col-span-8">
          <iframe
            title="Google Maps"
            className="w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-lg shadow-lg"
            style={{ minWidth: "100%" }}
            src="https://www.google.com/maps?q=260+Lý+Thường+Kiệt,+Phường+14,+Quận+10,+Hồ+Chí+Minh&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
</div>


          </div>
      </div>
    </> 
  );
}

export default Contact;