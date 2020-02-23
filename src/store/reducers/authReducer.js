const iniState = [{ id: 1, email: "Hamza", password: "123456" }];

const authReducer = (state = iniState, action) => {
  switch (action.type) {
    case "SIGIN_IN": {
      console.log("From Reducer", action.cred);
      return state;
    }
    case "SIGIN_ERR": {
      console.log("From Reducer", action.err);
      return state;
    }

    default: {
      return state;
    }
  }
};

export default authReducer;
