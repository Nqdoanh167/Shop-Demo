import './login.scss';
import '../../grid.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';
function Logins({ setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMessage, setErrMessage] = useState('');
    const navigate = useNavigate();
    const handleLoginApi = (userEmail, userPassword) => {
        return axios.post('https://data-bebasic.onrender.com/api/v1/login', {
            email: userEmail,
            password: userPassword,
        });
    };

    const handleOnChangeEmail = (e) => {
        setEmail(e);
    };
    const handleOnChangePassword = (e) => {
        setPassword(e);
    };
    const handleSubmit = async () => {
        setLoading(true);
        setErrMessage('');
        try {
            let data = await handleLoginApi(email, password);
            let user = data.data.dataAcc;
            if (data && data.data.errCode !== 0) {
                setErrMessage(data.data.errMessage);
                setLoading(false);
            }
            if (data && data.data.errCode === 0) {
                setUser(true);
                delete user.passwordAcc;
                localStorage.setItem('user', JSON.stringify(user));
                navigate('/');
            }
        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    setErrMessage(error.response.data.errMessage);
                }
            }
        }
    };

    const [loading, setLoading] = useState(false);

    const [info, setInfo] = useState({
        name: '',
        email: '',
    });
    const [open, setOpen] = useState(false);
    const handleOnchange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        console.log(info);
        try {
            let data = await axios.post('https://data-bebasic.onrender.com/api/v1/forgot-password', info);
            console.log(data);
            if (data && data.data.errCode !== 0) {
                alert(data.data.errMessage);
            }
            if (data && data.data.errCode === 0) {
                alert(data.data.message);
                setOpen(false);
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
        <div className="Login">
            <div className="form ">
                <h1>ĐĂNG NHẬP</h1>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="E-mail"
                        name="email"
                        onChange={(e) => handleOnChangeEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Mật khẩu"
                        name="password"
                        onChange={(e) => handleOnChangePassword(e.target.value)}
                    />
                    {errMessage && <span style={{ color: 'red', float: 'left' }}>{errMessage}</span>}
                </div>
                <div className="remember-forget">
                    <div className="remember">
                        <input type="checkbox" name="" id="" />
                        <span>Nhớ tôi</span>
                    </div>
                    <div className="forget">
                        <span style={{ cursor: 'pointer' }} onClick={() => setOpen(true)}>
                            Quên mật khẩu?
                        </span>
                        {open && (
                            <div className="modal ">
                                <div className="modal__container" style={{ width: '400px' }}>
                                    <h3>Quên mật khẩu</h3>
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="name">Nhập họ và tên</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="name"
                                                placeholder="Nhập họ và tên"
                                                onChange={handleOnchange}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email">Nhập email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                placeholder="Nhập email"
                                                onChange={handleOnchange}
                                            />
                                        </div>

                                        <button onClick={handleClick}>Gửi</button>
                                        <button onClick={() => setOpen(!open)} className="cancel">
                                            Hủy
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <button type="submit" className="btn-submit" onClick={handleSubmit}>
                    Đăng Nhập
                    {loading && (
                        <FadeLoader
                            color="#36d7b7"
                            height={7}
                            margin={-10}
                            radius={-4}
                            width={2}
                            className="load"
                            style={{ position: 'relative', top: '15px', left: '34px' }}
                        />
                    )}
                </button>

                <div className="login-with">
                    <span>Or Login With</span>
                </div>
                <div className="col-12 social-login">
                    <i className="fab fa-google-plus-g google"></i>
                    <i className="fab fa-facebook-f facebook"></i>
                </div>
                <div className="text-center">
                    <p>Không có tài khoản</p>
                    <span
                        onClick={() => {
                            navigate('/register');
                        }}
                    >
                        Đăng ký ngay
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Logins;
