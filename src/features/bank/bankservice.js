import axios from "axios";
import { config } from "../../util/config";
config.config();

const API4_URL = `${config.API_URL}/tx/pretransfer/`;

const preTransfer = async (transferData, token, SecUSerInfo) => {
  const config = {
    headers: {
      token: token,
      SecUSerInfo: SecUSerInfo,
    },
  };
  const response = await axios.post(API4_URL, transferData, config);

  if (response.data) {
    localStorage.setItem("reciever", JSON.stringify(response.data));
  }

  return response.data;
};

const bankService = {
  preTransfer,
};

export default bankService;
