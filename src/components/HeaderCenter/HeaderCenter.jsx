import './headerCenter.scss';
import '../../grid.css';
import Search from '../Search/Search';

import { CompareArrows, FavoriteBorder } from '@mui/icons-material';
import Cart from '../Cart/Cart';

export default function HeaderCenter() {
    return (
        <div className="headerMid">
            <div className="grid wide">
                <div className=" row no-gutters">
                    <div className="logo col l-3 m-4 c-4">
                        <img
                            src="https://ecommerce.aucitech.com/public/uploads/all/kirrvJd3vVVI28TxIELcxRS6lFahZzrTnGfbuep1.png"
                            alt=""
                        />
                    </div>
                    <div className="search col l-6 m-4 c-8">
                        <Search />
                    </div>

                    <div className="inner-wrap col l-3 m-4 ">
                        <div className="item">
                            <CompareArrows className="icon" />
                            <span className="text">So sánh</span>
                            <span className="badge">0</span>
                        </div>

                        <div className="item">
                            <FavoriteBorder className="icon" />
                            <span className="text">Yêu thích</span>
                            <span className="badge">0</span>
                        </div>

                        <Cart />
                    </div>
                </div>
            </div>
        </div>
    );
}
