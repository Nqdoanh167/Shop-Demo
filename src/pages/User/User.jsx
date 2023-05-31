import { useNavigate } from 'react-router-dom';
import './user.scss';
import { AccountCircle } from '@mui/icons-material';
import { useState } from 'react';

export default function User({ setUser, setIdAcc }) {
    const navigate = useNavigate();
    const user = localStorage.hasOwnProperty('user') ? JSON.parse(localStorage.getItem('user')) : [];
    const idAcc = user.id;
    setIdAcc(idAcc);
    const [infoUser, setInfoUser] = useState({
        name: '',
        phone: '',
        address: '',
    });
    const [open, setOpen] = useState(false);
    const handleEdit = () => {
        setOpen(!open);
    };
    const handleSave = () => {
        setOpen(!open);
        localStorage.setItem('infoUser', JSON.stringify(infoUser));
    };
    const handleOnchange = (e) => {
        setInfoUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const info = localStorage.hasOwnProperty('infoUser') ? JSON.parse(localStorage.getItem('infoUser')) : [];
    return (
        <div className="wrapUser">
            <div className="grid wide">
                <div className="row no-gutters">
                    <div className="left-bar col l-3 m-3 c-3">
                        <div className="left-bar-wrap">
                            <div className="user-wrap">
                                <AccountCircle className="user-icon" />

                                <div className="user-name">{info.name ? info.name : user.nameAcc}</div>
                                <button
                                    className="user-btn"
                                    onClick={() => {
                                        setUser(false);
                                        navigate('/login');
                                        localStorage.removeItem('user');
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    Đăng xuất
                                </button>
                            </div>
                            <ul>
                                <li onClick={() => navigate('/buy')}>Đơn hàng của tôi</li>
                                <li>Đổi mật khẩu</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-bar col l-9 m-9 c-9">
                        <div className="right-bar-wrap">
                            <h3>Thông tin cá nhân</h3>
                            <hr />
                            <ul>
                                <li>Họ và tên: {info.name ? info.name : user.nameAcc}</li>
                                <li>Địa chỉ Email: {user.emailAcc}</li>
                                <li>Điện thoại: {info.phone ? info.phone : ''}</li>
                                <li>Địa chỉ: {info.address ? info.address : ''}</li>
                            </ul>
                            <button className="user-edit" onClick={handleEdit}>
                                Sửa thông tin cá nhân
                            </button>
                            {open && (
                                <div className="modal ">
                                    <div className="modal__container">
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
                                                <label htmlFor="address">Địa chỉ :</label>
                                                <textarea
                                                    className="form-control"
                                                    name="address"
                                                    rows="3"
                                                    placeholder="Nhập địa chỉ "
                                                    onChange={handleOnchange}
                                                ></textarea>
                                            </div>
                                            <button onClick={handleSave}>UpDate</button>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
