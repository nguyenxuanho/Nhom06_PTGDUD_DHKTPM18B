import { useState } from "react";
import { FaShieldAlt, FaTools, FaRegCheckCircle, FaPhone, FaSearch } from "react-icons/fa";

const PolicyWarranty = () => {
  const [selectedSection, setSelectedSection] = useState("intro");
  const [serialNumber, setSerialNumber] = useState("");
  const [lookupType, setLookupType] = useState("");
  const [warrantyResult, setWarrantyResult] = useState(null);

  const sections = [
    { id: "intro", title: "Giới thiệu", icon: <FaShieldAlt /> },
    { id: "conditions", title: "Điều kiện bảo hành", icon: <FaRegCheckCircle /> },
    { id: "exceptions", title: "Trường hợp không bảo hành", icon: <FaTools /> },
    { id: "process", title: "Quy trình bảo hành", icon: <FaShieldAlt /> },
    { id: "support", title: "Liên hệ hỗ trợ", icon: <FaPhone /> },
    { id: "lookup", title: "Tra cứu bảo hành", icon: <FaSearch /> },
  ];

  const handleWarrantyLookup = () => {
    if (!lookupType) {
      setWarrantyResult("Vui lòng chọn loại tra cứu.");
      return;
    }

    if (serialNumber.trim() === "") {
      setWarrantyResult("Vui lòng nhập thông tin hợp lệ.");
      return;
    }

    const fakeData = {
      type: lookupType,
      input: serialNumber,
      status: serialNumber === "123456789" ? "Còn bảo hành" : "Hết hạn bảo hành",
      expireDate: "2025-12-31",
    };

    setWarrantyResult(fakeData);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      {/* Sidebar Menu */}
      <div className="w-full md:w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Danh mục</h2>
        <ul>
          {sections.map((section) => (
            <li
              key={section.id}
              className={`cursor-pointer flex items-center p-2 mb-2 rounded-md ${
                selectedSection === section.id ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => setSelectedSection(section.id)}
            >
              <span className="mr-2">{section.icon}</span> {section.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-2/4 bg-white p-6 rounded-lg shadow-md">
        {selectedSection === "intro" && (
          <>
            <h1 className="text-2xl font-bold mb-4">Chính sách bảo hành</h1>
            <p> Chúng tôi cam kết mang đến cho khách hàng những sản phẩm chính hãng và dịch vụ bảo hành tận tâm nhất.
            Chính sách bảo hành giúp khách hàng an tâm sử dụng sản phẩm và nhận được sự hỗ trợ nhanh chóng khi cần thiết.</p>
          </>
        )}

        {selectedSection === "conditions" && (
          <>
            <h2 className="text-xl font-semibold mb-4">Điều kiện bảo hành</h2>
            <ul className="list-disc pl-5">
              <li>Sản phẩm còn trong thời hạn bảo hành.</li>
              <li>Sản phẩm bị lỗi kỹ thuật do nhà sản xuất.</li>
              <li>Thời gian bảo hành tùy theo từng dòng sản phẩm, từ 12 - 36 tháng.</li>
              <li>Tem bảo hành phải còn nguyên vẹn, không bị rách hoặc mờ.</li>
              <li>Phiếu bảo hành hoặc hóa đơn mua hàng phải còn đầy đủ.</li>
              <li>Có đầy đủ hóa đơn mua hàng hoặc thông tin bảo hành.</li>
            </ul>
          </>
        )}

        {selectedSection === "exceptions" && (
          <>
            <h2 className="text-xl font-semibold mb-4">Trường hợp không bảo hành</h2>
            <ul className="list-disc pl-5">
              <li>Sản phẩm hư hỏng do tác động bên ngoài (rơi vỡ, va đập, nước vào, cháy nổ,...).</li>
              <li>Sản phẩm đã bị can thiệp sửa chữa bởi bên thứ ba không thuộc trung tâm bảo hành chính hãng.</li>
              <li>Không có hóa đơn hoặc giấy tờ chứng minh nguồn gốc sản phẩm.</li>
              <li>Sử dụng sai cách dẫn đến hỏng hóc.</li>
              <li>Số serial hoặc IMEI trên sản phẩm không trùng khớp.</li>
            </ul>
          </>
        )}

        {selectedSection === "process" && (
          <>
            <h2 className="text-xl font-semibold mb-4">Quy trình bảo hành</h2>
            <ol className="list-decimal pl-5">
              <li>Liên hệ trung tâm bảo hành qua hotline hoặc email.</li>
              <li>Gửi sản phẩm đến trung tâm bảo hành kèm theo hóa đơn.</li>
              <li>Nhân viên kiểm tra và xác nhận tình trạng sản phẩm.</li>
              <li>Thời gian bảo hành tùy thuộc vào từng lỗi cụ thể.</li>
              <li>Khách hàng nhận sản phẩm sau khi sửa chữa hoặc thay thế.</li>
            </ol>
          </>
        )}

        {selectedSection === "support" && (
          <>
            <h2 className="text-xl font-semibold mb-4">Liên hệ hỗ trợ</h2>
            <p>Hotline: <strong>1800-1234</strong></p>
            <p>Email: <strong>support@company.com</strong></p>
            <p>Thời gian làm việc: <strong>8h - 17h (Thứ 2 - Thứ 7)</strong></p>
          </>
        )}

        {selectedSection === "lookup" && (
          <>
            <h2 className="text-xl font-semibold mt-4">Tra cứu bảo hành</h2>
            <p className="mb-4">Vui lòng chọn loại tra cứu và nhập thông tin.</p>

            <div className="flex gap-4 mb-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="lookupType"
                  value="serial"
                  checked={lookupType === "serial"}
                  onChange={() => setLookupType("serial")}
                  className="mr-2"
                />
                Serial/IMEI
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="lookupType"
                  value="phone"
                  checked={lookupType === "phone"}
                  onChange={() => setLookupType("phone")}
                  className="mr-2"
                />
                Số điện thoại
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="lookupType"
                  value="invoice"
                  checked={lookupType === "invoice"}
                  onChange={() => setLookupType("invoice")}
                  className="mr-2"
                />
                Mã hóa đơn
              </label>
            </div>

            <div className="flex gap-2 mb-4">
              <input
                type="text"
                placeholder="Nhập thông tin"
                className="border p-2 rounded-md w-full"
                value={serialNumber}
                onChange={(e) => setSerialNumber(e.target.value)}
              />
              <button
                onClick={handleWarrantyLookup}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Tra cứu
              </button>
            </div>

            {warrantyResult && (
              <div className="bg-gray-100 p-4 rounded-md">
                {typeof warrantyResult === "string" ? (
                  <p className="text-red-500">{warrantyResult}</p>
                ) : (
                  <>
                    <p><strong>Loại tra cứu:</strong> {warrantyResult.type}</p>
                    <p><strong>Thông tin nhập:</strong> {warrantyResult.input}</p>
                    <p><strong>Trạng thái:</strong> {warrantyResult.status}</p>
                    <p><strong>Hạn bảo hành:</strong> {warrantyResult.expireDate}</p>
                  </>
                )}
              </div>
            )}
          </>
        )}
      </div>
    {/* Quảng cáo bên phải */}
    <div className="w-full md:w-1/4 p-4">
        <div className="bg-yellow-100 p-4 rounded-lg shadow-md text-center">
          <h2 className="text-lg font-semibold mb-2">🔥 Khuyến mãi HOT! 🔥</h2>
          <img
            src="https://via.placeholder.com/250x250"
            alt="Quảng cáo"
            className="w-full rounded-md mb-2"
          />
          <p className="text-sm">Giảm ngay 20% cho khách hàng đăng ký bảo hành online.</p>
          <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Đăng ký ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default PolicyWarranty;
