import './footer.scss';
import '../../grid.css';

function Footer() {
    return (
        <div className="footter">
            <div className="footter-top">
                <div className="grid wide">
                    <div className="row no-gutters ">
                        <div className="col l-3 m-6 c-12">
                            <h3 className="heading">THÔNG TIN LIÊN HỆ</h3>
                            <ul>
                                <li>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</li>
                                <li>0912746230 </li>
                                <li>nqdcntt@gmail.com</li>
                                <li>demonhunterp</li>
                            </ul>
                        </div>
                        <div className="col l-3 m-6 c-12">
                            <h3 className="heading">HỖ TRỢ</h3>
                            <ul>
                                <li>Hướng dẫn mua hàng</li>
                                <li>Hướng dẫn thanh toán </li>
                                <li>Chính sách bảo hành</li>
                                <li>Chính sách đổi trả</li>
                                <li>Tư vấn khách hàng</li>
                            </ul>
                        </div>
                        <div className="col l-3 m-6 c-12">
                            <h3 className="heading">TÀI KHOẢN CỦA TÔI</h3>
                            <ul>
                                <li>Đăng nhập</li>
                                <li>Đăng ký </li>
                                <li>Lịch sử đơn hàng</li>
                                <li>Yêu thích</li>
                                <li>Theo dõi thứ tự</li>
                            </ul>
                        </div>

                        <div className="col l-3 m-6 c-12">
                            <h3 className="heading">TẢI ỨNG DỤNG TRÊN</h3>
                            <ul>
                                <li>Ứng dụng shop demo hiện có sẵn trên Google Play & App Store. Tải nó ngay</li>
                            </ul>
                            <div className="apps">
                                <a href="/">
                                    <img src="https://ecommerce.aucitech.com/public/assets/img/play.png" alt="" />
                                </a>
                                <a href="/">
                                    <img src="https://ecommerce.aucitech.com/public/assets/img/app.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div />
            <div className="footter-bottom">
                <span>© 2023 - Bản quyền thuộc về NQD and LVD</span>
            </div>
        </div>
    );
}
export default Footer;
