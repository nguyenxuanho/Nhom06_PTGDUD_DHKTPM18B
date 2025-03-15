
import { Link, useNavigate, useParams } from 'react-router-dom'

import { Image, Result, Table, Tag } from 'antd'
import { useEffect, useState } from 'react';
import {get} from "../../components/utils/request"
import { useUser } from '../../components/layout';

const OrderSuccess = function () {

    const navigation = useNavigate();
    const { inforUser } = useUser();

    const [order, setOrder] = useState({});
    const {order_id} = useParams();

    useEffect(() => {
        const fetchGetOrder = async () => {
            const dataObject = await get(`order/${order_id}`)
            if(dataObject.code === 200){
                if(dataObject.data.userInfo.user_id === inforUser._id)
                    setOrder(dataObject.data);
                else navigation('/')
            }
        }
        fetchGetOrder();
    }, [order_id]);

    const dataSource = order?.products?.map((product, index) => (
        {
            key: index,
            img: 'https://hoanghapccdn.com/media/product/250_3261_pc_gaming_x_ii_620s_ha1.jpg',
            productName: product.name,
            price: ((product.unitPrice).toLocaleString()) + " đ",
            quanity: product.quanlity,
            subtotal: (product.unitPrice * product.quanlity).toLocaleString() + " đ"
        }
    ))

    const columns = [
        {
            title: 'Hình ảnh',
            dataIndex: 'img',
            key: 'img',
            render: (_, { img }) => {
                return <Image style={{ width: "100px" }} src={img} />
            },
            width: 300,
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'productName',
            key: 'productName',
            render: (_, { productName }) => {
                return <h2 className='font-medium lg:font-bold line-clamp-2 text-sm lg:text-base'>{productName}</h2>
            },
            width: 1200
        },
        {
            title: 'Giá tiền',
            dataIndex: 'price',
            key: 'price',
            render: (_, { price }) => {
                return <h2 className='font-semibold text-orange-500 text-base'>{price}</h2>
            },
            width: 300
        },
        {
            title: 'Số lượng',
            dataIndex: 'quanity',
            key: 'quanity',
            render: (_, { quanity }) => {
                return <Tag className="px-5 font-semibold text-center text-base" color="blue">
                    {quanity}
                </Tag>
            },
            width: 300
        },
        {
            title: 'Thành tiền',
            dataIndex: 'subtotal',
            key: 'subtotal',
            render: (_, { subtotal }) => {
                return <h2 className='font-bold text-blue-500 text-base'>{subtotal}</h2>
            },
            width: 300
        },
    ];

    const pagination = {
        pageSize: 4,
        position: ["bottomRight"]
    }


    return (
        <>
            <div className="md:pt-3 pt-52 bg-slate-50">

                <div className='mx-5 xl:mx-32 content-header flex items-center flex-wrap'>
                    <Link to="/" className="font-medium text-lg text-stone-500 mr-3 header-nav active">Trang chủ</Link>
                    <i className="fa-solid fa-chevron-right text-stone-500 mr-3"></i>
                    <h3 className="font-medium text-lg text-stone-500 mr-3">Đặt hàng thành công</h3>
                </div>
                <div className='mx-5 xl:mx-32 my-5 bg-white shadow-xl'>
                    <Result
                        status="success"
                        className='font-medium'
                        title="Đơn hàng đã được đặt thành công"
                        subTitle={`Mã đơn hàng: ${order_id}. Nhân viên sẽ liên hệ với bạn sớm nhất có thể để xác nhận đơn hàng !!`}
                    />
                </div>

                {order.totalPrice &&
                    <div className='mx-5 xl:mx-32 my-5 py-2 px-5 bg-white shadow-xl'>
                        <h2 className='py-3 border-solid border-b-2 border-blue-300 text-2xl font-bold'>Danh sách đơn hàng</h2>
                        <Table pagination={pagination}  scroll={{ x: 700}}  className='my-5 overflow-y-scroll' dataSource={dataSource} columns={columns} />
                        <div className='my-2 text-right font-bold text-xl'> 
                            Tổng thành tiền:
                            <span className='mx-2 text-xl md:text-3xl text-red-500'>{order?.totalPrice?.toLocaleString()} đ</span>
                        </div>
                    </div>
                }

                {order.userInfo && 
                    <div className='mx-5 xl:mx-32 my-5 py-2 px-5 bg-white shadow-xl'>
                        <h2 className='py-3 border-solid border-b-2 border-blue-300 text-2xl font-bold'>Thông tin khách hàng</h2>
                        <div className='my-4'>
                            <div className='my-2 w-full lg:w-1/2 border-b-2 border-solid border-stone-200 py-2 flex items-center text-lg'>
                                <h2 className='w-2/4 lg:w-1/4 font-bold'>Họ và tên: </h2>
                                <p className='font-semibold w-2/4 lg:w-3/4 text-blue-500'>{order.userInfo.fullName}</p>
                            </div>
                            <div className='my-2 w-full lg:w-1/2 border-b-2 border-solid border-stone-200 py-2 flex items-center text-lg'>
                                <h2 className='w-2/4 lg:w-1/4 font-bold'>Số điện thoại: </h2>
                                <p className='font-semibold w-2/4 lg:w-3/4 text-blue-500'>{order.userInfo.phone}</p>
                            </div>
                            <div className='my-2 w-full lg:w-1/2 border-b-2 border-solid border-stone-200 py-2 flex items-center text-lg'>
                                <h2 className='w-2/4 lg:w-1/4 font-bold'>Địa chỉ: </h2>
                                <p className='font-semibold w-2/4 lg:w-3/4 text-blue-500 line-clamp-2'>{order.userInfo.address}</p>
                            </div>
                            <div className='my-2 w-full lg:w-1/2 border-b-2 border-solid border-stone-200 py-2 flex items-center text-lg'>
                                <h2 className='w-2/4 lg:w-1/4 font-bold'>Email: </h2>
                                <p className='font-semibold break-words w-2/4 lg:w-3/4 text-blue-500'>{order.userInfo.email}</p>
                            </div>
                            <div className='my-2 w-full lg:w-1/2 border-b-2 border-solid border-stone-200 py-2 flex items-center text-lg'>
                                <h2 className='w-2/4 lg:w-1/4 font-bold'>Ghi chú: </h2>
                                <p className='font-semibold w-2/4 lg:w-3/4 text-blue-500'>{order.userInfo.note}</p>
                            </div>
                        </div>
                    </div>
                }

            </div>
        </>
    );
}

export default OrderSuccess;