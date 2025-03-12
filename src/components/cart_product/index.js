import { Button, Image } from "antd"
import { Link } from "react-router-dom";


const CartProduct = (prop) => {
    const {increase, decrease, removeCart} = prop.handle;
    return (
        <>
        {prop.data && 
            <div className='cart-product-item flex gap-3 p-4 border-solid border-2 border-stone-100'>
                <div className='basis-1/6'>
                    <Image width={100} src='https://hoanghapccdn.com/media/product/250_4550_hhpc_anubis_pro_4fx_ram_rgb_ha1.jpg' />
                </div>
                <div className='basis-5/6 relative'>
                    <div className='flex absolute top-0 left-0 right-0 items-center justify-between'>
                        <Link to={`/product/${prop?.data?.slug}`}>
                            <h2 className='hover:text-blue-500 cursor-pointer w-4/5 text-sm md:text-base line-clamp-1'>
                                <span className='font-bold text-red-500'>[DEAL] </span>
                                {prop?.data?.title}
                            </h2>
                        </Link>
                        <i onClick={() => removeCart(prop?.data?._id)} className="hover:text-red-600 text-lg cursor-pointer fa-regular fa-trash-can"></i>
                    </div>
                    <div className='flex absolute bottom-0 left-0 right-0 items-end justify-between'>
                        <div className='text-stone-500'>
                            <p className='font-bold text-xs md:text-lg line-through'>{prop?.data?.price.toLocaleString()} đ</p>
                            <p className='font-bold text-xs md:text-xl text-blue-500'>{prop?.data?.unitPrice.toLocaleString()} đ</p>
                        </div>
                        <div className='text-stone-600 flex flex-col items-end'>
                            <div className='flex items-center text-sm md:text-xl'>
                                <Button onClick={() => decrease(prop?.data?._id)} className='rounded-none px-1 md:px-3'>
                                    <i className="fa-solid fa-minus"></i>
                                </Button>
                                <input htmltype='text' className='bg-stone-100 w-5 md:w-14 text-center h-8 border-solid' disabled value={prop?.data?.quanlity} />
                                <Button onClick={() => increase(prop?.data?._id)} className='rounded-none px-1 md:px-3'>
                                    <i className="fa-solid fa-plus"></i>
                                </Button>
                            </div>
                            <div className='total-price mt-1'>
                                <p className='font-semibold block md:inline-block text-xs md:text-lg'>Thành tiền: </p>
                                <p className='text-red-500 block md:inline-block font-bold text-xs md:text-xl'> {(prop?.data?.unitPrice * prop?.data?.quanlity).toLocaleString()} đ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default CartProduct