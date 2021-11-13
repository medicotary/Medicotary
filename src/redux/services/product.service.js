import Axios from "axios";

import { BASE_API_URL,TEST_API_URL } from "./constant";

class ProductService {
    async create(data) {
        try {
            const response = await Axios.post(`${BASE_API_URL}product/createProduct`, data);
            console.log(response);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async read(data) {
        try {
            const response = await Axios.get(`${TEST_API_URL}products`);
            console.log(response);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default ProductService;