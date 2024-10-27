import axios, { AxiosRequestHeaders } from 'axios';
interface InitType {
    method: string;
    headers: AxiosRequestHeaders;
    body?: any;
}

interface OptionsType {
    useCommonErrorHandle?: boolean;
    extraHeaders: AxiosRequestHeaders;
}
export const headersDefault = { 'Content-Type': 'application/json' };
const commonErrorMsg = 'Something went wrong. Please try refreshing the page.';

const axiosFetch = (url: string, init: InitType, options?: OptionsType) => {
    const { method, headers, body } = init || {};
    const { useCommonErrorHandle = true, extraHeaders } = options || {};
    return axios({
        url,
        method: method.toLowerCase(),
        headers: extraHeaders
            ? Object.assign(headers, extraHeaders)
            : Object.assign(headers, headersDefault),
        data: body,
    })
        .then(resp => {
            if (resp.data?.code === 0 || resp.data?.code === 2) {
                return resp.data;
            }
            return Promise.reject(resp.data);
        })
        .catch(err => {
            if (useCommonErrorHandle) {
                console.error(err?.message || err?.msg || commonErrorMsg);
            }
            return Promise.reject(err);
        });
};

axios.interceptors.request.use(async function (config) {
    // getJwt已经包含了缓存操作, 不需要额外处理
    // config.headers.set('x-jwt-token', jwt);
    // await getAuth();
    return config;
});

export default axiosFetch;
