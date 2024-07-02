import axios from "axios";

export default axios.create({
   baseURL:'https://api.rawg.io/api',
    params: {
        key: 'eed2f0621a6b44399a7c39ab49587c07'
    }
});