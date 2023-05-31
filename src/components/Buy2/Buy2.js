import { useState } from 'react';
import './buy2.scss';
import { useNavigate } from 'react-router-dom';
export default function Buy1() {
    const navigate = useNavigate();

    const [infoUser, setInfoUser] = useState({
        name: '',
        phone: '',
        address: '',
    });
    const handleOnchange = (e) => {
        setInfoUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleAdd = () => {
        if (infoUser.name === '') alert('Vui lòng nhập họ tên');
        else if (infoUser.phone === '') alert('Vui lòng nhập số điện thoại');
        else if (infoUser.address === '') alert('Vui lòng nhập địa chỉ');
        else {
            localStorage.setItem('infoUser', JSON.stringify(infoUser));
            navigate('/checkinfo');
        }
    };
    return (
        <>
            <div className="bottomProductBuy">
                <div className="container ">
                    <h3>Thông tin khách hàng</h3>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Họ và tên:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Nhập họ và tên"
                                onChange={handleOnchange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Số điện thoại:</label>
                            <input
                                type="tel"
                                className="form-control"
                                name="phone"
                                placeholder="Nhập số điện thoại"
                                onChange={handleOnchange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="address">Địa chỉ giao hàng:</label>
                            <textarea
                                className="form-control"
                                name="address"
                                rows="3"
                                placeholder="Nhập địa chỉ giao hàng"
                                onChange={handleOnchange}
                            ></textarea>
                        </div>
                    </form>
                </div>

                <div className="return-continue">
                    <div className="return" onClick={() => navigate('/')}>
                        Quay lại cửa hàng
                    </div>
                    <button className="continue" onClick={handleAdd}>
                        Tiếp tục đến thông tin giao hàng
                    </button>
                </div>
            </div>
        </>
    );
}
