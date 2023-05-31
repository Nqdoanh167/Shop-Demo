import './product.scss';
import '../../grid.css';
import { NavLink } from 'react-router-dom';

function Product({ item }) {
    return (
        <NavLink to={`/introduce/${item.id}`} onClick={() => window.scrollTo(0, 0)}>
            <div className="product">
                <img src={item.imageP} alt="" />
                <div className="price">
                    {/* <div className="old">{`${item.priceP}VNĐ`}</div> */}
                    <div className="currently">
                        {item.priceP.toLocaleString('it-IT', {
                            style: 'currency',
                            currency: 'VND',
                        })}
                    </div>
                </div>
                <div className="rating">
                    <i className=" fas fa-star"></i>
                    <i className=" fas fa-star"></i>
                    <i className=" fas fa-star"></i>
                    <i className=" fas fa-star"></i>
                    <i className=" fas fa-star"></i>
                </div>
                <div className="desc">
                    <span>{item.nameP}</span>
                </div>
            </div>
        </NavLink>
    );
}
export default Product;
