import { useState } from 'react';
import Buy3 from '../../components/Buy3/Buy3';
import ProductBuy from '../../components/ProductBuy/ProductBuy';

export default function Cart() {
    const [selected, setSelected] = useState(3);

    return (
        <div className="ProductBuy">
            <div className="ProductBuyWrap">
                <ProductBuy selected={selected} />
                <Buy3 setSelected={setSelected} />
            </div>
        </div>
    );
}
