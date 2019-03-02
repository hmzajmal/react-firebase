export const signin = credentials => {
  return (dispatch, getState) => {
    console.log("From credentials", getState());
    dispatch({ type: "SIGIN_IN", cred: credentials });

    //     dispatch((type = "SIGIN_ERR"));
  };
};
