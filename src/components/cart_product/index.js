import { Button, Image, Tooltip } from "antd"


const CartProduct = () => {
    return (
        <>
        <Tooltip title="prompt text" arrow={false} color="red" >
            <div className='cart-product-item flex gap-3 p-4 border-solid border-2 border-stone-100'>
                <div className='basis-1/6'>
                    <Image width={100} src='https://hoanghapccdn.com/media/product/250_4550_hhpc_anubis_pro_4fx_ram_rgb_ha1.jpg' />
                </div>
                <div className='basis-5/6 relative'>
                    <div className='flex absolute top-0 left-0 right-0 items-center justify-between'>
                        <h2 className='hover:text-blue-500 cursor-pointer w-4/5 line-clamp-1'>
                            <span className='font-bold text-red-500'>[DEAL] </span>
                            HHPC CORE i9 14900K | 32G | NVIDIA RTX 3060 12GB
                        </h2>
                        <i className="hover:text-red-600 text-lg cursor-pointer fa-regular fa-trash-can"></i>
                    </div>
                    <div className='flex absolute bottom-0 left-0 right-0 items-center justify-between'>
                        <div className='text-stone-500'>
                            <p className='font-bold text-lg line-through'>29.990.000 VNĐ</p>
                            <p className='font-bold text-xl text-blue-500'>20.990.000 VNĐ</p>
                        </div>
                        <div className='text-stone-600 flex flex-col items-end'>
                            <div className='flex items-center'>
                                <Button className='rounded-none px-3'>
                                    <i className="fa-solid fa-minus"></i>
                                </Button>
                                <input htmltype='text' className='bg-stone-100 w-14 text-center h-8 border-solid' disabled value={1} />
                                <Button className='rounded-none px-3'>
                                    <i className="fa-solid fa-plus"></i>
                                </Button>
                            </div>
                            <div className='total-price mt-2'>
                                <span className='font-semibold'>Thành tiền: </span>
                                <span className='text-red-500 text-xl font-semibold'>20.990.000 đ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Tooltip>
        </>
    )
}

export default CartProduct