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
    },
    blog: [
        {
            name: faker.name.firstName(),
            avatar: faker.image.avatar(),
            background: faker.image.business(),
            date: faker.datatype.datetime(),
            description: faker.lorem.words(200)
        },
        {
            name: faker.name.firstName(),
            avatar: faker.image.avatar(),
            background: faker.image.business(),
            date: faker.datatype.datetime(),
            description: faker.lorem.words(200)
        },
        {
            name: faker.name.firstName(),
            avatar: faker.image.avatar(),
            background: faker.image.business(),
            date: faker.datatype.datetime(),
            description: faker.lorem.words(200)
        }
    ],
    default: [],
    vision: [
        {
            name: "Tentang Kami",
            url:
                "https://i2.wp.com/1-station.com/wp-content/uploads/2016/11/Art23646_low.jpg",
            description:
                " Station, Ngebengkel Bener! 1 Station berusaha untuk memberikan pengerjaan servis dan perawatan kendaraan terbaik di Indonesia. Toko ban kami juga memiliki layanan lain seperti: paket penggantian oli, penggantian aki, rem dan juga spooring balancing. Dengan jumlah 8 toko di wilayah Jakarta, Tangerang dan Bekasi, anda akan dilayani oleh tim kami yang sudah berpengalaman"
        },
        {
            name: "Visi Kami",
            url:
                "https://i2.wp.com/1-station.com/wp-content/uploads/2016/11/Art23610_low.jpg?",
            description:
                "Di 1 Station, kami ingin memberikan transparansi, kualitas tinggi dan perawatan mobil yang terjangkau pada pelanggan. Kami ingin membangun hubungan jangka panjang yang berkelanjutan dengan seluruh semua pihak yang berdasarkan pada kepercayaan, dalam arti yang paling murni dari kata tersebut."
        },
        {
            name: "Kesempatan",
            url:
                "https://i0.wp.com/1-station.com/wp-content/uploads/2016/11/Kesempatan-berkarir.jpg",
            description:
                "Bergabunglah dengan tim profesional 1 Station sekarang juga dengan mengirimkan lamaran pekerjaan ke alamat email : hrd@1-station.co.id"
        }
    ],
    service: [
        {
            name: "LAYANAN DESINFEKSI MOBIL",
            url:
                "https://i1.wp.com/1-station.com/wp-content/uploads/2020/04/Disinfection-Mobil.jpg",
            description:
                "Digunakan oleh maskapai besar untuk mencegah penyebaran penyakit. Efektif untuk 7 hari. Bahan kimia yang digunakan adalah Ardrox 1820"
        },
        {
            name: "PENGGANTIAN BAN",
            url:
                "https://i1.wp.com/1-station.com/wp-content/uploads/2020/04/Disinfection-Mobil.jpg",
            description:
                "1 Station menyediakan beragam pilihan ban dari berbagai merk seperti Bridgestone, Dunlop, Michelin, GT Radial, Continental, Hankook, Yokohama dll untuk semua tipe kendaraan di Indonesia"
        },
        {
            name: "PAKET SERVICE PENGGANTIAN OLI",
            url:
                "https://i0.wp.com/1-station.com/wp-content/uploads/2018/12/Art23462_low-1.jpg",
            description:
                "Kami menyediakan paket servis penggantian oli dengan Shell dan Mobil . Harga paket sudah termasuk penggantian 4 liter oli, filter oli baru, pengecekan 30 bagian , dan engine flush."
        },
        {
            name: "PAKET TUNE UP DAN ENGINE CARE",
            url:
                "https://i0.wp.com/1-station.com/wp-content/uploads/2018/12/Art23462_low-1.jpg",
            description:
                "Menggunakan produk Liqui Moly yang diimpor dari Jerman, pengerjaan tune up dan engine care akan meningkatkan performa dan juga menjaga kondisi mesin mobil"
        },
        {
            name: "PENGGANTIAN AKI",
            url:
                "https://i2.wp.com/1-station.com/wp-content/uploads/2016/11/Art23477_low.jpg",
            description:
                "Produk NS menjadi unggulan di 1 Station karena memiliki tipe untuk semua tipe kendaraan dan juga memiliki masa garansi yang panjang selama 18 bulan"
        },
        {
            name: "PENGGANTIAN BRAKE DISC",
            url:
                "https://i1.wp.com/1-station.com/wp-content/uploads/2018/12/Art23520_low.jpg?",
            description:
                "1 Station merupakan salah satu tempat penjualan produk Brake Disc dari Brembo. Kualitas dari Brembo sebagai brand terbaik di industri sudah tidak diragukan lagi di seluruh dunia"
        },
        {
            name: "SPOORING DAN BALANCING",
            url:
                "https://i1.wp.com/1-station.com/wp-content/uploads/2018/12/Art23520_low.jpg",
            description:
                "Pengerjaan Spooring dan Balancing akan dilakukan oleh teknisi kami yang sudah dibekali dengan kemampuan teknis seputar mobil. 1 Station memberikan garansi selama 2 minggu untuk pengerjaan ini"
        },
        {
            name: "SAFETY CHECK",
            url:
                "https://i0.wp.com/1-station.com/wp-content/uploads/2016/11/Kesempatan-berkarir-1.jpg",
            description:
                "Setiap pelanggan berhak untuk mengetahui kondisi mobil mereka, oleh karena itu kami memberikan layanan safety check secara gratis bagi pelanggan tetap kami"
        }
    ]
};

const actions = {
    async listDefault({ commit }: any) {
        return await axios
            .get("/api/v1/default", {
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
                commit("listDefault", res.data);
            });
    },
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
    listProduct: (results: any, data: any) => (results.product = data),
    listDefault: (results: any, data: any) => (results.default = data)
};

const getters = {
    car: (results: any) => results.car,
    choice: (results: any) => results.fakeChoice,
    product: (results: any) => results.product,
    testimoni: (results: any) => results.testimoni,
    blog: (results: any) => results.blog,
    cars: (results: any) => results.default,
    vision: (results: any) => results.vision,
    service: (results: any) => results.service
};

export default {
    state,
    actions,
    mutations,
    getters
};
