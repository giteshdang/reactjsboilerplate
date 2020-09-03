import fetch from 'isomorphic-fetch';
// import auth from '../../../helpers/Signup';

export const SIGNUP_P_SET_ERR_SIGNUP_MESSAGE = 'SIGNUP_P_SET_ERR_SIGNUP_MESSAGE';
export const SIGNUP_P_SET_SIGNUP_SPINNER_STATUS = 'SIGNUP_P_SET_SIGNUP_SPINNER_STATUS';

export function setErrSignupMessage (value) {
    return {
        type: SIGNUP_P_SET_ERR_SIGNUP_MESSAGE,
        payload: value
    };
}

export function setSignupSpinnerStatus (value) {
    return {
        type: SIGNUP_P_SET_LOGIN_SPINNER_STATUS,
        payload: value
    };
}

export function Signup (data) {
    return async (dispatch) => {
        await dispatch(setErrSignupMessage(''));
        await dispatch(setLoginSpinnerStatus(true));
        const token = `Basic ${btoa(`${data.userName}:${data.loginPassword}`)}`;
        try {
            let result = await fetch(`${__API__}/users/signin`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept': 'application/json',
                    "Access-Control-Allow-Origin":'*'
                    // 'Authorization': token
                }
            });

            let jsonLoginToken = await result.json();

            let resultCSRF = await fetch(`${__API__}/`, {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept': 'application/json',
                    'Authorization': token
                }
            });
        } catch (e) {
            await dispatch(setLoginSpinnerStatus(false));
            dispatch(setErrSignupMessage('Password not recognised. Please try again. Note: password is case sensitive.'));
            console.log(e);
        }
    };
}

export const actions = {
    Signup,
    setErrSignupMessage
};

const initialState = {
    authToken : '',
    errSignupMessage: '',
    logInSpinner: false
};

const ACTION_HANDLERS = {
    [SIGNUP_P_SET_ERR_SIGNUP_MESSAGE]: (state, action) => {
        return {
            ...state,
            errLoginMessage: action.payload
        };
    },
    [SIGNUP_P_SET_SIGNUP_SPINNER_STATUS]: (state, action) => {
        return {
            ...state,
            logInSpinner: action.payload
        };
    }
};

export default function authReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}