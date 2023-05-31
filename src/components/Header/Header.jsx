import './header.scss';
import '../../grid.css';
import { useEffect, useState } from 'react';
import HeaderTop from '../HeaderTop/HeaderTop';
import HeaderCenter from '../HeaderCenter/HeaderCenter';
import HeaderBottom from '../HeaderBottom/HeaderBottom';

function Header({ user, setUser }) {
    const [showLanguage, setShowLanguage] = useState(false);
    const [showMoney, setShowMoney] = useState(false);

    useEffect(() => {
        let handler = () => {
            setShowLanguage(false);
            setShowMoney(false);
        };
        document.addEventListener('mousedown', handler);
    });

    return (
        <div className="header">
            <HeaderTop
                showLanguage={showLanguage}
                setShowLanguage={setShowLanguage}
                showMoney={showMoney}
                setShowMoney={setShowMoney}
                user={user}
                setUser={setUser}
            />
            <HeaderCenter />
            <HeaderBottom />
        </div>
    );
}

export default Header;
