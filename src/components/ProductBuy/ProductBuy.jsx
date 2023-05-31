import './productBuy.scss';
import '../../grid.css';
import {
    ShoppingCartOutlined,
    MapOutlined,
    LocalShippingOutlined,
    CreditCardOutlined,
    TaskAltOutlined,
} from '@mui/icons-material';

export default function ProductBuy({ selected }) {
    const list = [
        {
            id: 1,
            icon: <ShoppingCartOutlined className="icon" />,
            text: '1.Giỏ hàng của tôi',
        },
        {
            id: 2,
            icon: <MapOutlined className="icon" />,
            text: '2.Thông tin vận chuyển',
        },
        {
            id: 3,
            icon: <LocalShippingOutlined className="icon" />,
            text: '3.Thông tin giao hàng',
        },
        {
            id: 4,
            icon: <CreditCardOutlined className="icon" />,
            text: '4.Thanh toán',
        },
        {
            id: 5,
            icon: <TaskAltOutlined className="icon" />,
            text: '5.Xác nhận',
        },
    ];

    return (
        <div className="topProductBuy">
            <div className="top-list">
                {list.map((item) => (
                    <div className={selected === item.id ? 'top-item active' : 'top-item'} key={item.id}>
                        {item.icon}
                        <div className="text">{item.text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
