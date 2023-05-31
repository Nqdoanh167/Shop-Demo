const initState = {
    order: [],
    cart: [],
    buy: [],
    user: [],
};
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_ORDER':
            let orderCart = {
                phone: action.payload.phone,
                address: action.payload.address,
                dateBill: action.payload.dateBill,
                methodMoney: action.payload.methodMoney,
                noteBill: action.payload.noteBill,
                statusBill: action.payload.statusBill,
            };

            return { ...state, order: [...state.cart, orderCart] };

        case 'REMOVE_FROM_CART':
            let cart = state.cart;
            cart = cart.filter((item) => item.id !== action.payload.id);
            return { ...state, cart };
        case 'ADD_TO_CART':
            let carts = state.cart;

            let cartAdd = {
                id: action.payload.id,
                img: action.payload.img,
                name: action.payload.name,
                quantityP: action.payload.quantityP,
                price: action.payload.price,
                totalMoney: action.payload.totalMoney,
            };
            let check = 0;
            for (let i = 0; i < carts.length; i++) {
                if (carts[i].id === cartAdd.id) {
                    carts[i].quantityP += cartAdd.quantityP;
                    carts[i].totalMoney += cartAdd.totalMoney;

                    check = 1;
                    break;
                }
            }
            if (check === 1) {
                return { ...state, cart: [...carts] };
            }

            return { ...state, cart: [...state.cart, cartAdd] };
        case 'ADD_TO_BUY':
            let buys = state.buy;
            let buyAdd = {
                id: action.payload.id,
                img: action.payload.img,
                name: action.payload.name,
                quantityP: action.payload.quantityP,
                price: action.payload.price,
                totalMoney: action.payload.totalMoney,
            };
            let checkbuy = 0;
            for (let i = 0; i < buys.length; i++) {
                if (buys[i].id === buyAdd.id) {
                    buys[i].quantityP += buyAdd.quantityP;
                    buys[i].totalMoney += buyAdd.totalMoney;

                    checkbuy = 1;
                    break;
                }
            }
            if (checkbuy === 1) {
                return { ...state, cart: [...buys] };
            }

            return { ...state, buy: [...buys, buyAdd] };
        case 'REMOVE_FROM_BUY':
            let buy = state.buy;
            buy = buy.filter((item) => item.id !== action.payload.id);
            return { ...state, buy };
        case 'ADD_USER':
            let userAdd = {
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password,
                phone: action.payload.phone,
                address: action.payload.address,
            };

            return { ...state, user: [...state.user, userAdd] };
        case 'REMOVE_USER':
            let user = state.user;
            user = user.filter((item) => item.id !== action.payload.id);
            return { ...state, user };
        default:
            return state;
    }
};
export default rootReducer;
