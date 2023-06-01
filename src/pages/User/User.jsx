import { useNavigate } from 'react-router-dom';
import './user.scss';
import { AccountCircle } from '@mui/icons-material';
import { useState } from 'react';
import axios from 'axios';

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
    // doi mat khau
    const [change, setChange] = useState({
        idAcc: user.id,
        oldPassword: '',
        newPassword: '',
    });
    const [openchangepw, setOpenchangepw] = useState(false);
    const handleChangePassword = () => {
        setOpenchangepw(true);
    };
    const handleOnchangeP = (e) => {
        setChange((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSaveChangePassword = async (e) => {
        e.preventDefault();

        try {
            let data = await axios.post('https://data-bebasic.onrender.com/api/v1/change-password', change);

            if (data && data.data.errCode !== 0) {
                alert(data.data.errMessage);
            }
            if (data && data.data.errCode === 0) {
                alert(data.data.message);
                setOpenchangepw(false);
            }
        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    alert(error.response.data.errMessage);
                }
            }
        }
    };
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
                                <li onClick={handleChangePassword}>Đổi mật khẩu</li>
                                {openchangepw && (
                                    <div className="modal ">
                                        <div className="modal__container">
                                            <h3>Đổi mật khẩu</h3>
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="name">Email</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="name"
                                                        value={user.emailAcc}
                                                        disabled
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="oldPassword">Mật khẩu cũ</label>
                                                    <input
                                                        type="tel"
                                                        className="form-control"
                                                        name="oldPassword"
                                                        placeholder="Nhập mật khẩu cũ"
                                                        onChange={handleOnchangeP}
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="newPassword">Mật khẩu mới</label>
                                                    <input
                                                        type="tel"
                                                        className="form-control"
                                                        name="newPassword"
                                                        placeholder="Nhập mật khẩu mới"
                                                        onChange={handleOnchangeP}
                                                    />
                                                </div>
                                                <button onClick={handleSaveChangePassword}>Đổi mật khẩu</button>
                                                <button
                                                    onClick={() => setOpenchangepw(!openchangepw)}
                                                    className="cancel"
                                                >
                                                    Hủy
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                )}
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
                                                    value={user.nameAcc}
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
                                            <button onClick={() => setOpen(!open)} className="cancel">
                                                Hủy
                                            </button>
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
