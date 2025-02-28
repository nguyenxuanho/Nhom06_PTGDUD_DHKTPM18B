import { Image, Tooltip } from "antd";
import DetailTooltip from "../tooltip_detail";

const CardProduct = (prop) => {

    const tooltipStyle = {
        // position: "fixed",
        // top: `${position.y - 35}px`,
        // left: `${position.x + 10}px`,
        // pointerEvents: "none", 
        // maxWidth: "max-content",
        width: "410px",
        zIndex: 1000,
    };



    return (
        <>
            <div className={'card rounded-lg bg-white ' + prop?.css} >
                    <Tooltip
                        title={<DetailTooltip />}
                        color="blue"
                        placement="rightTop"
                        className="pointer-events-none lg:pointer-events-auto"
                        overlayInnerStyle={tooltipStyle} // Custom style cho Tooltip
                    >
                        <div className='card-img hover:-translate-y-2 transition-all'>
                            <Image
                                src="https://hoanghapccdn.com/media/product/250_4429_hhpc_white_13900k_sky_two_ha1s.jpg"
                                className="w-250 h-200"
                            />
                        </div>
                    </Tooltip>
                <div className='card-content mb-3 text-center'>
                    <h2 className='font-medium cursor-pointer hover:text-blue-500 text-sm lg:text-base line-clamp-2'>
                        HHPC CORE i7 12700K | 32GB | NVIDIA RTX 3050 6G
                    </h2>
                    <h2 className='font-bold cursor-default text-xl my-1 text-blue-400'>
                        19,000,000 đ
                    </h2>
                    <div className='font-medium cursor-default text-xs my-1 '>
                        <span className='line-through text-slate-400 mr-2'>22,000,000 đ</span>
                        <span className='block lg:inline-block text-red-500'>(Tiết kiệm 12%)</span>
                    </div>

                </div>
                <div className='card-footer flex item-center justify-between'>
                    <div className='status text-xs md:text-base cursor-default'>
                        <div className='flex items-center text-green-600'>
                            <i className="fa-regular fa-circle-check mr-2"></i>
                            <p>Còn hàng</p>
                        </div>
                        <div className='flex items-center'>
                            <i className="fa-solid fa-gift mr-2"></i>
                            <p>Quà tặng</p>
                        </div>
                    </div>
                    <div className='text-base cart-icon flex items-center px-3 xl:px-6 cursor-pointer hover:text-white'>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardProduct;