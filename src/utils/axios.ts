import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

interface CustomOptions {
    repeat_request_cancel: boolean // 是否开启取消重复请求，默认为true
}