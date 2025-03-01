import { useState } from "react";

const PolicyShipping = () => {
  const [selectedPolicy, setSelectedPolicy] = useState("Chính sách giao hàng");

  const policies = {
    "Chính sách giao hàng": (
      <>
        <h1 className="text-2xl font-bold mb-4">Chính sách giao hàng</h1>
        <p className="text-sm text-gray-500">Áp dụng từ: 26/3/2021</p>
        <h2 className="text-xl font-semibold mt-4">1. PHẠM VI ÁP DỤNG</h2>
        <p>Những khu vực tỉnh thành có hệ thống cửa hàng, bao gồm:</p>
        <ul className="list-disc pl-6">
          <li>TP. Hồ Chí Minh - 123 Đường ABC, Quận 1</li>
          <li>Hà Nội - 456 Phố XYZ, Quận Hoàn Kiếm</li>
          <li>Đà Nẵng - 789 Đường LMN, Quận Hải Châu</li>
          <li>Cần Thơ - 321 Đường QRS, Quận Ninh Kiều</li>
        </ul>
      </>
    ),
    "Phương thức vận chuyển": (
      <>
        <h1 className="text-2xl font-bold mb-4">Phương thức vận chuyển</h1>
        <p>Chúng tôi sử dụng các đơn vị vận chuyển uy tín như Viettel Post, Giao Hàng Nhanh để đảm bảo hàng hóa đến tay khách hàng nhanh chóng.</p>
      </>
    ),
    "Thời gian giao hàng": (
      <>
        <h1 className="text-2xl font-bold mb-4">Thời gian giao hàng</h1>
        <p>Thời gian giao hàng cụ thể như sau:</p>
        <ul className="list-disc pl-6">
          <li><strong>Giao siêu nhanh:</strong> 0 - 20km, từ 1 - 2 tiếng</li>
          <li><strong>Giao tiêu chuẩn:</strong> 0 - 20km, từ 6 tiếng</li>
          <li><strong>Nội tỉnh - liên tỉnh:</strong> Từ 2 - 6 ngày</li>
        </ul>
        <p>Lưu ý:
          <ul>
          <li>Thời gian giao hàng trong ngày khu vực HCM từ: 9:00 - 21:00, các tỉnh khác từ: 9:00h - 20:00h</li>
          <li>Riêng giao nội tỉnh - liên tỉnh qua đối tác vận chuyển sẽ giao trước 18h</li>
          </ul>
         </p>
      </>
    ),
    "Chi phí vận chuyển": (
      <>
        <h1 className="text-2xl font-bold mb-4">Chi phí vận chuyển</h1>
        <p>Chi phí vận chuyển được tính như sau:</p>
        <ul className="list-disc pl-6">
          <li>Giỏ hàng từ 500.000đ trở lên: Miễn phí 10km đầu tiên, mỗi km tiếp theo 5.000đ/km</li>
          <li>Giỏ hàng dưới 500.000đ: 20.000đ cho 10km đầu tiên, mỗi km tiếp theo 5.000đ/km</li>
          <li>Giỏ hàng từ 2.000.000đ trở lên: Miễn phí giao hàng tiêu chuẩn</li>
        </ul>
      </>
    ),
  };

  return (
    <div className="flex gap-6 p-6">
      {/* Sidebar danh mục */}
      <div className="w-1/4 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Danh mục</h2>
        <ul className="space-y-2">
          {Object.keys(policies).map((policy) => (
            <li
              key={policy}
              className={`p-2 rounded cursor-pointer ${selectedPolicy === policy ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
              onClick={() => setSelectedPolicy(policy)}
            >
              {policy}
            </li>
          ))}
        </ul>
      </div>

      {/* Nội dung chính sách */}
      <div className="w-2/4 bg-white p-6 rounded-lg shadow-md">
        {policies[selectedPolicy]}
        <p className="mt-4 text-sm text-gray-500">Cập nhật lần cuối: 21/05/2024.</p>
      </div>

      {/* Phần quảng cáo bên phải */}
      <div className="w-1/4 bg-yellow-100 p-4 rounded-lg text-center shadow-md">
        <h2 className="text-lg font-semibold">🚚 Miễn phí vận chuyển! 🚚</h2>
        <p>Áp dụng cho đơn hàng trên 500.000đ.</p>
        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Mua ngay</button>
      </div>
    </div>
  );
};

export default PolicyShipping;
