export const availableRewards = [
  {
    id: 1,
    title: '50 points - FREE UP SIZE',
    eligible: true
  },
  {
    id: 2,
    title: '340 points - 35.000đ',
    eligible: false
  },
  {
    id: 3,
    title: '400 points - BUY 1 GET 1 FREE',
    eligible: false
  },
  {
    id: 4,
    title: '500 points - 1 FREE DRINK',
    eligible: false
  }
]

export const locations = [
  {
    id: 1,
    title: 'Bitexco Financial Tower',
    address: '2 Hai Trieu, Ben Nghe, 1 District, Ho Chi Minh',
    operation_hours: 'Monday - Friday: 08AM - 05PM \nSaturday - Saturday: 10AM - Midnight',
    bookmarked: true
  },
  {
    id: 2,
    title: 'Landmark 81 Skyscraper',
    address: '720A Dien Bien Phu, Binh Thanh, Ho Chi Minh',
    operation_hours: 'Sunday - Thursday: 10AM - 11PM \nFriday - Saturday: 10AM - Midnight',
    bookmarked: false
  },
  {
    id: 3,
    title: 'Keangnam Tower',
    address: 'Pham Hung, Me Tri, Nam Tu Liem, Ha Noi',
    operation_hours: 'Sunday - Thursday: 10AM - 11PM \nFriday - Saturday: 10AM - Midnight',
    bookmarked: true
  },
  {
    id: 4,
    title: 'Lotte Center',
    address: 'Ba Dinh, Ha Noi',
    operation_hours: 'Sunday - Thursday: 10AM - 11PM \nFriday - Saturday: 10AM - Midnight',
    bookmarked: false
  }
]

export const menuList = [
  {
    id: 1,
    name: 'Brown Sugar Fresh Milk Tea',
    description: 'This drink is made from 3 ingredients, caramelised brown sugar and milk.',
    price: 35000,
    thumbnail: require('../assets/images/brown-sugar-fresh-mt.png'),
    category: 'Milk Tea'
  },
  {
    id: 2,
    name: 'Matcha Milk Tea',
    description: 'In a glass jar, mix the matcha green tea powder with a little bit of water.',
    price: 39000,
    thumbnail: require('../assets/images/matcha-mt.png'),
    category: 'Milk Tea'
  },
  {
    id: 3,
    name: 'Strawberry Milk Tea',
    description: 'Pour prepared tea into each glass topped with 1 cup of strawberry milk.',
    price: 42000,
    thumbnail: require('../assets/images/strawberry-mt.png'),
    category: 'Milk Tea'
  },
  {
    id: 4,
    name: 'Ice Lemon Tea',
    description: 'Make up a jug of refreshing iced tea to serve on summer days.',
    price: 49000,
    thumbnail: require('../assets/images/ice-lemon.png'),
    category: 'Specialtea'
  },
  {
    id: 5,
    name: 'Berry Smoothie',
    description: 'Fresh or frozen fruit? For smoothies, frozen fruit is best.',
    price: 32000,
    thumbnail: require('../assets/images/berry-smoothie.png'),
    category: 'Smoothie'
  },
  {
    id: 6,
    name: 'Immune Booster',
    description: 'Healthy Smoothies to Boost Your Immune System',
    price: 38000,
    thumbnail: require('../assets/images/immune-smoothie.png'),
    category: 'Smoothie'
  },
  {
    id: 7,
    name: 'Very Berry',
    description: 'Fresh or frozen fruit? For smoothies, frozen fruit is best.',
    price: 45000,
    thumbnail: require('../assets/images/very-berry.png'),
    category: 'Smoothie'
  },
  {
    id: 8,
    name: 'Watermelon Lychee Crush',
    description: 'Deliciously refreshing 2-ingredient watermelon smoothie. ',
    price: 52000,
    thumbnail: require('../assets/images/watermelon.png'),
    category: 'Smoothie'
  },
  {
    id: 9,
    name: 'Vietnamese Traditional Coffee',
    description: 'The ubiquitous Vietnamese street coffee stalls utilize aluminum drip filters.',
    price: 29000,
    thumbnail: require('../assets/images/Vietnamese-traditional-coffee.png'),
    category: 'Coffee'
  },
  {
    id: 10,
    name: 'Cappuccino',
    description: 'A cappuccino is an espresso-based coffee drink that originated in Italy.',
    price: 32000,
    thumbnail: require('../assets/images/latte.png'),
    category: 'Coffee'
  },
  {
    id: 11,
    name: 'Mocha',
    description: 'Caffè mocha, also called mocaccino, is a chocolate-flavoured variant of a latte.',
    price: 35000,
    thumbnail: require('../assets/images/mocha.png'),
    category: 'Coffee'
  },
  {
    id: 12,
    name: 'Espresso',
    description: 'Espresso is a coffee-brewing method of Italian origin.',
    price: 35000,
    thumbnail: require('../assets/images/espresso.png'),
    category: 'Coffee'
  },
  {
    id: 13,
    name: 'Americano',
    description: 'Caffè Americano is a type of coffee drink prepared by an espresso with hot water.',
    price: 32000,
    thumbnail: require('../assets/images/americano.png'),
    category: 'Coffee'
  },
  {
    id: 14,
    name: 'Hash Brown',
    description: 'Hash browns, also spelled hashed browns, are a popular American breakfast dish.',
    price: 19000,
    thumbnail: require('../assets/images/hash-brown.png'),
    category: 'Snack'
  },
  {
    id: 15,
    name: 'French Fries',
    description: 'French-fried potatoes, are batonnet or allumette-cut deep-fried potatoes.',
    price: 15000,
    thumbnail: require('../assets/images/fries.png'),
    category: 'Snack'
  }
]

