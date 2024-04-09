import axios from "axios";

const instace = axios.create({
  baseURL:"pk_test_51P3Xzk00fWtMgAAfQeLfNGIzK0STwE1atTcjiDaGNTIP0UrAxgAgZmncziby6GXajXN2o0qhgE4apw90f5Br0W1Z00WazjmNsR" //The API (Cloud Function URL)
});

export default instace;