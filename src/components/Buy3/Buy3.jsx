import './buy3.scss';
import { useNavigate } from 'react-router-dom';

export default function Buy1() {
    const navigate = useNavigate();
    const buy = localStorage.hasOwnProperty('buy') ? JSON.parse(localStorage.getItem('buy')) : [];
    return (
        <>
            <div className="bottomProductBuy">
                <h4>Các sản phẩm</h4>
                <hr />
                <div className="list-product">
                    {buy &&
                        buy.length > 0 &&
                        buy.map((item) => (
                            <div className="product-transport" key={item.id}>
                                <img src={item.imageP} alt="" />
                                <span className="product-name">{item.nameP}</span>
                                <hr />
                            </div>
                        ))}
                </div>

                <div className="return-continue">
                    <div className="return" onClick={() => navigate('/')}>
                        Quay lại cửa hàng
                    </div>
                    <button className="continue" onClick={() => navigate('/payment')}>
                        Tiếp tục thanh toán
                    </button>
                </div>
            </div>
        </>
    );
}
