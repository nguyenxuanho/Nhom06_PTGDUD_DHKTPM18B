import {Link} from 'react-router-dom'


const Sitemap = function(){

  return (
    <>
      <div className="md:pt-3 pt-52 bg-slate-50">
        
          <div className='mx-5 md:mx-32 content-header flex items-center flex-wrap'>
              <Link to="/" className="font-medium text-lg text-stone-500 mr-3 header-nav active">Trang chủ</Link>
              <i className="fa-solid fa-chevron-right text-stone-500 mr-3"></i>
              <h3 className="font-medium text-lg text-stone-500 mr-3">Sitemap</h3>
          </div>
          
          <h3 className='text-center mx-5 md:mx-32 uppercase py-4 my-5 font-bold text-xl md:text-3xl'>Sitemap</h3>
          
      </div>
    </> 
  );
}

export default Sitemap;