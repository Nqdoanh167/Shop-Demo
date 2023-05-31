import './cart.scss';
import { ShoppingCartOutlined, SentimentDissatisfiedOutlined, Close } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const handleRemove = (e) => {
        const carts = cart.filter((item) => item.id !== e.id);
        localStorage.setItem('cart', JSON.stringify(carts));
        window.location.reload();
    };
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();
    const cart = localStorage.hasOwnProperty('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    //buy
    const handleBuy = (item) => {
        setIsOpen(!isOpen);
        navigate('/cart');
        var buys = [];
        buys.push(item);
        localStorage.setItem('buy', JSON.stringify(buys));
        console.log(item);
    };
    return (
        <div id="cart">
            <div className="item no-cart ">
                <div className="item-wrap" onClick={(e) => setIsOpen(!isOpen)}>
                    <ShoppingCartOutlined className="icon" />
                    <span className="text">Giỏ hàng</span>
                    <span className="badge">{cart.length}</span>
                </div>
                {isOpen &&
                    (cart && cart.length > 0 ? (
                        <div className="has-cart-wrapper">
                            <h3 className="title">Sản phẩm trong giỏ hàng</h3>
                            {cart &&
                                cart.length > 0 &&
                                cart.map((item) => (
                                    <div className="product-cart" key={item.id} onClick={() => handleBuy(item)}>
                                        <img src={item.imageP} alt="" />
                                        <div className="desc">
                                            <h4>{item.nameP}</h4>
                                            <span>{`${item.quantityP} x ${item.priceP}`}</span>
                                        </div>
                                        <span className="close">
                                            <Close onClick={() => handleRemove(item)} />
                                        </span>
                                    </div>
                                ))}

                            <div className="btn-cart">
                                <button
                                    onClick={() => {
                                        localStorage.removeItem('cart');
                                        setIsOpen(false);
                                    }}
                                >
                                    Clear giỏ hàng
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="no-cart-wrapper">
                            <SentimentDissatisfiedOutlined className="no-cart-icon" />
                            <span className="no-cart-text">Your Cart is empty</span>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Cart;
