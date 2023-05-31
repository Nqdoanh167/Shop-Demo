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
                        <a href="/">Quên mật khẩu?</a>
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
