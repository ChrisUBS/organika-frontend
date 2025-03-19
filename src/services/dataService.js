import axios from 'axios';

class DataService {

    async getProducts() {
        let response = await axios.get("https://organika-backend-19362c6c284e.herokuapp.com/api/catalog")
        return response.data;
    }

    async saveProduct(product) {
        let response = await axios.post("https://organika-backend-19362c6c284e.herokuapp.com/api/catalog", product);
        return response.data;
    }

    async getCoupons() {
        let response = await axios.get("https://organika-backend-19362c6c284e.herokuapp.com/api/coupons")
        return response.data;
    }

    async saveCoupon(coupon) {
        let response = await axios.post("https://organika-backend-19362c6c284e.herokuapp.com/api/coupons", coupon)
        return response.data;
    }
}

export default new DataService();