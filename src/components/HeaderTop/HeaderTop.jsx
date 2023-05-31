import './headerTop.scss';
import '../../grid.css';
import { useNavigate } from 'react-router-dom';

export default function HeaderTop({ showLanguage, setShowLanguage, showMoney, setShowMoney, user }) {
    const navigate = useNavigate();

    return (
        <div className="headerTop grid wide">
            <div className=" row no-gutters ">
                <ul className="left col l-6 m-6 c-6">
                    <li className="item language" onClick={() => setShowLanguage(!showLanguage)}>
                        Việt nam
                        {showLanguage && (
                            <div className="language-wrapper">
                                <span
                                    className="language-item "
                                    onClick={() => {
                                        setShowLanguage(!showLanguage);
                                    }}
                                >
                                    Việt nam
                                </span>
                                <span
                                    className="language-item"
                                    onClick={() => {
                                        setShowLanguage(!showLanguage);
                                    }}
                                >
                                    English
                                </span>
                            </div>
                        )}
                    </li>

                    <li className="item language money" onClick={() => setShowMoney(!showMoney)}>
                        Vietnam VND
                        {showMoney && (
                            <div className="language-wrapper">
                                <span
                                    className="language-item "
                                    onClick={() => {
                                        setShowMoney(!showMoney);
                                    }}
                                >
                                    Vietnam VND
                                </span>
                                <span
                                    className="language-item"
                                    onClick={() => {
                                        setShowMoney(!showMoney);
                                    }}
                                >
                                    US Dollars $
                                </span>
                            </div>
                        )}
                    </li>
                </ul>
                <ul className="right col l-6 m-6 c-6">
                    <li className="item help">
                        <a href="/">Đường dây trợ giúp 0912746230</a>
                    </li>

                    {user ? (
                        <li
                            className="item"
                            onClick={() => {
                                navigate('/user');
                                window.scrollTo(0, 0);
                            }}
                        >
                            <span>Tài khoản </span>
                        </li>
                    ) : (
                        <>
                            <li className="item">
                                <span
                                    onClick={() => {
                                        navigate('/login');
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    Đăng nhập
                                </span>
                            </li>
                            <li className="item">
                                <span
                                    onClick={() => {
                                        navigate('/register');
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    Đăng ký
                                </span>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
}
