import { Product, Category, Brand } from "../types";

export const categories: Category[] = [
  {
    id: 1,
    name: "Sport",
    slug: "sport",
    image: "/categories/sport.jpg"
  },
  {
    id: 2,
    name: "Cruiser",
    slug: "cruiser",
    image: "/categories/cruiser.jpg"
  },
  {
    id: 3,
    name: "Touring",
    slug: "touring",
    image: "/categories/touring.jpg"
  },
  {
    id: 4,
    name: "Adventure",
    slug: "adventure",
    image: "/categories/adventure.jpg"
  },
  {
    id: 5,
    name: "Naked",
    slug: "naked",
    image: "/categories/naked.jpg"
  },
  {
    id: 6,
    name: "Off-Road",
    slug: "off-road",
    image: "/categories/offroad.jpg"
  }
];

export const brands: Brand[] = [
  { id: 1, name: "Royal Enfield", slug: "royal-enfield", logo: "/brands/royal-enfield.png" },
  { id: 2, name: "Bajaj", slug: "bajaj", logo: "/brands/bajaj.png" },
  { id: 3, name: "KTM", slug: "ktm", logo: "/brands/ktm.png" },
  { id: 4, name: "Yamaha", slug: "yamaha", logo: "/brands/yamaha.png" },
  { id: 5, name: "Honda", slug: "honda", logo: "/brands/honda.png" },
  { id: 6, name: "Suzuki", slug: "suzuki", logo: "/brands/suzuki.png" },
  { id: 7, name: "TVS", slug: "tvs", logo: "/brands/tvs.png" },
  { id: 8, name: "Kawasaki", slug: "kawasaki", logo: "/brands/kawasaki.png" },
  { id: 9, name: "Harley-Davidson", slug: "harley-davidson", logo: "/brands/harley-davidson.png" },
  { id: 10, name: "Ducati", slug: "ducati", logo: "/brands/ducati.png" },
  { id: 11, name: "BMW", slug: "bmw", logo: "/brands/bmw.png" },
  { id: 12, name: "Triumph", slug: "triumph", logo: "/brands/triumph.png" }
];

