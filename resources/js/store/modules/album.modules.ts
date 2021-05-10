import axios from "axios";
import { Album, AlbumState, Update } from "../types/interface";

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
    async createAlbum({ commit }: any, args: FormData) {
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
    },
    async listAlbum({ commit }: any) {
        return await axios.get("/api/v1/album", {
            headers: {
                "Content-type": "multipart/form-data",
                "Access-Control-Allow-Methods": "GET",
                "Access-Control-Allow-Origin": "*",
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
            validateStatus: (status: number) => status >= 201 && status < 300
        });
    },
    async destroyAlbum({ commit }: any, args: string) {
        return await axios.delete(`/api/v1/album/${args}/`, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Mehods": "DELETE",
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
            validateStatus: (status: number) => 200 && status < 300
        });
    },
    async putALbum({ commit }: any, args: Update) {
        return await axios.post(`/api/v1/album/${args.id}/`, args.data, {
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
    addAlbum: (results: AlbumState, data: Album) => results.album.unshift(data),
    listAlbum: (results: AlbumState, data: any) => (results.album = data),
    destroyAlbum: (results: AlbumState, args: number) =>
        (results.album = results.album.filter(function(x) {
            return x.id !== args;
        })),
    putAlbum: (results: AlbumState, data: Album) =>
        (results.album = results.album.map(x => (x.id === data.id ? data : x)))
};
const getters = {};
export default { state, actions, mutations, getters };
