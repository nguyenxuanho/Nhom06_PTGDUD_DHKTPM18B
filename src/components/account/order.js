import { Link } from 'react-router-dom'
import { Badge, Image } from 'antd'



const AccountOrder = function () {



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
                            <Link className='font-medium block my-3 py-3 hover:bg-blue-400 hover:text-white px-5 bg-stone-200 rounded-lg text-stone-600' to={"/account/detail"}>
                                <li className='inline-block'>
                                    <i className="fa-regular fa-user w-9"></i>
                                    <span className='font-medium'>Thông tin tài khoản</span>
                                </li>
                            </Link>
                            <Link className='font-medium block my-3 py-3 bg-blue-400 text-white px-5 rounded-lg' to={"/account/order"}>
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
                        <h2 className='text-xl font-bold pb-3 border-solid border-b-2 border-blue-200'>Danh sách đơn hàng</h2>
                        <div className='grid max-h-600 grid-flow-row overflow-y-scroll grid-cols-12 gap-3 my-4'>
                            <div className='col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-3'>
                                <Badge.Ribbon className='py-1.5 font-semibold' placement='start' text="Đã giao đơn hàng" color='green'>
                                    <div className='border-blue-300 p-2 border-2 border-solid card rounded-lg bg-white' >
                                        <div className='card-img hover:-translate-y-2 transition-all'>
                                            <Image
                                                src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg"
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
                                        <div className='card-footer'>
                                            <div className='flex items-center justify-between font-semibold'>
                                                <h3>Số lượng: </h3>
                                                <h3 className='text-green-600'>x3</h3>
                                            </div>
                                            <div className='flex items-center justify-between font-semibold'>
                                                <h3>Thành tiền: </h3>
                                                <h3 className='text-lg text-red-500'>12,000,000 đ</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Badge.Ribbon>
                            </div>
                            <div className='col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-3'>
                                <Badge.Ribbon className='py-1.5 font-semibold' placement='start' text="Đơn hàng đang giao" color='purple'>
                                    <div className='border-blue-300 p-2 border-2 border-solid card rounded-lg bg-white' >
                                        <div className='card-img hover:-translate-y-2 transition-all'>
                                            <Image
                                                src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg"
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
                                        <div className='card-footer'>
                                            <div className='flex items-center justify-between font-semibold'>
                                                <h3>Số lượng: </h3>
                                                <h3 className='text-green-600'>x3</h3>
                                            </div>
                                            <div className='flex items-center justify-between font-semibold'>
                                                <h3>Thành tiền: </h3>
                                                <h3 className='text-lg text-red-500'>12,000,000 đ</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Badge.Ribbon>
                            </div>
                            <div className='col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-3'>
                                <Badge.Ribbon className='py-1.5 font-semibold' placement='start' text="Đã hủy đơn hàng" color='red'>
                                    <div className='border-blue-300 p-2 border-2 border-solid card rounded-lg bg-white' >
                                        <div className='card-img hover:-translate-y-2 transition-all'>
                                            <Image
                                                src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg"
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
                                        <div className='card-footer'>
                                            <div className='flex items-center justify-between font-semibold'>
                                                <h3>Số lượng: </h3>
                                                <h3 className='text-green-600'>x3</h3>
                                            </div>
                                            <div className='flex items-center justify-between font-semibold'>
                                                <h3>Thành tiền: </h3>
                                                <h3 className='text-lg text-red-500'>12,000,000 đ</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Badge.Ribbon>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default AccountOrder;