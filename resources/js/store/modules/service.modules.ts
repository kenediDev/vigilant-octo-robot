import axios, { AxiosResponse } from "axios";
import { Service, ServiceState, Update } from "../types/interface";

const state: ServiceState = {
    data: {
        id: 0,
        name: "",
        description: "",
        image: ""
    },
    service: []
};
const actions = {
    async listService({ commit }: any) {
        return await axios
            .get("/api/v1/service", {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Methods": "GET",
                    "Access-Control-Allow-Headers":
                        "Content-Type, Origin, Accepted, X-Requested-With",
                    "Access-Control-Allow-Origin": "*"
                },
                timeout: 865000,
                responseType: "json",
                withCredentials: false,
                maxRedirects: 5,
                maxContentLength: 2000,
                maxBodyLength: 2000,
                validateStatus: (status: number) =>
                    status >= 200 && status < 300
            })
            .then((res: AxiosResponse<any>) => {
                commit("listService", res.data);
            });
    },
    async createService({ commit }: any, args: FormData) {
        return await axios.post("/api/v1/service", args, {
            headers: {
                "Content-Type": "multipat/form-data",
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers":
                    "Content-Type, Origin, Accepted, X-Requested-With, Authorization",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            timeout: 865000,
            responseType: "json",
            withCredentials: true,
            maxBodyLength: 2000,
            maxContentLength: 2000,
            maxRedirects: 5,
            validateStatus: (status: number) => status >= 201 && status < 300
        });
    },
    async putService({ commit }: any, args: Update) {
        return await axios.post(`/api/v1/service/${args.id}/`, args.args, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Headers":
                    "Content-Type, Origin, Accepted, X-Requested-With, Authorization",
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            timeout: 865000,
            responseType: "json",
            withCredentials: true,
            maxRedirects: 5,
            maxContentLength: 2000,
            maxBodyLength: 2000,
            validateStatus: (status: number) => status >= 200 && status < 300
        });
    },
    async destroyService({ commit }: any, args: number) {
        return await axios.delete(`/api/v1/service/${args}`, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Methods": "DELETE",
                "Access-Control-Allow-Headers":
                    "Content-Type, Origin, Accepted, X-Requested-With, Authorization",
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            timeout: 865000,
            responseType: "json",
            withCredentials: true,
            maxBodyLength: 2000,
            maxContentLength: 2000,
            maxRedirects: 5,
            validateStatus: (status: number) => status >= 200 && status < 300
        });
    }
};
const mutations = {
    listService: (results: ServiceState, args: Service[]) =>
        (results.service = args),
    createService: (results: ServiceState, args: Service) =>
        results.service.unshift(args),
    putService: (results: ServiceState, args: Service) =>
        (results.service = results.service.map(x =>
            x.id === args.id ? args : x
        )),
    destroyService: (results: ServiceState, args: number) =>
        (results.service = results.service.filter(function(x) {
            return x.id !== args;
        }))
};
const getters = {
    listService: (results: ServiceState) => results.service,
    childService: (results: ServiceState) => results.data
};

export default {
    state,
    actions,
    mutations,
    getters
};
