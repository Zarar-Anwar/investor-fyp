import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  UserInfo: localStorage.getItem("UserInfo")
    ? JSON.parse(localStorage.getItem("UserInfo"))
    : null
};

function reducer(state, action) {
  switch (action.type) {
    case "ClearUserInfo":
      return { ...state, UserInfo: null };
    case "Admin":
      return { ...state, Admin: action.payload };
    case "UserLoggedIn":
      return { ...state, UserInfo: action.payload };
    case "update":
      return { UserInfo: action.payload };
    case "ResetUserInfo":
      return { ...state, UserInfo: null };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}> {props.children} </Store.Provider>;
}