export const milkList = [
  {
    id: 1,
    name: 'No milk',
    price: 0,
    image: require('../assets/icons/milk3.png')
  },
  {
    id: 2,
    name: 'Ong Tho milk',
    price: 18000,
    image: require('../assets/icons/ong-tho-milk.png')
  },
  {
    id: 3,
    name: 'Vinamilk',
    price: 9000,
    image: require('../assets/icons/vinamilk.png')
  },
  {
    id: 4,
    name: 'TH True milk',
    price: 10000,
    image: require('../assets/icons/th-true-milk.png')
  }
]

const promos = [
  {
    id: 1,
    name: 'Goose Berry Smoothie',
    description: 'Goose Berry Smoothie with strawberry bits',
    calories: '379 - 571',
    image: require('../assets/images/goose-berry.png')
  },
  {
    id: 2,
    name: 'Peach Tea',
    description: 'The best drink of the day',
    calories: '400 - 570',
    image: require('../assets/images/peach-tea.png')
  },
  {
    id: 3,
    name: 'Black Tea Macchiato',
    description: 'Hot deal for you',
    calories: '449 - 570',
    image: require('../assets/images/black-tea.png')
  }

]

const favorites = [
  {
    id: 1,
    name: 'Malaysia',
    image: require('../assets/images/coffee.png'),
    items: [
      {
        id: 1,
        name: 'Kuching',
        description: 'Kuching, officially the City of Kuching, is the capital and the most populous city in the state of Sarawak in Malaysia. It is also the capital of Kuching Division.',
        image: require('../assets/images/coffee.png'),
        rate: '4.89',
        mapInitialRegion: {
          latitude: 1.557177,
          longitude: 110.351902,
          latitudeDelta: 0.0053,
          longitudeDelta: 0.0044
        },
        hotels: [
          {
            id: '1',
            name: 'Riverside Majestic Hotel',
            image: require('../assets/images/coffee.png'),
            rate: 5,
            price: 199,
            latlng: {
              latitude: 1.557907,
              longitude: 110.352079
            }
          },
          {
            id: '2',
            name: 'Grand Margherita Hotel',
            image: require('../assets/images/coffee.png'),
            rate: 5,
            price: 199,
            latlng: {
              latitude: 1.558163,
              longitude: 110.352813
            }
          },
          {
            id: '3',
            name: 'Hilton Kuching',
            image: require('../assets/images/coffee.png'),
            rate: 5,
            price: 199,
            latlng: {
              latitude: 1.557144,
              longitude: 110.350496
            }
          }
        ]
      },
      {
        id: 2,
        name: 'Kuala Lumpur',
        description: 'Kuala Lumpur is the capital of Malaysia. Its modern skyline is dominated by the 451m-tall Petronas Twin Towers, a pair of glass-and-steel-clad skyscrapers with Islamic motifs.',
        image: require('../assets/images/coffee.png'),
        rate: '4.89',
        mapInitialRegion: {
          latitude: 3.135662,
          longitude: 101.687128,
          latitudeDelta: 0.0053,
          longitudeDelta: 0.0044
        },
        hotels: [
          {
            id: '1',
            name: 'Hilton Kuala Lumpur',
            image: require('../assets/images/coffee.png'),
            rate: 5,
            price: 199,
            latlng: {
              latitude: 3.135308,
              longitude: 101.685729
            }
          },
          {
            id: '2',
            name: 'Le Méridien Kuala Lumpur',
            image: require('../assets/images/coffee.png'),
            rate: 5,
            price: 199,
            latlng: {
              latitude: 3.135843,
              longitude: 101.686544
            }
          },
          {
            id: '3',
            name: 'The St. Regis Kuala Lumpur',
            image: require('../assets/images/coffee.png'),
            rate: 5,
            price: 199,
            latlng: {
              latitude: 3.136902,
              longitude: 101.688924
            }
          }
        ]
      },
      {
        id: 3,
        name: 'Penang',
        description: 'George Town is the colorful, multicultural capital of the Malaysian island of Penang.',
        image: require('../assets/images/coffee.png'),
        rate: '4.89',
        mapInitialRegion: {
          latitude: 5.432068,
          longitude: 100.317376,
          latitudeDelta: 0.0053,
          longitudeDelta: 0.0044
        },
        hotels: [
          {
            id: '1',
            name: 'Sunrise Gurney',
            image: require('../assets/images/coffee.png'),
            rate: 5,
            price: 199,
            latlng: {
              latitude: 5.432874,
              longitude: 100.316750
            }
          },
          {
            id: '2',
            name: 'Sunrise Gurney Homestay',
            image: require('../assets/images/coffee.png'),
            rate: 5,
            price: 199,
            latlng: {
              latitude: 5.431626,
              longitude: 100.317848
            }
          },
          {
            id: '3',
            name: 'Evergreen Laurel Hotel Penang',
            image: require('../assets/images/coffee.png'),
            rate: 5,
            price: 199,
            latlng: {
              latitude: 5.431288,
              longitude: 100.317898
            }
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'India',
    image: require('../assets/images/coffee.png'),
    items: [
      {
        id: 1,
        name: 'Goa',
        description: 'Known for its gorgeous beaches, stellar nightlife, delish seafood, world-heritage listed monuments, Goa is where all the fun is in India.',
        image: require('../assets/images/coffee.png'),
        rate: '4.89',
        mapInitialRegion: {
          latitude: 15.498931,
          longitude: 73.767945,
          latitudeDelta: 0.0053,
          longitudeDelta: 0.0044
        },
        hotels: [
          {
            id: '1',
            name: 'Taj Holiday Village',
            image: require('../assets/images/coffee.png'),
            rate: 5,
            price: 199,
            latlng: {
              latitude: 15.499815,
              longitude: 73.769295
            }
          },
          {
            id: '2',
            name: 'Taj Fort Aguada',
            image: require('../assets/images/coffee.png'),
            rate: 5,
            price: 199,
            latlng: {
              latitude: 15.497798,
              longitude: 73.767097
            }
          }
        ]
      },
      {
        id: 2,
        name: 'Jaipur',
        description: 'The Pink City, Jaipur is a destination you cannot miss when visiting India. Jaipur is a perfect reflection of what the royal state of Rajasthan is about.',
        image: require('../assets/images/coffee.png'),
        rate: '4.89',
        mapInitialRegion: {
          latitude: 26.928055,
          longitude: 75.788295,
          latitudeDelta: 0.0053,
          longitudeDelta: 0.0044
        },
        hotels: [
          {
            id: '1',
            name: 'Umaid Mahal',
            image: require('../assets/images/coffee.png'),
            rate: 5,
            price: 199,
            latlng: {
              latitude: 26.927940,
              longitude: 75.789056
            }
          }
        ]
      },
      {
        id: 3,
        name: 'Agra',
        description: 'Home to the symbol of love, Taj Mahal, Agra in Uttar Pradesh finds its spot on the world heritage map.',
        image: require('../assets/images/coffee.png'),
        rate: '4.89',
        mapInitialRegion: {
          latitude: 27.168123,
          longitude: 78.049032,
          latitudeDelta: 0.0053,
          longitudeDelta: 0.0044
        },
        hotels: [
          {
            id: '1',
            name: 'The Oberoi Amarvilas',
            image: require('../assets/images/coffee.png'),
            rate: 5,
            price: 199,
            latlng: {
              latitude: 27.168123,
              longitude: 78.049032
            }
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'Indonesia',
    image: require('../assets/images/coffee.png'),
    items: [
      {
        id: 1,
        name: 'Bali',
        description: 'Bali has it all. Scenic mountains, sacred temples, rich culture, sandy beaches, surf-worthy waves, lively nightlife, exciting shopping… and the list goes on.',
        image: require('../assets/images/coffee.png'),
        rate: '4.89',
        mapInitialRegion: {
          latitude: -8.422605,
          longitude: 115.274697,
          latitudeDelta: 0.0053,
          longitudeDelta: 0.0044
        },
        hotels: [
          {
            id: '1',
            name: 'The Kayon Jungle Resort',
            image: require('../assets/images/coffee.png'),
            rate: 5,
            price: 199,
            latlng: {
              latitude: -8.422426,
              longitude: 115.275185
            }
          },
          {
            id: '2',
            name: 'Green View Private Villas',
            image: require('../assets/images/coffee.png'),
            rate: 5,
            price: 199,
            latlng: {
              latitude: -8.422203,
              longitude: 115.275142
            }
          }
        ]
      },
      {
        id: 2,
        name: 'Jakarta',
        description: 'Jakarta may seem like a daunting megacity, but it also has a couple of interesting places that are worth a stopover.',
        image: require('../assets/images/coffee.png'),
        rate: '4.89',
        mapInitialRegion: {
          latitude: -6.227687,
          longitude: 106.826979,
          latitudeDelta: 0.0053,
          longitudeDelta: 0.0044
        },
        hotels: [
          {
            id: '1',
            name: 'Oakwood Premier Cozmo',
            image: require('../assets/images/coffee.png'),
            rate: 5,
            price: 199,
            latlng: {
              latitude: -6.227846,
              longitude: 106.825391
            }
          },
          {
            id: '2',
            name: 'JW Marriott Hotel',
            image: require('../assets/images/coffee.png'),
            rate: 5,
            price: 199,
            latlng: {
              latitude: -6.227036,
              longitude: 106.827333
            }
          }
        ]
      },
      {
        id: 3,
        name: 'Nusa Penida',
        description: 'If you are in Bali and you want to go off-beat, go to Nusa Penida. Nusa Penida is the biggest of the three Nusa Islands just off from mainland Bali.',
        image: require('../assets/images/coffee.png'),
        rate: '4.89',
        mapInitialRegion: {
          latitude: -8.703571,
          longitude: 115.439826,
          latitudeDelta: 0.0053,
          longitudeDelta: 0.0044
        },
        hotels: [
          {
            id: '1',
            name: 'Purist Beach',
            image: require('../assets/images/coffee.png'),
            rate: 5,
            price: 199,
            latlng: {
              latitude: -8.703571,
              longitude: 115.439826
            }
          }
        ]
      }
    ]
  }
]

const dummyData = {
  availableRewards,
  locations,
  menuList,
  milkList,
  promos,
  favorites
}

export default dummyData
