import axios from "axios";
import { config } from "../../util/config";
config.config();
// import { logout } from "./authSlice";

// register user
const API_URL = `${config.API_URL}/user/register/`;

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//login user
const API_URL2 = `${config.API_URL}/user/login/`;

const login = async (userData) => {
  const response = await axios.post(API_URL2, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//logout user
const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("reciever");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
// "proxy": "http://localhost:4040",
