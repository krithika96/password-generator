const SET_PROFILE = "setProfile";
const SET_LOGOUT = "setLogout";

export const setProfile = (data) => ({
  type: SET_PROFILE,
  data: data
});

export const setLogout = () => ({
  type: SET_LOGOUT
});

const initialState = {
  userName: "",
  passWord: "",
  lastLogin: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        userName: action.data.userName,
        passWord: action.data.passWord
      };
    case SET_LOGOUT:
      let foundIndex = state.lastLogin.findIndex(
        (e) => e.userName === state.userName
      );
      let newArry = state.lastLogin;
      if (foundIndex !== -1) {
        newArry[foundIndex].time = new Date();
      } else {
        newArry.push({ userName: state.userName, time: new Date() });
      }
      return {
        lastLogin: [...newArry]
      };
    default:
      return state;
  }
};
