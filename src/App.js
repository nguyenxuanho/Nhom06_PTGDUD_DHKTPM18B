import './App.css';
import { ToastContainer, toast, Slide } from 'react-toastify';
import { Button, Carousel, Image } from "antd";
import { useEffect, useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpenCart, setOpenCart] = useState(false);

  useEffect(() => {
    // Xu ly scroll header
    window.addEventListener("scroll", () => {
      const headerFix = document.querySelector(".header-fix")
      const headerTopUL = document.querySelectorAll(".header-top ul li");
      const headerTopText = document.querySelectorAll(".header-top ul li span");
      const headerTopImg = document.querySelector(".header-top .avatar");

      const headerRighth2 = document.querySelectorAll(".header-right h2")
      const headerMiddleH1 = document.querySelector(".header-middle h1")
      const headerMiddleInput = document.querySelector(".header-middle input")



      if(window.scrollY >= (document.body.scrollHeight / 8))
      {
        if(!headerFix.classList.contains("fixed")){
          headerFix.classList.add("fixed");
          headerFix.classList.add("left-0");
          headerFix.classList.add("right-0");
          headerFix.classList.add("top-0");
          headerFix.classList.add("bg-white");
          headerFix.classList.add("shadow-lg");

          headerTopImg.classList.remove("w-24");

          headerTopUL.forEach(ul => ul.classList.add("block-header-fix"))
          headerTopText.forEach(ul => ul.classList.add("text-header-fix"))

          headerRighth2.forEach(ul => ul.classList.add("text-header-fix"))


          headerMiddleH1.classList.add("text-logo-fix");
          headerMiddleInput.classList.add("block-header-fix");
        }
        // "z-50 fixed px-5 pt-2 left-0 right-0 bg-white top-0"
      } else {
        headerFix.classList.remove("fixed");
        headerFix.classList.remove("px-5");
        headerFix.classList.remove("pt-2");
        headerFix.classList.remove("left-0");
        headerFix.classList.remove("right-0");
        headerFix.classList.remove("top-0");
        headerFix.classList.remove("bg-white");
        headerFix.classList.remove("shadow-lg");

        headerTopImg.classList.add("w-24");

        

        headerMiddleH1.classList.remove("text-logo-fix");
        headerMiddleInput.classList.remove("block-header-fix");

        headerTopUL.forEach(ul => ul.classList.remove("block-header-fix"))
        headerTopText.forEach(ul => ul.classList.remove("text-header-fix"))
        headerRighth2.forEach(ul => ul.classList.remove("text-header-fix"))

      }



    });
    // Het xu ly scroll header

  }, []);


  


  const handleChangeFilter = (e) => {
    const boxButton = e.target.closest(".gap-4");
    const listButton = boxButton.querySelectorAll(".button");

    const buttonClick = e.target.closest(".button");


    if(!buttonClick.classList.contains("active")){
      listButton.forEach((button) => button.classList.remove("active"));
        buttonClick.classList.add("active");
    }

    toast.success("Bạn đã click vào nút đó !!")
  }


  return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={4000}
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
            <div className='header-fix z-50 py-2'>
              <div className='header-top flex justify-between items-center'>
                <div className="header-left flex justify-between items-center">
                  <div className="avatar overflow-hidden w-24">
                    <img src={"/logo.svg"} alt="Example" />
                  </div>
                  <ul className="pl-0">
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
                    <div className='mr-7 relative' >
                      <div className='cursor-pointer relative flex items-center justify-center' onClick={() => setOpenCart(!isOpenCart)}>
                        <i className="fa-solid fa-cart-shopping px-3 py-3 bg-blue-100 rounded-full mx-2"></i>
                        <h2 className="text-lg font-normal ml-1">Giỏ hàng</h2>
                        <span 
                          className='flex items-center justify-center absolute -top-2 left-1/4 text-white bg-blue-500 rounded-full p-3 w-5 h-5'>
                            9+
                        </span>
                      </div>
                      {isOpenCart && 
                      <div className='bg-stone-100 shadow-2xl min-h-36 z-50 right-0 rounded-xl absolute top-full' style={{width: "470px"}}>
                          <div className='cart-header py-3 border-solid border-b-2 border-stone-300 
                          uppercase text-center font-normal text-xl'>
                              Giỏ hàng
                          </div>
                          {/* Chưa có sản phẩm trong giỏ hàng !! */}
                          {/* <div className='cart-body flex flex-col items-center py-5'> 
                            <i className="fa-solid fa-cart-shopping text-6xl"></i>
                            <p>Hiện chưa có sản phẩm</p>
                          </div> */}

                          {/* Có sản phẩm trong giỏ hàng */}
                          <div className="cart-product-list cart-body max-h-80 overflow-y-scroll ">
                            <div className='flex items-center border-solid border-2 border-y-stone-200 justify-between py-2 px-3'> 
                              <div className='basis-1/6 h-20'> 
                                <Image src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg" />
                              </div>
                              <div className='basis-5/6 cart-product-content '> 
                                  <div className='flex justify-between'>
                                    <h2 className='font-semibold text-sm line-clamp-2 px-4'>HHPC CORE i7 12700K | 32GB | NVIDIA RTX 3050 6G  </h2>
                                    <i className="fa-solid fa-xmark cursor-pointer hover:text-red-600 relative top-1"></i>
                                  </div>
                                  <div className='flex justify-between pl-4 mt-3 items-center'>
                                    <div className='flex items-center'> 
                                      <Button className='rounded-none px-3'>
                                        <i className="fa-solid fa-minus"></i> 
                                      </Button>
                                      <input htmltype='text' className='bg-white w-8 text-center h-8 border-solid' disabled value={1} />
                                      <Button className='rounded-none px-3'>
                                      <i className="fa-solid fa-plus"></i>
                                      </Button>
                                    </div>
                                    <p className='font-bold'>9,000,000 đ</p>
                                  </div>
                              </div>
                            </div>
                          </div>

                          <div className='cart-footer py-3 border-solid border-t-2 border-stone-300 flex items-center justify-between px-3 font-normal text-base'>
                                <p className='uppercase font-normal'>Tổng tiền:</p>
                                <p className='text-blue-500 font-semibold'>0 đ</p>
                          </div>
                          <Button className='py-5 mb-5 text-white font-medium bg-blue-500 mx-3' style={{width: "95%"}}>XEM GIỎ HÀNG</Button>
                      </div>
                      }
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
              <div className='header-middle mb-3 flex items-center align-middle justify-center'>
                <h1 className='text-4xl font-bold text-blue-500 mx-10'>ARISU GAMING</h1>
                <div className="search w-2/3 relative top-0.5">
                  <input 
                    className="shadow-inner focus:outline-blue-600 text-lg rounded-lg bg-slate-50 border-blue-200 w-full px-5 py-2.5 " 
                    placeholder="Nhập tên sản phẩm cần tìm ..." 
                    onFocus={() => setIsVisible(!isVisible)}
                  />
                    {isVisible && (
                      <div className='rounded-xl shadow-md absolute z-40 min-h-64 max-h-96 w-full bg-slate-50' style={{top: "120%"}}>

                      </div>
                    )}
                  <i className="cursor-pointer z-20 bg-blue-500 flex items-center justify-center w-14 rounded-tr-lg rounded-br-lg h-full fa-solid fa-magnifying-glass absolute top-0 right-0"></i>
                </div>
              </div>
            </div>
            <div className='pb-3 cursor-pointer header-bottom flex items-center align-middle justify-center'>
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
       
        <div className="container pt-3 bg-slate-50">
            <div className='content-header mx-32 grid grid-cols-12 grid-flow-row gap-5'>
              <div className='row-span-3 col-span-3 rounded-lg shadow-lg bg-white'>
                  <ul className='m-0 pl-0 rounded-lg h-full'>
                    <li className='w-full rounded-t-lg cursor-pointer hover:bg-blue-100 hover:text-blue-500 px-6 py-3 flex items-center'>
                      <i className="fa-solid fa-laptop mr-5 text-left text-xl w-1/12"></i>
                      <span className='font-medium'>PC Thiết Kế Đồ Họa 3D</span>
                    </li>
                    <li className='w-full cursor-pointer hover:bg-blue-100 hover:text-blue-500 px-6 py-3 flex items-center'>
                      <i className="fa-solid fa-film mr-5 text-left text-xl w-1/12"></i>
                      <span className='font-medium'>PC Render, Edit Video</span>
                    </li>
                    <li className='w-full cursor-pointer hover:bg-blue-100 hover:text-blue-500 px-6 py-3 flex items-center'>
                      <i className="fa-brands fa-uncharted mr-5 text-left text-xl w-1/12"></i>
                      <span className='font-medium'>Phần mềm bản quyền</span>
                    </li>
                    <li className='w-full cursor-pointer hover:bg-blue-100 hover:text-blue-500 px-6 py-3 flex items-center'>
                      <i className="fa-solid fa-laptop mr-5 text-left text-xl w-1/12"></i>
                      <span className='font-medium'>PC Đẹp</span>
                    </li>

                    <li className='w-full cursor-pointer hover:bg-blue-100 hover:text-blue-500 px-6 py-3 flex items-center'>
                      <i className="fa-solid fa-rocket mr-5 text-left text-xl w-1/12"></i>
                      <span className='font-medium'>PC Gaming</span>
                    </li>

                    <li className='w-full cursor-pointer hover:bg-blue-100 hover:text-blue-500 px-6 py-3 flex items-center'>
                      <i className="fa-solid fa-briefcase mr-5 text-left text-xl w-1/12"></i>
                      <span className='font-medium'>PC Văn Phòng</span>
                    </li>
                    <li className='w-full cursor-pointer hover:bg-blue-100 hover:text-blue-500 px-6 py-3 flex items-center'>
                      <i className="fa-solid fa-desktop mr-5 text-left text-xl w-1/12"></i>
                      <span className='font-medium'>Màn hình máy tính</span>
                    </li>
                    <li className='w-full cursor-pointer hover:bg-blue-100 hover:text-blue-500 px-6 py-3 flex items-center'>
                      <i className="fa-solid fa-robot mr-5 text-left text-xl w-1/12"></i>
                      <span className='font-medium'>Machine Learning / AI</span>
                    </li>

                    <li className='w-full cursor-pointer hover:bg-blue-100 hover:text-blue-500 px-6 py-3 flex items-center'>
                      <i className="fa-solid fa-laptop-code mr-5 text-left text-xl w-1/12"></i>
                      <span className='font-medium'>Laptop Notebook</span>
                    </li>

                    <li className='w-full cursor-pointer hover:bg-blue-100 hover:text-blue-500 px-6 py-3 flex items-center'>
                      <i className="fa-solid fa-gear mr-5 text-left text-xl w-1/12"></i>
                      <span className='font-medium'>Linh kiện máy tính</span>
                    </li>

                    <li className='w-full cursor-pointer hover:bg-blue-100 hover:text-blue-500 px-6 py-3 flex items-center'>
                      <i className="fa-solid fa-fan mr-5 text-left text-xl w-1/12"></i>
                      <span className='font-medium'>Tản nhiệt</span>
                    </li>

                    <li className='w-full cursor-pointer hover:bg-blue-100 hover:text-blue-500 px-6 py-3 flex items-center'>
                      <i className="fa-regular fa-hard-drive mr-5 text-left text-xl w-1/12"></i>
                      <span className='font-medium'>HDD-SSD-NAS</span>
                    </li>
                  
                    <li className='w-full rounded-b-lg cursor-pointer hover:bg-blue-100 hover:text-blue-500 px-6 py-3 flex items-center'>
                      <i className="fa-solid fa-gamepad mr-5 text-left text-xl w-1/12"></i>
                      <span className='font-medium'>Gaming Gear</span>
                    </li>
                    
                  </ul>
              </div>
              <div className='col-span-6 row-span-2'>
                    <Carousel autoplay arrows autoplaySpeed={2500} dots={false}>
                        <Image 
                          src='https://hoanghapccdn.com/media/banner/19_12-396775e024dad81b1084c0dc4ed14390.jpg'
                          preview={false}
                          className='rounded'
                          alt="AnhGiangSinh"
                        />

                        <Image 
                          src='https://hoanghapccdn.com/media/banner/04_11-dca01f31346b48ad8656ccd1ea50432a.jpg'
                          preview={false}
                          className='rounded'
                          alt="AnhGiangSinh"
                        />   

                        <Image 
                          src='https://hoanghapccdn.com/media/banner/30_11-0861730b0853038b309107cc73c47fca.jpg'
                          preview={false}
                          className='rounded'
                          alt="AnhGiangSinh"
                        />   
                     
                        <Image 
                          src='https://hoanghapccdn.com/media/banner/08_08-4c3b1c18af0454d4ede41f9d926b5144.jpg'
                          preview={false}
                          className='rounded'
                          alt="AnhGiangSinh"
                        />    

                        <Image 
                          src='https://hoanghapccdn.com/media/banner/30_11-c9a3ef925ef41a91115da0938bf91b34.jpg'
                          preview={false}
                          className='rounded'
                          alt="AnhGiangSinh"
                        />  
                    </Carousel>
              </div>
              <div className='col-span-3 img-hover relative overflow-hidden cursor-pointer'>
                  <Image 
                    src='https://hoanghapccdn.com/media/banner/10_12-2906c45f5aa9cc1f70200a19dc2a91f0.jpg'
                    preview={false}
                    className='rounded-lg'
                  />
              </div>
              <div className='col-span-3 img-hover relative overflow-hidden cursor-pointer'>
                  <Image 
                    src='https://hoanghapccdn.com/media/banner/10_12-3ac52790a24dbfc2563ca090d5937912.jpg'
                    preview={false}
                    className='rounded-lg'
                  />
              </div>
              <div className='col-span-3 img-hover relative overflow-hidden cursor-pointer'>
                  <Image 
                    src='https://hoanghapccdn.com/media/banner/10_12-e1a62b6fabf446ea5147cb3fe78b3d1a.jpg'
                    preview={false}
                    className='rounded-lg'
                  />
              </div>
              <div className='col-span-3 img-hover relative overflow-hidden cursor-pointer'>
                  <Image 
                    src='https://hoanghapccdn.com/media/banner/10_12-159fb99633969cadb30627ba6ccea31c.jpg'
                    preview={false}
                    className='rounded-lg'
                  />
              </div>
              <div className='col-span-3 img-hover relative overflow-hidden cursor-pointer'>
                  <Image 
                    src='https://hoanghapccdn.com/media/banner/10_12-ba62370217c50916330b44e260fbceba.jpg'
                    preview={false}
                    className='rounded-lg'
                  />
              </div>
              <div className='col-span-3 img-hover relative overflow-hidden cursor-pointer'>
                  <Image 
                    src='https://hoanghapccdn.com/media/banner/10_12-81ab60c0c9a80c6b6dff7bf9fca94ffa.jpg'
                    preview={false}
                    className='rounded-lg'
                  />
              </div>
              <div className='col-span-3 img-hover relative overflow-hidden cursor-pointer'>
                  <Image 
                    src='https://hoanghapccdn.com/media/banner/10_12-eb6e14906117c2b5a8729e7c9c293942.jpg'
                    preview={false}
                    className='rounded-lg'
                  />
              </div>
              <div className='col-span-3 img-hover relative overflow-hidden cursor-pointer'>
                  <Image 
                    src='https://hoanghapccdn.com/media/banner/10_12-77f4accd855186627e29ed36474e6fbb.jpg'
                    preview={false}
                    className='rounded-lg'
                  />
              </div>
              <div className='col-span-3 img-hover relative overflow-hidden cursor-pointer'>
                  <Image 
                    src='https://hoanghapccdn.com/media/banner/10_12-0ac681a53e44b6b59d4a8fdd60f29cb2.jpg'
                    preview={false}
                    className='rounded-lg'
                  />
              </div>


            </div>
            <div className='content-center my-10'>
              <div className='mx-32 flex gap-4 my-16'>
                <div className='basis-1/5'>
                  <Button onClick={handleChangeFilter} className="w-full active button py-7 rounded-3xl text-blue-700 hover:text-white hover:bg-blue-500">
                      <div className='flex-wrap'>
                        <h2 className='uppercase font-bold text-base'>Top PC Bán Chạy</h2>
                        <p className='block font-medium'>Nhất năm 2025</p>
                      </div>
                  </Button>
                </div>
                <div className='basis-1/5'>
                  <Button onClick={handleChangeFilter} className="w-full button py-7 rounded-3xl text-blue-700 hover:text-white hover:bg-blue-500">
                      <div className='flex-wrap'>
                        <h2 className='uppercase font-bold text-base'>Giải nhiệt pc</h2>
                        <p className='block font-medium'>Nâng cao hiệu suất</p>
                      </div>
                  </Button>
                </div>
                <div className='basis-1/5'>
                  <Button onClick={handleChangeFilter} className="w-full button py-7 rounded-3xl text-blue-700 hover:text-white hover:bg-blue-500">
                      <div className='flex-wrap'>
                        <h2 className='uppercase font-bold text-base'>Top PC Cực Khủng</h2>
                        <p className='block font-medium'>Dành cho dân đồ họa</p>
                      </div>
                  </Button>
                </div>
                <div className='basis-1/5'>
                  <Button onClick={handleChangeFilter} className="w-full button py-7 rounded-3xl text-blue-700 hover:text-white hover:bg-blue-500">
                      <div className='flex-wrap'>
                        <h2 className='uppercase font-bold text-base'>màn hình đồ họa</h2>
                        <p className='block font-medium'>Nhiều ưu đãi hấp dẫn</p>
                      </div>
                  </Button>
                </div>
                <div className='basis-1/5'>
                  <Button onClick={handleChangeFilter} className="w-full button py-7 rounded-3xl text-blue-700 hover:text-white hover:bg-blue-500">
                      <div className='flex-wrap'>
                        <h2 className='uppercase font-bold text-base'>Góc thanh lý</h2>
                        <p className='block font-medium'>Xả hàng không lợi nhuận</p>
                      </div>
                  </Button>
                </div>
              </div>
              <Carousel className='mx-32 pb-12 border-none' dots={false} autoplay arrows autoplaySpeed={2000}>
                  <div className='product'>
                    <div className='flex gap-4'>
                        <div className='basis-1/5'>
                           <div className='card rounded-lg bg-white p-3 h-96' > 
                              <div className='card-img hover:-translate-y-2 transition-all'>
                                  <Image 
                                    src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg" 
                                    style={{width: "250px", height:"200px"}}
                                  />
                              </div>
                              <div className='card-content mb-3 text-center'>
                                  <h2 className='font-medium cursor-pointer hover:text-blue-500 text-base line-clamp-2'>
                                    HHPC CORE i7 12700K | 32GB | NVIDIA RTX 3050 6G
                                  </h2>
                                  <h2 className='font-bold cursor-default text-xl my-1 text-blue-400'>
                                    19,000,000 đ
                                  </h2>
                                  <div className='font-medium cursor-default text-xs my-1 '>
                                    <span className='line-through text-slate-400 mr-2'>22,000,000 đ</span>
                                    <span className='text-red-500'>(Tiết kiệm 12%)</span>
                                  </div>
                                
                              </div>  
                              <div className='card-footer flex item-center justify-between'>
                                  <div className='status text-base cursor-default'>
                                      <div className='flex items-center text-green-600'>
                                        <i className="fa-regular fa-circle-check mr-2"></i>
                                        <p>Còn hàng</p>
                                      </div>
                                      <div className='flex items-center'>
                                        <i className="fa-solid fa-gift mr-2"></i>
                                        <p>Quà tặng</p>
                                      </div>
                                  </div>
                                  <div className='text-base cart-icon flex items-center px-6 cursor-pointer hover:text-white'>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                  </div>
                              </div> 
                            </div> 
                        </div>
                        <div className='basis-1/5'>
                           <div className='card rounded-lg bg-white p-3 h-96' > 
                              <div className='card-img hover:-translate-y-2 transition-all'>
                                  <Image 
                                    src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg" 
                                    style={{width: "250px", height:"200px"}}
                                  />
                              </div>
                              <div className='card-content mb-3 text-center'>
                                  <h2 className='font-medium cursor-pointer hover:text-blue-500 text-base line-clamp-2'>
                                    HHPC CORE i7 12700K | 32GB | NVIDIA RTX 3050 6G
                                  </h2>
                                  <h2 className='font-bold cursor-default text-xl my-1 text-blue-400'>
                                    19,000,000 đ
                                  </h2>
                                  <div className='font-medium cursor-default text-xs my-1 '>
                                    <span className='line-through text-slate-400 mr-2'>22,000,000 đ</span>
                                    <span className='text-red-500'>(Tiết kiệm 12%)</span>
                                  </div>
                                
                              </div>  
                              <div className='card-footer flex item-center justify-between'>
                                  <div className='status text-base cursor-default'>
                                      <div className='flex items-center text-green-600'>
                                        <i className="fa-regular fa-circle-check mr-2"></i>
                                        <p>Còn hàng</p>
                                      </div>
                                      <div className='flex items-center'>
                                        <i className="fa-solid fa-gift mr-2"></i>
                                        <p>Quà tặng</p>
                                      </div>
                                  </div>
                                  <div className='text-base cart-icon flex items-center px-6 cursor-pointer hover:text-white'>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                  </div>
                              </div> 
                            </div> 
                        </div>
                        <div className='basis-1/5'>
                           <div className='card rounded-lg bg-white p-3 h-96' > 
                              <div className='card-img hover:-translate-y-2 transition-all'>
                                  <Image 
                                    src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg" 
                                    style={{width: "250px", height:"200px"}}
                                  />
                              </div>
                              <div className='card-content mb-3 text-center'>
                                  <h2 className='font-medium cursor-pointer hover:text-blue-500 text-base line-clamp-2'>
                                    HHPC CORE i7 12700K | 32GB | NVIDIA RTX 3050 6G
                                  </h2>
                                  <h2 className='font-bold cursor-default text-xl my-1 text-blue-400'>
                                    19,000,000 đ
                                  </h2>
                                  <div className='font-medium cursor-default text-xs my-1 '>
                                    <span className='line-through text-slate-400 mr-2'>22,000,000 đ</span>
                                    <span className='text-red-500'>(Tiết kiệm 12%)</span>
                                  </div>
                                
                              </div>  
                              <div className='card-footer flex item-center justify-between'>
                                  <div className='status text-base cursor-default'>
                                      <div className='flex items-center text-green-600'>
                                        <i className="fa-regular fa-circle-check mr-2"></i>
                                        <p>Còn hàng</p>
                                      </div>
                                      <div className='flex items-center'>
                                        <i className="fa-solid fa-gift mr-2"></i>
                                        <p>Quà tặng</p>
                                      </div>
                                  </div>
                                  <div className='text-base cart-icon flex items-center px-6 cursor-pointer hover:text-white'>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                  </div>
                              </div> 
                            </div> 
                        </div>
                        <div className='basis-1/5'>
                           <div className='card rounded-lg bg-white p-3 h-96' > 
                              <div className='card-img hover:-translate-y-2 transition-all'>
                                  <Image 
                                    src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg" 
                                    style={{width: "250px", height:"200px"}}
                                  />
                              </div>
                              <div className='card-content mb-3 text-center'>
                                  <h2 className='font-medium cursor-pointer hover:text-blue-500 text-base line-clamp-2'>
                                    HHPC CORE i7 12700K | 32GB | NVIDIA RTX 3050 6G
                                  </h2>
                                  <h2 className='font-bold cursor-default text-xl my-1 text-blue-400'>
                                    19,000,000 đ
                                  </h2>
                                  <div className='font-medium cursor-default text-xs my-1 '>
                                    <span className='line-through text-slate-400 mr-2'>22,000,000 đ</span>
                                    <span className='text-red-500'>(Tiết kiệm 12%)</span>
                                  </div>
                                
                              </div>  
                              <div className='card-footer flex item-center justify-between'>
                                  <div className='status text-base cursor-default'>
                                      <div className='flex items-center text-green-600'>
                                        <i className="fa-regular fa-circle-check mr-2"></i>
                                        <p>Còn hàng</p>
                                      </div>
                                      <div className='flex items-center'>
                                        <i className="fa-solid fa-gift mr-2"></i>
                                        <p>Quà tặng</p>
                                      </div>
                                  </div>
                                  <div className='text-base cart-icon flex items-center px-6 cursor-pointer hover:text-white'>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                  </div>
                              </div> 
                            </div> 
                        </div>
                        <div className='basis-1/5'>
                           <div className='card rounded-lg bg-white p-3 h-96' > 
                              <div className='card-img hover:-translate-y-2 transition-all'>
                                  <Image 
                                    src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg" 
                                    style={{width: "250px", height:"200px"}}
                                  />
                              </div>
                              <div className='card-content mb-3 text-center'>
                                  <h2 className='font-medium cursor-pointer hover:text-blue-500 text-base line-clamp-2'>
                                    HHPC CORE i7 12700K | 32GB | NVIDIA RTX 3050 6G
                                  </h2>
                                  <h2 className='font-bold cursor-default text-xl my-1 text-blue-400'>
                                    19,000,000 đ
                                  </h2>
                                  <div className='font-medium cursor-default text-xs my-1 '>
                                    <span className='line-through text-slate-400 mr-2'>22,000,000 đ</span>
                                    <span className='text-red-500'>(Tiết kiệm 12%)</span>
                                  </div>
                                
                              </div>  
                              <div className='card-footer flex item-center justify-between'>
                                  <div className='status text-base cursor-default'>
                                      <div className='flex items-center text-green-600'>
                                        <i className="fa-regular fa-circle-check mr-2"></i>
                                        <p>Còn hàng</p>
                                      </div>
                                      <div className='flex items-center'>
                                        <i className="fa-solid fa-gift mr-2"></i>
                                        <p>Quà tặng</p>
                                      </div>
                                  </div>
                                  <div className='text-base cart-icon flex items-center px-6 cursor-pointer hover:text-white'>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                  </div>
                              </div> 
                            </div> 
                        </div>
                    </div>
                  </div>
                  <div className='product'>
                    <div className='flex gap-4'>
                        <div className='basis-1/5'>
                           <div className='card rounded-lg bg-white p-3 h-96' > 
                              <div className='card-img hover:-translate-y-2 transition-all'>
                                  <Image 
                                    src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg" 
                                    style={{width: "250px", height:"200px"}}
                                  />
                              </div>
                              <div className='card-content mb-3 text-center'>
                                  <h2 className='font-medium cursor-pointer hover:text-blue-500 text-base line-clamp-2'>
                                    HHPC CORE i7 12700K | 32GB | NVIDIA RTX 3050 6G
                                  </h2>
                                  <h2 className='font-bold cursor-default text-xl my-1 text-blue-400'>
                                    19,000,000 đ
                                  </h2>
                                  <div className='font-medium cursor-default text-xs my-1 '>
                                    <span className='line-through text-slate-400 mr-2'>22,000,000 đ</span>
                                    <span className='text-red-500'>(Tiết kiệm 12%)</span>
                                  </div>
                                
                              </div>  
                              <div className='card-footer flex item-center justify-between'>
                                  <div className='status text-base cursor-default'>
                                      <div className='flex items-center text-green-600'>
                                        <i className="fa-regular fa-circle-check mr-2"></i>
                                        <p>Còn hàng</p>
                                      </div>
                                      <div className='flex items-center'>
                                        <i className="fa-solid fa-gift mr-2"></i>
                                        <p>Quà tặng</p>
                                      </div>
                                  </div>
                                  <div className='text-base cart-icon flex items-center px-6 cursor-pointer hover:text-white'>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                  </div>
                              </div> 
                            </div> 
                        </div>
                        <div className='basis-1/5'>
                           <div className='card rounded-lg bg-white p-3 h-96' > 
                              <div className='card-img hover:-translate-y-2 transition-all'>
                                  <Image 
                                    src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg" 
                                    style={{width: "250px", height:"200px"}}
                                  />
                              </div>
                              <div className='card-content mb-3 text-center'>
                                  <h2 className='font-medium cursor-pointer hover:text-blue-500 text-base line-clamp-2'>
                                    HHPC CORE i7 12700K | 32GB | NVIDIA RTX 3050 6G
                                  </h2>
                                  <h2 className='font-bold cursor-default text-xl my-1 text-blue-400'>
                                    19,000,000 đ
                                  </h2>
                                  <div className='font-medium cursor-default text-xs my-1 '>
                                    <span className='line-through text-slate-400 mr-2'>22,000,000 đ</span>
                                    <span className='text-red-500'>(Tiết kiệm 12%)</span>
                                  </div>
                                
                              </div>  
                              <div className='card-footer flex item-center justify-between'>
                                  <div className='status text-base cursor-default'>
                                      <div className='flex items-center text-green-600'>
                                        <i className="fa-regular fa-circle-check mr-2"></i>
                                        <p>Còn hàng</p>
                                      </div>
                                      <div className='flex items-center'>
                                        <i className="fa-solid fa-gift mr-2"></i>
                                        <p>Quà tặng</p>
                                      </div>
                                  </div>
                                  <div className='text-base cart-icon flex items-center px-6 cursor-pointer hover:text-white'>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                  </div>
                              </div> 
                            </div> 
                        </div>
                        <div className='basis-1/5'>
                           <div className='card rounded-lg bg-white p-3 h-96' > 
                              <div className='card-img hover:-translate-y-2 transition-all'>
                                  <Image 
                                    src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg" 
                                    style={{width: "250px", height:"200px"}}
                                  />
                              </div>
                              <div className='card-content mb-3 text-center'>
                                  <h2 className='font-medium cursor-pointer hover:text-blue-500 text-base line-clamp-2'>
                                    HHPC CORE i7 12700K | 32GB | NVIDIA RTX 3050 6G
                                  </h2>
                                  <h2 className='font-bold cursor-default text-xl my-1 text-blue-400'>
                                    19,000,000 đ
                                  </h2>
                                  <div className='font-medium cursor-default text-xs my-1 '>
                                    <span className='line-through text-slate-400 mr-2'>22,000,000 đ</span>
                                    <span className='text-red-500'>(Tiết kiệm 12%)</span>
                                  </div>
                                
                              </div>  
                              <div className='card-footer flex item-center justify-between'>
                                  <div className='status text-base cursor-default'>
                                      <div className='flex items-center text-green-600'>
                                        <i className="fa-regular fa-circle-check mr-2"></i>
                                        <p>Còn hàng</p>
                                      </div>
                                      <div className='flex items-center'>
                                        <i className="fa-solid fa-gift mr-2"></i>
                                        <p>Quà tặng</p>
                                      </div>
                                  </div>
                                  <div className='text-base cart-icon flex items-center px-6 cursor-pointer hover:text-white'>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                  </div>
                              </div> 
                            </div> 
                        </div>
                        <div className='basis-1/5'>
                           <div className='card rounded-lg bg-white p-3 h-96' > 
                              <div className='card-img hover:-translate-y-2 transition-all'>
                                  <Image 
                                    src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg" 
                                    style={{width: "250px", height:"200px"}}
                                  />
                              </div>
                              <div className='card-content mb-3 text-center'>
                                  <h2 className='font-medium cursor-pointer hover:text-blue-500 text-base line-clamp-2'>
                                    HHPC CORE i7 12700K | 32GB | NVIDIA RTX 3050 6G
                                  </h2>
                                  <h2 className='font-bold cursor-default text-xl my-1 text-blue-400'>
                                    19,000,000 đ
                                  </h2>
                                  <div className='font-medium cursor-default text-xs my-1 '>
                                    <span className='line-through text-slate-400 mr-2'>22,000,000 đ</span>
                                    <span className='text-red-500'>(Tiết kiệm 12%)</span>
                                  </div>
                                
                              </div>  
                              <div className='card-footer flex item-center justify-between'>
                                  <div className='status text-base cursor-default'>
                                      <div className='flex items-center text-green-600'>
                                        <i className="fa-regular fa-circle-check mr-2"></i>
                                        <p>Còn hàng</p>
                                      </div>
                                      <div className='flex items-center'>
                                        <i className="fa-solid fa-gift mr-2"></i>
                                        <p>Quà tặng</p>
                                      </div>
                                  </div>
                                  <div className='text-base cart-icon flex items-center px-6 cursor-pointer hover:text-white'>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                  </div>
                              </div> 
                            </div> 
                        </div>
                        <div className='basis-1/5'>
                           <div className='card rounded-lg bg-white p-3 h-96' > 
                              <div className='card-img hover:-translate-y-2 transition-all'>
                                  <Image 
                                    src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg" 
                                    style={{width: "250px", height:"200px"}}
                                  />
                              </div>
                              <div className='card-content mb-3 text-center'>
                                  <h2 className='font-medium cursor-pointer hover:text-blue-500 text-base line-clamp-2'>
                                    HHPC CORE i7 12700K | 32GB | NVIDIA RTX 3050 6G
                                  </h2>
                                  <h2 className='font-bold cursor-default text-xl my-1 text-blue-400'>
                                    19,000,000 đ
                                  </h2>
                                  <div className='font-medium cursor-default text-xs my-1 '>
                                    <span className='line-through text-slate-400 mr-2'>22,000,000 đ</span>
                                    <span className='text-red-500'>(Tiết kiệm 12%)</span>
                                  </div>
                                
                              </div>  
                              <div className='card-footer flex item-center justify-between'>
                                  <div className='status text-base cursor-default'>
                                      <div className='flex items-center text-green-600'>
                                        <i className="fa-regular fa-circle-check mr-2"></i>
                                        <p>Còn hàng</p>
                                      </div>
                                      <div className='flex items-center'>
                                        <i className="fa-solid fa-gift mr-2"></i>
                                        <p>Quà tặng</p>
                                      </div>
                                  </div>
                                  <div className='text-base cart-icon flex items-center px-6 cursor-pointer hover:text-white'>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                  </div>
                              </div> 
                            </div> 
                        </div>
                    </div>
                  </div>
              </Carousel>
            </div>
            <div className='box-promotion mx-32 my-10 bg-white py-10 px-7 shadow-lg'>
                <div className='flex items-center justify-between'>
                  <h1 className='text-3xl font-bold text-blue-500'>PC Thiết Kế Đồ Họa 3D</h1>
                  <p className='text-sm font-bold text-slate-500 cursor-pointer'>Xem tất cả</p>
                </div>

                <div className='mt-12 flex gap-12'>
                    <div className='basis-1/5'>
                        <div className='card rounded-lg bg-white h-96' > 
                          <div className='card-img hover:-translate-y-2 transition-all'>
                              <Image 
                                src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg" 
                                style={{width: "250px", height:"200px"}}
                              />
                          </div>
                          <div className='card-content mb-3 text-center'>
                              <h2 className='font-medium cursor-pointer hover:text-blue-500 text-base line-clamp-2'>
                                HHPC CORE i7 12700K | 32GB | NVIDIA RTX 3050 6G
                              </h2>
                              <h2 className='font-bold cursor-default text-xl my-1 text-blue-400'>
                                19,000,000 đ
                              </h2>
                              <div className='font-medium cursor-default text-xs my-1 '>
                                <span className='line-through text-slate-400 mr-2'>22,000,000 đ</span>
                                <span className='text-red-500'>(Tiết kiệm 12%)</span>
                              </div>
                            
                          </div>  
                          <div className='card-footer flex item-center justify-between'>
                              <div className='status text-base cursor-default'>
                                  <div className='flex items-center text-green-600'>
                                    <i className="fa-regular fa-circle-check mr-2"></i>
                                    <p>Còn hàng</p>
                                  </div>
                                  <div className='flex items-center'>
                                    <i className="fa-solid fa-gift mr-2"></i>
                                    <p>Quà tặng</p>
                                  </div>
                              </div>
                              <div className='text-base cart-icon flex items-center px-6 cursor-pointer hover:text-white'>
                                <i className="fa-solid fa-cart-shopping"></i>
                              </div>
                          </div> 
                        </div> 
                    </div>
                    <div className='basis-1/5'>
                        <div className='card rounded-lg bg-white h-96' > 
                          <div className='card-img hover:-translate-y-2 transition-all'>
                              <Image 
                                src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg" 
                                style={{width: "250px", height:"200px"}}
                              />
                          </div>
                          <div className='card-content mb-3 text-center'>
                              <h2 className='font-medium cursor-pointer hover:text-blue-500 text-base line-clamp-2'>
                                HHPC CORE i7 12700K | 32GB | NVIDIA RTX 3050 6G
                              </h2>
                              <h2 className='font-bold cursor-default text-xl my-1 text-blue-400'>
                                19,000,000 đ
                              </h2>
                              <div className='font-medium cursor-default text-xs my-1 '>
                                <span className='line-through text-slate-400 mr-2'>22,000,000 đ</span>
                                <span className='text-red-500'>(Tiết kiệm 12%)</span>
                              </div>
                            
                          </div>  
                          <div className='card-footer flex item-center justify-between'>
                              <div className='status text-base cursor-default'>
                                  <div className='flex items-center text-green-600'>
                                    <i className="fa-regular fa-circle-check mr-2"></i>
                                    <p>Còn hàng</p>
                                  </div>
                                  <div className='flex items-center'>
                                    <i className="fa-solid fa-gift mr-2"></i>
                                    <p>Quà tặng</p>
                                  </div>
                              </div>
                              <div className='text-base cart-icon flex items-center px-6 cursor-pointer hover:text-white'>
                                <i className="fa-solid fa-cart-shopping"></i>
                              </div>
                          </div> 
                        </div> 
                    </div>
                    <div className='basis-1/5'>
                        <div className='card rounded-lg bg-white h-96' > 
                          <div className='card-img hover:-translate-y-2 transition-all'>
                              <Image 
                                src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg" 
                                style={{width: "250px", height:"200px"}}
                              />
                          </div>
                          <div className='card-content mb-3 text-center'>
                              <h2 className='font-medium cursor-pointer hover:text-blue-500 text-base line-clamp-2'>
                                HHPC CORE i7 12700K | 32GB | NVIDIA RTX 3050 6G
                              </h2>
                              <h2 className='font-bold cursor-default text-xl my-1 text-blue-400'>
                                19,000,000 đ
                              </h2>
                              <div className='font-medium cursor-default text-xs my-1 '>
                                <span className='line-through text-slate-400 mr-2'>22,000,000 đ</span>
                                <span className='text-red-500'>(Tiết kiệm 12%)</span>
                              </div>
                            
                          </div>  
                          <div className='card-footer flex item-center justify-between'>
                              <div className='status text-base cursor-default'>
                                  <div className='flex items-center text-green-600'>
                                    <i className="fa-regular fa-circle-check mr-2"></i>
                                    <p>Còn hàng</p>
                                  </div>
                                  <div className='flex items-center'>
                                    <i className="fa-solid fa-gift mr-2"></i>
                                    <p>Quà tặng</p>
                                  </div>
                              </div>
                              <div className='text-base cart-icon flex items-center px-6 cursor-pointer hover:text-white'>
                                <i className="fa-solid fa-cart-shopping"></i>
                              </div>
                          </div> 
                        </div> 
                    </div>
                    <div className='basis-1/5'>
                        <div className='card rounded-lg bg-white h-96' > 
                          <div className='card-img hover:-translate-y-2 transition-all'>
                              <Image 
                                src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg" 
                                style={{width: "250px", height:"200px"}}
                              />
                          </div>
                          <div className='card-content mb-3 text-center'>
                              <h2 className='font-medium cursor-pointer hover:text-blue-500 text-base line-clamp-2'>
                                HHPC CORE i7 12700K | 32GB | NVIDIA RTX 3050 6G
                              </h2>
                              <h2 className='font-bold cursor-default text-xl my-1 text-blue-400'>
                                19,000,000 đ
                              </h2>
                              <div className='font-medium cursor-default text-xs my-1 '>
                                <span className='line-through text-slate-400 mr-2'>22,000,000 đ</span>
                                <span className='text-red-500'>(Tiết kiệm 12%)</span>
                              </div>
                            
                          </div>  
                          <div className='card-footer flex item-center justify-between'>
                              <div className='status text-base cursor-default'>
                                  <div className='flex items-center text-green-600'>
                                    <i className="fa-regular fa-circle-check mr-2"></i>
                                    <p>Còn hàng</p>
                                  </div>
                                  <div className='flex items-center'>
                                    <i className="fa-solid fa-gift mr-2"></i>
                                    <p>Quà tặng</p>
                                  </div>
                              </div>
                              <div className='text-base cart-icon flex items-center px-6 cursor-pointer hover:text-white'>
                                <i className="fa-solid fa-cart-shopping"></i>
                              </div>
                          </div> 
                        </div> 
                    </div>
                    <div className='basis-1/5'>
                        <div className='card rounded-lg bg-white h-96' > 
                          <div className='card-img hover:-translate-y-2 transition-all'>
                              <Image 
                                src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg" 
                                style={{width: "250px", height:"200px"}}
                              />
                          </div>
                          <div className='card-content mb-3 text-center'>
                              <h2 className='font-medium cursor-pointer hover:text-blue-500 text-base line-clamp-2'>
                                HHPC CORE i7 12700K | 32GB | NVIDIA RTX 3050 6G
                              </h2>
                              <h2 className='font-bold cursor-default text-xl my-1 text-blue-400'>
                                19,000,000 đ
                              </h2>
                              <div className='font-medium cursor-default text-xs my-1 '>
                                <span className='line-through text-slate-400 mr-2'>22,000,000 đ</span>
                                <span className='text-red-500'>(Tiết kiệm 12%)</span>
                              </div>
                            
                          </div>  
                          <div className='card-footer flex item-center justify-between'>
                              <div className='status text-base cursor-default'>
                                  <div className='flex items-center text-green-600'>
                                    <i className="fa-regular fa-circle-check mr-2"></i>
                                    <p>Còn hàng</p>
                                  </div>
                                  <div className='flex items-center'>
                                    <i className="fa-solid fa-gift mr-2"></i>
                                    <p>Quà tặng</p>
                                  </div>
                              </div>
                              <div className='text-base cart-icon flex items-center px-6 cursor-pointer hover:text-white'>
                                <i className="fa-solid fa-cart-shopping"></i>
                              </div>
                          </div> 
                        </div> 
                    </div>
                </div>

            </div>
            <div className='box-promotion mx-32 my-10 bg-white py-10 px-7 shadow-lg'>
                <div className='flex items-center justify-between'>
                  <h1 className='text-3xl font-bold text-blue-500'>PC Render, Edit Video</h1>
                  <p className='text-sm font-bold text-slate-500 cursor-pointer'>Xem tất cả</p>
                </div>

                <div className='mt-12 flex gap-12'>
                    <div className='basis-1/5'>
                        <div className='card rounded-lg bg-white h-96' > 
                          <div className='card-img hover:-translate-y-2 transition-all'>
                              <Image 
                                src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg" 
                                style={{width: "250px", height:"200px"}}
                              />
                          </div>
                          <div className='card-content mb-3 text-center'>
                              <h2 className='font-medium cursor-pointer hover:text-blue-500 text-base line-clamp-2'>
                                HHPC CORE i7 12700K | 32GB | NVIDIA RTX 3050 6G
                              </h2>
                              <h2 className='font-bold cursor-default text-xl my-1 text-blue-400'>
                                19,000,000 đ
                              </h2>
                              <div className='font-medium cursor-default text-xs my-1 '>
                                <span className='line-through text-slate-400 mr-2'>22,000,000 đ</span>
                                <span className='text-red-500'>(Tiết kiệm 12%)</span>
                              </div>
                            
                          </div>  
                          <div className='card-footer flex item-center justify-between'>
                              <div className='status text-base cursor-default'>
                                  <div className='flex items-center text-green-600'>
                                    <i className="fa-regular fa-circle-check mr-2"></i>
                                    <p>Còn hàng</p>
                                  </div>
                                  <div className='flex items-center'>
                                    <i className="fa-solid fa-gift mr-2"></i>
                                    <p>Quà tặng</p>
                                  </div>
                              </div>
                              <div className='text-base cart-icon flex items-center px-6 cursor-pointer hover:text-white'>
                                <i className="fa-solid fa-cart-shopping"></i>
                              </div>
                          </div> 
                        </div> 
                    </div>
                    <div className='basis-1/5'>
                        <div className='card rounded-lg bg-white h-96' > 
                          <div className='card-img hover:-translate-y-2 transition-all'>
                              <Image 
                                src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg" 
                                style={{width: "250px", height:"200px"}}
                              />
                          </div>
                          <div className='card-content mb-3 text-center'>
                              <h2 className='font-medium cursor-pointer hover:text-blue-500 text-base line-clamp-2'>
                                HHPC CORE i7 12700K | 32GB | NVIDIA RTX 3050 6G
                              </h2>
                              <h2 className='font-bold cursor-default text-xl my-1 text-blue-400'>
                                19,000,000 đ
                              </h2>
                              <div className='font-medium cursor-default text-xs my-1 '>
                                <span className='line-through text-slate-400 mr-2'>22,000,000 đ</span>
                                <span className='text-red-500'>(Tiết kiệm 12%)</span>
                              </div>
                            
                          </div>  
                          <div className='card-footer flex item-center justify-between'>
                              <div className='status text-base cursor-default'>
                                  <div className='flex items-center text-green-600'>
                                    <i className="fa-regular fa-circle-check mr-2"></i>
                                    <p>Còn hàng</p>
                                  </div>
                                  <div className='flex items-center'>
                                    <i className="fa-solid fa-gift mr-2"></i>
                                    <p>Quà tặng</p>
                                  </div>
                              </div>
                              <div className='text-base cart-icon flex items-center px-6 cursor-pointer hover:text-white'>
                                <i className="fa-solid fa-cart-shopping"></i>
                              </div>
                          </div> 
                        </div> 
                    </div>
                    <div className='basis-1/5'>
                        <div className='card rounded-lg bg-white h-96' > 
                          <div className='card-img hover:-translate-y-2 transition-all'>
                              <Image 
                                src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg" 
                                style={{width: "250px", height:"200px"}}
                              />
                          </div>
                          <div className='card-content mb-3 text-center'>
                              <h2 className='font-medium cursor-pointer hover:text-blue-500 text-base line-clamp-2'>
                                HHPC CORE i7 12700K | 32GB | NVIDIA RTX 3050 6G
                              </h2>
                              <h2 className='font-bold cursor-default text-xl my-1 text-blue-400'>
                                19,000,000 đ
                              </h2>
                              <div className='font-medium cursor-default text-xs my-1 '>
                                <span className='line-through text-slate-400 mr-2'>22,000,000 đ</span>
                                <span className='text-red-500'>(Tiết kiệm 12%)</span>
                              </div>
                            
                          </div>  
                          <div className='card-footer flex item-center justify-between'>
                              <div className='status text-base cursor-default'>
                                  <div className='flex items-center text-green-600'>
                                    <i className="fa-regular fa-circle-check mr-2"></i>
                                    <p>Còn hàng</p>
                                  </div>
                                  <div className='flex items-center'>
                                    <i className="fa-solid fa-gift mr-2"></i>
                                    <p>Quà tặng</p>
                                  </div>
                              </div>
                              <div className='text-base cart-icon flex items-center px-6 cursor-pointer hover:text-white'>
                                <i className="fa-solid fa-cart-shopping"></i>
                              </div>
                          </div> 
                        </div> 
                    </div>
                    <div className='basis-1/5'>
                        <div className='card rounded-lg bg-white h-96' > 
                          <div className='card-img hover:-translate-y-2 transition-all'>
                              <Image 
                                src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg" 
                                style={{width: "250px", height:"200px"}}
                              />
                          </div>
                          <div className='card-content mb-3 text-center'>
                              <h2 className='font-medium cursor-pointer hover:text-blue-500 text-base line-clamp-2'>
                                HHPC CORE i7 12700K | 32GB | NVIDIA RTX 3050 6G
                              </h2>
                              <h2 className='font-bold cursor-default text-xl my-1 text-blue-400'>
                                19,000,000 đ
                              </h2>
                              <div className='font-medium cursor-default text-xs my-1 '>
                                <span className='line-through text-slate-400 mr-2'>22,000,000 đ</span>
                                <span className='text-red-500'>(Tiết kiệm 12%)</span>
                              </div>
                            
                          </div>  
                          <div className='card-footer flex item-center justify-between'>
                              <div className='status text-base cursor-default'>
                                  <div className='flex items-center text-green-600'>
                                    <i className="fa-regular fa-circle-check mr-2"></i>
                                    <p>Còn hàng</p>
                                  </div>
                                  <div className='flex items-center'>
                                    <i className="fa-solid fa-gift mr-2"></i>
                                    <p>Quà tặng</p>
                                  </div>
                              </div>
                              <div className='text-base cart-icon flex items-center px-6 cursor-pointer hover:text-white'>
                                <i className="fa-solid fa-cart-shopping"></i>
                              </div>
                          </div> 
                        </div> 
                    </div>
                    <div className='basis-1/5'>
                        <div className='card rounded-lg bg-white h-96' > 
                          <div className='card-img hover:-translate-y-2 transition-all'>
                              <Image 
                                src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg" 
                                style={{width: "250px", height:"200px"}}
                              />
                          </div>
                          <div className='card-content mb-3 text-center'>
                              <h2 className='font-medium cursor-pointer hover:text-blue-500 text-base line-clamp-2'>
                                HHPC CORE i7 12700K | 32GB | NVIDIA RTX 3050 6G
                              </h2>
                              <h2 className='font-bold cursor-default text-xl my-1 text-blue-400'>
                                19,000,000 đ
                              </h2>
                              <div className='font-medium cursor-default text-xs my-1 '>
                                <span className='line-through text-slate-400 mr-2'>22,000,000 đ</span>
                                <span className='text-red-500'>(Tiết kiệm 12%)</span>
                              </div>
                            
                          </div>  
                          <div className='card-footer flex item-center justify-between'>
                              <div className='status text-base cursor-default'>
                                  <div className='flex items-center text-green-600'>
                                    <i className="fa-regular fa-circle-check mr-2"></i>
                                    <p>Còn hàng</p>
                                  </div>
                                  <div className='flex items-center'>
                                    <i className="fa-solid fa-gift mr-2"></i>
                                    <p>Quà tặng</p>
                                  </div>
                              </div>
                              <div className='text-base cart-icon flex items-center px-6 cursor-pointer hover:text-white'>
                                <i className="fa-solid fa-cart-shopping"></i>
                              </div>
                          </div> 
                        </div> 
                    </div>
                </div>

            </div>

            <div className='box-promotion mx-32 my-10 bg-white py-10 px-7 shadow-lg'>
                <div className='flex items-center justify-between'>
                  <h1 className='text-3xl font-bold text-blue-500'>PC Gaming</h1>
                  <p className='text-sm font-bold text-slate-500 cursor-pointer'>Xem tất cả</p>
                </div>

                <div className='mt-12 flex gap-12'>
                    <div className='basis-1/5'>
                        <div className='card rounded-lg bg-white h-96' > 
                          <div className='card-img hover:-translate-y-2 transition-all'>
                              <Image 
                                src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg" 
                                style={{width: "250px", height:"200px"}}
                              />
                          </div>
                          <div className='card-content mb-3 text-center'>
                              <h2 className='font-medium cursor-pointer hover:text-blue-500 text-base line-clamp-2'>
                                HHPC CORE i7 12700K | 32GB | NVIDIA RTX 3050 6G
                              </h2>
                              <h2 className='font-bold cursor-default text-xl my-1 text-blue-400'>
                                19,000,000 đ
                              </h2>
                              <div className='font-medium cursor-default text-xs my-1 '>
                                <span className='line-through text-slate-400 mr-2'>22,000,000 đ</span>
                                <span className='text-red-500'>(Tiết kiệm 12%)</span>
                              </div>
                            
                          </div>  
                          <div className='card-footer flex item-center justify-between'>
                              <div className='status text-base cursor-default'>
                                  <div className='flex items-center text-green-600'>
                                    <i className="fa-regular fa-circle-check mr-2"></i>
                                    <p>Còn hàng</p>
                                  </div>
                                  <div className='flex items-center'>
                                    <i className="fa-solid fa-gift mr-2"></i>
                                    <p>Quà tặng</p>
                                  </div>
                              </div>
                              <div className='text-base cart-icon flex items-center px-6 cursor-pointer hover:text-white'>
                                <i className="fa-solid fa-cart-shopping"></i>
                              </div>
                          </div> 
                        </div> 
                    </div>
                    <div className='basis-1/5'>
                        <div className='card rounded-lg bg-white h-96' > 
                          <div className='card-img hover:-translate-y-2 transition-all'>
                              <Image 
                                src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg" 
                                style={{width: "250px", height:"200px"}}
                              />
                          </div>
                          <div className='card-content mb-3 text-center'>
                              <h2 className='font-medium cursor-pointer hover:text-blue-500 text-base line-clamp-2'>
                                HHPC CORE i7 12700K | 32GB | NVIDIA RTX 3050 6G
                              </h2>
                              <h2 className='font-bold cursor-default text-xl my-1 text-blue-400'>
                                19,000,000 đ
                              </h2>
                              <div className='font-medium cursor-default text-xs my-1 '>
                                <span className='line-through text-slate-400 mr-2'>22,000,000 đ</span>
                                <span className='text-red-500'>(Tiết kiệm 12%)</span>
                              </div>
                            
                          </div>  
                          <div className='card-footer flex item-center justify-between'>
                              <div className='status text-base cursor-default'>
                                  <div className='flex items-center text-green-600'>
                                    <i className="fa-regular fa-circle-check mr-2"></i>
                                    <p>Còn hàng</p>
                                  </div>
                                  <div className='flex items-center'>
                                    <i className="fa-solid fa-gift mr-2"></i>
                                    <p>Quà tặng</p>
                                  </div>
                              </div>
                              <div className='text-base cart-icon flex items-center px-6 cursor-pointer hover:text-white'>
                                <i className="fa-solid fa-cart-shopping"></i>
                              </div>
                          </div> 
                        </div> 
                    </div>
                    <div className='basis-1/5'>
                        <div className='card rounded-lg bg-white h-96' > 
                          <div className='card-img hover:-translate-y-2 transition-all'>
                              <Image 
                                src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg" 
                                style={{width: "250px", height:"200px"}}
                              />
                          </div>
                          <div className='card-content mb-3 text-center'>
                              <h2 className='font-medium cursor-pointer hover:text-blue-500 text-base line-clamp-2'>
                                HHPC CORE i7 12700K | 32GB | NVIDIA RTX 3050 6G
                              </h2>
                              <h2 className='font-bold cursor-default text-xl my-1 text-blue-400'>
                                19,000,000 đ
                              </h2>
                              <div className='font-medium cursor-default text-xs my-1 '>
                                <span className='line-through text-slate-400 mr-2'>22,000,000 đ</span>
                                <span className='text-red-500'>(Tiết kiệm 12%)</span>
                              </div>
                            
                          </div>  
                          <div className='card-footer flex item-center justify-between'>
                              <div className='status text-base cursor-default'>
                                  <div className='flex items-center text-green-600'>
                                    <i className="fa-regular fa-circle-check mr-2"></i>
                                    <p>Còn hàng</p>
                                  </div>
                                  <div className='flex items-center'>
                                    <i className="fa-solid fa-gift mr-2"></i>
                                    <p>Quà tặng</p>
                                  </div>
                              </div>
                              <div className='text-base cart-icon flex items-center px-6 cursor-pointer hover:text-white'>
                                <i className="fa-solid fa-cart-shopping"></i>
                              </div>
                          </div> 
                        </div> 
                    </div>
                    <div className='basis-1/5'>
                        <div className='card rounded-lg bg-white h-96' > 
                          <div className='card-img hover:-translate-y-2 transition-all'>
                              <Image 
                                src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg" 
                                style={{width: "250px", height:"200px"}}
                              />
                          </div>
                          <div className='card-content mb-3 text-center'>
                              <h2 className='font-medium cursor-pointer hover:text-blue-500 text-base line-clamp-2'>
                                HHPC CORE i7 12700K | 32GB | NVIDIA RTX 3050 6G
                              </h2>
                              <h2 className='font-bold cursor-default text-xl my-1 text-blue-400'>
                                19,000,000 đ
                              </h2>
                              <div className='font-medium cursor-default text-xs my-1 '>
                                <span className='line-through text-slate-400 mr-2'>22,000,000 đ</span>
                                <span className='text-red-500'>(Tiết kiệm 12%)</span>
                              </div>
                            
                          </div>  
                          <div className='card-footer flex item-center justify-between'>
                              <div className='status text-base cursor-default'>
                                  <div className='flex items-center text-green-600'>
                                    <i className="fa-regular fa-circle-check mr-2"></i>
                                    <p>Còn hàng</p>
                                  </div>
                                  <div className='flex items-center'>
                                    <i className="fa-solid fa-gift mr-2"></i>
                                    <p>Quà tặng</p>
                                  </div>
                              </div>
                              <div className='text-base cart-icon flex items-center px-6 cursor-pointer hover:text-white'>
                                <i className="fa-solid fa-cart-shopping"></i>
                              </div>
                          </div> 
                        </div> 
                    </div>
                    <div className='basis-1/5'>
                        <div className='card rounded-lg bg-white h-96' > 
                          <div className='card-img hover:-translate-y-2 transition-all'>
                              <Image 
                                src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg" 
                                style={{width: "250px", height:"200px"}}
                              />
                          </div>
                          <div className='card-content mb-3 text-center'>
                              <h2 className='font-medium cursor-pointer hover:text-blue-500 text-base line-clamp-2'>
                                HHPC CORE i7 12700K | 32GB | NVIDIA RTX 3050 6G
                              </h2>
                              <h2 className='font-bold cursor-default text-xl my-1 text-blue-400'>
                                19,000,000 đ
                              </h2>
                              <div className='font-medium cursor-default text-xs my-1 '>
                                <span className='line-through text-slate-400 mr-2'>22,000,000 đ</span>
                                <span className='text-red-500'>(Tiết kiệm 12%)</span>
                              </div>
                            
                          </div>  
                          <div className='card-footer flex item-center justify-between'>
                              <div className='status text-base cursor-default'>
                                  <div className='flex items-center text-green-600'>
                                    <i className="fa-regular fa-circle-check mr-2"></i>
                                    <p>Còn hàng</p>
                                  </div>
                                  <div className='flex items-center'>
                                    <i className="fa-solid fa-gift mr-2"></i>
                                    <p>Quà tặng</p>
                                  </div>
                              </div>
                              <div className='text-base cart-icon flex items-center px-6 cursor-pointer hover:text-white'>
                                <i className="fa-solid fa-cart-shopping"></i>
                              </div>
                          </div> 
                        </div> 
                    </div>
                </div>
            </div>
            <div className='h-60 background-image flex items-center justify-center font-extrabold text-4xl text-white cursor-default'>
              Khơi nguồn đam mê, chạm đến đỉnh công nghệ! ❣️
            </div>
            <div className='mx-32 my-10 bg-white py-10 px-7 shadow-md'>
                <div className='flex items-center justify-center'>
                  <h1 className='text-2xl font-bold text-blue-500'>HỆ THỐNG SHOWROOM CỦA HOÀNG HÀ PC</h1>
                </div>
                <div className='mt-12 flex gap-3'>
                    <div className='basis-1/4'>
                        <div className='flex justify-between items-center'>
                          <div className='text-6xl px-6 rounded-md py-3 mx-2 bg-blue-200'>1</div>
                          <div className='font-bold text-blue-500'>
                            <h5>Showroom bán hàng</h5>
                            <h2>QUẬN CẦU GIẤY, HÀ NỘI</h2>
                          </div>
                        </div>
                        <h2 className='ml-2 mt-3 mb-5'>41 Khúc Thừa Dụ, Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội</h2>
                        <p className='ml-2 my-3 text-base flex items-center cursor-pointer hover:text-blue-600'>
                          <i className="fa-regular fa-images w-1/6 text-2xl"></i>
                          <span className='w-5/6'>Hình ảnh showroom</span>
                        </p>
                        <p className='ml-2 my-3 text-base flex items-center cursor-pointer hover:text-blue-600'>
                          <i className="fa-solid fa-headphones w-1/6 text-2xl"></i>
                          <span className='w-5/6'>Hotline mua hàng: 0969.123.666</span>
                        </p>
                        <p className='ml-2 my-3 text-base flex items-center cursor-pointer hover:text-blue-600'>
                          <i className="fa-solid fa-phone w-1/6 text-2xl"></i>
                          <span className='w-5/6'>Hotline bảo hành: 19006100</span>
                        </p>
                        <p className='ml-2 my-3 text-base flex items-center cursor-pointer hover:text-blue-600'>
                          <i className="fa-regular fa-envelope w-1/6 text-2xl"></i>
                          <span className='w-5/6'>Email: xuanhodcbas@gmail.com</span>
                        </p>
                        <p className='ml-2 my-3 text-base flex items-center cursor-pointer hover:text-blue-600'>
                          <i className="fa-regular fa-clock w-1/6 text-2xl"></i>
                          <span className='w-5/6'>Thời gian làm việc: 8h00 - 18h30</span>
                        </p>
                    </div>
                    <div className='basis-1/4'>
                        <div className='flex justify-between items-center'>
                          <div className='text-6xl px-6 rounded-md py-3 mx-2 bg-purple-400'>2</div>
                          <div className='font-bold text-blue-500'>
                            <h5>Showroom bán hàng</h5>
                            <h2>QUẬN ĐỐNG ĐA, HÀ NỘI</h2>
                          </div>
                        </div>
                        <h2 className='ml-2 mt-3 mb-5'>94E-94F Đường Láng, Phường Ngã Tư Sở, Quận Đống Đa, Hà Nội</h2>
                        <p className='ml-2 my-3 text-base flex items-center cursor-pointer hover:text-blue-600'>
                          <i className="fa-regular fa-images w-1/6 text-2xl"></i>
                          <span className='w-5/6'>Hình ảnh showroom</span>
                        </p>
                        <p className='ml-2 my-3 text-base flex items-center cursor-pointer hover:text-blue-600'>
                          <i className="fa-solid fa-headphones w-1/6 text-2xl"></i>
                          <span className='w-5/6'>Hotline mua hàng: 0969.123.666</span>
                        </p>
                        <p className='ml-2 my-3 text-base flex items-center cursor-pointer hover:text-blue-600'>
                          <i className="fa-solid fa-phone w-1/6 text-2xl"></i>
                          <span className='w-5/6'>Hotline bảo hành: 19006100</span>
                        </p>
                        <p className='ml-2 my-3 text-base flex items-center cursor-pointer hover:text-blue-600'>
                          <i className="fa-regular fa-envelope w-1/6 text-2xl"></i>
                          <span className='w-5/6'>Email: xuanhodcbas@gmail.com</span>
                        </p>
                        <p className='ml-2 my-3 text-base flex items-center cursor-pointer hover:text-blue-600'>
                          <i className="fa-regular fa-clock w-1/6 text-2xl"></i>
                          <span className='w-5/6'>Thời gian làm việc: 8h00 - 18h30</span>
                        </p>
                    </div>
                    <div className='basis-1/4'>
                        <div className='flex justify-between items-center'>
                          <div className='text-6xl px-6 rounded-md py-3 mx-2 bg-green-300'>3</div>
                          <div className='font-bold text-blue-500 w-2/3'>
                            <h5>Showroom bán hàng</h5>
                            <h2>VINH, NGHỆ AN</h2>
                          </div>
                        </div>
                        <h2 className='ml-2 mt-3 mb-5'>94E-94F, 72 Lê Lợi, Thành Phố Vinh, Nghệ An</h2>
                        <p className='ml-2 my-3 text-base flex items-center cursor-pointer hover:text-blue-600'>
                          <i className="fa-regular fa-images w-1/6 text-2xl"></i>
                          <span className='w-5/6'>Hình ảnh showroom</span>
                        </p>
                        <p className='ml-2 my-3 text-base flex items-center cursor-pointer hover:text-blue-600'>
                          <i className="fa-solid fa-headphones w-1/6 text-2xl"></i>
                          <span className='w-5/6'>Hotline mua hàng: 0969.123.666</span>
                        </p>
                        <p className='ml-2 my-3 text-base flex items-center cursor-pointer hover:text-blue-600'>
                          <i className="fa-solid fa-phone w-1/6 text-2xl"></i>
                          <span className='w-5/6'>Hotline bảo hành: 19006100</span>
                        </p>
                        <p className='ml-2 my-3 text-base flex items-center cursor-pointer hover:text-blue-600'>
                          <i className="fa-regular fa-envelope w-1/6 text-2xl"></i>
                          <span className='w-5/6'>Email: xuanhodcbas@gmail.com</span>
                        </p>
                        <p className='ml-2 my-3 text-base flex items-center cursor-pointer hover:text-blue-600'>
                          <i className="fa-regular fa-clock w-1/6 text-2xl"></i>
                          <span className='w-5/6'>Thời gian làm việc: 8h00 - 18h30</span>
                        </p>
                    </div>
                    <div className='basis-1/4'>
                        <div className='flex justify-between items-center'>
                          <div className='text-6xl px-6 rounded-md py-3 mx-2 bg-red-200'>4</div>
                          <div className='font-bold text-blue-500'>
                            <h5>Showroom bán hàng</h5>
                            <h2>QUẬN 10, HỒ CHÍ MINH</h2>
                          </div>
                        </div>
                        <h2 className='ml-2 mt-3 mb-5'>260 Lý Thường Kiệt, Phường 14, Quận 10, Hồ Chí Minh</h2>
                        <p className='ml-2 my-3 text-base flex items-center cursor-pointer hover:text-blue-600'>
                          <i className="fa-regular fa-images w-1/6 text-2xl"></i>
                          <span className='w-5/6'>Hình ảnh showroom</span>
                        </p>
                        <p className='ml-2 my-3 text-base flex items-center cursor-pointer hover:text-blue-600'>
                          <i className="fa-solid fa-headphones w-1/6 text-2xl"></i>
                          <span className='w-5/6'>Hotline mua hàng: 0969.123.666</span>
                        </p>
                        <p className='ml-2 my-3 text-base flex items-center cursor-pointer hover:text-blue-600'>
                          <i className="fa-solid fa-phone w-1/6 text-2xl"></i>
                          <span className='w-5/6'>Hotline bảo hành: 19006100</span>
                        </p>
                        <p className='ml-2 my-3 text-base flex items-center cursor-pointer hover:text-blue-600'>
                          <i className="fa-regular fa-envelope w-1/6 text-2xl"></i>
                          <span className='w-5/6'>Email: xuanhodcbas@gmail.com</span>
                        </p>
                        <p className='ml-2 my-3 text-base flex items-center cursor-pointer hover:text-blue-600'>
                          <i className="fa-regular fa-clock w-1/6 text-2xl"></i>
                          <span className='w-5/6'>Thời gian làm việc: 8h00 - 18h30</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Container */}




        <footer style={{backgroundColor: "#0062b9"}} className="grid grid-flow-row grid-cols-12 gap-2 pt-9 text-white">
          <div className="col-span-12 px-32 grid grid-flow-row grid-cols-12"> 
            <div className="col-span-6  ">
              <h2 className="font-bold mb-3">Email liên hệ</h2>
              <p className="w-3/4 text-justify">Vui lòng liên hệ phía bên dưới</p>
              <div className="flex items-center mt-3">
                  <input className="px-3 py-2 focus:outline-none text-black w-3/5 rounded-lg" placeholder="Enter your Email" />
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
