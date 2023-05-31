import { useState } from 'react';
import Buy4 from '../../components/Buy4/Buy4';
import ProductBuy from '../../components/ProductBuy/ProductBuy';

export default function Cart() {
    const [selected, setSelected] = useState(4);

    return (
        <div className="ProductBuy">
            <div className="ProductBuyWrap">
                <ProductBuy selected={selected} />
                <Buy4 setSelected={setSelected} />
            </div>
        </div>
    );
}
