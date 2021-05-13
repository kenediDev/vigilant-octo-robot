import axios, { AxiosResponse } from "axios";
import { origin } from "../prefix/cors";
import { DefaultState } from "../types/interface";

const state: DefaultState = {
    attribute: []
};
const actions = {
    async listAttribute({ commit }: any) {
        return await axios
            .get("/api/v1/default", {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Methods": "GET",
                    "Access-Control-Allow-Origin": origin,
                    "Access-Control-Allow-Headers":
                        "Content-Type, Origin, Accepted, X-Requested-With"
                },
                timeout: 865000,
                responseType: "json",
                withCredentials: false,
                maxBodyLength: 2000,
                maxContentLength: 2000,
                maxRedirects: 5,
                validateStatus: (status: number) =>
                    status >= 200 && status < 300
            })
            .then((res: AxiosResponse<any>) => {
                commit("listDefault", res.data);
            });
    }
};
const mutations = {
    listDefault: (results: DefaultState, data: any) =>
        (results.attribute = data)
};
const getters = {
    listDefault: (results: DefaultState) => results.attribute
};
export default {
    state,
    actions,
    mutations,
    getters
};
