
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
    image: "https://images.unsplash.com/photo-1619771914272-e3c1ba17ba4d?w=800&h=600&fit=crop",
    category: "Adventure",
    brand: "Yamaha",
    description: "The Tenere 700 is a capable adventure motorcycle built for off-road exploration.",
    rating: 4.7,
    available: true,
    slug: "yamaha-tenere-700",
    specifications: {
      engine: "689cc, Parallel-Twin",
      power: "72 bhp",
      torque: "68 Nm",
      topSpeed: "190 km/h",
      weight: "204 kg",
      fuelCapacity: "16 liters"
    }
  },
  {
    id: 32,
    name: "TVS Ronin",
    price: 149000,
    image: "https://images.unsplash.com/photo-1611323532760-0d090ad077f7?w=800&h=600&fit=crop",
    category: "Modern Classic",
    brand: "TVS",
    description: "The TVS Ronin is a neo-retro motorcycle with modern features and classic styling.",
    rating: 4.3,
    available: true,
    slug: "tvs-ronin",
    specifications: {
      engine: "225.9cc, Single-Cylinder",
      power: "20.4 bhp",
      torque: "19.93 Nm",
      topSpeed: "125 km/h",
      weight: "160 kg",
      fuelCapacity: "14 liters"
    }
  },
  {
    id: 33,
    name: "Suzuki Katana",
    price: 1380000,
    image: "https://images.unsplash.com/photo-1571646750134-a6efcbf11bff?w=800&h=600&fit=crop",
    category: "Sport",
    brand: "Suzuki",
    description: "The Katana features distinctive styling with sharp lines inspired by the legendary samurai sword.",
    rating: 4.6,
    discountPercentage: 4,
    available: true,
    slug: "suzuki-katana",
    specifications: {
      engine: "999cc, Inline-4",
      power: "150 bhp",
      torque: "108 Nm",
      topSpeed: "250 km/h",
      weight: "215 kg",
      fuelCapacity: "12 liters"
    }
  },
  {
    id: 34,
    name: "Kawasaki Versys 650",
    price: 730000,
    image: "https://images.unsplash.com/photo-1611241524751-9e66ded69a79?w=800&h=600&fit=crop",
    category: "Adventure",
    brand: "Kawasaki",
    description: "The Versys 650 is a versatile adventure-touring motorcycle perfect for daily commuting and long rides.",
    rating: 4.5,
    available: true,
    slug: "kawasaki-versys-650",
    specifications: {
      engine: "649cc, Parallel-Twin",
      power: "66 bhp",
      torque: "61 Nm",
      topSpeed: "185 km/h",
      weight: "216 kg",
      fuelCapacity: "21 liters"
    }
  },
  {
    id: 35,
    name: "Triumph Trident 660",
    price: 860000,
    image: "https://images.unsplash.com/photo-1614297305129-69f584333034?w=800&h=600&fit=crop",
    category: "Naked",
    brand: "Triumph",
    description: "The Trident 660 is a middleweight roadster with a triple-cylinder engine offering excellent balance.",
    rating: 4.6,
    available: true,
    slug: "triumph-trident-660",
    specifications: {
      engine: "660cc, Inline-3",
      power: "80 bhp",
      torque: "64 Nm",
      topSpeed: "210 km/h",
      weight: "189 kg",
      fuelCapacity: "14 liters"
    }
  },
  {
    id: 36,
    name: "BMW F 900 R",
    price: 1050000,
    image: "https://images.unsplash.com/photo-1611241523951-45dc17b0a864?w=800&h=600&fit=crop",
    category: "Naked",
    brand: "BMW",
    description: "The F 900 R is a dynamic roadster with sporty character and impressive handling.",
    rating: 4.5,
    discountPercentage: 3,
    available: true,
    slug: "bmw-f-900-r",
    specifications: {
      engine: "895cc, Parallel-Twin",
      power: "105 bhp",
      torque: "92 Nm",
      topSpeed: "215 km/h",
      weight: "211 kg",
      fuelCapacity: "13 liters"
    }
  },
  {
    id: 37,
    name: "Ducati Multistrada V4",
    price: 1950000,
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=600&fit=crop",
    category: "Adventure",
    brand: "Ducati",
    description: "The Multistrada V4 combines sports bike performance with touring comfort and off-road capability.",
    rating: 4.9,
    available: true,
    slug: "ducati-multistrada-v4",
    featured: true,
    specifications: {
      engine: "1158cc, V4",
      power: "170 bhp",
      torque: "125 Nm",
      topSpeed: "250 km/h",
      weight: "215 kg",
      fuelCapacity: "22 liters"
    }
  },
  {
    id: 38,
    name: "Harley-Davidson Street Glide",
    price: 2150000,
    image: "https://images.unsplash.com/photo-1613663863789-6ace3583bde8?w=800&h=600&fit=crop",
    category: "Touring",
    brand: "Harley-Davidson",
    description: "The Street Glide is a classic American touring motorcycle built for long highway journeys.",
    rating: 4.8,
    available: true,
    slug: "harley-davidson-street-glide",
    specifications: {
      engine: "1868cc, V-Twin",
      power: "90 bhp",
      torque: "160 Nm",
      topSpeed: "170 km/h",
      weight: "362 kg",
      fuelCapacity: "22.7 liters"
    }
  },
  {
    id: 39,
    name: "Royal Enfield Hunter 350",
    price: 149000,
    image: "https://images.unsplash.com/photo-1633328162553-56233c0135d5?w=800&h=600&fit=crop",
    category: "Retro",
    brand: "Royal Enfield",
    description: "The Hunter 350 combines classic design with agile handling for urban riding.",
    rating: 4.3,
    available: true,
    slug: "royal-enfield-hunter-350",
    specifications: {
      engine: "349cc, Single-Cylinder",
      power: "20.2 bhp",
      torque: "27 Nm",
      topSpeed: "115 km/h",
      weight: "181 kg",
      fuelCapacity: "13 liters"
    }
  },
  {
    id: 40,
    name: "Bajaj Chetak Electric",
    price: 140000,
    image: "https://images.unsplash.com/photo-1633528863741-fbddce591323?w=800&h=600&fit=crop",
    category: "Electric",
    brand: "Bajaj",
    description: "The Chetak Electric is a modern revival of the iconic scooter with zero emissions.",
    rating: 4.3,
    discountPercentage: 5,
    available: true,
    slug: "bajaj-chetak-electric",
    specifications: {
      engine: "Electric Motor",
      power: "4.08 kW",
      torque: "16 Nm",
      topSpeed: "70 km/h",
      weight: "120 kg",
      batteryRange: "95 km"
    }
  },
  {
    id: 41,
    name: "Kawasaki Z900",
    price: 850000,
    image: "https://images.unsplash.com/photo-1611241524610-dac8323ab272?w=800&h=600&fit=crop",
    category: "Naked",
    brand: "Kawasaki",
    description: "The Z900 is a powerful naked motorcycle with aggressive styling and impressive performance.",
    rating: 4.7,
    available: true,
    slug: "kawasaki-z900",
    specifications: {
      engine: "948cc, Inline-4",
      power: "125 bhp",
      torque: "98.6 Nm",
      topSpeed: "245 km/h",
      weight: "212 kg",
      fuelCapacity: "17 liters"
    }
  },
  {
    id: 42,
    name: "Honda CB650R",
    price: 870000,
    image: "https://images.unsplash.com/photo-1551449426-68d95f659d41?w=800&h=600&fit=crop",
    category: "Naked",
    brand: "Honda",
    description: "The CB650R is a middleweight naked motorcycle with a smooth four-cylinder engine and neo-retro styling.",
    rating: 4.6,
    available: true,
    slug: "honda-cb650r",
    specifications: {
      engine: "649cc, Inline-4",
      power: "94 bhp",
      torque: "63 Nm",
      topSpeed: "225 km/h",
      weight: "202 kg",
      fuelCapacity: "15.4 liters"
    }
  },
  {
    id: 43,
    name: "TVS Apache RTR 160 4V",
    price: 119000,
    image: "https://images.unsplash.com/photo-1633528859053-9d208c4b0b12?w=800&h=600&fit=crop",
    category: "Sport",
    brand: "TVS",
    description: "The Apache RTR 160 4V is a performance-oriented commuter with racing DNA.",
    rating: 4.4,
    discountPercentage: 5,
    available: true,
    slug: "tvs-apache-rtr-160-4v",
    specifications: {
      engine: "159.7cc, Single-Cylinder",
      power: "17.5 bhp",
      torque: "14.73 Nm",
      topSpeed: "125 km/h",
      weight: "147 kg",
      fuelCapacity: "12 liters"
    }
  },
  {
    id: 44,
    name: "Yamaha R3",
    price: 410000,
    image: "https://images.unsplash.com/photo-1611241523828-61aea437dd81?w=800&h=600&fit=crop",
    category: "Sport",
    brand: "Yamaha",
    description: "The Yamaha R3 is a twin-cylinder sport bike that offers balanced performance for beginners and enthusiasts.",
    rating: 4.5,
    available: true,
    slug: "yamaha-r3",
    specifications: {
      engine: "321cc, Parallel-Twin",
      power: "42 bhp",
      torque: "29.6 Nm",
      topSpeed: "180 km/h",
      weight: "167 kg",
      fuelCapacity: "14 liters"
    }
  },
  {
    id: 45,
    name: "Suzuki Gixxer SF 250",
    price: 190000,
    image: "https://images.unsplash.com/photo-1611241523477-06063345c4ca?w=800&h=600&fit=crop",
    category: "Sport",
    brand: "Suzuki",
    description: "The Gixxer SF 250 is a fully-faired sport bike with a refined single-cylinder engine.",
    rating: 4.4,
    available: true,
    slug: "suzuki-gixxer-sf-250",
    specifications: {
      engine: "249cc, Single-Cylinder",
      power: "26.5 bhp",
      torque: "22.2 Nm",
      topSpeed: "155 km/h",
      weight: "161 kg",
      fuelCapacity: "12 liters"
    }
  },
  {
    id: 46,
    name: "Triumph Rocket 3",
    price: 2150000,
    image: "https://images.unsplash.com/photo-1611241523577-d5f95554ab14?w=800&h=600&fit=crop",
    category: "Muscle",
    brand: "Triumph",
    description: "The Rocket 3 features the world's largest production motorcycle engine with enormous torque.",
    rating: 4.8,
    available: true,
    slug: "triumph-rocket-3",
    specifications: {
      engine: "2458cc, Inline-3",
      power: "167 bhp",
      torque: "221 Nm",
      topSpeed: "230 km/h",
      weight: "291 kg",
      fuelCapacity: "18 liters"
    }
  },
  {
    id: 47,
    name: "Bajaj Pulsar N250",
    price: 149000,
    image: "https://images.unsplash.com/photo-1591634936742-4812246e584a?w=800&h=600&fit=crop",
    category: "Sport",
    brand: "Bajaj",
    description: "The Pulsar N250 is a naked street fighter with a new-gen platform and powerful engine.",
    rating: 4.3,
    discountPercentage: 6,
    available: true,
    slug: "bajaj-pulsar-n250",
    specifications: {
      engine: "249.07cc, Single-Cylinder",
      power: "24.5 bhp",
      torque: "21.5 Nm",
      topSpeed: "140 km/h",
      weight: "162 kg",
      fuelCapacity: "14 liters"
    }
  },
  {
    id: 48,
    name: "BMW G 310 GS",
    price: 350000,
    image: "https://images.unsplash.com/photo-1611241524149-59f4ec1bf75b?w=800&h=600&fit=crop",
    category: "Adventure",
    brand: "BMW",
    description: "The G 310 GS is a compact adventure bike that makes adventure riding accessible.",
    rating: 4.2,
    available: true,
    slug: "bmw-g-310-gs",
    specifications: {
      engine: "313cc, Single-Cylinder",
      power: "34 bhp",
      torque: "28 Nm",
      topSpeed: "143 km/h",
      weight: "175 kg",
      fuelCapacity: "11 liters"
    }
  },
  {
    id: 49,
    name: "Ducati Scrambler",
    price: 925000,
    image: "https://images.unsplash.com/photo-1611241523846-5fc47a25add4?w=800&h=600&fit=crop",
    category: "Scrambler",
    brand: "Ducati",
    description: "The Scrambler combines classic styling with modern performance for urban adventures.",
    rating: 4.5,
    available: true,
    slug: "ducati-scrambler",
    specifications: {
      engine: "803cc, L-Twin",
      power: "73 bhp",
      torque: "66.2 Nm",
      topSpeed: "200 km/h",
      weight: "189 kg",
      fuelCapacity: "13.5 liters"
    }
  },
  {
    id: 50,
    name: "KTM 790 Adventure",
    price: 1250000,
    image: "https://images.unsplash.com/photo-1611241523409-fd73bb7e43a0?w=800&h=600&fit=crop",
    category: "Adventure",
    brand: "KTM",
    description: "The 790 Adventure offers exceptional off-road performance with long-range touring ability.",
    rating: 4.7,
    discountPercentage: 4,
    available: true,
    slug: "ktm-790-adventure",
    specifications: {
      engine: "799cc, Parallel-Twin",
      power: "95 bhp",
      torque: "88 Nm",
      topSpeed: "210 km/h",
      weight: "189 kg",
      fuelCapacity: "20 liters"
    }
  },
  {
    id: 51,
    name: "Royal Enfield Scram 411",
    price: 208000,
    image: "https://images.unsplash.com/photo-1604831926403-b49d5dda6e29?w=800&h=600&fit=crop",
    category: "Scrambler",
    brand: "Royal Enfield",
    description: "The Scram 411 is a more road-focused derivative of the Himalayan adventure bike.",
    rating: 4.2,
    available: true,
    slug: "royal-enfield-scram-411",
    specifications: {
      engine: "411cc, Single-Cylinder",
      power: "24.3 bhp",
      torque: "32 Nm",
      topSpeed: "130 km/h",
      weight: "185 kg",
      fuelCapacity: "15 liters"
    }
  },
  {
    id: 52,
    name: "Honda H'ness CB350",
    price: 198000,
    image: "https://images.unsplash.com/photo-1611241523902-b4c64d0358da?w=800&h=600&fit=crop",
    category: "Modern Classic",
    brand: "Honda",
    description: "The H'ness CB350 combines retro charm with modern technology in a middleweight package.",
    rating: 4.4,
    available: true,
    slug: "honda-hness-cb350",
    specifications: {
      engine: "348.36cc, Single-Cylinder",
      power: "21 bhp",
      torque: "30 Nm",
      topSpeed: "135 km/h",
      weight: "181 kg",
      fuelCapacity: "15 liters"
    }
  },
  {
    id: 53,
    name: "Yamaha MT-09",
    price: 980000,
    image: "https://images.unsplash.com/photo-1611241523537-14c78981a2f5?w=800&h=600&fit=crop",
    category: "Naked",
    brand: "Yamaha",
    description: "The MT-09 is a dynamic naked bike with a three-cylinder engine offering exhilarating performance.",
    rating: 4.7,
    discountPercentage: 3,
    available: true,
    slug: "yamaha-mt-09",
    specifications: {
      engine: "890cc, Inline-3",
      power: "117.3 bhp",
      torque: "93 Nm",
      topSpeed: "240 km/h",
      weight: "193 kg",
      fuelCapacity: "14 liters"
    }
  },
  {
    id: 54,
    name: "Suzuki GSX-S750",
    price: 780000,
    image: "https://images.unsplash.com/photo-1611241523379-103439dfce03?w=800&h=600&fit=crop",
    category: "Naked",
    brand: "Suzuki",
    description: "The GSX-S750 is a middleweight street fighter with sportbike DNA and all-round performance.",
    rating: 4.5,
    available: true,
    slug: "suzuki-gsx-s750",
    specifications: {
      engine: "749cc, Inline-4",
      power: "114 bhp",
      torque: "81 Nm",
      topSpeed: "230 km/h",
      weight: "213 kg",
      fuelCapacity: "16 liters"
    }
  },
  {
    id: 55,
    name: "Kawasaki Vulcan S",
    price: 650000,
    image: "https://images.unsplash.com/photo-1611241523702-e55f0c892504?w=800&h=600&fit=crop",
    category: "Cruiser",
    brand: "Kawasaki",
    description: "The Vulcan S is a modern cruiser with ergonomic customization options for various rider sizes.",
    rating: 4.3,
    available: true,
    slug: "kawasaki-vulcan-s",
    specifications: {
      engine: "649cc, Parallel-Twin",
      power: "61 bhp",
      torque: "63 Nm",
      topSpeed: "185 km/h",
      weight: "235 kg",
      fuelCapacity: "14 liters"
    }
  },
  {
    id: 56,
    name: "TVS Apache RTR 200 4V",
    price: 139000,
    image: "https://images.unsplash.com/photo-1633528859437-38a162c36cc2?w=800&h=600&fit=crop",
    category: "Sport",
    brand: "TVS",
    description: "The Apache RTR 200 4V offers race-tuned performance with advanced features and technology.",
    rating: 4.4,
    discountPercentage: 5,
    available: true,
    slug: "tvs-apache-rtr-200-4v",
    specifications: {
      engine: "197.75cc, Single-Cylinder",
      power: "20.8 bhp",
      torque: "17.25 Nm",
      topSpeed: "127 km/h",
      weight: "152 kg",
      fuelCapacity: "12 liters"
    }
  },
  {
    id: 57,
    name: "Harley-Davidson Iron 883",
    price: 980000,
    image: "https://images.unsplash.com/photo-1613663913220-255112896a69?w=800&h=600&fit=crop",
    category: "Cruiser",
    brand: "Harley-Davidson",
    description: "The Iron 883 is a classic Sportster with stripped-down, blacked-out styling and authentic character.",
    rating: 4.5,
    available: true,
    slug: "harley-davidson-iron-883",
    specifications: {
      engine: "883cc, V-Twin",
      power: "50 bhp",
      torque: "68 Nm",
      topSpeed: "160 km/h",
      weight: "247 kg",
      fuelCapacity: "12.5 liters"
    }
  },
  {
    id: 58,
    name: "BMW K 1600 GTL",
    price: 2980000,
    image: "https://images.unsplash.com/photo-1611241524169-8deb443447af?w=800&h=600&fit=crop",
    category: "Touring",
    brand: "BMW",
    description: "The K 1600 GTL is a luxury touring motorcycle with a six-cylinder engine and premium amenities.",
    rating: 4.9,
    available: true,
    slug: "bmw-k-1600-gtl",
    specifications: {
      engine: "1649cc, Inline-6",
      power: "160 bhp",
      torque: "175 Nm",
      topSpeed: "250 km/h",
      weight: "352 kg",
      fuelCapacity: "26.5 liters"
    }
  },
  {
    id: 59,
    name: "Ducati Diavel",
    price: 1850000,
    image: "https://images.unsplash.com/photo-1611241523939-4224cf62f69d?w=800&h=600&fit=crop",
    category: "Power Cruiser",
    brand: "Ducati",
    description: "The Diavel combines cruiser comfort with superbike performance in a unique package.",
    rating: 4.7,
    discountPercentage: 3,
    available: true,
    slug: "ducati-diavel",
    specifications: {
      engine: "1262cc, L-Twin",
      power: "162 bhp",
      torque: "129 Nm",
      topSpeed: "250 km/h",
      weight: "218 kg",
      fuelCapacity: "17 liters"
    }
  },
  {
    id: 60,
    name: "Triumph Bonneville T120",
    price: 1050000,
    image: "https://images.unsplash.com/photo-1611241523896-1e38cda49252?w=800&h=600&fit=crop",
    category: "Modern Classic",
    brand: "Triumph",
    description: "The Bonneville T120 is a modern interpretation of the iconic 1959 classic with authentic styling.",
    rating: 4.6,
    available: true,
    slug: "triumph-bonneville-t120",
    specifications: {
      engine: "1200cc, Parallel-Twin",
      power: "80 bhp",
      torque: "105 Nm",
      topSpeed: "190 km/h",
      weight: "224 kg",
      fuelCapacity: "14.5 liters"
    }
  }
];

// Function to get all products
export const getProducts = () => productsData;

// Function to get featured products
export const getFeaturedProducts = () => productsData.filter(product => product.featured);

// Function to get product by slug
export const getProductBySlug = (slug: string) => productsData.find(product => product.slug === slug);

// Function to get products by category
export const getProductsByCategory = (category: string) => {
  return productsData.filter(product => product.category === category);
};

// Function to get related products - same category or brand, excluding current product
export const getRelatedProducts = (product: Product) => {
  return productsData
    .filter(p => p.id !== product.id && (p.category === product.category || p.brand === product.brand))
    .slice(0, 4);
};
