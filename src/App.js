import './App.css';
import { ToastContainer, toast, Slide } from 'react-toastify';
import { Image } from "antd";


function App() {
  return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={6500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Slide}
        />


        <header className="bg-white container border-b-gray-200 border-solid border-b-2">
            <div className='z-50 fixed px-5 pt-2 left-0 right-0 bg-white top-0 '>
              <div className='header-top flex justify-between items-center'>
                <div className="header-left flex justify-between items-center">
                  <img className="avatar size-16" src={"/logo.svg"} alt="Example" />
                  <ul className="pl-0 px-8">
                      <li className="text-center inline-block px-3 py-3 hover:text-blue-500 cursor-pointer text-gray-700">
                        <i className="fa-solid fa-house mx-3"></i>
                        <span className='relative top-0.5 text-xl font-semibold'>Trang chủ</span>
                      </li>
                      <li className="text-center inline-block px-3 py-3 hover:text-blue-500 cursor-pointer text-gray-700">
                        <i className="fa-solid fa-users mx-3"></i>
                        <span className='relative top-0.5 text-xl font-semibold'>Giới thiệu</span>
                      </li>
                      <li className="text-center inline-block px-3 py-3 hover:text-blue-500 cursor-pointer text-gray-700">
                        <i className="fa-solid fa-phone mx-3"></i>
                        <span className='relative top-0.5 text-xl font-semibold'>Liên lạc</span>
                      </li>
                      <li className="text-center inline-block px-3 py-3 hover:text-blue-500 cursor-pointer text-gray-700">
                        <i className="fa-solid fa-street-view mx-3"></i>
                        <span className='relative top-0.5 text-xl font-semibold'>Sitemap</span>
                      </li>
                    </ul>
                </div>
                <div className="header-right flex items-center"> 
                    <div className="cursor-pointer flex items-center justify-center mx-9 px-4 rounded-xl py-3 bg-blue-100">
                      <i className="fa-solid fa-box relative top-0.5 text-blue-500"></i>
                      <h2 className="text-base px-3 text-blue-500 font-semibold">Danh sách đơn hàng</h2>
                    </div>
                    <div className='cursor-pointer flex items-center justify-center mr-7 relative'>
                      <i className="fa-solid fa-cart-shopping px-3 py-3 bg-blue-100 rounded-full mx-2"></i>
                      <h2 className="text-lg font-normal ml-1">Giỏ hàng</h2>
                      <span 
                        className='flex items-center justify-center absolute -top-2 left-1/4 text-white bg-blue-500 rounded-full p-3 w-5 h-5'>
                          9+
                      </span>
                    </div>
                    <div className="flex items-center justify-center cursor-pointer">
                      <img className="avatar size-14 rounded-full" src={"/avatar.png"} alt="Example" />
                      <div className='user mx-5'>  
                        <h2 className='text-sm font-normal'>Xin chào</h2>
                        <h2 className="text-xl font-bold">Nguyễn Xuân Hồ</h2>
                      </div>
                    </div>
                </div>
              </div>
              <div className='header-middle  my-5 flex items-center align-middle justify-center'>
                <h1 className='text-4xl font-bold text-blue-500 mx-10'>ARISU GAMING</h1>
                <div className="search w-2/3 relative top-0.5">
                  <input className="shadow-inner text-lg rounded-lg bg-slate-50 border-blue-200 w-full px-5 py-2.5 " placeholder="Nhập tên sản phẩm cần tìm ..." />
                  <i className="cursor-pointer z-20 bg-blue-500 flex items-center justify-center w-14 rounded-tr-lg rounded-br-lg h-full fa-solid fa-magnifying-glass absolute top-0 right-0"></i>
                </div>
              </div>
            </div>
            <div className='pt-48 pb-3 cursor-pointer header-bottom flex items-center align-middle justify-center'>
              <div className="flex items-center mx-2 justify-center py-3 rounded-xl text-white px-5 bg-blue-500">
                <i className="fa-solid fa-bars text-xl relative top-0.5"></i>
                <h2 className="text-base font-bold ml-5">Danh mục sản phẩm</h2>
              </div>
              <div className="cursor-pointer flex items-center mx-2 justify-center py-3 rounded-xl hover:text-white px-5 hover:bg-blue-500">
                <i className=" fa-regular fa-paste text-xl relative top-0.5"></i>
                <h2 className="text-base font-semibold ml-3">Chính sách bảo hành</h2>
              </div>
              <div className="cursor-pointer flex items-center mx-2 justify-center py-3 rounded-xl hover:text-white px-5 hover:bg-blue-500">
                <i className=" fa-solid fa-arrow-rotate-left text-xl relative top-0.5"></i>
                <h2 className="text-base font-semibold ml-3">Chính sách đổi trả</h2>
              </div>
              <div className="cursor-pointer flex items-center mx-2 justify-center py-3 rounded-xl hover:text-white px-5 hover:bg-blue-500">
                <i className="fa-solid fa-truck-fast text-xl relative top-0.5"></i>
                <h2 className="text-base font-semibold ml-3">Chính sách giao hàng</h2>
              </div>
              <div className="cursor-pointer flex items-center mx-2 justify-center py-3 rounded-xl hover:text-white px-5 hover:bg-blue-500">
                <i className="fa-solid fa-hand-holding-dollar text-xl relative top-0.5"></i>
                <h2 className="text-base font-semibold ml-3">Thanh toán và trả góp</h2>
              </div>
              
            </div>
        </header>


        {/* Container */}
       
        <div className="container">
          <div className='h-48 flex items-center justify-center text-4xl font-bold'>Content</div>
          <div className="flex justify-center items-center h-96 bg-blue-500">
            <div className="text-white text-center">
              <h2 className="text-5xl font-bold">What to cook this week?</h2>
              <p className="text-2xl">Discover our delicious recipes and cook like a pro</p>
              <div className="flex justify-center items-center">
                <button onClick={() => toast("Default nha mấy cha", 
                  {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                    transition: Slide,
                  }
                )} className="bg-white px-6 py-2 rounded-lg text-black font-bold mt-5">Default</button>
                <button onClick={() => toast.error("Thông báo lỗi")} className="bg-white px-6 py-2 rounded-lg text-red-500 font-bold mt-5 ml-5">Error</button>
                <button onClick={() => toast.success("Thông báo thành công")} className="bg-white px-6 py-2 rounded-lg text-green-500 font-bold mt-5 ml-5">Success</button>
                <button onClick={() => toast.info("Thông báo thông tin")} className="bg-white px-6 py-2 rounded-lg text-blue-500 font-bold mt-5 ml-5">Info</button>
                <button onClick={() => toast.warning("Thông báo cảnh báo")} className="bg-white px-6 py-2 rounded-lg text-yellow-500 font-bold mt-5 ml-5">Warning</button>
              </div>
            </div>
          </div>
          <div className='h-48 flex items-center justify-center text-4xl font-bold'>Content</div>
        </div>

        {/* Container */}




        <footer style={{backgroundColor: "#0062b9"}} className="grid grid-flow-row grid-cols-12 gap-2 pt-9 text-white">
          <div className="col-span-12 px-32 grid grid-flow-row grid-cols-12"> 
            <div className="col-span-6  ">
              <h2 className="font-bold mb-3">Email liên hệ</h2>
              <p className="w-3/4 text-justify">Vui lòng liên hệ phía bên dưới</p>
              <div className="flex items-center mt-3">
                  <input className="px-3 py-2 w-3/5 rounded-lg" placeholder="Enter your Email" />
                  <button className="bg-sky-500 mx-2 font-semibold px-3 py-2 rounded-md">Send</button>
              </div> 
            </div>
            <div className='col-span-2 '>
              <h2 className='font-semibold mb-3'>Hợp Tác Phát Triển:</h2>
              <p className='font-bold cursor-pointer text-sky-300'>xuanhodcbas@gmail.com</p>
            </div>
            <div className='col-span-2 '>
              <h2 className='font-semibold mb-3'>Liên Hệ Báo Giá:</h2>
              <p className='font-bold cursor-pointer text-sky-300'>xuanhodcbas@gmail.com</p>
            </div>
            <div className='col-span-2 '>
              <h2 className='font-semibold mb-3'>Hỗ Trợ Bảo Hành:</h2>
              <p className='font-bold cursor-pointer text-sky-300'>xuanhodcbas@gmail.com</p>
            </div>
            <div className='col-span-3 '>
              <h2 className='font-bold text-xl mt-10'>Hỗ trợ khách hàng</h2>
              <p className='font-bold border-solid w-3/5 border-white my-3 border-2'></p>
              <div className='font-medium hover:text-sky-300 my-2 cursor-pointer text-base'>Hướng dẫn mua hàng Online</div>
              <div className='font-medium hover:text-sky-300 my-2 cursor-pointer text-base'>Hướng dẫn thanh toán</div>
              <div className='font-medium hover:text-sky-300 my-2 cursor-pointer text-base'>Hướng dẫn mua trả góp</div>
            </div>
            <div className='col-span-3 '>
              <h2 className='font-bold text-xl mt-10'>Thông tin Hoàng Hà PC</h2>
              <p className='font-bold border-solid w-3/5 border-white my-3 border-2'></p>
              <div className='font-medium hover:text-sky-300 my-2 cursor-pointer text-base'>Giới thiệu Hoàng Hà PC</div>
              <div className='font-medium hover:text-sky-300 my-2 cursor-pointer text-base'>Hệ thống showroom</div>
              <div className='font-medium hover:text-sky-300 my-2 cursor-pointer text-base'>Thông tin liên hệ</div>
              <div className='font-medium hover:text-sky-300 my-2 cursor-pointer text-base'>Tuyển dụng</div>
              <div className='font-medium hover:text-sky-300 my-2 cursor-pointer text-base'>Tin tức</div>
            </div>
            <div className='col-span-3 '>
              <h2 className='font-bold text-xl mt-10'>Cộng đồng Hoàng Hà PC</h2>
              <p className='font-bold border-solid w-3/5 border-white my-3 border-2'></p>
              <div className='font-medium hover:text-sky-300 my-2 cursor-pointer text-base'>Hoàng Hà PC Fanpage</div>
              <div className='font-medium hover:text-sky-300 my-2 cursor-pointer text-base'>Hoàng Hà PC Group</div>
              <div className='font-medium hover:text-sky-300 my-2 cursor-pointer text-base'>Hoàng Hà PC Tik Tok</div>
              <div className='font-medium hover:text-sky-300 my-2 cursor-pointer text-base'>Hoàng Hà Media</div>

            </div>
            <div className='col-span-3 '>
              <h2 className='font-bold text-xl mt-10'>Chính sách mua và bảo hành</h2>
              <p className='font-bold border-solid w-3/5 border-white my-3 border-2'></p>
              <div className='font-medium hover:text-sky-300 my-2 cursor-pointer text-base'>Chính sách bảo hành</div>
              <div className='font-medium hover:text-sky-300 my-2 cursor-pointer text-base'>Chính sách bảo mật</div>
              <div className='font-medium hover:text-sky-300 my-2 cursor-pointer text-base'>Chính sách vận chuyển, giao nhận</div>
            </div>
          </div>
          <div className='col-span-12 mt-10 px-32 py-9 flex items-center justify-between' style={{backgroundColor: "#005098"}}>
            <div className='w-3/4 font-bold'>
              <h2>CÔNG TY TNHH DỊCH VỤ VÀ CÔNG NGHỆ HOÀNG HÀ ©</h2>
              <p className='my-4 font-medium'>2008 - 2020 - Công ty TNHH Dịch Vụ Và Công Nghệ Hoàng Hà / GPKD số: 0107406972 Do Sở Kế Hoạch Và Đầu Tư Thành Phố Hà Nội Cấp
              Bản Quyền Thuộc Về hoanghapc.vn</p>
            </div>

            <Image preview={false} width={250} src="https://hoanghapc.vn/static/assets/2022/images/bct.png" alt="logo" />
          </div>


        </footer>

      </> 
  );
}

export default App;
