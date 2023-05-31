import { useState } from 'react';
import Buy5 from '../../components/Buy5/Buy5';
import ProductBuy from '../../components/ProductBuy/ProductBuy';

export default function Cart() {
    const [selected, setSelected] = useState(5);

    return (
        <div className="ProductBuy">
            <div className="ProductBuyWrap">
                <ProductBuy selected={selected} />
                <Buy5 setSelected={setSelected} />
            </div>
        </div>
    );
}
