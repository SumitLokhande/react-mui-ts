import axios, { AxiosRequestConfig } from "axios";
import { makeUseAxios } from "axios-hooks";
import { apiConfig } from "./config";

const axiosInstance = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const useAxios = makeUseAxios({
  axios: axiosInstance,
  defaultOptions: {
    manual: true,
    useCache: false,
    ssr: false,
  },
});

//Request Interceptor
axiosInstance.interceptors.request.use(
  (confA: AxiosRequestConfig) => {
    const conf = confA as AxiosCustomeRequestConfig;
    // const accessToken = getAccessToken();
    const accessToken = "asdfjkanl"; // test
    if (!conf.headers) {
      conf.headers = {};
    }
    if (!conf.custom?.excludeTokenIdFromHeader) {
      conf.headers.authorization = `Bearer ${accessToken}`;
    }
  },
  (error) => Promise.reject(error)
);

//Response Interceptor
axiosInstance.interceptors.request.use(
  (response) =>
    //Edit response config
    response,
  (error) => {
    if (error?.response && error.response.data) {
      if (error.response.status === 500) {
        alert("Server is down, Please try after some time.");
      }
    }
    return Promise.reject(error);
  }
);

export interface AxiosCustomeConfig {
  excludeTokenIdFromHeader?: boolean;
}

export interface AxiosCustomeRequestConfig extends AxiosRequestConfig {
  custom?: AxiosCustomeConfig;
}

export async function apiGet<T = any>(
  resource: string,
  config?: AxiosCustomeRequestConfig
) {
  return axiosInstance.get<T>(resource, config);
}

export async function apiPost<T = any>(
  resource: string,
  data?: any,
  config?: AxiosCustomeRequestConfig
) {
  return axiosInstance.post<T>(resource, data, config);
}
export async function apiDelete<T = any>(
  resource: string,
  config?: AxiosCustomeRequestConfig
) {
  return axiosInstance.delete<T>(resource, config);
}
export async function apiPatch<T = any>(
  resource: string,
  data?: any,
  config?: AxiosCustomeRequestConfig
) {
  return axiosInstance.patch<T>(resource, data, config);
}

export async function apiPut<T = any>(
  resource: string,
  data?: any,
  config?: AxiosCustomeRequestConfig
) {
  return axiosInstance.put<T>(resource, data, config);
}

// export async function apiUpload<T = any>(resource : string, data?: any, config?: AxiosCustomeRequestConfig, progressCallback?: (progress:number)=>void,){
//     return axiosInstance.post<T>(resource, data, ...config, headers: {
//         ...config?.headers,
//         'Content-Type' : 'multipart/form-data',
//     },
//     onUploadProgress:( progressEvent :{loaded :number, total: number})=>{
//         const uploadPercentage = parseInt(
//             String(Math.round(((progressEvent.loaded/ progressEvent.total)*100) as number)),
//             10,
//         );
//         progressCallback && progressCallback(uploadPercentage);
//     })
// }
