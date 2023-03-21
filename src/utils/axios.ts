import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { config } from 'process';

interface CustomOptions {
    repeat_request_cancel: boolean // 是否开启取消重复请求，默认为true
    reduct_data_format: boolean // 是否开启简介的数据结构响应，默认为true
    error_message_show: boolean // 是否开启接口错误信息展示，默认为true
    code_message_show: boolean // 是否开启code不为0时的信息提示，默认为false“
}

function myAxios(axiosConfig: AxiosRequestConfig, customOptions?: CustomOptions) {
    const service = axios.create({
        baseURL: '/api',  // 设置统一的请求前缀
        timeout: 10000    //设置统一的超时时长
    })

    // 自定义配置

    const custom_options = Object.assign(
        {
            repeat_request_cancel: false,
            reduct_data_format: true,
            error_message_show: true,
            code_message_show: false
        },
        customOptions
    )

    // 请求拦截
    // service.interceptors.request.use(
    //     (config: AxiosRequestConfig) => {
    //         const token = localStorage.getItem('token')
    //     }
    // )
}
