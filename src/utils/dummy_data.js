const videos = [
  {
    id: 'd5b87ec8-56f5-427b-94e1-9a554bb5fd56',
    title: 'Laptop Gaming i7 & RTX 4060 yg Paling Murah! Review Axioo Pongo 760',
    video_url: 'https://www.youtube.com/watch?v=2uZzLhFgBbc',
    products: [],
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
    products: [],
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
    products: [],
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
    products: ['64c003950b5fbf5bfebca74d', '64c28adaf1131226970b3056'],
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
    products: [],
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
    products: [],
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
    products: [],
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
    title: 'Sony Alpha a7 III - Kamera Mirrorless 24MP',
    description:
      'Kamera Sony Alpha a7 III menawarkan kualitas gambar profesional dengan sensor full-frame 24.2MP dan kemampuan rekaman video 4K. Cocok untuk fotografer dan videografer yang serius.',
    price: 1899,
    image_url:
      'https://images.tokopedia.net/img/cache/700/OJWluG/2023/1/9/304e28ed-3975-43d5-a426-3af3a0f029f3.jpg.webp?ect=4g',
    product_url: 'https://www.tokopedia.com/catalog/sony-72080/sony-a7s',
    id: '64c003950b5fbf5bfebca74d'
  },
  {
    title: 'Nike Air Max 270 - Sepatu Olahraga Pria',
    description:
      'Sepatu Nike Air Max 270 menawarkan kenyamanan luar biasa dengan teknologi Max Air di bagian tumit. Desainnya yang keren juga cocok untuk digunakan sehari-hari.',
    price: 129.99,
    image_url:
      'https://images.tokopedia.net/img/cache/900/product-1/2020/5/3/785685202/785685202_85f01ec5-98f8-49cc-9079-7873d9d43c9e_452_452.jpg',
    product_url:
      'https://www.tokopedia.com/andzarstore/sepatu-sneakers-nike-air-max-270-white-ah6789-100-original-bnwb-murah',
    id: '64c28adaf1131226970b3056'
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
