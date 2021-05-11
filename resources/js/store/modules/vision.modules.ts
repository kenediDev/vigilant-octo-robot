import axios, { AxiosResponse } from "axios";
import { origin } from "../prefix/cors";
import { Vision, VisionState, Update } from "../types/interface";

const state: VisionState = {
    vision: [],
    data: {
        id: 0,
        title: "",
        caption: "",
        image: ""
    }
};
const actions = {
    async createVision({ commit }: any, args: FormData) {
        return await axios.post("/api/v1/vision", args, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": origin,
                "Access-Control-Allow-Methods": "POST",
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
    async listVision({ commit }: any) {
        return await axios
            .get("/api/v1/vision", {
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
                commit("listVision", res.data);
            });
    },
    async putVision({ commit }: any, args: Update) {
        return await axios.post(`/api/v1/vision/${args.id}/`, args.data, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Origin": origin,
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
            validateStatus: (status: number) => status >= 200 && status < 300
        });
    },
    async destroyVision({ commit }: any, args: number) {
        return await axios.delete(`/api/v1/vision/${args}`, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Methods": "DELETE",
                "Access-Control-Allow-Origin": origin,
                "Access-Control-Allow-Headers":
                    "Content-Type, Origin, Accepted, X-Requested-With, Authorization",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            timeout: 856000,
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
    addVision: (results: VisionState, data: Vision) =>
        results.vision.unshift(data),
    listVision: (results: VisionState, data: any) => (results.vision = data),
    putVision: (results: VisionState, data: Vision) =>
        (results.vision = results.vision.map(x =>
            x.id === data.id ? data : x
        )),
    destroyVision: (results: VisionState, args: number) =>
        (results.vision = results.vision.filter(function(x) {
            return x.id !== args;
        }))
};
const getters = {
    listVision: (results: VisionState) => results.vision
};
export default { state, actions, mutations, getters };
