const videos = [
  {
    id: 'd5b87ec8-56f5-427b-94e1-9a554bb5fd56',
    title: 'Laptop Gaming i7 & RTX 4060 yg Paling Murah! Review Axioo Pongo 760',
    video_url: 'https://www.youtube.com/watch?v=2uZzLhFgBbc',
    products: ['9e558485-6cc5-4b82-9b8e-926ba887c2e5', 'fa868385-9e61-448c-960e-bf5d294fed8e'],
    user: {
      username: 'jagat_review',
      display_name: 'Jagat Review'
    },
    meta: {
      viewers_count: 120
    }
  },
  {
    id: 'c6a625aa-eb67-46df-ac8a-557302c9998a',
    title: 'Definisi HP GAMING SEMPURNA - RoG Phone 7 Ultimate.',
    video_url: 'https://www.youtube.com/watch?v=nR-Tx-l6MLQ',
    products: ['017ae2e8-7e62-4172-be14-eafccf324bb1'],
    user: {
      username: 'gadgetin',
      display_name: 'GadgetIn'
    },
    meta: {
      viewers_count: 250
    }
  },
  {
    id: '0177b46a-ee57-41d2-8d6f-c5f06ad620b4',
    title: 'Calon Tablet Laris nih! Unboxing Xiaomi Pad 6 yang Segera Launching',
    video_url: 'https://www.youtube.com/watch?v=QFedig2x2yA',
    products: ['8d5c7646-958d-4737-b63d-97261af68e27'],
    user: {
      username: 'putu_reza',
      display_name: 'Putu Reza'
    },
    meta: {
      viewers_count: 56
    }
  },
  {
    id: 'e47e1066-21cf-4d86-8797-4b6bb9e26dc5',
    title: 'Simple Untuk Vlogging! - Insta360 Go 3 Review Indonesia',
    video_url: 'https://www.youtube.com/watch?v=psgQ6u3pBcM',
    products: ['1317f002-8bd5-4c81-80e2-350ff5444163'],
    user: {
      username: 'itechlife',
      display_name: 'iTechLife'
    },
    meta: {
      viewers_count: 88
    }
  },
  {
    id: '6fc610b1-ad8c-4e6c-993e-b8d432a7be95',
    title: 'TABLET INI LEBIH BAGUS DARI IPAD DAN LAPTOP ?? || Huawei Matepad Air',
    video_url: 'https://www.youtube.com/watch?v=W23und-81JM',
    products: ['ff4fc6f6-2238-40c6-91e9-be23a2d95d5b'],
    user: {
      username: 'sobathape',
      display_name: 'Sobat HAPE'
    },
    meta: {
      viewers_count: 88
    }
  },
  {
    id: 'ce2e3bbd-de90-4d99-8892-72676ada47b0',
    title: 'PANDUAN MEMBELI IPAD TAHUN 2023',
    video_url: 'https://www.youtube.com/watch?v=tTxVBnkCMUc',
    products: ['20fa8692-8e51-4a5a-b583-9d33da91367d'],
    user: {
      username: 'ibrokumar',
      display_name: 'Ibro Kumar'
    },
    meta: {
      viewers_count: 92
    }
  },
  {
    id: '6e689e45-0ac9-41c6-af20-d9d48ada9546',
    title: 'iPad 9th Gen vs iPad Air 5: Jangan Salah Pilih!',
    video_url: 'https://www.youtube.com/watch?v=1EdbQTRWE8Q',
    products: ['20fa8692-8e51-4a5a-b583-9d33da91367d'],
    user: {
      username: 'brian_solid',
      display_name: 'Brian Solid'
    },
    meta: {
      viewers_count: 188
    }
  },
  {
    id: '7b6e066d-93d0-4f2c-a47e-b8ad63e8da4e',
    title: 'iPad 9th Gen vs iPad Air 5: Jangan Salah Pilih!',
    video_url: 'https://www.youtube.com/watch?v=Z1iBo6LVlIM',
    products: [],
    user: {
      username: 'labin',
      display_name: 'Labin'
    },
    meta: {
      viewers_count: 199
    }
  }
];

