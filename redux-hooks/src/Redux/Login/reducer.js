import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE } from "./action";

const initState = {
    username: "",
    token: "",
    loading: false,
    error: false,
    isAuthenticated: false
}

const LoginReducer = (state = initState, {type, payload}) => { // action destructured as type, payload
    switch(type)
    {
        case LOGIN_LOADING:
            return { ...state, loading: true }
        case LOGIN_SUCCESS:
            return { ...state,  username: payload.username,
            token: payload.token,
            loading: false,
            error: false,
            isAuthenticated: true }
        case LOGIN_FAILURE:
            return { ...state, username: "",
            token: "",
            loading: false,
            error: true,
            isAuthenticated: false }
        default:
            throw error;
    }

    
}