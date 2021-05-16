import axios, { AxiosResponse } from "axios";
import map from "../../components/assets/map.svg";
import ban from "../../components/assets/wheel.svg";
import waiting from "../../components/assets/waiting-room.svg";
import coupon from "../../components/assets/coupon.svg";
import maintenance from "../../components/assets/maintenance.svg";
import ribbon from "../../components/assets/ribbon.svg";
import faker from "faker";

const testimoni = [
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    },
    {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        comment: faker.lorem.text(200),
        date: faker.datatype.datetime()
    }
];

const state = {
    car: [],
    product: [],
    fakeChoice: [
        {
            name: "Lokasi Strategis",
            url: map,
            description:
                "Dengan cabang yang tersedia di dekat pusat perbelanjaan. Rasakan kenyamanan servis mobil ketika belanja atau jalan jalan di outlet terdekat"
        },
        {
            name: "Lebih dari 4000 tipe ban",
            description:
                "Dengan lebih dari 4000 tipe ban. Kami akan menyediakan ukuran dan tipe yang sesuai dengan mobil anda",
            url: ban
        },
        {
            name: "Ruang tunggu yang nyaman",
            description:
                "Wi-fi gratis, ruang ber AC, dan kopi atau teh untuk menemani anda ketika menunggu mobil kesayangan anda ditangani oleh mekanik kami",
            url: waiting
        },
        {
            name: "Promo setiap bulan",
            description:
                "Harga terbaik untuk produk dan servis kami. Dengan promo bulanan kami, anda akan mendapatkan deal terbaik untuk kebutuhan mobil anda",
            url: coupon
        },
        {
            name: "Mekanik berpengalaman",
            description:
                "Percayakan kepada mekanik berpengalaman kami untuk kebutuhan servis kendaraan anda",
            url: maintenance
        },
        {
            name: "Garansi lebih panjang",
            description:
                "Garansi lebih kami untuk memanjakan pengalaman servis mobil anda",
            url: ribbon
        }
    ],
    testimoni: {
        data: testimoni,
        perPage: () => {
            const count = Math.floor(testimoni.length / 3);
            const array = [];
            for (let i = 1; i < count; i++) {
                array.push(i);
            }
            return array;
        }
    }
};

const actions = {
    async listCar({ commit }: any) {
        return await axios
            .get("/api/v1/default/car", {
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
                commit("listCar", res.data);
            });
    },
    async listProduct({ commit }: any) {
        return await axios
            .get("/api/v1/default/product", {
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
                commit("listProduct", res.data);
            });
    }
};

const mutations = {
    listCar: (results: any, data: any) => (results.car = data),
    listProduct: (results: any, data: any) => (results.product = data)
};

const getters = {
    car: (results: any) => results.car,
    choice: (results: any) => results.fakeChoice,
    product: (results: any) => results.product,
    testimoni: (results: any) => results.testimoni
};

export default {
    state,
    actions,
    mutations,
    getters
};