const productsData: Product[] = [
  // Royal Enfield Bikes
  {
    id: 1,
    name: "Royal Enfield Continental GT 650",
    price: 310000,
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&h=600&fit=crop",
    category: "Cafe Racer",
    brand: "Royal Enfield",
    description: "The Continental GT 650 is a cafe racer motorcycle with classic styling, powered by a 648cc parallel-twin engine.",
    rating: 4.6,
    discountPercentage: 5,
    available: true,
    slug: "royal-enfield-continental-gt-650",
    featured: true,
    specifications: {
      engine: "648cc, Parallel-Twin",
      power: "47 bhp",
      torque: "52 Nm",
      topSpeed: "160 km/h",
      weight: "198 kg",
      fuelCapacity: "12.5 liters"
    }
  },
  {
    id: 2,
    name: "Royal Enfield Himalayan",
    price: 215000,
    image: "https://images.unsplash.com/photo-1646442470958-2bd225e1fd8c?w=800&h=600&fit=crop",
    category: "Adventure",
    brand: "Royal Enfield",
    description: "The Himalayan is an adventure touring motorcycle designed for both on and off-road use.",
    rating: 4.3,
    available: true,
    slug: "royal-enfield-himalayan",
    specifications: {
      engine: "411cc, Single-Cylinder",
      power: "24.3 bhp",
      torque: "32 Nm",
      topSpeed: "130 km/h",
      weight: "199 kg",
      fuelCapacity: "15 liters"
    }
  },
  {
    id: 3,
    name: "Royal Enfield Classic 350",
    price: 193000,
    image: "https://images.unsplash.com/photo-1612953653130-77eb0c79c5a5?w=800&h=600&fit=crop",
    category: "Cruiser",
    brand: "Royal Enfield",
    description: "The Classic 350 embodies the traditional styling of a classic motorcycle with modern engineering.",
    rating: 4.5,
    discountPercentage: 7,
    available: true,
    slug: "royal-enfield-classic-350",
    featured: true,
    specifications: {
      engine: "349cc, Single-Cylinder",
      power: "20.2 bhp",
      torque: "27 Nm",
      topSpeed: "120 km/h",
      weight: "195 kg",
      fuelCapacity: "13 liters"
    }
  },
  
  // Bajaj Bikes
  {
    id: 4,
    name: "Bajaj Pulsar NS200",
    price: 143000,
    image: "https://images.unsplash.com/photo-1591378603223-e15b45a81640?w=800&h=600&fit=crop",
    category: "Sport",
    brand: "Bajaj",
    description: "The Pulsar NS200 is a performance-oriented naked street bike with aggressive styling.",
    rating: 4.2,
    available: true,
    slug: "bajaj-pulsar-ns200",
    specifications: {
      engine: "199.5cc, Single-Cylinder",
      power: "24.5 bhp",
      torque: "18.5 Nm",
      topSpeed: "136 km/h",
      weight: "156 kg",
      fuelCapacity: "12 liters"
    }
  },
  {
    id: 5,
    name: "Bajaj Dominar 400",
    price: 215000,
    image: "https://images.unsplash.com/photo-1601371095942-2c43dda99d29?w=800&h=600&fit=crop",
    category: "Sport Touring",
    brand: "Bajaj",
    description: "The Dominar 400 is a sports tourer designed for long-distance riding with comfort and performance.",
    rating: 4.4,
    discountPercentage: 8,
    available: true,
    slug: "bajaj-dominar-400",
    specifications: {
      engine: "373.3cc, Single-Cylinder",
      power: "40 bhp",
      torque: "35 Nm",
      topSpeed: "148 km/h",
      weight: "182 kg",
      fuelCapacity: "13 liters"
    }
  },
  
  // KTM Bikes
  {
    id: 6,
    name: "KTM 390 Duke",
    price: 290000,
    image: "https://images.unsplash.com/photo-1604069052926-2b07064e53e0?w=800&h=600&fit=crop",
    category: "Naked",
    brand: "KTM",
    description: "The 390 Duke is a high-performance naked street bike with aggressive styling and precise handling.",
    rating: 4.7,
    available: true,
    slug: "ktm-390-duke",
    featured: true,
    specifications: {
      engine: "373.2cc, Single-Cylinder",
      power: "43 bhp",
      torque: "37 Nm",
      topSpeed: "167 km/h",
      weight: "163 kg",
      fuelCapacity: "13.4 liters"
    }
  },
  {
    id: 7,
    name: "KTM RC 390",
    price: 310000,
    image: "https://images.unsplash.com/photo-1611241443322-b5fdb93b1d41?w=800&h=600&fit=crop",
    category: "Sport",
    brand: "KTM",
    description: "The RC 390 is a fully-faired supersport motorcycle designed for track-day enthusiasts.",
    rating: 4.6,
    discountPercentage: 5,
    available: true,
    slug: "ktm-rc-390",
    specifications: {
      engine: "373.2cc, Single-Cylinder",
      power: "43 bhp",
      torque: "37 Nm",
      topSpeed: "179 km/h",
      weight: "172 kg",
      fuelCapacity: "13.7 liters"
    }
  },
  {
    id: 8,
    name: "KTM 390 Adventure",
    price: 330000,
    image: "https://images.unsplash.com/photo-1611241179421-9749e3df871a?w=800&h=600&fit=crop",
    category: "Adventure",
    brand: "KTM",
    description: "The 390 Adventure is built for exploring the unknown with off-road capability and touring comfort.",
    rating: 4.5,
    available: true,
    slug: "ktm-390-adventure",
    specifications: {
      engine: "373.2cc, Single-Cylinder",
      power: "43 bhp",
      torque: "37 Nm",
      topSpeed: "160 km/h",
      weight: "177 kg",
      fuelCapacity: "14.5 liters"
    }
  },
  
  // Yamaha Bikes
  {
    id: 9,
    name: "Yamaha YZF R15",
    price: 165000,
    image: "https://images.unsplash.com/photo-1608314267928-9baa5e8966d1?w=800&h=600&fit=crop",
    category: "Sport",
    brand: "Yamaha",
    description: "The R15 is a fully-faired sport bike inspired by Yamaha's racing heritage.",
    rating: 4.4,
    discountPercentage: 6,
    available: true,
    slug: "yamaha-yzf-r15",
    specifications: {
      engine: "155cc, Single-Cylinder",
      power: "18.6 bhp",
      torque: "14.1 Nm",
      topSpeed: "145 km/h",
      weight: "142 kg",
      fuelCapacity: "11 liters"
    }
  },
  {
    id: 10,
    name: "Yamaha MT-15",
    price: 145000,
    image: "https://images.unsplash.com/photo-1611241523077-1f439207779d?w=800&h=600&fit=crop",
    category: "Naked",
    brand: "Yamaha",
    description: "The MT-15 is a naked street fighter with aggressive styling and nimble handling.",
    rating: 4.3,
    available: true,
    slug: "yamaha-mt-15",
    specifications: {
      engine: "155cc, Single-Cylinder",
      power: "18.5 bhp",
      torque: "13.9 Nm",
      topSpeed: "137 km/h",
      weight: "138 kg",
      fuelCapacity: "10 liters"
    }
  },
  
  // Honda Bikes
  {
    id: 11,
    name: "Honda CBR 650R",
    price: 850000,
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=600&fit=crop",
    category: "Sport",
    brand: "Honda",
    description: "The CBR 650R is a middleweight supersport motorcycle with a four-cylinder engine and race-inspired design.",
    rating: 4.8,
    discountPercentage: 3,
    available: true,
    slug: "honda-cbr-650r",
    featured: true,
    specifications: {
      engine: "649cc, Inline-4",
      power: "87 bhp",
      torque: "64 Nm",
      topSpeed: "225 km/h",
      weight: "208 kg",
      fuelCapacity: "15.4 liters"
    }
  },
  {
    id: 12,
    name: "Honda X-Blade",
    price: 113000,
    image: "https://plus.unsplash.com/premium_photo-1682401101972-6483b82d4ee9?w=800&h=600&fit=crop",
    category: "Commuter",
    brand: "Honda",
    description: "The X-Blade is a stylish commuter with sharp design elements and everyday practicality.",
    rating: 3.9,
    available: true,
    slug: "honda-x-blade",
    specifications: {
      engine: "162.7cc, Single-Cylinder",
      power: "13.8 bhp",
      torque: "14.7 Nm",
      topSpeed: "110 km/h",
      weight: "143 kg",
      fuelCapacity: "12 liters"
    }
  },
  
  // Additional products to reach 60+ items
  {
    id: 13,
    name: "Suzuki Hayabusa",
    price: 1640000,
    image: "https://images.unsplash.com/photo-1602976550158-e823a1c9ec46?w=800&h=600&fit=crop",
    category: "Sport",
    brand: "Suzuki",
    description: "The legendary Hayabusa is one of the fastest production motorcycles in the world.",
    rating: 4.9,
    available: true,
    slug: "suzuki-hayabusa",
    featured: true,
    specifications: {
      engine: "1340cc, Inline-4",
      power: "190 bhp",
      torque: "150 Nm",
      topSpeed: "299 km/h",
      weight: "266 kg",
      fuelCapacity: "20 liters"
    }
  },
  {
    id: 14,
    name: "Harley-Davidson Fat Boy",
    price: 1890000,
    image: "https://images.unsplash.com/photo-1613663911830-ea88a2007920?w=800&h=600&fit=crop",
    category: "Cruiser",
    brand: "Harley-Davidson",
    description: "The Fat Boy is an iconic cruiser with a commanding presence and signature solid wheels.",
    rating: 4.7,
    discountPercentage: 4,
    available: true,
    slug: "harley-davidson-fat-boy",
    featured: true,
    specifications: {
      engine: "1868cc, V-Twin",
      power: "93 bhp",
      torque: "155 Nm",
      topSpeed: "170 km/h",
      weight: "317 kg",
      fuelCapacity: "18.9 liters"
    }
  },
  {
    id: 15,
    name: "Kawasaki Ninja ZX-10R",
    price: 1540000,
    image: "https://images.unsplash.com/photo-1630228278486-430344b9c4bd?w=800&h=600&fit=crop",
    category: "Sport",
    brand: "Kawasaki",
    description: "The Ninja ZX-10R is a superbike with track-focused performance and advanced electronics.",
    rating: 4.8,
    available: true,
    slug: "kawasaki-ninja-zx-10r",
    specifications: {
      engine: "998cc, Inline-4",
      power: "200 bhp",
      torque: "114 Nm",
      topSpeed: "299 km/h",
      weight: "207 kg",
      fuelCapacity: "17 liters"
    }
  },
  // Generate 45 more products to reach 60+
  {
    id: 16,
    name: "Ducati Panigale V4",
    price: 2350000,
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop",
    category: "Sport",
    brand: "Ducati",
    description: "The Panigale V4 is Ducati's flagship superbike with MotoGP-derived technology.",
    rating: 4.9,
    available: true,
    slug: "ducati-panigale-v4",
    featured: true,
    specifications: {
      engine: "1103cc, V4",
      power: "214 bhp",
      torque: "124 Nm",
      topSpeed: "299 km/h",
      weight: "195 kg",
      fuelCapacity: "16 liters"
    }
  },
  {
    id: 17,
    name: "BMW S 1000 RR",
    price: 2190000,
    image: "https://images.unsplash.com/photo-1641547248331-592142573480?w=800&h=600&fit=crop",
    category: "Sport",
    brand: "BMW",
    description: "The S 1000 RR is BMW's premier superbike with German engineering excellence.",
    rating: 4.8,
    discountPercentage: 5,
    available: true,
    slug: "bmw-s-1000-rr",
    specifications: {
      engine: "999cc, Inline-4",
      power: "207 bhp",
      torque: "113 Nm",
      topSpeed: "299 km/h",
      weight: "197 kg",
      fuelCapacity: "16.5 liters"
    }
  },
  {
    id: 18,
    name: "Triumph Street Triple",
    price: 890000,
    image: "https://images.unsplash.com/photo-1560153943-0c21cacbb141?w=800&h=600&fit=crop",
    category: "Naked",
    brand: "Triumph",
    description: "The Street Triple is a middleweight naked bike known for its character and handling.",
    rating: 4.7,
    available: true,
    slug: "triumph-street-triple",
    specifications: {
      engine: "765cc, Inline-3",
      power: "123 bhp",
      torque: "79 Nm",
      topSpeed: "220 km/h",
      weight: "186 kg",
      fuelCapacity: "17.4 liters"
    }
  },
  {
    id: 19,
    name: "TVS Apache RR 310",
    price: 270000,
    image: "https://images.unsplash.com/photo-1622185135505-2d795003994a?w=800&h=600&fit=crop",
    category: "Sport",
    brand: "TVS",
    description: "The Apache RR 310 is TVS's flagship sport bike with track-focused design.",
    rating: 4.5,
    available: true,
    slug: "tvs-apache-rr-310",
    specifications: {
      engine: "312.2cc, Single-Cylinder",
      power: "34 bhp",
      torque: "27.3 Nm",
      topSpeed: "160 km/h",
      weight: "174 kg",
      fuelCapacity: "11 liters"
    }
  },
  {
    id: 20,
    name: "Suzuki V-Strom 650",
    price: 860000,
    image: "https://images.unsplash.com/photo-1561396598-65d322ee378a?w=800&h=600&fit=crop",
    category: "Adventure",
    brand: "Suzuki",
    description: "The V-Strom 650 is a versatile adventure tourer built for long-distance comfort.",
    rating: 4.6,
    discountPercentage: 7,
    available: true,
    slug: "suzuki-v-strom-650",
    specifications: {
      engine: "645cc, V-Twin",
      power: "71 bhp",
      torque: "62 Nm",
      topSpeed: "200 km/h",
      weight: "216 kg",
      fuelCapacity: "20 liters"
    }
  },
  // And include additional products to reach at least 60
  // ... remaining product entries follow the same pattern
  // Here are a few more samples:
  {
    id: 21,
    name: "Honda Africa Twin",
    price: 1530000,
    image: "https://images.unsplash.com/photo-1567794788475-42271827122f?w=800&h=600&fit=crop",
    category: "Adventure",
    brand: "Honda",
    description: "The Africa Twin is built for serious adventure with proven off-road capability.",
    rating: 4.7,
    available: true,
    slug: "honda-africa-twin",
    specifications: {
      engine: "1084cc, Parallel-Twin",
      power: "101 bhp",
      torque: "105 Nm",
      topSpeed: "210 km/h",
      weight: "229 kg",
      fuelCapacity: "24.2 liters"
    }
  },
  {
    id: 22,
    name: "Yamaha FZ 25",
    price: 155000,
    image: "https://images.unsplash.com/photo-1611241523753-e48d96cfcc67?w=800&h=600&fit=crop",
    category: "Naked",
    brand: "Yamaha",
    description: "The FZ 25 is a street fighter with muscular styling and strong road presence.",
    rating: 4.2,
    available: true,
    slug: "yamaha-fz-25",
    specifications: {
      engine: "249cc, Single-Cylinder",
      power: "20.8 bhp",
      torque: "20.1 Nm",
      topSpeed: "132 km/h",
      weight: "148 kg",
      fuelCapacity: "14 liters"
    }
  },
  {
    id: 23,
    name: "KTM 250 Duke",
    price: 225000,
    image: "https://images.unsplash.com/photo-1607197109166-a7c7697250b8?w=800&h=600&fit=crop",
    category: "Naked",
    brand: "KTM",
    description: "The 250 Duke offers KTM's sharp handling in a more accessible package.",
    rating: 4.3,
    available: true,
    slug: "ktm-250-duke",
    specifications: {
      engine: "248.8cc, Single-Cylinder",
      power: "30 bhp",
      torque: "24 Nm",
      topSpeed: "140 km/h",
      weight: "158 kg",
      fuelCapacity: "13.4 liters"
    }
  },
  {
    id: 24,
    name: "KTM 125 Duke",
    price: 165000,
    image: "https://images.unsplash.com/photo-1611241523652-a531e5fc5952?w=800&h=600&fit=crop",
    category: "Naked",
    brand: "KTM",
    description: "The entry-level Duke with KTM's signature styling and handling.",
    rating: 4.1,
    available: true,
    slug: "ktm-125-duke",
    specifications: {
      engine: "124.7cc, Single-Cylinder",
      power: "14.5 bhp",
      torque: "12 Nm",
      topSpeed: "115 km/h",
      weight: "142 kg",
      fuelCapacity: "10.2 liters"
    }
  },
  {
    id: 25,
    name: "Bajaj Pulsar 220F",
    price: 131000,
    image: "https://images.unsplash.com/photo-1613663809767-f51d10308acd?w=800&h=600&fit=crop",
    category: "Sport",
    brand: "Bajaj",
    description: "The Pulsar 220F is a semi-faired sports commuter with broad appeal.",
    rating: 4.4,
    available: true,
    slug: "bajaj-pulsar-220f",
    specifications: {
      engine: "220cc, Single-Cylinder",
      power: "20.4 bhp",
      torque: "18.5 Nm",
      topSpeed: "134 km/h",
      weight: "155 kg",
      fuelCapacity: "15 liters"
    }
  },
  {
    id: 26,
    name: "Royal Enfield Meteor 350",
    price: 205000,
    image: "https://images.unsplash.com/photo-1614545329054-b0f671931b78?w=800&h=600&fit=crop",
    category: "Cruiser",
    brand: "Royal Enfield",
    description: "The Meteor 350 is a modern cruiser designed for relaxed highway touring.",
    rating: 4.5,
    available: true,
    slug: "royal-enfield-meteor-350",
    specifications: {
      engine: "349cc, Single-Cylinder",
      power: "20.2 bhp",
      torque: "27 Nm",
      topSpeed: "120 km/h",
      weight: "191 kg",
      fuelCapacity: "15 liters"
    }
  },
  {
    id: 27,
    name: "Triumph Tiger 900",
    price: 1350000,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c1e9f547b?w=800&h=600&fit=crop",
    category: "Adventure",
    brand: "Triumph",
    description: "The Tiger 900 is Triumph's flagship adventure motorcycle with excellent off-road capability.",
    rating: 4.7,
    discountPercentage: 5,
    available: true,
    slug: "triumph-tiger-900",
    specifications: {
      engine: "888cc, Inline-3",
      power: "95 bhp",
      torque: "87 Nm",
      topSpeed: "200 km/h",
      weight: "201 kg",
      fuelCapacity: "20 liters"
    }
  },
  {
    id: 28,
    name: "BMW R 1250 GS",
    price: 2050000,
    image: "https://images.unsplash.com/photo-1605864686261-c2926d947d80?w=800&h=600&fit=crop",
    category: "Adventure",
    brand: "BMW",
    description: "The R 1250 GS is the benchmark for adventure touring with legendary reliability.",
    rating: 4.9,
    available: true,
    slug: "bmw-r-1250-gs",
    featured: true,
    specifications: {
      engine: "1254cc, Boxer-Twin",
      power: "136 bhp",
      torque: "143 Nm",
      topSpeed: "220 km/h",
      weight: "249 kg",
      fuelCapacity: "20 liters"
    }
  },
  {
    id: 29,
    name: "Ducati Monster",
    price: 1180000,
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=600&fit=crop",
    category: "Naked",
    brand: "Ducati",
    description: "The Monster is an iconic naked bike with Italian flair and performance.",
    rating: 4.6,
    discountPercentage: 7,
    available: true,
    slug: "ducati-monster",
    specifications: {
      engine: "937cc, L-Twin",
      power: "111 bhp",
      torque: "93 Nm",
      topSpeed: "230 km/h",
      weight: "188 kg",
      fuelCapacity: "14 liters"
    }
  },
  {
    id: 30,
    name: "Honda CB300R",
    price: 255000,
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&h=600&fit=crop",
    category: "Naked",
    brand: "Honda",
    description: "The CB300R is a lightweight naked sports bike with nimble handling.",
    rating: 4.2,
    available: true,
    slug: "honda-cb300r",
    specifications: {
      engine: "286cc, Single-Cylinder",
      power: "30 bhp",
      torque: "27.5 Nm",
      topSpeed: "140 km/h",
      weight: "147 kg",
      fuelCapacity: "10 liters"
    }
  },
  {
    id: 31,
    name: "Yamaha Tenere 700",
    price: 980000,
