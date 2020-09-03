import fetch from "isomorphic-fetch";
import auth from "../../../helpers/auth";
export const REGISTER_P_SET_ERR_REGISTER_MESSAGE = "REGISTER_P_SET_ERR_REGISTER_MESSAGE";
export const REGISTER_P_SET_REGISTER_SPINNER_STATUS =
    "LOGIN_P_SET_LOGIN_SPINNER_STATUS";

export function setErrSignupMessage(value) {
    return {
        type: REGISTER_P_SET_ERR_REGISTER_MESSAGE,
        payload: value,
    };
}

export function setLoginSpinnerStatus(value) {
    return {
        type: REGISTER_P_SET_REGISTER_SPINNER_STATUS,
        payload: value,
    };
}

export function Signup(data) {
    return async (dispatch) => {
        // await dispatch(setErrLoginMessage(""));
        await dispatch(setLoginSpinnerStatus(true));
        const token = `Basic ${btoa(`${data.Name}:${data.Password}:${data.Email}`)}`;
        try {
            let result = await fetch(`${__API__}/register`, {
                method: "POST",
                mode: "no-cors",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Accept: "application/json",
                },
            });

            let jsonCSRF = await resultCSRF.json();
            
            if (jsonLoginToken.status === 401) {
                await dispatch(setLoginSpinnerStatus(false));
                dispatch(
                    setErrSignupMessage(
                        `Sorry, unrecognized username or password`
                    )
                );
            } else if (
                jsonLoginToken.access_token &&
                jsonCSRF["X-CSRF-Token"]
            ) {
                // await dispatch(setLoginSpinnerStatus(false));
                await auth.setTokens(
                    jsonLoginToken.access_token,
                    jsonLoginToken.refresh_token,
                    jsonCSRF["X-CSRF-Token"]
                );
                await data.history.push("/");
            }
        } catch (e) {
            await dispatch(setLoginSpinnerStatus(false));
            dispatch(
                setErrSignupMessage(
                    "Password not recognised. Please try again. Note: password is case sensitive."
                )
            );
            console.log(e);
        }       
    };
}

export const actions = {
    Signup,
    setErrSignupMessage,
};

const initialState = {
    authToken: "",
    errSignupMessage: "",
    logInSpinner: false,
};

const ACTION_HANDLERS = {
    [REGISTER_P_SET_ERR_REGISTER_MESSAGE]: (state, action) => {
        return {
            ...state,
            errSignupMessage: action.payload,
        };
    },
    [REGISTER_P_SET_REGISTER_SPINNER_STATUS]: (state, action) => {
        return {
            ...state,
            registerSpinner: action.payload,
        };
    },
};

export default function registerReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}