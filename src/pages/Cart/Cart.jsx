import { useState } from 'react';
import Buy1 from '../../components/Buy1/Buy1';
import ProductBuy from '../../components/ProductBuy/ProductBuy';
import './cart.scss';

export default function Cart() {
    const [selected, setSelected] = useState(1);
    return (
        <div className="ProductBuy">
            <div className="ProductBuyWrap">
                <ProductBuy selected={selected} />
                <Buy1 setSelected={setSelected} />
            </div>
        </div>
    );
}
