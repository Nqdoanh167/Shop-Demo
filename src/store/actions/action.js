export const addToCart = (Cart) => {
    return {
        type: 'ADD_TO_CART',
        payload: Cart,
    };
};

export const removeFromCart = (Cart) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: Cart,
    };
};

export const addOrder = (order) => {
    return {
        type: 'ADD_ORDER',
        payload: order,
    };
};
export const addToBuy = (Buy) => {
    return {
        type: 'ADD_TO_BUY',
        payload: Buy,
    };
};
export const removeFromBuy = (Buy) => {
    return {
        type: 'REMOVE_FROM_BUY',
        payload: Buy,
    };
};
export const addUser = (user) => {
    return {
        type: 'ADD_USER',
        payload: user,
    };
};
export const removeUser = (user) => {
    return {
        type: 'REMOVE_USER',
        payload: user,
    };
};
