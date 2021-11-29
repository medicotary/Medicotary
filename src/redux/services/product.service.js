import Axios from "axios";

import { BASE_API_URL, TEST_API_URL } from "./constant";

class ProductService {
  async create(data) {
    try {
      const response = await Axios.post(`${BASE_API_URL}products`, data.data, {
        headers: { Authorization: `${data.token}` },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async read(token) {
    try {
      const response = await Axios.get(`${BASE_API_URL}products`, {
        headers: { Authorization: `${token}` },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async edit(data) {
    try {
      const response = await Axios.patch(`${TEST_API_URL}products`, data.data, {
        headers: { Authorization: `${data.token}` },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async delete(data) {
    try {
      const response = await Axios.patch(`${TEST_API_URL}products`, data.data, {
        headers: { Authorization: `${data.token}` },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default ProductService;
