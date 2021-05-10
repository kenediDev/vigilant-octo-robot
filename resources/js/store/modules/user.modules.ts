import axios, { AxiosResponse } from "axios";
import { Message, User, UserState } from "../types/interface";

const state: UserState = {
    user: [],
    data: {
        id: 0,
        name: "",
        email: "",
        password: "",
        old_password: "",
        confirm_password: ""
    },
    message: {
        message: "",
        valid: 0
    }
};

const actions = {
    async loadMe({ commit }: any) {
        return await axios
            .get("/api/v1/auth", {
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
                maxBodyLength: 2000,
                maxContentLength: 2000,
                maxRedirects: 5,
                validateStatus: (status: number) =>
                    status >= 200 && status < 300
            })
            .then((res: AxiosResponse<any>) => {
                commit("ME", res.data);
            })
            .catch(err => {});
    }
};
const mutations = {
    ME: (results: UserState, data: User) => (results.data = data),
    MESSAGE: (results: UserState, data: Message) => (results.message = data)
};
const getters = {
    me: (results: UserState) => results.data,
    message: (results: UserState) => results.message
};
export default { state, actions, mutations, getters };
