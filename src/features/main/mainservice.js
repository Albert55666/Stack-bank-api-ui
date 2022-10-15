import axios from "axios";
import { config } from "../../util/config";

const API0_URL = `${config.API_URL}/user/`;

const mainP = async (token) => {
  const config = {
    headers: {
      token: token,
    },
  };
  const response = await axios.get(API0_URL, config);

  return response.data;
};

const mainService = {
  mainP,
};

export default mainService;
