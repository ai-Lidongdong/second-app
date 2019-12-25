
import axios from 'axios';
import qs from 'qs'
let data = {
  time: Date.parse(new Date()) / 1000,
  os: "mini_wx",
  client_type: 2,
  channel_id: 0,
  token: "eb86fa064482989312e2a1557ddb4032",
  access_token: 'shopping:login_user_4f45aba0e8b1bde57f8837b022d83e19',
  appid: 1
}
function AxiosPost(param) {
  var params = qs.stringify(Object.assign(param, data))
  console.log('-----aaaaaaaaa----')
  var promise = new Promise((resolve, reject) => {
    console.log('params', params)
    axios.post('https://beta.test.51k1k.com/api/api', params)
      .then(res => {
        if (res.data.code == 0) {   //返回正确信息
          console.log(res.data, param.api_name)
          resolve(res.data);
        } else {                        //返回错误提示信息
          reject(res.data);
        }
      })
      .catch(function (error) {
      });
  })
  return promise;
}
export default AxiosPost