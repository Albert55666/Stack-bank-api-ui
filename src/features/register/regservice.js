import axios from "axios";
import { config } from "../../util/config";
config.config();

// register user
const API_URL = `${config.API_URL}/user/register/`;

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  return response.data;
};

const regService = {
  register,
};

export default regService;
