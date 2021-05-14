import faker from "faker";

const state = {
    choice: [
        {
            name: "Lokasi Strategis",
            url:
                "https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://1-station.com/wp-content/uploads/2018/12/icon-strategic.png",
            description:
                "Dengan cabang yang tersedia di dekat pusat perbelanjaan. Rasakan kenyamanan servis mobil ketika belanja atau jalan jalan di outlet terdekat"
        },
        {
            name: "Lebih dari 4000 tipe ban",
            description:
                "Dengan lebih dari 4000 tipe ban. Kami akan menyediakan ukuran dan tipe yang sesuai dengan mobil anda",
            url:
                "https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://1-station.com/wp-content/uploads/2018/12/icon-tire.png"
        },
        {
            name: "Ruang tunggu yang nyaman",
            description:
                "Wi-fi gratis, ruang ber AC, dan kopi atau teh untuk menemani anda ketika menunggu mobil kesayangan anda ditangani oleh mekanik kami",
            url:
                "https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://1-station.com/wp-content/uploads/2018/12/icon-comfort.png"
        },
        {
            name: "Promo setiap bulan",
            description:
                "Harga terbaik untuk produk dan servis kami. Dengan promo bulanan kami, anda akan mendapatkan deal terbaik untuk kebutuhan mobil anda",
            url:
                "https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://1-station.com/wp-content/uploads/2018/12/icon-promo.png"
        },
        {
            name: "Mekanik berpengalaman",
            description:
                "Percayakan kepada mekanik berpengalaman kami untuk kebutuhan servis kendaraan anda",
            url:
                "https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://1-station.com/wp-content/uploads/2018/12/icon-mechanics.png"
        },
        {
            name: "Garansi lebih panjang",
            description:
                "Garansi lebih kami untuk memanjakan pengalaman servis mobil anda",
            url:
                "https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://1-station.com/wp-content/uploads/2018/12/icon-warantee.png"
        }
    ],
    anotherChoice: [
        {
            name: "Promo Ban",
            url:
                "https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://1-station.com/wp-content/uploads/2018/12/ban1.png",
            description: "Promo Ban Bridgestone, Dunlop, Hankook, GT Radial"
        },
        {
            name: "Promo Oli/Paket Servis",
            url:
                "https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://1-station.com/wp-content/uploads/2018/12/oil1.png",
            description: "Paket Servis Penggantian Oli menggunakan merk Shell"
        },
        {
            name: "Promo Tune Up",
            url:
                "https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://1-station.com/wp-content/uploads/2018/12/tuneup.png",
            description: "Promo Engine Flush menggunakan produk Liqui Moly"
        },
        {
            name: "Promo Spooring Terbaru",
            description: "Promo Spooring Ban",
            url:
                "https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://1-station.com/wp-content/uploads/2018/12/spooring1.png"
        }
    ],
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
    testimoni: [
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
    ],
    album: [
        {
            image: faker.image.imageUrl()
        },
        {
            image: faker.image.imageUrl()
        },
        {
            image: faker.image.imageUrl()
        },
        {
            image: faker.image.imageUrl()
        },
        {
            image: faker.image.imageUrl()
        },
        {
            image: faker.image.imageUrl()
        },
        {
            image: faker.image.imageUrl()
        },
        {
            image: faker.image.imageUrl()
        },
        {
            image: faker.image.imageUrl()
        },
        {
            image: faker.image.imageUrl()
        },
        {
            image: faker.image.imageUrl()
        },
        {
            image: faker.image.imageUrl()
        },
        {
            image: faker.image.imageUrl()
        },
        {
            image: faker.image.imageUrl()
        },
        {
            image: faker.image.imageUrl()
        },
        {
            image: faker.image.imageUrl()
        },
        {
            image: faker.image.imageUrl()
        },
        {
            image: faker.image.imageUrl()
        },
        {
            image: faker.image.imageUrl()
        },
        {
            image: faker.image.imageUrl()
        },
        {
            image: faker.image.imageUrl()
        },
        {
            image: faker.image.imageUrl()
        }
    ]
};

const actions = {};
const mutations = {
    CHOICE: (results: any, data: any) => (results.choice = data)
};

const getters = {
    choice: (results: any) => results.choice,
    anotherChoice: (results: any) => results.anotherChoice,
    listVision: (results: any) => results.vision,
    listTestimoni: (results: any) => results.testimoni,
    listAlbum: (results: any) => results.album
};

export default {
    state,
    actions,
    mutations,
    getters
};
