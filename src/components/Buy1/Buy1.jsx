import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clear } from '@mui/icons-material';
import './buy1.scss';
export default function Buy1({ setSelected }) {
    const navigate = useNavigate();
    const handleRemove = () => {
        localStorage.removeItem('buy');
        window.location.reload();
    };
    const buy = localStorage.hasOwnProperty('buy') ? JSON.parse(localStorage.getItem('buy')) : [];
    const quantity = buy[0] && buy[0].countP;
    const [value, setValue] = useState(buy[0] && buy[0].quantityP);
    const handleClickPlus = () => {
        setValue(value < quantity ? value + 1 : quantity);
    };
    const handleClickMinus = () => {
        setValue(value > 1 ? value - 1 : 0);
    };

    return (
        <>
            <div className="bottomProductBuy">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sản phẩm</th>
                            <th>Giá</th>

                            <th>Số Lượng</th>
                            <th>Toàn Bộ</th>
                            <th>Xóa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {buy &&
                            buy.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <div className="product-transport">
                                            <img src={item.imageP} alt="" />
                                            <span className="product-name">{item.nameP}</span>
                                        </div>
                                    </td>
                                    <td>
                                        {item.priceP.toLocaleString('it-IT', {
                                            style: 'currency',
                                            currency: 'VND',
                                        })}
                                    </td>

                                    <td>
                                        <div className="wrap">
                                            <button className="minus" onClick={handleClickMinus}>
                                                -
                                            </button>
                                            <input
                                                type="text"
                                                onChange={(e) => setValue(e.target.value)}
                                                value={value}
                                            />
                                            <button className="plus" onClick={() => handleClickPlus()}>
                                                +
                                            </button>
                                        </div>
                                    </td>

                                    <td>
                                        {(value * item.priceP).toLocaleString('it-IT', {
                                            style: 'currency',
                                            currency: 'VND',
                                        })}
                                    </td>

                                    <td>
                                        <Clear className="icon-clear" onClick={handleRemove} />
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <div className="Subtotal">
                    <div className="Subtotal-text">Tổng phụ</div>
                    <div className="Subtotal-price">
                        {buy[0] &&
                            (value * buy[0].priceP).toLocaleString('it-IT', {
                                style: 'currency',
                                currency: 'VND',
                            })}
                    </div>
                </div>
                <div className="return-continue">
                    <div className="return" onClick={() => navigate('/')}>
                        Quay lại cửa hàng
                    </div>
                    <button
                        className="continue"
                        onClick={() => {
                            navigate('/checkout');
                            buy[0].quantityP = value;
                            localStorage.setItem('buy', JSON.stringify(buy));
                        }}
                    >
                        Tiếp tục vận chuyển
                    </button>
                </div>
            </div>
        </>
    );
}
