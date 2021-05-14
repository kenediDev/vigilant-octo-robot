import axios, { AxiosResponse } from "axios";

const state = {
    attribute: [],
    image: []
};

const actions = {
    async listDefault({ commit }: any) {
        return await axios
            .get("/api/v1/default/product", {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Methods": "GET",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers":
                        "Content-Type, Origin, Accepted, X-Requested-With"
                },
                timeout: 856000,
                responseType: "json",
                withCredentials: false,
                maxRedirects: 5,
                maxContentLength: 2000,
                maxBodyLength: 2000,
                validateStatus: (status: number) =>
                    status >= 200 && status < 300
            })
            .then((res: AxiosResponse<any>) => {
                commit("listDefault", res.data);
            });
    },
    async listImage({ commit }: any) {
        return await axios
            .get("/api/v1/default", {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Methods": "GET",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers":
                        "Content-Type, Origin, Accepted, X-Requested-With"
                },
                timeout: 856000,
                responseType: "json",
                withCredentials: false,
                maxRedirects: 5,
                maxContentLength: 2000,
                maxBodyLength: 2000,
                validateStatus: (status: number) =>
                    status >= 200 && status < 300
            })
            .then((res: AxiosResponse<any>) => {
                commit("listImage", res.data);
            });
    }
};
const mutations = {
    listDefault: (results: any, data: any) => (results.attribute = data),
    listImage: (results: any, data: any) => (results.image = data)
};
const getters = {
    listDefault: (results: any) => results.attribute,
    listImage: (results: any) => results.image
};
export default {
    state,
    actions,
    mutations,
    getters
};
