import './contentBottom.scss';

export default function ContentBottom() {
    return (
        <div className="contentBottom grid wide">
            <div className="contentBottomContainer row no-gutters">
                <div className="col l-̉6 m-6 c-12">
                    <h3 className="title">ĐĂNG KÝ NHẬN THÔNG TIN</h3>
                </div>
                <div className="col l-̉6 m-6 c-12">
                    <div className="input-group ">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Email..."
                            name="search"
                            autoComplete="off"
                        />
                        <div className="input-group-btn">
                            <button className="btn " type="submit">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
