
import {Link} from 'react-router-dom'

import { Result} from 'antd'


const NotFound = function(){

   
  
  return (
    <>
      <div className="md:pt-3 pt-52 dark:bg-slate-900">
          <div className='mx-5 xl:mx-32 mt-5 pb-5 dark:bg-slate-900 shadow-xl dark:text-white'>
            <Result
                className='font-medium'
                status="404"
                title= {<span className='dark:text-white'>Không tìm thấy trang này !!!</span>}
                subTitle={<span className='dark:text-white'>Xin lỗi ! Trang bạn truy cập hiện không tồn tại trong hệ thống. Bạn vui lòng nhập đúng đường dẫn</span>}
                extra={<Link to={"/"} className='py-2 rounded-xl px-5 bg-blue-500 text-white font-medium text-lg'>Quay lại trang chủ</Link>}
            />
          </div>
          
      </div>
    </> 
  );
}

export default NotFound;