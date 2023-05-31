import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introduce from './pages/Introduce/Introduce';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContentBottom from './components/ContenBottom/ContentBottom';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import CheckoutInfo from './pages/CheckInfo/CheckoutInfo';
import Payment from './pages/Payment/Payment';
import Confirm from './pages/Confirm/Confirm';
import User from './pages/User/User';

import './App.scss';
import { useState } from 'react';
import Buy from './pages/Buy/Buy';

function App() {
    const checkLogin = localStorage.hasOwnProperty('user');
    const [user, setUser] = useState(!!checkLogin);
    const [idAcc, setIdAcc] = useState();

    return (
        <Router>
            <Header user={user} setUser={setUser} />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/introduce/:slud" element={<Introduce user={user} />} />
                <Route path="/login" element={<Login setUser={setUser} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/checkinfo" element={<CheckoutInfo />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/confirm" element={<Confirm />} />
                <Route path="/user" element={<User setUser={setUser} setIdAcc={setIdAcc} />} />
                <Route path="/buy" element={<Buy idAcc={idAcc} />} />
            </Routes>
            <ContentBottom />
            <Footer />
        </Router>
    );
}

export default App;
