import axios from "axios";
import { AlbumState } from "../types/userTypes";

const state: AlbumState = {
    album: [],
    data: {
        id: 1,
        title: "",
        caption: "",
        photo: ""
    }
};
const actions = {
    async create({ commit }: any, args: FormData) {
        return await axios.post("/api/v1/album", args, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Origin": origin,
                "Access-Control-Allow-Headers":
                    "Content-Type, Origin, Accepted, X-Requested-With, Authorization",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            timeout: 856000,
            responseType: "json",
            withCredentials: true,
            maxRedirects: 5,
            maxContentLength: 2000,
            maxBodyLength: 2000,
            validateStatus: (status: number) => status >= 201 && status < 300
        });
    }
};
const mutations = {};
const getters = {};
export default { state, actions, mutations, getters };