const products = [
  {
    title: 'LAPTOP AXIOO PONGO 760 GEN 2 | i7 12650H 16GB 512GB RTX 4060 8GB 144Hz - Normal',
    description:
      'Spesifikasi:\n' +
      '\n' +
      'Processor: Intel® Core™ i7-12650H (10 Cores,16 Threads, TDP: 45W)\n' +
      'Chipset: Intel® Alder Lake\n' +
      'Graphics Controller: Intel® Graphics\n' +
      'Graphics: RTX4060 8GB DDR6 (100w) Hybrid',
    price: 15849000,
    image_url:
      'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/7/13/771193c9-e3c7-4c5d-836c-bf717c55483b.png',
    product_url:
      'https://www.tokopedia.com/axiooslimbook/laptop-axioo-pongo-760-gen-2-i7-12650h-16gb-512gb-rtx-4060-8gb-144hz-normal',
    id: '9e558485-6cc5-4b82-9b8e-926ba887c2e5'
  },
  {
    title: 'Lenovo Ideapad Gaming 3 Ryzen 5 7535HS RTX2050 512GB SSD 8GB 120Hz',
    description:
      'Lenovo Ideapad Gaming 3 Ryzen 5 7535HS RTX2050 512GB SSD 8GB 120Hz Win+OHS\n' +
      '\n' +
      'IdeaPad Gaming 3 15ARH7\n' +
      'Part Number : 82SB00JHID',
    price: 12499000,
    image_url:
      'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/5/9/02fa6144-ae3d-4fd6-8737-d7cc1e4e5c71.jpg',
    product_url:
      'https://www.tokopedia.com/lenovo-tangerang/lenovo-ideapad-gaming-3-ryzen-5-7535hs-rtx2050-512gb-ssd-8gb-120hz',
    id: 'fa868385-9e61-448c-960e-bf5d294fed8e'
  },
  {
    title: 'Asus ROG Phone 7 12/256 8/256GB ROG Phone 7 Ultimate',
    description: '🛒READY STOK SIAP KIRIM🛒\n' + '\n' + 'ULTIMATE : 16/512GB',
    price: 13399000,
    image_url:
      'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/7/26/0e1122a3-31f1-4896-9352-32e0193e3d53.jpg',
    product_url:
      'https://www.tokopedia.com/digitalauthorized/asus-rog-phone-7-12-256-8-256gb-rog-phone-7-ultimate-16-512-resmi-tam-storm-white-12gb-256gb-8b499',
    id: '017ae2e8-7e62-4172-be14-eafccf324bb1'
  },
  {
    title: 'Official Xiaomi Pad 6 (8GB/256GB)',
    description:
      'Official Xiaomi Pad 6\n' +
      '\n' +
      'Warna: Mist Blue, Gravity Gray\n' +
      '\n' +
      'Processor:\n' +
      '- Snapdragon 870 Mobile Platform\n' +
      '\n' +
      'RAM/Storage:\n' +
      '- 8GB/256GB\n' +
      '- LPDDR5 RAM + UFS 3.1 Storage',
    price: 49990000,
    image_url:
      'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/8/7/506bbfba-6497-4fdd-a289-c051e6a50af6.png',
    product_url:
      'https://www.tokopedia.com/xiaomi/official-xiaomi-pad-6-8gb-256gb-snapdragon-870-layar-11-wqhd-gravity-gray-8-256gb-94f0a',
    id: '8d5c7646-958d-4737-b63d-97261af68e27'
  },
  {
    title: 'Insta360 GO 3 Insta360 GO3 Tiny Action Camera',
    description:
      '* Garansi Resmi 1 Thn PT.DENKA PRATAMA INDONESIA\n' +
      '* Garansi 14 HARI TUKAR BARU (Hanya berlaku Kerusakan dari Pabrik/Factory Defect.',
    price: 6099000,
    image_url:
      'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/6/28/ba35a2d5-a2ca-4331-9834-4de7931d3505.png',
    product_url:
      'https://www.tokopedia.com/focus-nusantara/insta360-go-3-insta360-go3-tiny-action-camera-with-action-pod-32gb-8f127',
    id: '1317f002-8bd5-4c81-80e2-350ff5444163'
  },
  {
    title: 'HUAWEI MatePad Air Tablet [8+128GB]',
    description:
      'Spesifikasi:\n' +
      '- Warna: Graphite Black.\n' +
      '- Memori: 8GB+128GB\n' +
      '- Dimensi: 261,89mm x 178,17mm x 6,4mm\n' +
      '- Berat: Kira-kira 508\n' +
      '- Ukuran: 11,5 inci',
    price: 7979000,
    image_url:
      'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/8/2/198c8c86-805f-4a96-854e-cbd5cb1ed50c.png',
    product_url:
      'https://www.tokopedia.com/arthajaya-ph/huawei-matepad-air-tablet-8-128gb-pc-level-productivity-244hz-graphite-black-f3183',
    id: 'ff4fc6f6-2238-40c6-91e9-be23a2d95d5b'
  },
  {
    title: 'Apple iPad Air (Gen 5) 10,9 inci 256GB 64GB Garansi Resmi',
    description:
      'iSmile adalah APPLE ONLINE RESELLER yang khusus menjual produk APPLE ORIGINAL dan BERGARANSI RESMI.',
    price: 9399000,
    image_url:
      'https://images.tokopedia.net/img/cache/900/VqbcmM/2023/2/20/281eae9d-89da-4735-8a31-b17e25f5c8d0.jpg',
    product_url:
      'https://www.tokopedia.com/ismileofficial/apple-ipad-air-gen-5-10-9-inci-256gb-64gb-garansi-resmi-gray-wifi-64gb',
    id: '20fa8692-8e51-4a5a-b583-9d33da91367d'
  }
];

const comment = [
  {
    username: 'fikriyusrihan',
    comment: 'Saya mau beli nih kak',
    timestamp: '2023-07-27T14:44:10.217Z',
    video_id: 'e47e1066-21cf-4d86-8797-4b6bb9e26dc5',
    id: '64c282ba5e05de15a5d41514'
  },
  {
    username: 'fikriyusrihan',
    comment: 'Berapaan kak?',
    timestamp: '2023-07-27T14:43:51.956Z',
    video_id: 'e47e1066-21cf-4d86-8797-4b6bb9e26dc5',
    id: '64c282a75e05de15a5d41511'
  }
];

export { videos, products, comment };
