export const signin = credentials => {
  return (dispatch, getState) => {
    //getState is from authReducer
    console.log("From credentials", getState());
    dispatch({ type: "SIGIN_IN", cred: credentials }); //credentials from Signin to authReducer

    //     dispatch((type = "SIGIN_ERR"));
  };
};
