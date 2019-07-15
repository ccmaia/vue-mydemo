
import axios from 'axios'


const instace = axios.create({
  baseURL: 'http://test.zhinanche.com',
  timeout: 1000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    'X-Requested-With': 'XMLHttpRequest'
  },
})

instace.interceptors.request.use(function (config) {
  let url = config.url;
  let zncToken = localStorage.getItem("zncSystemToken");
  
  if (!config.hasOwnProperty("configToken")) config.headers.token = zncToken;
  if (config.hasOwnProperty("contentJson")) {
    config.headers["Content-Type"] = "application/json";
    config.dataType = 'json'
  }

  return config;
});
instace.interceptors.response.use(function () {

})

export default instace;