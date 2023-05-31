import React, { useEffect, useState } from 'react';
import './buy.scss';
import axios from 'axios';
import { Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export default function Buy({ idAcc }) {
    const user = localStorage.hasOwnProperty('user') ? JSON.parse(localStorage.getItem('user')) : [];
    const [list, setList] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get(`https://data-bebasic.onrender.com/api/v1/get-bill?idAcc=${user.id}`);
                setList(res.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchPosts();
    }, [user.id]);
    //  const [star, setStar] = useState(0);
    //  const [comment, setComment] = useState();
    //  const handlefeedback = async (item) => {
    //      const feedback = {
    //          idAcc: item.idAcc,
    //          idProduct: item.DataProductOfBill.id,
    //          nameCustomer: item.nameCustomer,
    //          email: item.email,
    //          content: comment ? comment : '',
    //          star: star,
    //      };
    //      try {
    //          await axios.post('https://data-bebasic.onrender.com/api/v1/create-feedback', feedback);
    //          item.openFeedback = 1;
    //      } catch (err) {
    //          console.log(err);
    //      }
    //  };
    const navigate = useNavigate();
    const handleXem = (item) => {
        navigate(`/introduce/${item.idP}`);
        window.scrollTo(0, 0);
        console.log(user.id);
    };
    const [value, setValue] = useState('0');
    return (
        <div className="wrapBuy">
            <div className="nav-buy">
                <span onClick={() => setValue('0')}>Đang chờ xử lý/</span>
                <span onClick={() => setValue('1')}>Thành công/</span>
                <span onClick={() => setValue('2')}>Đã bị hủy</span>
            </div>

            {list.map((item) => {
                return (
                    item.statusBill === value && (
                        <div className="bottomProductBuy" key={item.id}>
                            <h4>Chi tiết đơn hàng </h4>

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Sản phẩm</th>
                                        <th>Giá</th>
                                        <th>Thuế</th>
                                        <th>Số Lượng</th>
                                        <th>Toàn Bộ</th>
                                        <th>Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="product-transport">
                                                <img src={item.DataProductOfBill.imageP} alt="" />
                                                <span className="product-name">{item.DataProductOfBill.nameP}</span>
                                            </div>
                                        </td>
                                        <td>
                                            {item.DataProductOfBill.priceP.toLocaleString('it-IT', {
                                                style: 'currency',
                                                currency: 'VND',
                                            })}
                                        </td>
                                        <td>0%</td>
                                        <td>{item.quantityP}</td>

                                        <td>
                                            {item.totalMoney.toLocaleString('it-IT', {
                                                style: 'currency',
                                                currency: 'VND',
                                            })}
                                        </td>
                                        <td>
                                            <button className="bt-xct" onClick={() => handleXem(item)}>
                                                Xem chi tiết
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="Subtotal">
                                <div className="Subtotal-text">Tổng phụ</div>
                                <div className="Subtotal-price">
                                    {item.totalMoney.toLocaleString('it-IT', {
                                        style: 'currency',
                                        currency: 'VND',
                                    })}
                                </div>
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                Phương thức
                                <span style={{ fontSize: '17px', fontWeight: '600', marginLeft: '10px' }}>
                                    {item.methodPay ? 'Thanh toán tiền mặt' : 'Đã chuyển khoản'}
                                </span>
                            </div>
                            <div style={{ marginTop: '10px', marginRight: '10px' }}>
                                Trạng thái
                                <span style={{ fontSize: '17px', fontWeight: '600', marginLeft: '10px' }}>
                                    {item.statusBill === '0'
                                        ? 'Đang chờ xử lý'
                                        : item.statusBill === '1'
                                        ? 'Thành công'
                                        : 'Đã bị hủy'}
                                </span>
                            </div>
                            <div style={{ marginTop: '10px', marginRight: '10px' }}>
                                Thời gian
                                <span style={{ fontSize: '17px', fontWeight: '600', marginLeft: '10px' }}>
                                    {item.dateBill}
                                </span>
                            </div>

                            {/* <div className="feedBack">
                                {item.openFeedback === null ? (
                                    <>
                                        <h4>Đánh giá của bạn</h4>
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
                                        <button onClick={() => handlefeedback(item)}>Nhận xét</button>
                                    </>
                                ) : (
                                    <h3>Cảm ơn bạn đẫ đánh giá sản phẩm</h3>
                                )}
                            </div> */}
                        </div>
                    )
                );
            })}
        </div>
    );
}
