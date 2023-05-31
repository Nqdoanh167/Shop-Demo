import { useState } from 'react';
import Buy2 from '../../components/Buy2/Buy2';
import ProductBuy from '../../components/ProductBuy/ProductBuy';
import './checkout.scss';

export default function Cart() {
    const [selected, setSelected] = useState(2);

    return (
        <div className="ProductBuy">
            <div className="ProductBuyWrap">
                <ProductBuy selected={selected} />
                <Buy2 setSelected={setSelected} />
            </div>
        </div>
    );
}
