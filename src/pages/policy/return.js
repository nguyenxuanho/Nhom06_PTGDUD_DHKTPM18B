import { useState } from "react";

const PolicyReturn = () => {
  const [selectedCategory, setSelectedCategory] = useState("Chính sách đổi trả");

  const categories = [
    "Chính sách đổi trả",
    "Bảo hành có cam kết",
    "Hư gì đổi nấy",
    "Chính sách hoàn tiền",
    "Lưu ý quan trọng",
  ];

  const content = {
    "Chính sách đổi trả": (
      <>
        <h1 className="text-2xl font-bold mb-4">Chính sách đổi trả</h1>
        <p>Chúng tôi cam kết mang đến sự hài lòng cho khách hàng với chính sách đổi trả linh hoạt và thuận tiện.</p>
        <h2 className="text-xl font-semibold mt-4">Điều kiện đổi trả</h2>
        <table className="w-full border-collapse border border-gray-300 mt-2">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Điều kiện</th>
              <th className="border border-gray-300 p-2">Chi tiết</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Tình trạng sản phẩm</td>
              <td className="border border-gray-300 p-2">Còn nguyên vẹn, không hư hại</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Phụ kiện đi kèm</td>
              <td className="border border-gray-300 p-2">Hộp, phụ kiện, hóa đơn đầy đủ</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Thời gian đổi trả</td>
              <td className="border border-gray-300 p-2">Trong vòng 7 ngày kể từ khi nhận hàng</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
    "Bảo hành có cam kết": (
      <>
        <h2 className="text-xl font-semibold">Bảo hành có cam kết (12 tháng)</h2>
        <table className="w-full border-collapse border border-gray-300 mt-2">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Loại bảo hành</th>
              <th className="border border-gray-300 p-2">Thời gian xử lý</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Sửa chữa</td>
              <td className="border border-gray-300 p-2">Tối đa 15 ngày</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Đổi mới</td>
              <td className="border border-gray-300 p-2">Nếu quá hạn bảo hành</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
    "Hư gì đổi nấy": (
      <>
        <h2 className="text-xl font-semibold">Hư gì đổi nấy ngay và luôn</h2>
        <ul className="list-disc pl-6">
          <li>Tháng đầu tiên: Miễn phí đổi sản phẩm mới.</li>
          <li>Tháng thứ 2 - 12: Phí đổi tính theo 10% giá trị hóa đơn/tháng.</li>
        </ul>
      </>
    ),
    "Chính sách hoàn tiền": (
      <>
        <h2 className="text-xl font-semibold">Chính sách hoàn tiền</h2>
        <ul className="list-disc pl-6">
          <li>Tháng đầu tiên: Phí 20% giá trị hóa đơn.</li>
          <li>Tháng thứ 2 - 12: Phí 10% giá trị hóa đơn/tháng.</li>
        </ul>
      </>
    ),
    "Lưu ý quan trọng": (
      <>
        <h2 className="text-xl font-semibold">⚠️ Lưu ý quan trọng</h2>
        <ul className="list-disc pl-6">
          <li>Không áp dụng hoàn tiền với một số nhóm sản phẩm đặc biệt.</li>
          <li>Phải hoàn trả đầy đủ hộp, sạc, phụ kiện đi kèm.</li>
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
          {categories.map((category) => (
            <li
              key={category}
              className={`p-2 rounded cursor-pointer ${selectedCategory === category ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Nội dung chính sách động */}
      <div className="w-2/4 bg-white p-6 rounded-lg shadow-md">
        {content[selectedCategory]}
      </div>

      {/* Phần quảng cáo bên phải */}
      <div className="w-1/4 bg-yellow-100 p-4 rounded-lg text-center shadow-md">
        <h2 className="text-lg font-semibold">🔥 Khuyến mãi HOT! 🔥</h2>
        <p>Giảm ngay 10% cho khách hàng đổi trả online.</p>
        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Đăng ký ngay</button>
      </div>
    </div>
  );
};

export default PolicyReturn;
