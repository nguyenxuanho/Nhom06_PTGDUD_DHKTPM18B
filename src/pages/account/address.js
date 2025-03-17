import { Link } from 'react-router-dom'
import { Button, Form, Input, Select } from 'antd'
import { useUser } from '../../components/layout/index';
import { toast } from 'react-toastify';
import { patch } from '../../components/utils/request';



const Address = function () {
    const { inforUser, setRefresh, refresh } = useUser();
    const layout = {
        labelCol: {
            span: 4,
        },
        wrapperCol: {
            span: 20,
        },
    };

    const addAddress = async (data) => {
        Object.keys(data).forEach(key => {
            if (data[key] === undefined) {
                delete data[key];
            }
        });
        if (data.city === undefined && data.district === undefined && data.number_home === undefined) {
            toast.error("Không được để trống !!")
            return;
        }

        if (data.city === "" && data.district === "" && data.number_home === "") {
            toast.error("Không được để trống !!")
            return;
        }


        const address = (data.city ? data.city + ", " : "")
            + (data.district ? data.district + ", " : "")
            + (data.number_home ? data.number_home : "")

        const addressUser = [...inforUser.address, address];


        const statusUpdate = await patch(`users/${inforUser._id}`, { address: addressUser })
        if (statusUpdate.code === 200) {
            toast.success("Thêm địa chỉ mới thành công");
            setRefresh(!refresh);
        } else toast.success("Thêm địa chỉ thất bại");
    }

    const handleDeleteAddress = async (data) => {
        if(data.city === undefined || data.city === "default"){
            toast.error("Vui lòng chọn địa chỉ cần xóa !!")
            return;
        }

        const address = inforUser.address.filter(item => item !== data.city);

        const statusUpdate = await patch(`users/${inforUser._id}`, { address: address })
        if (statusUpdate.code === 200) {
            toast.success("Xóa địa chỉ thành công");
            setRefresh(!refresh);
        } else toast.success("Xóa thất bại");

    }


    return (
        <>
            <div className="md:pt-3 pt-52 bg-slate-50 dark:bg-slate-900 dark:text-white">

                <div className='mx-5 xl:mx-32 content-header flex items-center flex-wrap'>
                    <Link to="/" className="font-medium text-lg text-stone-500 dark:text-white mr-3 header-nav active">Trang chủ</Link>
                    <i className="fa-solid fa-chevron-right text-stone-500 mr-3"></i>
                    <h3 className="font-medium text-lg text-stone-500 dark:text-white mr-3">Account</h3>
                </div>
                <div className='mx-5 xl:mx-32 my-5 grid grid-flow-row grid-cols-12 gap-0 lg:gap-9'>
                    <div className='col-span-12 lg:col-span-3'>
                        <div className='flex items-center'>
                            <i className='fas fa-user-circle text-5xl text-blue-600'></i>
                            <div className='mx-4'>
                                <h6 className='text-base font-semibold dark:text-white'>Tài khoản của,</h6>
                                <h1 className='font-bold text-lg dark:text-white'>{inforUser?.fullname}</h1>
                            </div>
                        </div>
                        <ul className='pl-0 my-5'>
                            <Link className='font-medium block my-3 py-3 hover:bg-blue-400 dark:bg-gray-200 hover:text-white px-5 bg-stone-200 rounded-lg text-stone-600' to={"/account/detail"}>
                                <li className='inline-block'>
                                    <i className="fa-regular fa-user w-9"></i>
                                    <span className='font-medium'>Thông tin tài khoản</span>
                                </li>
                            </Link>
                            <Link className='font-medium block my-3 py-3 hover:bg-blue-400 dark:bg-gray-200 hover:text-white px-5 bg-stone-200 rounded-lg text-stone-600' to={"/account/order"}>
                                <li className='inline-block'>
                                    <i className="far fa-list-alt w-9"></i>
                                    <span className='font-medium'>Danh sách đơn hàng</span>
                                </li>
                            </Link>
                            <Link className='font-medium block my-3 py-3 bg-blue-400 text-white  px-5 rounded-lg' to={"/account/address"}>
                                <li className='inline-block'>
                                    <i className="fa-solid fa-location-dot w-9"></i>
                                    <span className='font-medium'>Thêm địa chỉ mới</span>
                                </li>
                            </Link>
                            <Link className='font-medium block my-3 py-3 hover:bg-blue-400 hover:text-white  dark:bg-gray-200 px-5 bg-stone-200 rounded-lg text-stone-600' to={"/account/password"}>
                                <li className='inline-block'>
                                    <i className="fas fa-lock w-9"></i>
                                    <span className='font-medium'>Thay đổi mật khẩu</span>
                                </li>
                            </Link>
                            <Link className='font-medium block my-3 py-3 hover:bg-blue-400 hover:text-white px-5 dark:bg-gray-200 bg-stone-200 rounded-lg text-stone-600' to={"/user/login"}>
                                <li className='inline-block'>
                                    <i className="fas fa-sign-out-alt w-9"></i>
                                    <span className='font-medium'>Đăng xuất</span>
                                </li>
                            </Link>

                        </ul>
                    </div>
                    <div className='col-span-12 lg:col-span-9 p-6 bg-white dark:bg-gray-800 dark:text-white rounded-2xl shadow-xl'>
                        <h2 className='text-xl font-bold pb-3 border-solid border-b-2 border-blue-200 dark:border-slate-900'>Thêm địa chỉ giao hàng</h2>
                        <Form {...layout} onFinish={addAddress} labelAlign='left' className='my-5'>
                            <Form.Item className='font-bold text-3xl ' name="city" label={<span className="dark:text-white" colon={false}>Tỉnh/Tp</span>}>
                                <Input className='font-normal py-2 text-base dark:bg-gray-400' placeholder='Nhập tỉnh bạn ở hiện tại' />
                            </Form.Item>
                            <Form.Item className='font-bold text-3xl' name="district" label={<span className="dark:text-white">Huyện/Quận</span>}>
                                <Input className='font-normal py-2 text-base dark:bg-gray-400' placeholder='Nhập huyện/quận bạn ở hiện tại' />
                            </Form.Item>
                            <Form.Item className='font-bold text-3xl' name="number_home" label={<span className="dark:text-white">Số Nhà</span>}>
                                <Input className='font-normal py-2 text-base dark:bg-gray-400' placeholder='Nhập số nhà địa chỉ của bạn' />
                            </Form.Item>
                            <Form.Item labelCol={4} wrapperCol={{ offset: 4 }} className='text-transparent overflow-hidden'>
                                <Button className='bg-red-500 dark:bg-red-600 w-4/5 lg:w-auto button text-white font-bold p-5' type='default' htmlType='submit'>Thêm địa chỉ</Button>
                            </Form.Item>
                        </Form>

                        <h2 className='text-xl font-bold pb-3 border-solid border-b-2 dark:border-slate-900 border-blue-200'>Xóa địa chỉ giao hàng</h2>
                        {inforUser._id &&
                            <Form {...layout} onFinish={handleDeleteAddress} labelAlign='left' className='my-5'>
                                <Form.Item className='font-bold text-3xl' name="city" label={<span className="dark:text-white">Chọn địa chỉ</span>}>
                                    <Select className='font-normal text-base dark:bg-gray-400' placeholder='Chọn địa chỉ cần xóa' defaultValue={"default"}>
                                        <Select.Option value="default">Chọn địa chỉ</Select.Option>
                                        {inforUser.address.map((item, index) => (
                                            <Select.Option key={index} value={item}>{item}</Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                                <Form.Item labelCol={4} wrapperCol={{ offset: 4 }} className='text-transparent overflow-hidden'>
                                    <Button className='bg-yellow-500 dark:bg-yellow-600 w-4/5 lg:w-auto button text-white font-bold p-5' type='default' htmlType='submit'>Xóa địa chỉ</Button>
                                </Form.Item>
                            </Form>
                        }
                    </div>

                </div>

            </div>
        </>
    );
}

export default Address;