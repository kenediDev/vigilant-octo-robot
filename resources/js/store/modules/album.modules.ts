import axios, { AxiosResponse } from "axios";
import { Album, AlbumState, Update } from "../types/interface";

const state: AlbumState = {
    data: {
        id: 0,
        title: "",
        photo: "",
        caption: ""
    },
    album: []
};
const actions = {
    async listAlbum({ commit }: any) {
        return await axios
            .get("/api/v1/album", {
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
    async createAlbum({ commit }: any, args: FormData) {
        return await axios.post("/api/v1/album", args, {
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
    async putAlbum({ commit }: any, args: Update) {
        return await axios.post(`/api/v1/album/${args.id}/`, args.args, {
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
    async destroyAlbum({ commit }: any, args: number) {
        return await axios.delete(`/api/v1/album/${args}`, {
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
    listAlbum: (results: AlbumState, args: Album[]) => (results.album = args),
    createAlbum: (results: AlbumState, args: Album) =>
        results.album.unshift(args),
    putAlbum: (results: AlbumState, args: Album) =>
        (results.album = results.album.map(x => (x.id === args.id ? args : x))),
    destroyAlbum: (results: AlbumState, args: number) =>
        (results.album = results.album.filter(function(x) {
            return x.id !== args;
        }))
};

const getters = {
    album: (results: AlbumState) => results.album,
    childAlbum: (results: AlbumState) => results.data
};

export default {
    state,
    actions,
    mutations,
    getters
};
