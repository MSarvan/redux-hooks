export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginLoading = () => ({
    type: LOGIN_LOADING
})

export const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS, payload
})

export const loginFailure = () => ({
    type: LOGIN_FAILURE
})

export const loginData = () => (dispatch) => ({

    dispatch(loginLoading())

    // fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
    //   method: "POST",
    //   body: JSON.stringify(userdata),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((res) => loginSuccess(res))
    //   .catch((err) => loginFailure(err));

})