
import {Link} from 'react-router-dom'

import {Image} from 'antd'


const About = function(){

   
  
  return (
    <>
      <div className="md:pt-3 pt-52 bg-slate-50">
          <div className='mx-5 xl:mx-32 content-header flex items-center flex-wrap'>
              <Link to="/" className="font-medium text-lg text-stone-500 mr-3 header-nav active">Trang chủ</Link>
              <i className="fa-solid fa-chevron-right text-stone-500 mr-3"></i>
              <h3 className="font-medium text-lg text-stone-500 mr-3">Giới thiệu</h3>
          </div>
          <h1 className='font-bold text-xl md:text-3xl uppercase mx-5 xl:mx-32 my-5 text-center'>Thành viên nhóm</h1>
          <div className='my-5 mx-5 xl:mx-32 grid grid-flow-row grid-cols-2 gap-5'>
            <div className='col-span-2 lg:col-span-1 rounded-xl shadow-xl max-h-max p-2 border-2 border-solid border-blue-200 flex'>
                <div className='w-1/3 overflow-hidden'>
                    <Image src='https://static.wikitide.net/bluearchivewiki/c/c8/Mika.png?version=8b315263cc84ee12eee99c5982f2cec1' />
                </div>
                <div className='w-2/3 px-5'>
                    <h2 className='text-center font-semibold text   -xl md:text-3xl text-blue-600'>Nguyễn Xuân Hồ</h2>
                    <div className='flex my-3 font-medium text-lg items-center'>
                        <p className='w-5/12'>Lớp:</p>
                        <p>DHKTPM18A</p>
                    </div>
                    <div className='flex my-3 font-medium text-lg items-center'>
                        <p className='w-5/12'>MSSV:</p>
                        <p>22655801</p>
                    </div>
                    <div className='flex text-wrap flex-wrap my-3 font-medium text-lg '>
                        <p className='w-5/12'>Thực hiện:</p>
                        <p className='break-words w-7/12'>Blaaaaaacccccccccccccccccaaaaaaaaaaaa</p>
                    </div>
                </div>
            </div>
            <div className='col-span-2 lg:col-span-1 rounded-xl shadow-xl max-h-max p-2 border-2 border-solid border-blue-200 flex'>
                <div className='w-1/3 overflow-hidden'>
                    <Image src='https://static.wikitide.net/bluearchivewiki/0/0f/Arisu.png?version=8fe2ae44d97dabab9a4d147a3bbd158c' />
                </div>
                <div className='w-2/3 px-5'>
                    <h2 className='text-center font-semibold text-xl md:text-3xl text-blue-600'>Nguyễn Thị Mỹ Hoa</h2>
                    <div className='flex my-3 font-medium text-lg items-center'>
                        <p className='w-5/12'>Lớp:</p>
                        <p>DHKTPM18B</p>
                    </div>
                    <div className='flex my-3 font-medium text-lg items-center'>
                        <p className='w-5/12'>MSSV:</p>
                        <p>22643291</p>
                    </div>
                    <div className='flex text-wrap flex-wrap my-3 font-medium text-lg '>
                        <p className='w-5/12'>Thực hiện:</p>
                        <p className='break-words w-7/12'>Blaaaaaacccccccccccccccccaaaaaaaaaaaa</p>
                    </div>
                </div>
            </div>
            <div className='col-span-2 lg:col-span-1 rounded-xl shadow-xl max-h-max p-2 border-2 border-solid border-blue-200 flex'>
                <div className='w-1/3 overflow-hidden'>
                    <Image src='https://static.wikitide.net/bluearchivewiki/thumb/6/63/Shiroko.png/266px-Shiroko.png' />
                </div>
                <div className='w-2/3 px-5'>
                    <h2 className='text-center font-semibold text-xl md:text-3xl text-blue-600'>Huỳnh Lệ Hoan</h2>
                    <div className='flex my-3 font-medium text-lg items-center'>
                        <p className='w-5/12'>Lớp:</p>
                        <p>DHKTPM18A</p>
                    </div>
                    <div className='flex my-3 font-medium text-lg items-center'>
                        <p className='w-5/12'>MSSV:</p>
                        <p>22682941</p>
                    </div>
                    <div className='flex text-wrap flex-wrap my-3 font-medium text-lg '>
                        <p className='w-5/12'>Thực hiện:</p>
                        <p className='break-words w-7/12'>Blaaaaaacccccccccccccccccaaaaaaaaaaaa</p>
                    </div>
                </div>
            </div>
            <div className='col-span-2 lg:col-span-1 rounded-xl shadow-xl max-h-max p-2 border-2 border-solid border-blue-200 flex'>
                <div className='w-1/3 overflow-hidden'>
                    <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw4l6IAS4uknqVu9oQzsEts8dJ5INADCQZrw&s' />
                </div>
                <div className='w-2/3 px-5'>
                    <h2 className='text-center font-semibold text-xl md:text-3xl text-blue-600'>Phạm Minh Hiếu</h2>
                    <div className='flex my-3 font-medium text-lg items-center'>
                        <p className='w-5/12'>Lớp:</p>
                        <p>DHKTPM18B</p>
                    </div>
                    <div className='flex my-3 font-medium text-lg items-center'>
                        <p className='w-5/12'>MSSV:</p>
                        <p>22693491</p>
                    </div>
                    <div className='flex text-wrap flex-wrap my-3 font-medium text-lg '>
                        <p className='w-5/12'>Thực hiện:</p>
                        <p className='break-words w-7/12'>Blaaaaaacccccccccccccccccaaaaaaaaaaaa</p>
                    </div>
                </div>
            </div>
            <div className='col-span-2 lg:col-span-1 rounded-xl shadow-xl max-h-max p-2 border-2 border-solid border-blue-200 flex'>
                <div className='w-1/3 overflow-hidden'>
                    <Image src='https://static.wikitide.net/bluearchivewiki/4/46/Saori.png?version=2adb4373fa7220399b67463ba2102ae0' />
                </div>
                <div className='w-2/3 px-5'>
                    <h2 className='text-center font-semibold text-xl md:text-3xl text-blue-600'>Trần Đình Hoan</h2>
                    <div className='flex my-3 font-medium text-lg items-center'>
                        <p className='w-5/12'>Lớp:</p>
                        <p>DHKTPM18B</p>
                    </div>
                    <div className='flex my-3 font-medium text-lg items-center'>
                        <p className='w-5/12'>MSSV:</p>
                        <p>22003395</p>
                    </div>
                    <div className='flex text-wrap flex-wrap my-3 font-medium text-lg '>
                        <p className='w-5/12'>Thực hiện:</p>
                        <p className='break-words w-7/12'>Blaaaaaacccccccccccccccccaaaaaaaaaaaa</p>
                    </div>
                </div>
            </div>
            
          </div>
          
      </div>
    </> 
  );
}

export default About;