import axios, { AxiosResponse } from "axios";
import { Vision, VisionState, Update } from "../types/interface";

const state: VisionState = {
    data: {
        id: 0,
        title: '',
        caption: '',
        image: ''
    },
    vision: []
};
const actions = {
    async listVision({ commit }: any) {
        return await axios
            .get("/api/v1/vision", {
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
    async createVision({ commit }: any, args: FormData) {
        return await axios.post("/api/v1/vision", args, {
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
    async putVision({ commit }: any, args: Update) {
        return await axios.post(`/api/v1/vision/${args.id}/`, args.args, {
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
    async destroyVision({ commit }: any, args: number) {
        return await axios.delete(`/api/v1/vision/${args}`, {
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
    listVision: (results: VisionState, args: Vision[]) =>
        (results.vision = args),
    createVision: (results: VisionState, args: Vision) =>
        results.vision.unshift(args),
    putVision: (results: VisionState, args: Vision) =>
        (results.vision = results.vision.map(x =>
            x.id === args.id ? args : x
        )),
    destroyVision: (results: VisionState, args: number) =>
        (results.vision = results.vision.filter(function(x) {
            return x.id !== args;
        }))
};

const getters = {
    listVision: (results: VisionState) => results.vision,
    childVision: (results: VisionState) => results.data
};

export default {
    state,
    actions,
    mutations,
    getters
};
