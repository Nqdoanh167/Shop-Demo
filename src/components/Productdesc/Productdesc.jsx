import './productdesc.scss';
import '../../grid.css';
import Product from '../Product/Product';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Rating } from '@mui/material';
function Productdesc() {
    const navigate = useNavigate();

    //get all product
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('https://data-bebasic.onrender.com/api/v1/get-product');
            setProduct(res.data.data);
        };
        fetchPosts();
    }, []);

    //get product
    const [productCart, setProductCart] = useState([]);
    const param = useParams();
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`https://data-bebasic.onrender.com/api/v1/get-product?id=${param.slud}`);

            setProductCart(res.data.data);
        };
        fetchPosts();
    }, [param.slud]);

    const quantity = productCart.countP;
    const [value, setValue] = useState(1);
    const handleClickPlus = () => {
        setValue(value < quantity ? value + 1 : quantity);
    };
    const handleClickMinus = () => {
        setValue(value > 1 ? value - 1 : 0);
    };

    //add to cart
    productCart.totalMoney = productCart.quantityP * productCart.priceP;

    function checkInCart(productCart, cart) {
        var i;
        for (i = 0; i < cart.length; i++) {
            if (cart[i].id === productCart.id) {
                return true;
            }
        }
        return false;
    }
    const checkLogin = localStorage.hasOwnProperty('user');
    const addToCart = (productCart) => {
        var cart = localStorage.hasOwnProperty('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        var newCart = [];
        if (checkInCart(productCart, cart)) {
            cart.forEach((item, index) => {
                if (item.id === productCart.id) {
                    newCart.push({
                        ...item,
                        quantityP: item.quantityP + value,
                    });
                } else {
                    newCart.push(item);
                }
            });
        } else {
            cart.push({
                ...productCart,
                quantityP: value,
            });
            newCart = cart;
        }
        checkLogin ? localStorage.setItem('cart', JSON.stringify(newCart)) : navigate('/login');
        window.location.reload();
    };
    productCart.quantityP = value;

    //buy

    const handleBuy = (productCart) => {
        navigate('/cart');
        var buys = [];
        buys.push(productCart);
        checkLogin ? localStorage.setItem('buy', JSON.stringify(buys)) : navigate('/login');
    };
    const [star, setStar] = useState(0);
    const [comment, setComment] = useState('');
    const user = localStorage.hasOwnProperty('user') ? JSON.parse(localStorage.getItem('user')) : [];
    const handlefeedback = async () => {
        let feedback = {
            idAcc: user.id,
            idProduct: productCart.id,
            nameCustomer: user.nameAcc,
            email: user.emailAcc,
            content: comment ? comment : '',
            star: star,
        };
        if (comment === '' && star === 0) alert('Bạn chưa đánh giá');
        else {
            try {
                await axios.post('https://data-bebasic.onrender.com/api/v1/create-feedback', feedback);

                window.location.reload();
            } catch (err) {
                console.log(err);
            }
        }
    };
    //feedback
    const [feedback, setFeedback] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(
                `https://data-bebasic.onrender.com/api/v1/get-feedback?idProduct=${param.slud}`,
            );
            setFeedback(res.data.data);
        };
        fetchPosts();
    }, [param.slud]);
    return (
        <div className="wrap">
            <div className="grid wide">
                <div className="top row no-gutters">
                    <div className="left col l-5 m-5 c-12">
                        <img src={productCart.imageP} alt="" />
                    </div>
                    <div className="right col l-7 m-7 c-12">
                        <div className="row no-gutters row-1">
                            <h4 className="col l-12 m-12 c-12">{productCart.nameP}</h4>
                            <div className="rating col l-12">
                                <i className=" fas fa-star"></i>
                                <i className=" fas fa-star"></i>
                                <i className=" fas fa-star"></i>
                                <i className=" fas fa-star"></i>
                                <i className=" fas fa-star"></i>

                                <span>(7 Đánh giá)</span>
                            </div>
                        </div>
                        <hr />
                        <div className="row no-gutters row-2">
                            <div className="col-text col-auto">
                                <small>Được bán bởi:</small>
                                <br />
                                <span>Sản phẩm nội bộ</span>
                            </div>
                            <div className="col-btn col-auto">
                                <button>
                                    <a href="https://zalo.me/0912746230">Chat với người bán</a>
                                </button>
                            </div>
                            <div className="col-img col-auto">
                                <img
                                    src="https://ecommerce.aucitech.com/public/uploads/all/nEmAkQa0orTwkCYBsgrCLFzccQa0Ebi2xmytxlKn.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <hr />

                        <hr />
                        <div className="row no-gutters row-4">
                            <div className="left">Định lượng:</div>
                            <div className="wrap">
                                <button className="minus" onClick={handleClickMinus}>
                                    -
                                </button>
                                <input type="text" onChange={(e) => setValue(e.target.value)} value={value} />
                                <button className="plus" onClick={() => handleClickPlus()}>
                                    +
                                </button>
                            </div>
                            <div className="sl">{`( ${productCart.countP} Có sẵn)`}</div>
                        </div>
                        <hr />
                        <div className="row no-gutters row-5">
                            <span>Tổng giá:</span>
                            <strong>
                                {(value * productCart.priceP).toLocaleString('it-IT', {
                                    style: 'currency',
                                    currency: 'VND',
                                })}
                            </strong>
                        </div>
                        <div className="row no-gutters row-6">
                            <button className="left" onClick={() => addToCart(productCart)}>
                                Thêm vào giỏ hàng
                            </button>
                            <button className="right" onClick={() => handleBuy(productCart)}>
                                Mua ngay
                            </button>
                        </div>
                    </div>
                </div>

                <div className="feedbackMeWrap ">
                    <div className="feedbackMe">
                        {
                            <>
                                <h3>Đánh giá của bạn</h3>
                                <div className="evaluate">
                                    <span>Đánh giá:</span>
                                    <Rating
                                        name="customized-10"
                                        defaultValue={0}
                                        max={5}
                                        onClick={(e) => setStar(e.target.value)}
                                        style={{ position: 'relative', top: '3px', fontSize: '20px' }}
                                    />
                                </div>
                                <div className="comment">
                                    <div className="comment-label">Comment</div>
                                    <textarea
                                        id="w3review"
                                        name="w3review"
                                        rows="1"
                                        cols="20"
                                        onChange={(e) => {
                                            setComment(e.target.value);
                                        }}
                                        required
                                    />
                                </div>
                                <button onClick={handlefeedback}>Nhận xét</button>
                            </>
                        }
                    </div>
                </div>
                <div className="feedbackWrap ">
                    <div className="feedback">
                        <h3>Đánh giá sản phẩm</h3>
                        <hr />
                        {feedback.length > 0 ? (
                            feedback.map((item) => (
                                <div className="feedbackitem" key={feedback.id}>
                                    <div className="feedbackitem-id">
                                        Người dùng:
                                        <span> {item.nameCustomer}</span>
                                    </div>
                                    <div className="feedbackitem-rating">
                                        Đánh giá:
                                        <Rating
                                            name="customized-10"
                                            value={item.star}
                                            style={{ position: 'relative', top: '3px', fontSize: '20px' }}
                                        />
                                    </div>
                                    <div className="feedbackitem-comment">Nhận xét: {item.content}</div>
                                    <hr />
                                </div>
                            ))
                        ) : (
                            <span style={{ marginLeft: '16px' }}>Chưa có đánh giá nào</span>
                        )}
                    </div>
                </div>

                <div className="bottom row no-gutter">
                    <div className="left col l-3">
                        <div className="leftContainer">
                            <h3>Sản phẩm bán chạy nhất</h3>
                            <hr />

                            <ul>
                                {product.slice(5, 10).map((item) => (
                                    <li
                                        key={item.id}
                                        onClick={() => {
                                            navigate(`/introduce/${item.id}`);
                                            window.scrollTo(0, 0);
                                        }}
                                    >
                                        <img src={item.imageP} alt="" />
                                        <div className="wrap">
                                            <div className="desc">
                                                <span>{item.nameP}</span>
                                            </div>

                                            <div className="rating">
                                                <i className=" fas fa-star"></i>
                                                <i className=" fas fa-star"></i>
                                                <i className=" fas fa-star"></i>
                                                <i className=" fas fa-star"></i>
                                                <i className=" fas fa-star"></i>
                                            </div>
                                            <span className="price">{`${item.priceP}đ`}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="right col l-9">
                        <div className="rightContainer">
                            <div className="topright">
                                <h3>Mô tả </h3>
                                <hr />
                                <ul>
                                    <li>92% Polyester, 8% Spandex</li>
                                    <li>Thương hiệu : Demo</li>
                                    <li>Xuất xứ: Việt Nam</li>
                                    <li>Mẫu : Trơn</li>
                                    <li>Chất liệu: Poly Quick-Dry</li>
                                    <li>Màu sắc</li>
                                    <li>Số sản phẩm còn lại: 100</li>
                                    <li>Cổ thuyền</li>
                                    <li>Phù hợp mọi kiểu dáng</li>
                                    <li>Chỉ được giặt khô</li>
                                </ul>
                            </div>
                            <div className="bottomright">
                                <h3>Sản phẩm tương tự</h3>
                                <hr />
                                <div className="row no-gutters">
                                    {product.slice(0, 6).map((item) => (
                                        <div className="product-wrapper col  l-2 m-3 c-6" key={item.id}>
                                            <Product item={item} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Productdesc;
