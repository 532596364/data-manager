import axiosFetch from "./fetch";
import { AxiosRequestHeaders } from 'axios';

const headers: any = {
    'Content-Type': 'application/json'
};
const method = 'GET';

type TypeOption = {
    uriPrefix?: string;
    useCommonErrorHandle?: boolean;
    extraHeaders: AxiosRequestHeaders;
}
export class StockService {

    UpdateStockData(request?: any, option?: TypeOption) {
        const uriPrefix = typeof option?.uriPrefix !== 'undefined' ? option.uriPrefix : '';
        const uri = `${uriPrefix}/api/stock/list`;
        const body = request;
        return axiosFetch(uri, { method: 'POST', headers, body }, option);
    }
}

export const stockServiceClient = new StockService();