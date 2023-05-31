import './buy5.scss';
import { TaskAltOutlined } from '@mui/icons-material';
export default function Buy1() {
    const buy = localStorage.hasOwnProperty('buy') ? JSON.parse(localStorage.getItem('buy')) : [];

    return (
        <>
            <div className="thank">
                <TaskAltOutlined className="icon-thank" />
                <span>Cảm ơn bạn đã đặt hàng!</span>
            </div>
            <div className="bottomProductBuy">
                <h4>Chi tiết đơn hàng </h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sản phẩm</th>
                            <th>Giá</th>
                            <th>Thuế</th>
                            <th>Số Lượng</th>
                            <th>Toàn Bộ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {buy &&
                            buy.length > 0 &&
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
                                    <td>0%</td>
                                    <td>{item.quantityP}</td>

                                    <td>
                                        {(item.quantityP * item.priceP).toLocaleString('it-IT', {
                                            style: 'currency',
                                            currency: 'VND',
                                        })}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <div className="Subtotal">
                    <div className="Subtotal-text">Tổng phụ</div>
                    <div className="Subtotal-price">
                        {(buy[0].quantityP * buy[0].priceP).toLocaleString('it-IT', {
                            style: 'currency',
                            currency: 'VND',
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
