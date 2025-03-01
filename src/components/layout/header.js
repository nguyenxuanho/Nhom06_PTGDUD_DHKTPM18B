import { Button, Drawer, Dropdown, Image } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isOpenCart, setOpenCart] = useState(false);

    const items = [
        {
            key: '1',
            label: (
                <Link className="font-semibold text-black px-10 py-6 hover:text-blue-500 text-lg " to={"/user/login"}>
                    Đăng nhập
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link className="font-semibold text-black px-10 py-6 hover:text-blue-500 text-lg" to={"/user/signup"}>
                    Đăng ký
                </Link>
            ),
        }
    ];

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        // Xu ly scroll header
        window.addEventListener("scroll", () => {
            const headerFix = document.querySelector(".header-fix")
            const headerTopUL = document.querySelectorAll(".header-top ul li");
            const headerTopText = document.querySelectorAll(".header-top ul li span");

            // const headerRighth2 = document.querySelectorAll(".header-right h2")
            const headerMiddleInput = document.querySelector(".header-middle input")



            if (window.scrollY >= (document.body.scrollHeight / 2)) {
                if (!headerFix.classList.contains("fixed")) {
                    headerFix.classList.add("fixed");
                    headerFix.classList.add("left-0");
                    headerFix.classList.add("right-0");
                    headerFix.classList.add("top-0");
                    headerFix.classList.add("bg-white");
                    headerFix.classList.add("shadow-lg");

                    // headerTopImg.classList.remove("w-16");

                    headerTopUL.forEach(ul => ul.classList.add("block-header-fix"))
                    headerTopText.forEach(ul => ul.classList.add("text-header-fix"))

                    // headerRighth2.forEach(ul => ul.classList.add("text-header-fix"))


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

                // headerTopImg.classList.add("w-16");


                headerMiddleInput.classList.remove("block-header-fix");

                headerTopUL.forEach(ul => ul.classList.remove("block-header-fix"))
                headerTopText.forEach(ul => ul.classList.remove("text-header-fix"))
                // headerRighth2.forEach(ul => ul.classList.remove("text-header-fix"))

            }

        });
        // Het xu ly scroll header

    }, []);

    const handleClickStatus = (e) => {
        const elementLi = e.target.closest("li")
        const allItemMenu = elementLi.closest("ul").querySelectorAll("li");

        allItemMenu.forEach(item => item.classList.remove("active"));

        elementLi.classList.add("active");

        setOpen(false);

    }

    const handleChangeType = (e) => {
        if (e.target.value.trim() === "")
            setIsVisible(false)
        else if (!isVisible)
            setIsVisible(true)
    }

    return (
        <>
            <Drawer title="MENU" placement="left" onClose={onClose} open={open}>
                <ul className="p-0 text-left">
                    <li onClick={handleClickStatus} className=" item-menu active px-2 py-4 border-solid border-b-2 border-blue-100 hover:text-blue-500 cursor-pointer text-gray-700">
                        <Link to={"/"}>
                            <i className="fa-solid fa-house mx-3"></i>
                            <span className='relative top-0.5 text-xl font-semibold'>Trang chủ</span>
                        </Link>
                    </li>
                    <li onClick={handleClickStatus} className=" item-menu px-2 py-4 border-solid border-b-2 border-blue-100 hover:text-blue-500 cursor-pointer text-gray-700">
                        <Link to={"/about"}>
                            <i className="fa-solid fa-users mx-3"></i>
                            <span className='relative top-0.5 text-xl font-semibold'>Giới thiệu</span>
                        </Link>
                    </li>
                    <li onClick={handleClickStatus} className=" item-menu px-2 py-4 border-solid border-b-2 border-blue-100 hover:text-blue-500 cursor-pointer text-gray-700">
                        <Link to={"/contact"}>
                            <i className="fa-solid fa-phone mx-3"></i>
                            <span className='relative top-0.5 text-xl font-semibold'>Liên lạc</span>
                        </Link>
                    </li>
                    <li onClick={handleClickStatus} className=" item-menu px-2 py-4 border-solid border-b-2 border-blue-100 hover:text-blue-500 cursor-pointer text-gray-700">
                        <Link to={"/sitemap"}>
                            <i className="fa-solid fa-street-view mx-3"></i>
                            <span className='relative top-0.5 text-xl font-semibold'>Sitemap</span>
                        </Link>
                    </li>
                </ul>
            </Drawer>
            <header className="bg-white left-0 right-0 top-0 z-50 fixed md:relative border-b-gray-200 border-solid border-b-2">
                <div className='header-fix z-50 py-2'>
                    <div className='header-top flex justify-between items-center'>
                        <div className="header-left flex justify-between items-center">
                            <i onClick={showDrawer} className="fa-solid fa-bars xl:hidden ml-4 text-2xl hover:text-blue-500 cursor-pointer"></i>
                            <div className="avatar overflow-hidden w-16 h-16 md:w-24 md:h-24">
                                <img src={"/logo.svg"} alt="Example" />
                            </div>
                            <ul className="pl-0 xl:block hidden">
                                <li onClick={handleClickStatus} className="text-center item-menu active inline-block px-3 py-3 hover:text-blue-500 cursor-pointer text-gray-700">
                                    <Link to={"/"}>
                                        <i className="fa-solid fa-house mx-3"></i>
                                        <span className='relative top-0.5 text-xl font-semibold'>Trang chủ</span>
                                    </Link>
                                </li>
                                <li onClick={handleClickStatus} className="text-center item-menu inline-block px-3 py-3 hover:text-blue-500 cursor-pointer text-gray-700">
                                    <Link to={"/about"}>
                                        <i className="fa-solid fa-users mx-3"></i>
                                        <span className='relative top-0.5 text-xl font-semibold'>Giới thiệu</span>
                                    </Link>
                                </li>
                                <li onClick={handleClickStatus} className="text-center item-menu inline-block px-3 py-3 hover:text-blue-500 cursor-pointer text-gray-700">
                                    <Link to={"/contact"}>
                                        <i className="fa-solid fa-phone mx-3"></i>
                                        <span className='relative top-0.5 text-xl font-semibold'>Liên lạc</span>
                                    </Link>
                                </li>
                                <li onClick={handleClickStatus} className="text-center item-menu inline-block px-3 py-3 hover:text-blue-500 cursor-pointer text-gray-700">
                                    <Link to={"/sitemap"}>
                                        <i className="fa-solid fa-street-view mx-3"></i>
                                        <span className='relative top-0.5 text-xl font-semibold'>Sitemap</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="header-right flex items-center">
                            <Link to={"/account/order"}>
                                <div className="cursor-pointer flex items-center justify-center px-3 md:mx-9 md:px-4 xl:mx-9 xl:px-4 rounded-xl py-3 bg-blue-100">
                                    <i className="fa-solid fa-box relative top-0.5 text-blue-500"></i>
                                    <h2 className="text-xs md:text-base xl:text-base xl:px-3 px-0.5 md:px-3 text-blue-500 font-semibold">Danh sách đơn hàng</h2>
                                </div>
                            </Link>
                            <div className='md:mr-7 xl:mr-7 relative' >
                                <div className='cursor-pointer relative flex items-center justify-center' onClick={() => setOpenCart(!isOpenCart)}>
                                    <i className="fa-solid fa-cart-shopping px-3 py-3 bg-blue-100 rounded-full mx-2"></i>
                                    <h2 className="text-lg hidden xl:block md:block font-normal ml-1">Giỏ hàng</h2>
                                    <span
                                        className='flex items-center justify-center absolute -top-3 left-1/2 md:-top-2 md:left-1/4 text-white bg-blue-500 rounded-full p-3 w-5 h-5'>
                                        9+
                                    </span>
                                </div>
                                {isOpenCart &&
                                    <div className='bg-stone-100 shadow-2xl min-h-36 z-50 -right-2/3 md:right-0 rounded-xl absolute top-full w-350 md:w-470'>
                                        <div className='cart-header py-3 border-solid border-b-2 border-stone-300 
                            uppercase text-center text-xl font-medium'>
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
                                        <Link
                                            to={"/cart"}
                                            style={{ width: "95%" }}
                                            className='block py-2 text-center rounded-xl mb-5 text-white font-medium bg-blue-500 mx-3'
                                        >
                                            XEM GIỎ HÀNG
                                        </Link>
                                    </div>
                                }
                            </div>
                            <div className="flex items-center justify-center cursor-pointer">
                                <Dropdown
                                    menu={{
                                        items,
                                    }}
                                    placement="bottomLeft"
                                >
                                    <Link to={"/account/detail"}>
                                        <i className='fas fa-user-circle text-5xl text-blue-600'></i>
                                    </Link>
                                    {/* <img className="avatar mr-3 size-12 md:size-14  rounded-full" src={"/avatar.png"} alt="Example" /> */}
                                </Dropdown>

                                {/* Nếu đã đăng nhập tài khoản thì mặc định sẽ như này */}
                                <div className='user mr-3 md:mx-2'>
                                    <h2 className='text-sm hidden md:block font-normal'>Xin chào</h2>
                                    <h2 className="text-xl hidden md:block font-bold">Nguyễn Xuân Hồ</h2>
                                </div>

                                {/* Chưa đăng nhập tài khoản */}
                                {/* <div className="flex items-center mr-3">
                  <Link className="font-semibold hover:text-blue-500 hidden xl:block text-lg border-solid border-r-2 pr-2 border-stone-200" to={"/user/login"}>
                    Đăng nhập
                  </Link>
                  <Link className="font-semibold hover:text-blue-500 hidden xl:block text-lg border-solid border-l-2 pl-2 border-stone-200" to={"/user/signup"}>
                    Đăng ký
                  </Link>
                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className='header-middle mb-3 flex items-center align-middle justify-center'>
                        <h1 className='lg:text-3xl md:text-xl sm:text-lg font-bold text-blue-500 mx-0.5 md:mx-10 xl:mx-10'>ARISU GAMING</h1>
                        <div className="search w-2/3 relative top-0.5">
                            <input
                                className="shadow-inner focus:outline-blue-600 text-base xl:text-xl rounded-lg bg-slate-50 border-blue-200 w-full px-2.5 py-2 xl:px-5 xl:py-2.5"
                                placeholder="Nhập tên sản phẩm cần tìm ..."
                                onChange={handleChangeType}
                            />
                            {isVisible && (
                                <div className='rounded-xl overflow-y-scroll shadow-md absolute z-40 min-h-64 w-140 max-h-96 right-0  md:w-full bg-slate-50' style={{ top: "120%" }}>
                                    {/* Tìm thấy sản phẩm */}
                                    <div className='flex hover:bg-blue-100 cursor-pointer overflow-hidden items-center py-1.5 px-3 md:py-3 md:px-5 border-solid border-2 border-b-stone-300'>
                                        <div className='md:w-16 md:h-16 w-28 h-20'>
                                            <Image
                                                preview={false}
                                                src='https://hoanghapccdn.com/media/product/250_4254_hhpc_black_sky_ha2.jpg'
                                            />
                                        </div>
                                        <div className='ml-5'>
                                            <h2 className='line-clamp-1 font-medium text-sm md:text-lg'>MÁY TÍNH CHƠI GAME CORE i5 13600K | 32G DDR5 | NVIDIA RTX 4070 Ti SUPER 16G</h2>
                                            <span className='text-red-500 font-bold'>12,000,000 đ</span>
                                            <span className='ml-5 line-through text-stone-500'>18,000,000 đ</span>
                                        </div>
                                    </div>

                                    {/* Không tìm thấy sản phẩm */}
                                    {/* <div className='h-60 flex flex-col justify-center items-center'>
                    <i className="fa-solid fa-box text-7xl my-2"></i>
                    <p className='md:text-xl text-base'>Không tìm thấy sản phẩm nào cả</p>
                  </div> */}
                                </div>
                            )}
                            <i className="cursor-pointer z-20 bg-blue-500 flex items-center justify-center w-10 md:w-14 rounded-tr-lg rounded-br-lg h-full fa-solid fa-magnifying-glass absolute top-0 right-0"></i>
                        </div>
                    </div>
                </div>
                <div className='md:pb-3 pb-1 flex cursor-pointer header-bottom items-center lg:justify-center'>
                    <div className="flex whitespace-nowrap category_list relative items-center mx-1 lg:mx-2 justify-center lg:py-3 p-1.5 rounded-xl text-white lg:px-5 bg-blue-500">
                        <i className="fa-solid fa-bars lg:text-xl relative top-0.5"></i>
                        <h2 className="lg:text-base text-sm font-bold ml-5">Danh mục sản phẩm</h2>
                        <ul className='m-0 pl-0 category_ul absolute left-0 z-40 text-black w-80 shadow-lg bg-white rounded-lg md:max-h-max'>
                            <div className="overflow-y-scroll max-h-96 lg:max-h-max">
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
                            </div>
                        </ul>
                    </div>
                    <div className="overflow-x-scroll flex items-center">
    <Link to="/policy/warranty" className="cursor-pointer flex whitespace-nowrap items-center mx-1 lg:mx-2 justify-center lg:py-3 p-1.5 rounded-xl hover:text-white lg:px-5 hover:bg-blue-500">
        <i className="fa-regular fa-paste lg:text-xl relative top-0.5"></i>
        <h2 className="lg:text-base text-sm font-semibold ml-3">Chính sách bảo hành</h2>
    </Link>

    <Link to="/policy/return" className="cursor-pointer flex whitespace-nowrap items-center mx-1 lg:mx-2 justify-center lg:py-3 p-1.5 rounded-xl hover:text-white lg:px-5 hover:bg-blue-500">
        <i className="fa-solid fa-arrow-rotate-left lg:text-xl relative top-0.5"></i>
        <h2 className="lg:text-base text-sm font-semibold ml-3">Chính sách đổi trả</h2>
    </Link>

    <Link to="/policy/shipping" className="cursor-pointer flex whitespace-nowrap items-center mx-1 lg:mx-2 justify-center lg:py-3 p-1.5 rounded-xl hover:text-white lg:px-5 hover:bg-blue-500">
        <i className="fa-solid fa-truck-fast lg:text-xl relative top-0.5"></i>
        <h2 className="lg:text-base text-sm font-semibold ml-3">Chính sách giao hàng</h2>
    </Link>

    <Link to="/policy/payment" className="cursor-pointer flex whitespace-nowrap items-center mx-1 lg:mx-2 justify-center lg:py-3 p-1.5 rounded-xl hover:text-white lg:px-5 hover:bg-blue-500">
        <i className="fa-solid fa-hand-holding-dollar lg:text-xl relative top-0.5"></i>
        <h2 className="lg:text-base text-sm font-semibold ml-3">Thanh toán và trả góp</h2>
    </Link>
</div>
                </div>
            </header>

        </>
    )
}

export default Header