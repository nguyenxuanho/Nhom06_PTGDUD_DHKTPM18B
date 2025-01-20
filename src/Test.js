import { Image } from 'antd';
import React from 'react';
import Slider from 'react-slick';

// Cài đặt Slick
const settings = {
    dots: true,          // Hiển thị các chấm điều hướng
    infinite: true,      // Cho phép vòng lặp vô hạn
    speed: 500,          // Thời gian chuyển slide (ms)
    slidesToShow: 2,     // Số lượng slide hiển thị
    slidesToScroll: 2,   // Số slide cuộn mỗi lần
    draggable: true,     // Cho phép kéo chuột
};

const Carousel = () => {
    return (
        <Slider {...settings}>
                <Image
                    src='https://hoanghapccdn.com/media/banner/19_12-396775e024dad81b1084c0dc4ed14390.jpg'
                    preview={false}
                    className='rounded'
                    alt="AnhGiangSinh"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // Đảm bảo ảnh phủ toàn bộ Carousel
                    }}
                />

                <Image
                    src='https://hoanghapccdn.com/media/banner/04_11-dca01f31346b48ad8656ccd1ea50432a.jpg'
                    preview={false}
                    className='rounded'
                    alt="AnhGiangSinh"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // Đảm bảo ảnh phủ toàn bộ Carousel
                    }}
                />

                <Image
                    src='https://hoanghapccdn.com/media/banner/30_11-0861730b0853038b309107cc73c47fca.jpg'
                    preview={false}
                    className='rounded object-cover'
                    alt="AnhGiangSinh"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // Đảm bảo ảnh phủ toàn bộ Carousel
                    }}
                />

                <Image
                    src='https://hoanghapccdn.com/media/banner/08_08-4c3b1c18af0454d4ede41f9d926b5144.jpg'
                    preview={false}
                    className='rounded object-cover'
                    alt="AnhGiangSinh"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // Đảm bảo ảnh phủ toàn bộ Carousel
                    }}
                />

                <Image
                    src='https://hoanghapccdn.com/media/banner/30_11-c9a3ef925ef41a91115da0938bf91b34.jpg'
                    preview={false}
                    className='rounded'
                    alt="AnhGiangSinh"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // Đảm bảo ảnh phủ toàn bộ Carousel
                    }}
                />

                {/* Thêm các slide khác nếu cần */}
        </Slider>
    );
};

export default Carousel;
