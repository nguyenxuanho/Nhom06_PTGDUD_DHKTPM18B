import { Link } from 'react-router-dom'
import { Badge, Image } from 'antd'
import { useUser } from '../../components/layout';
import { useEffect, useState } from 'react';
import { get } from '../../components/utils/request';



const AccountOrder = function () {
    const {inforUser} = useUser();
    const [listOrder, setListOrder] = useState([]);
    

    useEffect(() => {
        const fecthGetOrderByUser = async () => {

            if (!inforUser || !inforUser._id || inforUser._id === 'undefined') return;
            const dataObject = await get(`users/order/${inforUser._id}`);
            if(dataObject.code === 200)
                setListOrder(dataObject.data)

           
           
            
            // if(dataObject.code === 200)
            //     setListOrder(dataObject.listOrder)
        } 

        fecthGetOrderByUser();
    }, [inforUser])

    // console.log(listOrder);


    let listProduct = [];
    listOrder?.map(order => order?.products)?.forEach(product => listProduct = listProduct.concat([...product]))
    
    
    

    return (
        <>
            <div className="md:pt-3 pt-52 bg-slate-50 dark:bg-slate-900 dark:text-white">

                <div className='mx-5 xl:mx-32 content-header flex items-center flex-wrap'>
                    <Link to="/" className="font-medium text-lg text-stone-500 dark:text-white mr-3 header-nav active">Trang chủ</Link>
                    <i className="fa-solid fa-chevron-right text-stone-500 mr-3"></i>
                    <h3 className="font-medium text-lg text-stone-500 dark:text-white mr-3">Account</h3>
                </div>
                <div className='mx-5 xl:mx-32 mt-5 pb-5 grid grid-flow-row grid-cols-12 gap-0 lg:gap-9'>
                    <div className='col-span-12 lg:col-span-3'>
                        <div className='flex items-center'>
                            <i className='fas fa-user-circle text-5xl text-blue-600'></i>
                            <div className='mx-4'>
                                <h6 className='text-base font-semibold'>Tài khoản của,</h6>
                                <h1 className='font-bold text-lg'>{inforUser?.fullname}</h1>
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
                            <Link className='font-medium block my-3 py-3 hover:bg-blue-400 hover:text-white px-5 bg-stone-200 rounded-lg text-stone-600' to={"/user/login"}>
                                <li className='inline-block'>
                                    <i className="fas fa-sign-out-alt w-9"></i>
                                    <span className='font-medium'>Đăng xuất</span>
                                </li>
                            </Link>

                        </ul>
                    </div>
                    <div className='col-span-12 lg:col-span-9 p-6 bg-white dark:bg-gray-800 dark:text-white rounded-2xl shadow-xl'>
                        <h2 className='text-xl font-bold pb-3 border-solid border-b-2  dark:border-slate-900 border-blue-200'>Danh sách đơn hàng</h2>
                        <div className='grid max-h-600 grid-flow-row overflow-y-scroll grid-cols-12 gap-3 my-4'>
                            {listProduct.length > 0 && 
                                listProduct.map(product => (
                                    <div key={product.product_id} className='col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-3'>
                                        {product.status === "success" && 
                                            <Badge.Ribbon className='py-1.5 font-semibold' placement='start' text="Đơn hàng đã giao" color='green'>
                                                 <div className='border-blue-300 p-2 border-2 border-solid card rounded-lg bg-white dark:border-slate-900 dark:bg-slate-700 dark:text-white' >
                                                    <div className='card-img hover:-translate-y-2 transition-all'>
                                                        <Image
                                                            src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg"
                                                        />
                                                    </div>
                                                    <div className='card-content mb-3 text-center'>
                                                        <h2 className='font-medium cursor-pointer dark:text-white hover:text-blue-500 text-base line-clamp-2'>
                                                            {product.name}
                                                        </h2>
                                                        <h2 className='font-bold cursor-default text-xl my-1 text-blue-400  dark:text-blue-400'>
                                                            {product.unitPrice.toLocaleString()} đ
                                                        </h2>
                                                    

                                                    </div>
                                                    <div className='card-footer'>
                                                        <div className='flex items-center justify-between font-semibold'>
                                                            <h3>Số lượng: </h3>
                                                            <h3 className='text-green-600'>x{product.quanlity}</h3>
                                                        </div>
                                                        <div className='flex items-center justify-between font-semibold'>
                                                            <h3>Thành tiền: </h3>
                                                            <h3 className='text-lg text-red-500'>{(product.quanlity * product.unitPrice).toLocaleString()} đ</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Badge.Ribbon>
                                        }
                                        {product.status === "pending" && 
                                            <Badge.Ribbon className='py-1.5 font-semibold' placement='start' text="Đơn hàng đang giao" color='gold'>
                                                <div className='border-blue-300 p-2 border-2 border-solid card rounded-lg bg-white dark:border-slate-900 dark:bg-slate-700 dark:text-white' >
                                                    <div className='card-img hover:-translate-y-2 transition-all'>
                                                        <Image
                                                            src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg"
                                                        />
                                                    </div>
                                                    <div className='card-content mb-3 text-center'>
                                                        <h2 className='font-medium cursor-pointer dark:text-white hover:text-blue-500 text-base line-clamp-2'>
                                                            {product.name}
                                                        </h2>
                                                        <h2 className='font-bold cursor-default text-xl my-1 text-blue-400  dark:text-blue-400'>
                                                            {product.unitPrice.toLocaleString()} đ
                                                        </h2>
                                                    

                                                    </div>
                                                    <div className='card-footer'>
                                                        <div className='flex items-center justify-between font-semibold'>
                                                            <h3>Số lượng: </h3>
                                                            <h3 className='text-green-600'>x{product.quanlity}</h3>
                                                        </div>
                                                        <div className='flex items-center justify-between font-semibold'>
                                                            <h3>Thành tiền: </h3>
                                                            <h3 className='text-lg text-red-500'>{(product.quanlity * product.unitPrice).toLocaleString()} đ</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Badge.Ribbon>
                                        }
                                          {product.status === "cancel" && 
                                            <Badge.Ribbon className='py-1.5 font-semibold' placement='start' text="Đơn hàng đã hủy" color='red'>
                                                <div className='border-blue-300 p-2 border-2 border-solid card rounded-lg bg-white dark:border-slate-900 dark:bg-slate-700 dark:text-white' >
                                                    <div className='card-img hover:-translate-y-2 transition-all'>
                                                        <Image
                                                            src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg"
                                                        />
                                                    </div>
                                                    <div className='card-content mb-3 text-center'>
                                                        <h2 className='font-medium cursor-pointer dark:text-white hover:text-blue-500 text-base line-clamp-2'>
                                                            {product.name}
                                                        </h2>
                                                        <h2 className='font-bold cursor-default text-xl my-1 text-blue-400  dark:text-blue-400'>
                                                            {product.unitPrice.toLocaleString()} đ
                                                        </h2>
                                                    

                                                    </div>
                                                    <div className='card-footer'>
                                                        <div className='flex items-center justify-between font-semibold'>
                                                            <h3>Số lượng: </h3>
                                                            <h3 className='text-green-600'>x{product.quanlity}</h3>
                                                        </div>
                                                        <div className='flex items-center justify-between font-semibold'>
                                                            <h3>Thành tiền: </h3>
                                                            <h3 className='text-lg text-red-500'>{(product.quanlity * product.unitPrice).toLocaleString()} đ</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Badge.Ribbon>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default AccountOrder;