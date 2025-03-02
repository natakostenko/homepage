import { useContext } from "react";
import { LoginContext } from "../HOC/LoginProvider";

export const useLogin = () => useContext(LoginContext);