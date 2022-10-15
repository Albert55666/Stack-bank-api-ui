import axios from "axios";
import { config } from "../../util/config";
config.config();

const API5_URL = `${config.API_URL}/tx/loan/`;

const loan = async (transferData, token, SecUSerInfo) => {
  const config = {
    headers: {
      token: token,
      SecUSerInfo: SecUSerInfo,
    },
  };
  const response = await axios.post(API5_URL, transferData, config);

  return response.data;
};

const API6_URL = `${config.API_URL}/tx/airtime/`;

const airtime = async (transferData, token, SecUSerInfo) => {
  const config = {
    headers: {
      token: token,
      SecUSerInfo: SecUSerInfo,
    },
  };
  const response = await axios.post(API6_URL, transferData, config);

  return response.data;
};

const otherServices = {
  loan,
  airtime,
};

export default otherServices;
