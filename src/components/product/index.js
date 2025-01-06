import { Button, Carousel, Image, Progress, Rate, Tag } from 'antd';
import { Link } from 'react-router-dom'
import "./style.css"


const Product = function () {



    return (
        <>
            <div className="container pt-3 bg-slate-50">
                <div className='mx-32 content-header flex items-center'>
                    <Link to="/" className="font-medium text-lg text-stone-500 mr-3 header-nav active">Trang chủ</Link>
                    <i className="fa-solid fa-chevron-right text-stone-500 mr-3"></i>
                    <Link to="/collection/123" className="font-medium text-lg text-stone-500 mr-3 header-nav active">PC Render, Edit Video</Link>
                    <i className="fa-solid fa-chevron-right text-stone-500 mr-3"></i>
                    <h3 className="font-medium text-lg text-stone-500 mr-3">HHPC Adobe</h3>
                </div>
                <div className='mx-32 content-body my-5 p-4 bg-white shadow-lg'>
                    <h1 className='font-bold text-xl line-clamp-1 py-2 border-solid border-b-2 border-blue-200'>PC ĐỒ HỌA CORE i5 12600K | 16G | NVIDIA RTX 3060 12G</h1>
                    <div className='grid grid-flow-row grid-cols-12 my-3 gap-16'>
                        <div className='col-span-4'>
                            <Carousel autoplay autoplaySpeed={2000} dots={false} arrows>
                                <Image
                                    src='https://hoanghapccdn.com/media/product/3036_pc_gaming_x_ii_kf400_ha1s.jpg'
                                />
                                <Image
                                    src='https://hoanghapccdn.com/media/product/3036_pc_gaming_x_ii_kf400_ha1_2.jpg'
                                />
                                <Image
                                    src='https://hoanghapccdn.com/media/product/3036_pc_gaming_x_ii_kf400_ha2.jpg'
                                />
                                <Image
                                    src='https://hoanghapccdn.com/media/product/3036_pc_gaming_x_ii_kf400_ha3.jpg'
                                />
                            </Carousel>
                            <div className='mt-10'>
                                <Progress type="circle" className='font-bold'
                                    strokeColor={"yellow"} percent={79.42} />
                                <h2 className='font-bold my-4 text-xl'>Đánh giá</h2>
                                <Rate className='text-5xl' allowHalf defaultValue={2.5} />
                            </div>

                        </div>
                        <div className='col-span-8'>
                            <h3 className='text-lg font-semibold '>Thông số sản phẩm</h3>
                            <ul className='text-stone-800'>
                                <li>- CPU : INTEL CORE i5 12600K up 4.9GHz | 10 CORE | 16 THREAD</li>
                                <li>- RAM : DDR4 16GB (1x16G) 3200 MHz</li>
                                <li>- VGA : NVIDIA RTX 3060 12GB GDDR6</li>
                            </ul>
                            <div className='px-3 my-4 py-2 border-dotted border-2 border-red-300 rounded-xl'>
                                <div className='flex items-end'>
                                    <p className='text-blue-500 font-bold text-4xl'>19.060.000 đ</p>
                                    <p className='mx-8 line-through text-stone-500 text-2xl font-bold'>21.000.000 đ</p>
                                    <Tag className='text-sm font-medium' color="red">Tiết kiệm 10%</Tag>
                                </div>
                                <div className='bg-red-500 mt-3 text-white py-1 px-2 max-w-max rounded-2xl font-bold text-sm'>Bảo hành theo từng linh kiện</div>
                            </div>
                            <div className='card-gift border-solid border-2 border-red-400 rounded-lg shadow-md'>
                                <div className='p-2 card-header-gift flex items-center border-b-2 border-solid border-red-100'>
                                    <i className="mr-2 fa-solid text-red-400 fa-gift"></i>
                                    <h2 className="text-red-500 text-lg font-bold">Quà tặng và ưu đãi kèm theo</h2>
                                </div>
                                <div className='card-body-gift p-2'>
                                    <h2 className='text-red-600 my-3 font-bold'>ƯU ĐÃI KHI MUA KÈM PC TẠI HOÀNG HÀ PC</h2>
                                    <h2 className='my-3 font-medium'>⭐ Giảm ngay
                                        <span className='text-red-500 font-bold'> 100.000đ</span> khi mua thêm
                                        <span className='text-red-500 font-bold'> Màn Hình Máy Tính.</span>
                                    </h2>
                                    <h2 className='my-3 font-medium'>⭐ Giảm ngay
                                        <span className='text-red-500 font-bold'> 100.000đ </span>
                                        khi mua thêm<span className='text-red-500 font-bold'> RAM</span>
                                    </h2>
                                </div>
                            </div>
                            <div className='list-btn flex max-w-max mt-10'>
                                <Button className='shadow-xl font-bold text-xl bg-red-500 text-white uppercase py-9 px-32 button mr-10'>
                                    Mua ngay
                                </Button>
                                <Button className='shadow-xl font-bold text-xl bg-yellow-500 text-white uppercase py-9 px-16 button mr-10'>
                                    Thêm vào giỏ hàng
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='mx-32 content-body my-5 p-4 bg-white shadow-lg'>
                    <h1 className='font-bold text-xl line-clamp-1 py-2 border-solid border-b-2 border-blue-200'>Thông số kỹ thuật</h1>
                    <div className='grid grid-flow-row grid-cols-12 my-3 gap-10'>
                        <div className='col-span-1 font-bold'>
                            STT
                        </div>
                        <div className='col-span-2 font-bold'>
                            MÃ HÀNG
                        </div>
                        <div className='col-span-5 font-bold'>
                            TÊN HÀNG
                        </div>
                        <div className='col-span-4 font-bold'>
                            THỜI HẠN BẢO HÀNH
                        </div>

                        <div className='col-span-1 font-semibold'>
                            1
                        </div>
                        <div className='col-span-2 font-semibold'>
                            CPU
                        </div>
                        <div className='col-span-5 font-semibold text-blue-500'>
                            INTEL CORE i5 12600K up 4.9GHz | 10 CORE | 16 THREAD
                        </div>
                        <div className='col-span-4 font-semibold'>
                            36 THÁNG
                        </div>

                        <div className='col-span-1 font-semibold'>
                            2
                        </div>
                        <div className='col-span-2 font-semibold'>
                            MAIN
                        </div>
                        <div className='col-span-5 font-semibold text-blue-500'>
                            GIGABYTE B760M GAMING X DDR4
                        </div>
                        <div className='col-span-4 font-semibold'>
                            36 THÁNG
                        </div>

                        <div className='col-span-1 font-semibold'>
                            3
                        </div>
                        <div className='col-span-2 font-semibold'>
                            TẢN NHIỆT
                        </div>
                        <div className='col-span-5 font-semibold text-blue-500'>
                            JUNGLE LEOPARD KF-400 ARGB
                        </div>
                        <div className='col-span-4 font-semibold'>
                            12 THÁNG
                        </div>

                        <div className='col-span-1 font-semibold'>
                            4
                        </div>
                        <div className='col-span-2 font-semibold'>
                            RAM
                        </div>
                        <div className='col-span-5 font-semibold text-blue-500'>
                            DDR4 16GB 3200 MHz (1x16G)
                        </div>
                        <div className='col-span-4 font-semibold'>
                            60 THÁNG
                        </div>

                        <div className='col-span-1 font-semibold'>
                            5
                        </div>
                        <div className='col-span-2 font-semibold'>
                            SSD
                        </div>
                        <div className='col-span-5 font-semibold text-blue-500'>
                            TEAMGROUP MP33 PRO 512GB M.2 PCIe Gen3x4 - RW 3500MB/s
                        </div>
                        <div className='col-span-4 font-semibold'>
                            60 THÁNG
                        </div>

                        <div className='col-span-1 font-semibold'>
                            6
                        </div>
                        <div className='col-span-2 font-semibold'>
                            VGA
                        </div>
                        <div className='col-span-5 font-semibold text-blue-500'>
                            GIGABYTE RTX 3060 WINDFORCE OC 12G GDDR6
                        </div>
                        <div className='col-span-4 font-semibold'>
                            36 THÁNG
                        </div>

                        <div className='col-span-1 font-semibold'>
                            7
                        </div>
                        <div className='col-span-2 font-semibold'>
                            PSU
                        </div>
                        <div className='col-span-5 font-semibold text-blue-500'>
                            FSP650-70ALA 650W - 80 PLUS GOLD
                        </div>
                        <div className='col-span-4 font-semibold'>
                            36 THÁNG
                        </div>

                        <div className='col-span-1 font-semibold'>
                            8
                        </div>
                        <div className='col-span-2 font-semibold'>
                            CASE
                        </div>
                        <div className='col-span-5 font-semibold text-blue-500'>
                            XIGMATEK GAMING X II 3F - 3FAN RGB
                        </div>
                        <div className='col-span-4 font-semibold'>
                            36 THÁNG
                        </div>

                    </div>
                </div>
                <div className='mx-32 content-body my-5 p-4 bg-white shadow-lg'>
                    <h1 className='font-bold text-xl line-clamp-1 py-2 border-solid border-b-2 border-blue-200'>Sản phẩm tương tự</h1>
                    <div className='flex my-3 gap-16'>
                        <div className='basis-1/5'>
                            <div className='card rounded-lg bg-white h-96' >
                                <div className='card-img hover:-translate-y-2 transition-all'>
                                    <Image
                                        src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg"
                                        style={{ width: "250px", height: "200px" }}
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
                                        style={{ width: "250px", height: "200px" }}
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
                                        style={{ width: "250px", height: "200px" }}
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
                                        style={{ width: "250px", height: "200px" }}
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
                                        style={{ width: "250px", height: "200px" }}
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
            </div>
        </>
    );
}

export default Product;