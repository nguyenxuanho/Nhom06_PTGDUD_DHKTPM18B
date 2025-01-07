
import {Link} from 'react-router-dom'

import { Result} from 'antd'


const NotFound = function(){

   
  
  return (
    <>
      <div className="container pt-3 bg-slate-50">
          <div className='mx-32 my-5 bg-white shadow-xl'>
            <Result
                className='font-medium'
                status="404"
                title="Không tìm thấy trang này !!!"
                subTitle="Xin lỗi ! Trang bạn truy cập hiện không tồn tại trong hệ thống. Bạn vui lòng nhập đúng đường dẫn"
                extra={<Link to={"/"} className='py-2 rounded-xl px-5 bg-blue-500 text-white font-medium text-lg'>Quay lại trang chủ</Link>}
            />
          </div>
         
      </div>
    </> 
  );
}

export default NotFound;