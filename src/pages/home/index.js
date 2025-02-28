import { toast } from "react-toastify";
import { Button, Carousel, Image } from "antd";
import CardProduct from "../../components/card_product";



const Home = function () {

    const responsiveSettings = [
        {
            breakpoint: 1024, 
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 800, 
            settings: {
                slidesToShow: 3, 
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600, 
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
    ];

    const handleChangeFilter = (e) => {
        const boxButton = e.target.closest(".gap-2");
        const listButton = boxButton.querySelectorAll(".button");

        const buttonClick = e.target.closest(".button");


        if (!buttonClick.classList.contains("active")) {
            listButton.forEach((button) => button.classList.remove("active"));
            buttonClick.classList.add("active");
        }

        toast.success("Bạn đã click vào nút đó !!")
    }

    return (
        <>
            <div className="md:pt-3 pt-52 bg-slate-50">
                <div className='content-header mx-5 xl:mx-32 grid grid-cols-12 grid-flow-row gap-2 xl:gap-5'>
                    <div className='row-span-3 hidden xl:block col-span-3 rounded-lg shadow-lg bg-white'>
                        <ul className='m-0 pl-0 rounded-lg max-h-max'>
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
                    <div className='col-span-12 xl:col-span-6 row-span-2'>
                        <Carousel autoplay arrows autoplaySpeed={2500} dots={false}>
                            <Image
                                src='https://hoanghapccdn.com/media/banner/19_12-396775e024dad81b1084c0dc4ed14390.jpg'
                                preview={false}
                                className='rounded'
                                alt="AnhGiangSinh"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover", // Đảm bảo ảnh phủ toàn bộ Carousel
                                }}
                            />

                            <Image
                                src='https://hoanghapccdn.com/media/banner/04_11-dca01f31346b48ad8656ccd1ea50432a.jpg'
                                preview={false}
                                className='rounded'
                                alt="AnhGiangSinh"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover", // Đảm bảo ảnh phủ toàn bộ Carousel
                                }}
                            />

                            <Image
                                src='https://hoanghapccdn.com/media/banner/30_11-0861730b0853038b309107cc73c47fca.jpg'
                                preview={false}
                                className='rounded object-cover'
                                alt="AnhGiangSinh"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover", // Đảm bảo ảnh phủ toàn bộ Carousel
                                }}
                            />

                            <Image
                                src='https://hoanghapccdn.com/media/banner/08_08-4c3b1c18af0454d4ede41f9d926b5144.jpg'
                                preview={false}
                                className='rounded object-cover'
                                alt="AnhGiangSinh"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover", // Đảm bảo ảnh phủ toàn bộ Carousel
                                }}
                            />

                            <Image
                                src='https://hoanghapccdn.com/media/banner/30_11-c9a3ef925ef41a91115da0938bf91b34.jpg'
                                preview={false}
                                className='rounded'
                                alt="AnhGiangSinh"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover", // Đảm bảo ảnh phủ toàn bộ Carousel
                                }}
                            />
                        </Carousel>
                    </div>
                    <div className='col-span-6 xl:col-span-3 img-hover relative overflow-hidden cursor-pointer'>
                        <Image
                            src='https://hoanghapccdn.com/media/banner/10_12-2906c45f5aa9cc1f70200a19dc2a91f0.jpg'
                            preview={false}
                            className='rounded-lg'
                        />
                    </div>
                    <div className='col-span-6 xl:col-span-3 img-hover relative overflow-hidden cursor-pointer'>
                        <Image
                            src='https://hoanghapccdn.com/media/banner/10_12-3ac52790a24dbfc2563ca090d5937912.jpg'
                            preview={false}
                            className='rounded-lg'
                        />
                    </div>
                    <div className='col-span-6 xl:col-span-3 img-hover relative overflow-hidden cursor-pointer'>
                        <Image
                            src='https://hoanghapccdn.com/media/banner/10_12-e1a62b6fabf446ea5147cb3fe78b3d1a.jpg'
                            preview={false}
                            className='rounded-lg'
                        />
                    </div>
                    <div className='col-span-6 xl:col-span-3 img-hover relative overflow-hidden cursor-pointer'>
                        <Image
                            src='https://hoanghapccdn.com/media/banner/10_12-159fb99633969cadb30627ba6ccea31c.jpg'
                            preview={false}
                            className='rounded-lg'
                        />
                    </div>
                    <div className='col-span-6 xl:col-span-3 img-hover relative overflow-hidden cursor-pointer'>
                        <Image
                            src='https://hoanghapccdn.com/media/banner/10_12-ba62370217c50916330b44e260fbceba.jpg'
                            preview={false}
                            className='rounded-lg'
                        />
                    </div>
                    <div className='col-span-6 xl:col-span-3 img-hover relative overflow-hidden cursor-pointer'>
                        <Image
                            src='https://hoanghapccdn.com/media/banner/10_12-81ab60c0c9a80c6b6dff7bf9fca94ffa.jpg'
                            preview={false}
                            className='rounded-lg'
                        />
                    </div>
                    <div className='col-span-6 xl:col-span-3 img-hover relative overflow-hidden cursor-pointer'>
                        <Image
                            src='https://hoanghapccdn.com/media/banner/10_12-eb6e14906117c2b5a8729e7c9c293942.jpg'
                            preview={false}
                            className='rounded-lg'
                        />
                    </div>
                    <div className='col-span-6 xl:col-span-3 img-hover relative overflow-hidden cursor-pointer'>
                        <Image
                            src='https://hoanghapccdn.com/media/banner/10_12-77f4accd855186627e29ed36474e6fbb.jpg'
                            preview={false}
                            className='rounded-lg'
                        />
                    </div>
                    <div className='col-span-6 xl:col-span-3 img-hover relative overflow-hidden cursor-pointer'>
                        <Image
                            src='https://hoanghapccdn.com/media/banner/10_12-0ac681a53e44b6b59d4a8fdd60f29cb2.jpg'
                            preview={false}
                            className='rounded-lg'
                        />
                    </div>


                </div>
                <div className='content-center my-10'>
                    <div className='mx-5 xl:mx-32 grid grid-flow-row grid-cols-6 lg:flex gap-2 lg:gap-4 my-16'>
                        <div className='col-span-2 lg:basis-1/5'>
                            <Button onClick={handleChangeFilter} className="w-full active button py-7 rounded-3xl text-blue-700 hover:text-white hover:bg-blue-500">
                                <div className='flex-wrap'>
                                    <h2 className='uppercase font-medium md:font-bold text-xs lg:text-base'>Top PC Bán Chạy</h2>
                                    <p className='hidden md:block font-medium'>Nhất năm 2025</p>
                                </div>
                            </Button>
                        </div>
                        <div className='col-span-2 lg:basis-1/5'>
                            <Button onClick={handleChangeFilter} className="w-full button py-7 rounded-3xl text-blue-700 hover:text-white hover:bg-blue-500">
                                <div className='flex-wrap'>
                                    <h2 className='uppercase font-medium md:font-bold text-xs lg:text-base'>Giải nhiệt pc</h2>
                                    <p className='hidden md:block font-medium'>Nâng cao hiệu suất</p>
                                </div>
                            </Button>
                        </div>
                        <div className='col-span-2 lg:basis-1/5'>
                            <Button onClick={handleChangeFilter} className="w-full button py-7 rounded-3xl text-blue-700 hover:text-white hover:bg-blue-500">
                                <div className='flex-wrap'>
                                    <h2 className='uppercase font-medium md:font-bold text-xs lg:text-base'>Top PC Cực Khủng</h2>
                                    <p className='hidden md:block font-medium'>Dành cho dân đồ họa</p>
                                </div>
                            </Button>
                        </div>
                        <div className='col-span-2 lg:basis-1/5'>
                            <Button onClick={handleChangeFilter} className="w-full button py-7 rounded-3xl text-blue-700 hover:text-white hover:bg-blue-500">
                                <div className='flex-wrap'>
                                    <h2 className='uppercase font-medium md:font-bold text-xs lg:text-base'>màn hình đồ họa</h2>
                                    <p className='hidden md:block font-medium'>Nhiều ưu đãi hấp dẫn</p>
                                </div>
                            </Button>
                        </div>
                        <div className='col-span-2 lg:basis-1/5'>
                            <Button onClick={handleChangeFilter} className="w-full button py-7 rounded-3xl text-blue-700 hover:text-white hover:bg-blue-500">
                                <div className='flex-wrap'>
                                    <h2 className='uppercase font-medium md:font-bold text-xs lg:text-base'>Góc thanh lý</h2>
                                    <p className='hidden md:block font-medium'>Xả hàng không lợi nhuận</p>
                                </div>
                            </Button>
                        </div>
                    </div>
                    <Carousel
                        slidesToShow={5}
                        slidesToScroll={1}
                        draggable
                        className='mx-5 xl:mx-32 gap-10 pb-12 border-none'
                        dots={false}
                        autoplay
                        arrows
                        autoplaySpeed={2000}
                        responsive={responsiveSettings}
                    >
                        <div className='px-1.5'>
                            <CardProduct css="p-3" />
                        </div>
                        <div className='px-1.5'>
                            <CardProduct css="p-3" />
                        </div>
                        <div className='px-1.5'>
                            <CardProduct css="p-3" />
                        </div>
                        <div className='px-1.5'>
                            <CardProduct css="p-3" />
                        </div>
                        <div className='px-1.5'>
                            <CardProduct css="p-3" />
                        </div>
                        <div className='px-1.5'>
                            <CardProduct css="p-3" />
                        </div>
                        <div className='px-1.5'>
                            <CardProduct css="p-3" />
                        </div>
                        <div className='px-1.5'>
                            <CardProduct css="p-3" />
                        </div>
                        <div className='px-1.5'>
                            <CardProduct css="p-3" />
                        </div>
                        <div className='px-1.5'>
                            <CardProduct css="p-3" />
                        </div>
                    </Carousel>
                </div>
                <div className='box-promotion mx-5 xl:mx-32 my-10 bg-white py-10 px-7 shadow-lg'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-xl md:text-3xl font-bold text-blue-500'>PC Thiết Kế Đồ Họa 3D</h1>
                        <p className='text-sm font-bold text-slate-500 cursor-pointer'>Xem tất cả</p>
                    </div>
                        <Carousel
                            slidesToShow={5}
                            slidesToScroll={1}
                            draggable
                            className='mt-12 cursor-grab'
                            dots={false}
                            autoplay
                            arrows
                            autoplaySpeed={2000}
                            responsive={responsiveSettings}
                        >
                            <div className='px-1.5'>
                                <CardProduct  />
                            </div>
                            <div className='px-1.5'>
                                <CardProduct  />
                            </div>
                            <div className='px-1.5'>
                                <CardProduct  />
                            </div>
                            <div className='px-1.5'>
                                <CardProduct  />
                            </div>
                            <div className='px-1.5'>
                                <CardProduct  />
                            </div>
                            <div className='px-1.5'>
                                <CardProduct  />
                            </div>
                            <div className='px-1.5'>
                                <CardProduct  />
                            </div>
                            <div className='px-1.5'>
                                <CardProduct  />
                            </div>
                            <div className='px-1.5'>
                                <CardProduct  />
                            </div>
                            <div className='px-1.5'>
                                <CardProduct  />
                            </div>
                        </Carousel>
            
                </div>
                <div className='box-promotion mx-5 xl:mx-32 my-10 bg-white py-10 px-7 shadow-lg'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-xl md:text-3xl font-bold text-blue-500'>PC Render, Edit Video</h1>
                        <p className='text-sm font-bold text-slate-500 cursor-pointer'>Xem tất cả</p>
                    </div>
                    <Carousel
                            slidesToShow={5}
                            slidesToScroll={1}
                            draggable
                            className='mt-12 cursor-grab'
                            dots={false}
                            autoplay
                            arrows
                            autoplaySpeed={2000}
                            responsive={responsiveSettings}
                        >
                            <div className='px-1.5'>
                                <CardProduct  />
                            </div>
                            <div className='px-1.5'>
                                <CardProduct  />
                            </div>
                            <div className='px-1.5'>
                                <CardProduct  />
                            </div>
                            <div className='px-1.5'>
                                <CardProduct  />
                            </div>
                            <div className='px-1.5'>
                                <CardProduct  />
                            </div>
                            <div className='px-1.5'>
                                <CardProduct  />
                            </div>
                            <div className='px-1.5'>
                                <CardProduct  />
                            </div>
                            <div className='px-1.5'>
                                <CardProduct  />
                            </div>
                            <div className='px-1.5'>
                                <CardProduct  />
                            </div>
                            <div className='px-1.5'>
                                <CardProduct  />
                            </div>
                        </Carousel>
                </div>
                <div className='box-promotion mx-5 xl:mx-32 my-10 bg-white py-10 px-7 shadow-lg'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-xl md:text-3xl font-bold text-blue-500'>PC Gaming</h1>
                        <p className='text-sm font-bold text-slate-500 cursor-pointer'>Xem tất cả</p>
                    </div>
                    <Carousel
                            slidesToShow={5}
                            slidesToScroll={1}
                            draggable
                            className='mt-12 cursor-grab'
                            dots={false}
                            autoplay
                            arrows
                            autoplaySpeed={2000}
                            responsive={responsiveSettings}
                        >
                            <div className='px-1.5'>
                                <CardProduct  />
                            </div>
                            <div className='px-1.5'>
                                <CardProduct  />
                            </div>
                            <div className='px-1.5'>
                                <CardProduct  />
                            </div>
                            <div className='px-1.5'>
                                <CardProduct  />
                            </div>
                            <div className='px-1.5'>
                                <CardProduct  />
                            </div>
                            <div className='px-1.5'>
                                <CardProduct  />
                            </div>
                            <div className='px-1.5'>
                                <CardProduct  />
                            </div>
                            <div className='px-1.5'>
                                <CardProduct  />
                            </div>
                            <div className='px-1.5'>
                                <CardProduct  />
                            </div>
                            <div className='px-1.5'>
                                <CardProduct  />
                            </div>
                    </Carousel>
                </div>
                <div className='h-60 background-image flex flex-wrap items-center justify-center font-extrabold text-base sm:text-xl lg:text-4xl text-white cursor-default'>
                    Khơi nguồn đam mê, chạm đến đỉnh công nghệ!❣️
                </div>
                <div className='mx-5 xl:mx-32 my-10 bg-white py-10 px-7 shadow-md'>
                    <div className='flex items-center justify-center'>
                        <h1 className='text-xl md:text-3xl font-bold text-blue-500'>HỆ THỐNG SHOWROOM CỦA HOÀNG HÀ PC</h1>
                    </div>
                    <div className='mt-12 grid grid-flow-row grid-cols-12 gap-3'>
                        <div className='col-span-12 my-3 sm:col-span-6 xl:col-span-3'>
                            <div className='flex items-center'>
                                <div className='text-6xl px-6 rounded-md py-3 mr-4 bg-blue-200'>1</div>
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
                        <div className='col-span-12 my-3 sm:col-span-6 xl:col-span-3'>
                            <div className='flex items-center'>
                                <div className='text-6xl px-6 rounded-md py-3 mr-4 bg-purple-400'>2</div>
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
                        <div className='col-span-12 my-3 sm:col-span-6 xl:col-span-3'>
                            <div className='flex items-center'>
                                <div className='text-6xl px-6 rounded-md py-3 mr-4 bg-green-300'>3</div>
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
                        <div className='col-span-12 my-3 sm:col-span-6 xl:col-span-3'>
                            <div className='flex items-center'>
                                <div className='text-6xl px-6 rounded-md py-3 mr-4 bg-red-200'>4</div>
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
        </>
    )

}

export default Home;