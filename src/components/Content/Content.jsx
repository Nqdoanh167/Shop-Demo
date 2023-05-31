import './content.scss';
import '../../grid.css';
import Product from '../Product/Product';
import CountdownTimer from './CountDownTimer';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Content() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('https://data-bebasic.onrender.com/api/v1/get-product');
            setProduct(res.data.data);
        };
        fetchPosts();
    }, []);

    return (
        <div className="content grid wide">
            <div className="product-one">
                <div className="flash">
                    <h3 className="title">Flash Sale</h3>
                    <span className="countDown">
                        <CountdownTimer />
                    </span>
                </div>
                <hr />

                <div className="product-container row no-gutters">
                    {product.slice(0, 12).map((item) => (
                        <div className="product-wrapper col  l-2 m-3 c-6" key={item.id}>
                            <Product item={item} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="product-two">
                <h3 className="title">Sản phẩm mới</h3>
                <hr />
                <div className="product-container row no-gutters">
                    {product.slice(1, 13).map((item) => (
                        <div className="product-wrapper col  l-2 m-3 c-6" key={item.id}>
                            <Product item={item} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="product-three">
                <h3 className="title">Bán chạy nhất</h3>
                <hr />
                <div className="product-container row no-gutters">
                    {product.slice(3, 15).map((item) => (
                        <div className="product-wrapper col  l-2 m-3 c-6" key={item.id}>
                            <Product item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Content;
