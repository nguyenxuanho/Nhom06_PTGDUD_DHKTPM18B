import {Link} from 'react-router-dom'

const Policy = function(){
  
  return (
    <>
      <div className="container pt-3 bg-slate-50">
        
          <div className='mx-32 content-header flex items-center'>
              <Link to="/" className="font-medium text-lg text-stone-500 mr-3 header-nav active">Trang chủ</Link>
              <i className="fa-solid fa-chevron-right text-stone-500 mr-3"></i>
              <h3 className="font-medium text-lg text-stone-500 mr-3">Chính sách</h3>
          </div>
          
          {/* Code ở dòng này */}


      </div>
    </> 
  );
}

export default Policy;