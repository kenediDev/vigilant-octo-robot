import axios, { AxiosResponse } from "axios";
import { origin } from "../prefix/cors";
import { Testimonials, TestimonialsState, Update } from "../types/interface";

const state: TestimonialsState = {
    testimonials: [],
    data: {
        id: 0,
        name: "",
        comment: "",
        avatar: "",
        from: ""
    }
};

const actions = {
    async createTestimonials({ commit }: any, args: FormData) {
        return await axios.post("/api/v1/testimonials", args, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Headers":
                    "Content-Type, Origin, Accepted, X-Requested-With, Authorization",
                "Access-Control-Allow-Origin": origin,
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
    async listTestimonials({ commit }: any) {
        return await axios.get("/api/v1/testimonials/", {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Methods": "GET",
                "Access-Control-Allow-Headers":
                    "Content-Type, Origin, Accepted, X-Requested-With",
                "Access-Control-Allow-Origin": origin
            },
            timeout: 865000,
            responseType: "json",
            withCredentials: false,
            maxBodyLength: 2000,
            maxContentLength: 2000,
            maxRedirects: 5,
            validateStatus: (status: number) => status >= 200 && status < 300
        }).then((res: AxiosResponse<any>) => {
            commit('listTestimonials', res.data)
        });
    },
    async destroyTestimonials({ commit }: any, args: number) {
        return await axios.delete(`/api/v1/testimonials/${args}/`, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": origin,
                "Access-Control-Allow-Methods": "DELETE",
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
    async putTestimonials({ commit }: any, args: Update) {
        return await axios.post(`/api/v1/testimonials/${args.id}`, args.data, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Origin": origin,
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
    listTestimonials: (results: TestimonialsState, data: any) =>
        (results.testimonials = data),
    addTestimonials: (results: TestimonialsState, data: Testimonials) =>
        results.testimonials.unshift(data),
    destroyTestimonials: (results: TestimonialsState, args: number) =>
        (results.testimonials = results.testimonials.filter(function(x) {
            return x.id !== args;
        })),
    updateTestimonials: (results: TestimonialsState, data: Testimonials) =>
        (results.testimonials = results.testimonials.map(x =>
            x.id === data.id ? data : x
        ))
};
const getters = {
    listTestimonials: (results: TestimonialsState) => results.testimonials
};
export default { state, actions, mutations, getters };
