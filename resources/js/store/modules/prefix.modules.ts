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
    ]
};

const actions = {};
const mutations = {
    CHOICE: (results: any, data: any) => (results.choice = data)
};

const getters = {
    choice: (results: any) => results.choice,
    anotherChoice: (results: any) => results.anotherChoice
};

export default {
    state,
    actions,
    mutations,
    getters
};
