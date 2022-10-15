import axios from "axios";
import { config } from "../../util/config";
config.config();

const API4_URL = `${config.API_URL}/tx/transfer/`;

const Transfer = async (transferData, token, SecUSerInfo) => {
  const config = {
    headers: {
      token: token,
      SecUSerInfo: SecUSerInfo,
    },
  };

  const response = await axios.post(API4_URL, transferData, config);

  return response.data;
};

const sendService = {
  Transfer,
};

export default sendService;
