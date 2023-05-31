import './slider.scss';
import '../../grid.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <Slider {...settings} className="slider-img ">
            <img
                src="https://ecommerce.aucitech.com/public/uploads/all/yclPDRGHySYidlrU06gics221CHFuYmZA2QvjIC2.jpg"
                alt=""
            />
            <img
                src="https://ecommerce.aucitech.com/public/uploads/all/qQR6fBE9MAjTWuIzGkZeI2wTDYAlIeBKQaezchPM.jpg"
                alt=""
            />
            <img
                src="https://ecommerce.aucitech.com/public/uploads/all/jJjPcgUsldYlpgdxpKBKmR6gIwtXIcuYtxeloijR.jpg"
                alt=""
            />
            <img
                src="https://ecommerce.aucitech.com/public/uploads/all/TGCHVRY64CxOCh1C33Pn7mdYfYM7OW6X8JdOaN7d.jpg"
                alt=""
            />
        </Slider>
    );
}
function SliderExport() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('https://data-bebasic.onrender.com/api/v1/get-product');
            setProduct(res.data.data);
        };
        fetchPosts();
    }, []);
    return (
        <div className="siderWrapper">
            <div className="slider grid wide">
                <div className="slider-one row no-gutters">
                    <div className="slider-one-left col l-3 m-3 c-0">
                        <h3 className="title">Danh mục sản phẩm</h3>
                        <ul>
                            <li>
                                <NavLink to="/">Quần áo</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Phụ kiện</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Ô tô</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Trang sức</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Trang trí</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Máy tính</NavLink>
                            </li>

                            <li>
                                <NavLink to="/">Quần áo trẻ em</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Thể thao</NavLink>
                            </li>

                            <li>
                                <NavLink to="/">Điện thoại</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Làm đẹp</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="slider-one-center col l-7 m-7 c-12">
                        <SimpleSlider />
                        <div className="slider-center-bottom  ">
                            <ul className="row ">
                                {product.slice(2, 10).map((item) => (
                                    <li className="col l-1-5 c-3 " key={item.id}>
                                        <div className="slider-center-bottom-wrap">
                                            <img src={item.imageP} alt="" />
                                            <p>{item.nameP}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="slider-one-right col l-2 m-2 c-12">
                        <h3 className="title">Deal hôm nay</h3>
                        <ul>
                            {product.slice(5, 9).map((item) => (
                                <li key={item.id}>
                                    <img src={item.imageP} alt="" />
                                    <span>
                                        {item.priceP.toLocaleString('it-IT', {
                                            style: 'currency',
                                            currency: 'VND',
                                        })}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="slider-two row no-gutters">
                    <div className="slider-two-img col l-4 m-6">
                        <img
                            src="https://ecommerce.aucitech.com/public/uploads/all/5ghQd35WiCGD7p6fnWKuC7dXsIm6SSXyeqv4arz3.jpg"
                            alt=""
                        />
                    </div>
                    <div className="slider-two-img col l-4 m-6">
                        <img
                            src="https://ecommerce.aucitech.com/public/uploads/all/UMiXwSweEr3ZjubSmMNXlmfdGROyShQMlmg8xDx2.jpg"
                            alt=""
                        />
                    </div>
                    <div className="slider-two-img col l-4 m-6">
                        <img
                            src="https://ecommerce.aucitech.com/public/uploads/all/3e8JXnm43Cd0ZMLuwwchFr7XmOjYHHXmJNPtImba.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SliderExport;
