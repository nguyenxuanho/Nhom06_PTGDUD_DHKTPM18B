import { Link, Route, Routes } from "react-router-dom";
import PolicyWarranty from "./warranty";
import PolicyReturn from "./return";
import PolicyShipping from "./shipping";

const Policy = function () {
  return (
    <>
      <div className="md:pt-3 pt-52 bg-slate-50">
        <div className="mx-32 content-header flex items-center">
          <Link to="/" className="font-medium text-lg text-stone-500 mr-3 header-nav active">Trang chủ</Link>
          <i className="fa-solid fa-chevron-right text-stone-500 mr-3"></i>
          <h3 className="font-medium text-lg text-stone-500 mr-3">Chính sách</h3>
        </div>

        {/* Thêm navigation các chính sách */}
        <div className="mx-32 mt-6 flex space-x-6">
          <Link to="/policy/warranty" className="text-blue-600 hover:underline">Chính sách bảo hành</Link>
          <Link to="/policy/return" className="text-blue-600 hover:underline">Chính sách đổi trả</Link>
          <Link to="/policy/shipping" className="text-blue-600 hover:underline">Chính sách giao hàng</Link>
        </div>

        {/* Hiển thị nội dung chính sách tương ứng */}
        <div className="mx-32 mt-6 p-6 bg-white rounded shadow">
          <Routes>
            <Route path="warranty" element={<PolicyWarranty />} />
            <Route path="return" element={<PolicyReturn />} />
            <Route path="shipping" element={<PolicyShipping />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Policy;
