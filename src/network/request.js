import axios from "axios";


export function request1(config) {
  const instance1 = axios.create({
    baseURL: 'http://localhost',
    timeout: 5000,
  })

  //2.axios的拦截器(拦截请求)
  instance1.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })
  //响应式拦截（拦截响应）
  instance1.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  //发送真正的网络请求
  return instance1(config)//相当于返回promise
}
