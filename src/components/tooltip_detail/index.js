
const DetailTooltip = (prop) => {

    return (
        <>
           <div className="p-0 lg:block hidden" style={{maxWidth: "390px"}}>
                <h2 className="px-5 font-bold">{prop?.data?.title}</h2>
                <div className="bg-white dark:bg-blue-900 dark:text-white text-black px-5 dark:border-black border-stone-200 border-solid border-2">
                    <div className="my-2 py-3  border-stone-200 border-solid border-b-2">
                        <div className="flex items-center justify-between">
                            <h2 className="text-base">Giá bán: </h2>
                            <p className="relative top-0 font-bold dark:text-blue-300 text-blue-500">{(prop?.data?.price * (1 - prop?.data?.discount)).toLocaleString()} đ</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <h2 className="text-base mt-3">Bảo hành:</h2>
                            <p className="relative top-1.5 font-semibold">theo từng linh kiện</p>
                        </div>
                    </div>
                    <div className="my-2 py-3">
                        <h2 className="text-sm mb-3 font-bold bg-blue-100 text-blue-500 max-w-max px-3 py-1 rounded-3xl">Thông số sản phẩm</h2>
                        {
                            prop?.data 
                            && 
                            Object.entries(prop?.data?.description).map(([key, value]) => (
                                <p className="py-1">- {key}: {value}</p>
                            ))
                        }
                        <p className="py-1 text-justify">- Cấu hình máy chuyên phục vụ chạy giả lập Android Nox Player ,
                             Máy ảo VMWare Bluestack...Phục vụ chơi
                             Game nhiều acc như Võ Lâm Truyền Kỳ, Võ Lâm Mobile, MU, Phong Thần , Kiếm Thế...</p>


                    </div>
                </div>
            </div> 
        </>
    )
}

export default DetailTooltip;