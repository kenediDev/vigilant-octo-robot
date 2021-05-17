import axios, { AxiosResponse } from "axios";
import { User, Message, UserState } from "../types/interface";

const state: UserState = {
    data: {
        id: 0,
        name: "",
        email: "",
        password: "",
        old_password: "",
        confirm_password: ""
    },
    user: [],
    message: {
        message: "",
        valid: 0
    }
};

const actions = {
    async login({ commit }: any, args: User) {
        return await axios.post("/api/v1/auth", args, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Headers":
                    "Content-Type, Origin, Accepted, X-Requested-With",
                "Access-Control-Allow-Origin": "*"
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
    async reset({ commit }: any, args: any) {
        return await axios.post("/api/v1/auth/reset", args, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers":
                    "Content-Type, Origin, Accepted, X-Requested-With"
            },
            timeout: 865000,
            responseType: "json",
            withCredentials: false,
            maxRedirects: 5,
            maxContentLength: 2000,
            maxBodyLength: 2000,
            validateStatus: (status: number) => status >= 200 && status < 300
        });
    },
    async me({ commit }: any) {
        return await axios
            .get("/api/v1/auth", {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Methods": "GET",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Heades":
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
                commit("ME", res.data);
            });
    },
    async addBackground({ commit }: any, args: FormData) {
        return await axios.post("/api/v1/background", args, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Origin": "*",
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
    async putUser({ commit }: any, args: FormData) {
        return await axios.post("/api/v1/auth/update", args, {
            headers: {
                "Content-Type": "multipart/form-data",
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
            validateStatus: (status: number) => status >= 200 && status < 300
        });
    }
};
const mutations = {
    MESSAGE: (results: UserState, data: Message) => (results.message = data),
    ME: (results: UserState, data: User) => (results.data = data)
};

const getters = {
    message: (results: UserState) => results.message,
    me: (results: UserState) => results.data
};
export default {
    state,
    actions,
    mutations,
    getters
};
