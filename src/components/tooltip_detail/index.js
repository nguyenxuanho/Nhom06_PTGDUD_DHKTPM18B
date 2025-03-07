
const DetailTooltip = () => {


    return (
        <>
           <div className="p-0 lg:block hidden" style={{maxWidth: "390px"}}>
                <h2 className="px-5 font-bold">HHPC CORE i7 12700K | 32GB | NVIDIA RTX 3050 6G</h2>
                <div className="bg-white dark:bg-blue-900 dark:text-white text-black px-5 dark:border-black border-stone-200 border-solid border-2">
                    <div className="my-2 py-3  border-stone-200 border-solid border-b-2">
                        <div className="flex items-center justify-between">
                            <h2 className="text-base">Giá bán: </h2>
                            <p className="relative top-0 font-bold dark:text-blue-300 text-blue-500">12,000,000 đ</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <h2 className="text-base mt-3">Bảo hành:</h2>
                            <p className="relative top-1.5 font-semibold">theo từng linh kiện</p>
                        </div>
                    </div>
                    <div className="my-2 py-3">
                        <h2 className="text-sm mb-3 font-bold bg-blue-100 text-blue-500 max-w-max px-3 py-1 rounded-3xl">Thông số sản phẩm</h2>
                        <p className="py-1">- CPU: 2 x XEON E5 2680V4 TURBO 3.3G - 28 CORE / 56 THREAD</p>
                        <p className="py-1">- RAM : 64GB ECC REGISTERED TỰ SỬA LỖI</p>
                        <p className="py-1">- VGA : NVIDIA GT 730 2GB GDDR3</p>
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