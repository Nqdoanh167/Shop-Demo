import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './headerBottom.scss';

export default function HeaderBottom() {
    const [selected, setSelected] = useState(1);
    const list = [
        {
            id: 1,
            title: 'Trang chủ',
        },
        {
            id: 2,
            title: 'Flash Sale',
        },
        {
            id: 3,
            title: 'Bài viết',
        },
        {
            id: 4,
            title: 'Tất cả thương hiệu',
        },
        {
            id: 5,
            title: 'Tất cả danh mục',
        },
        {
            id: 6,
            title: 'Tất cả người bán',
        },
        {
            id: 7,
            title: 'Phiếu giảm giá',
        },
    ];
    return (
        <div className="headerBottom grid wide">
            <ul>
                {list.map((item, index) => (
                    <NavLink to="/" key={index}>
                        <li
                            key={item.id}
                            className={selected === item.id ? 'active' : ''}
                            onClick={() => {
                                setSelected(item.id);
                                window.scrollTo(0, 0);
                                localStorage.removeItem('buy');
                            }}
                        >
                            {item.title}
                        </li>
                    </NavLink>
                ))}
            </ul>
        </div>
    );
}
