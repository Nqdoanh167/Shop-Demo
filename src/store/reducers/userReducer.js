/** @format */

const initialState = {
    isLoggedIn: false,
    userInfo: null,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOGIN_SUCCESS':
            return {
                ...state,
                isLoggedIn: true,
                userInfo: action.userInfo,
            };
        case 'USER_LOGIN_FAIL':
            return {
                ...state,
                isLoggedIn: false,
                userInfo: null,
            };
        case 'PROCESS_LOGOUT':
            return {
                ...state,
                isLoggedIn: false,
                userInfo: null,
            };
        default:
            return state;
    }
};

export default appReducer;
