import axios from "axios";
import { origin } from "../prefix/cors";
import { Service, ServiceState } from "../types/interface";

interface Update {
    id: number;
    data: FormData;
}

const state: ServiceState = {
    service: [],
    data: {
        id: 0,
        name: "",
        description: "",
        image: ""
    }
};

const actions = {
    async createService({ commit }: any, args: FormData) {
        return await axios.post("/api/v1/service", args, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-origin": origin,
                "Access-Control-Allow-Headers":
                    "Content-Type, Origin, Accepted, X-Requested-With, Authorization",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            timeout: 865000,
            responseType: "json",
            withCredentials: true,
            maxRedirects: 5,
            maxContentLength: 2000,
            maxBodyLength: 2000,
            validateStatus: (status: number) => status >= 201 && status < 300
        });
    },
    async listService({ commit }: any) {
        return await axios.get("/api/v1/service", {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers":
                    "Content-Type, Origin, Accepted, X-Requested-With",
                "Access-Control-Allow-origin": origin
            },
            timeout: 865000,
            responseType: "json",
            withCredentials: false,
            maxBodyLength: 2000,
            maxContentLength: 2000,
            maxRedirects: 5,
            validateStatus: (status: number) => status >= 200 && status < 300
        });
    },
    async putService({ commit }: any, args: Update) {
        return await axios.post(`/api/v1/service/${args.id}/`, args.data, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Origin": origin,
                "Access-Control-Allow-Headers":
                    "Content-Type, Origin, Accepted, X-Reuqested-With, Authorzation",
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
    async deleteDestroy({ commit }: any, args: number) {
        return await axios.delete(`/api/v1/service/${args}`, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Methods": "DELETE",
                "Access-Control-Allow-Headers":
                    "Content-Type, Origin, Accepted, X-Requested-With, Authorzation",
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
    listService: (results: ServiceState, data: any) => (results.data = data),
    destroyService: (results: ServiceState, args: number) =>
        (results.service = results.service.filter(function(x) {
            return x.id !== args;
        })),
    updateService: (results: ServiceState, args: Service) =>
        (results.service = results.service.map(x =>
            x.id === args.id ? args : x
        ))
};
const getters = {
    listService: (results: ServiceState) => results.service
};
export default { state, actions, mutations, getters };
