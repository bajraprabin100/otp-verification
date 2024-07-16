import axios, {AxiosInstance, AxiosResponse} from "axios";
import {API_PATH} from "@/app/core/services/api-path";
import {jwtDecode} from "jwt-decode";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import {getTokenUsingRefreshToken} from "@/app/core/services/api/auth/auth.service";
import { API_WITHOUT_TOKEN } from "../assets";
dayjs.extend(duration);

const baseUrl = API_PATH.config.apiUrl;

const axiosInstance: AxiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 5000
});


function getUserToken() {
    try {
        const rawData = window.localStorage.getItem("default_app_session")
        if (!rawData || rawData === "null") {
            return "1";
        }
        const user = JSON.parse(rawData);
        return user?.token;
    } catch (e) {
        return null;
    }
}

function getRefreshToken() {
    try {
        const rawData = window.localStorage.getItem("default_app_session")
        if (!rawData || rawData === "null") {
            return "1";
        }
        const user = JSON.parse(rawData);
        return user?.refreshToken;
    } catch (e) {
        return null;
    }
}

function isTokenExpired(token: string) {
    const decodedJwt = jwtDecode(token)
    return dayjs().isAfter(dayjs(decodedJwt?.exp * 1000))
}

axiosInstance.interceptors.request.use(
    (config) => {
        if(API_WITHOUT_TOKEN.includes(config?.url)) {
            return config;
        }
        const token = getUserToken();
        if (token) {
            config.headers["Authorization"] = "Bearer " + token;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    async (error) => {
        const { status, data } = error.response!;
        const refreshToken = getRefreshToken();
        if(status === 401) {
            if(refreshToken && !isTokenExpired(refreshToken)){
                const token = await getTokenUsingRefreshToken(refreshToken)
                localStorage.setItem("default_app_session", JSON.stringify({
                    token: token?.data?.accessToken,
                    refreshToken: token?.data?.refreshToken,
                }));
            }else {
                localStorage.setItem("default_app_session", undefined)
                window.location.href = "/"
            }
        }
        return Promise.reject(error);
    }
);


export default axiosInstance;
