import './register.scss';
import '../../grid.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';
function Registers() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleRegisterApi = (userName, userEmail, userPassword) => {
        return axios.post('https://data-bebasic.onrender.com/api/v1/register-member', {
            nameAcc: userName,
            emailAcc: userEmail,
            passwordAcc: userPassword,
        });
    };
    const handleOnChangeName = (e) => {
        setName(e);
    };
    const handleOnChangeEmail = (e) => {
        setEmail(e);
    };
    const handleOnChangePassword = (e) => {
        setPassword(e);
    };
    const handleOnChangePassword2 = (e) => {
        setPassword2(e);
    };
    //  const handleSubmit = async () => {
    //      try {
    //          if (password === password2) {
    //              await handleRegisterApi(name, email, password);
    //              navigate('/login');
    //          } else {
    //              setMessage('Nhập lại mật khẩu');
    //          }
    //      } catch (error) {
    //          console.log(error);
    //      }
    //  };
    const handleSubmit = async () => {
        setMessage('');
        setLoading(true);
        if (password === password2) {
            try {
                let data = await handleRegisterApi(name, email, password);
                console.log(data);
                if (data && data.data.errCode !== 0) {
                    setMessage(data.data.errMessage);
                    setLoading(false);
                }
                if (data && data.data.errCode === 0) {
                    navigate('/login');
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.data) {
                        setMessage(error.response.data.errMessage);
                    }
                }
            }
        } else {
            setMessage('Nhap lai mat khau');
            setLoading(false);
        }
    };
    const [loading, setLoading] = useState(false);
    return (
        <>
            <div className="Register">
                <div className="form-register ">
                    <h1>ĐĂNG KÝ</h1>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Họ và tên"
                            onChange={(e) => handleOnChangeName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="E-mail"
                            onChange={(e) => handleOnChangeEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Mật khẩu"
                            onChange={(e) => handleOnChangePassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Xác nhận mật khẩu"
                            onChange={(e) => handleOnChangePassword2(e.target.value)}
                        />
                        {message && <span style={{ color: 'red', float: 'left' }}>{message}</span>}
                    </div>

                    <div className="remember-forget">
                        <input type="checkbox" name="" id="" />
                        <span>Bằng cách đăng ký, bạn đồng ý với các điều khoản và điều kiện của chúng tôi.</span>
                    </div>

                    <button type="submit" className="btn-submit" onClick={handleSubmit}>
                        Đăng ký
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
                        <span>Or Join With</span>
                    </div>
                    <div className="col-12 social-login">
                        <i className="fab fa-google-plus-g google"></i>
                        <i className="fab fa-facebook-f facebook"></i>
                    </div>
                    <div className="text-center">
                        <p>Bạn đã có tài khoản</p>
                        <span
                            onClick={() => {
                                navigate('/login');
                            }}
                        >
                            Đăng nhập
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Registers;
