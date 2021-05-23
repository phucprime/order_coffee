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
    name: 'Coffee',
    image: require('../assets/images/coffee.png'),
    items: [
      {
        id: 1,
        name: 'Black Coffee',
        description: 'A fragrant cup of black coffee, with a hint of cocoa, is the best self-rewarding gift for those who love the most original essence of coffee.',
        image: require('../assets/images/favorites/black-coffee.jpg')
      },
      {
        id: 2,
        name: 'Milk Coffee',
        description: 'Following in the footsteps of the Chinese people who settled in Saigon, Bac Siu is an abbreviation for "Bac biu" in Cantonese, which is: Glass of white milk with a little coffee.',
        image: require('../assets/images/favorites/milk-coffee.jpg')
      },
      {
        id: 3,
        name: 'Cappuccino',
        description: 'Cappuccino is funny called a "one-third" drink - 1/3 Espresso, 1/3 Hot Milk, 1/3 Foam.',
        image: require('../assets/images/favorites/latte.jpg')
      }
    ]
  },
  {
    id: 2,
    name: 'Smoothie',
    image: require('../assets/images/smoothie.png'),
    items: [
      {
        id: 1,
        name: 'Lemon Smoothie',
        description: 'The harmonious combination of rustic ingredients is very familiar to Vietnamese people for a cool, refreshing drink that is good for health.',
        image: require('../assets/images/favorites/lemon-smoothie.jpg')
      },
      {
        id: 2,
        name: 'Blueberry Smoothie',
        description: 'Blueberry jam is sweet and sour, harmoniously combined with nutritious yogurt. A delicious smoothie that both the tip of the tongue and the skin will love.',
        image: require('../assets/images/favorites/viet-quat.jpg')
      },
      {
        id: 3,
        name: 'Peach Smoothie',
        description: 'The harmonious combination of rustic ingredients is very familiar to Vietnamese people for a cool, refreshing drink that is good for health.',
        image: require('../assets/images/favorites/dao-viet-quat.jpg')
      }
    ]
  },
  {
    id: 3,
    name: 'Bubble Tea',
    image: require('../assets/images/bubble-tea.png'),
    items: [
      {
        id: 1,
        name: 'Matcha Macchiato',
        description: 'The deliciously fragrant Matcha green tea powder with the rich Macchiato layer is a great combination.',
        image: require('../assets/images/favorites/matcha.jpg')
      },
      {
        id: 2,
        name: 'Latte Macchiato',
        description: 'True to the delicate, healthy taste with a gentle tea taste, mixed with fresh milk and fatty macchiato.',
        image: require('../assets/images/favorites/hong-tra.jpg')
      },
      {
        id: 3,
        name: 'Macca Milk Tea',
        description: 'Nutritious macadamia nut milk mixed with Oolong tea background for a balanced, sweet taste.',
        image: require('../assets/images/favorites/mac-ca.jpg')
      }
    ]
  }
]

const notifications = [
  { id: 1, name: 'Order Successfully', image: 'https://cdn.icon-icons.com/icons2/894/PNG/512/Tick_Mark_Dark_icon-icons.com_69147.png', count: '#124711' },
  { id: 2, name: 'Order Successfully', image: 'https://cdn.icon-icons.com/icons2/894/PNG/512/Tick_Mark_Dark_icon-icons.com_69147.png', count: '#234722' },
  { id: 3, name: 'Order Denied', image: 'https://icons-for-free.com/iconfiles/png/512/cercle+close+delete+dismiss+remove+icon-1320196712448219692.png', count: '#324723' },
  { id: 4, name: 'Order Successfully', image: 'https://cdn.icon-icons.com/icons2/894/PNG/512/Tick_Mark_Dark_icon-icons.com_69147.png', count: '#154573' },
  { id: 5, name: 'Order Successfully', image: 'https://cdn.icon-icons.com/icons2/894/PNG/512/Tick_Mark_Dark_icon-icons.com_69147.png', count: '#123451' }
]

const searchResults = [
  { id: 1, description: 'Coffee 1' },
  { id: 2, description: 'Coffee 2' },
  { id: 3, description: 'Coffee 3' },
  { id: 4, description: 'Coffee 4' },
  { id: 5, description: 'Coffee 5' },
  { id: 6, description: 'Coffee 6' },
  { id: 7, description: 'Coffee 7' },
  { id: 8, description: 'Coffee 8' },
  { id: 9, description: 'Coffee 9' }
]

const settings = [
  { id: 1, title: 'Budget', image: 'https://img.icons8.com/color/70/000000/cottage.png' },
  { id: 1, title: 'Personal', image: 'https://img.icons8.com/color/70/000000/administrator-male.png' },
  { id: 2, title: 'Favorite', image: 'https://img.icons8.com/color/70/000000/filled-like.png' },
  { id: 3, title: 'Vote', image: 'https://img.icons8.com/color/70/000000/facebook-like.png' },
  { id: 4, title: 'Manage', image: 'https://img.icons8.com/color/70/000000/shutdown.png' },
  { id: 5, title: 'Traffic', image: 'https://img.icons8.com/color/70/000000/traffic-jam.png' },
  { id: 6, title: 'Give Away', image: 'https://img.icons8.com/dusk/70/000000/visual-game-boy.png' },
  { id: 8, title: 'Mini Games', image: 'https://img.icons8.com/flat_round/70/000000/cow.png' },
  { id: 9, title: 'Community', image: 'https://img.icons8.com/color/70/000000/coworking.png' },
  { id: 9, title: 'Advance', image: 'https://img.icons8.com/nolan/70/000000/job.png' }
]

const orderHistory = [
  { id: 1, day: 1, month: 'Sep' },
  { id: 2, day: 2, month: 'Jan' },
  { id: 3, day: 3, month: 'Aug' },
  { id: 4, day: 4, month: 'Dec' },
  { id: 5, day: 5, month: 'Jul' },
  { id: 6, day: 6, month: 'Oct' },
  { id: 7, day: 7, month: 'Sep' },
  { id: 8, day: 8, month: 'Jan' },
  { id: 9, day: 9, month: 'May' }
]

const dummyData = {
  availableRewards,
  locations,
  menuList,
  milkList,
  promos,
  favorites,
  notifications,
  searchResults,
  settings,
  orderHistory
}

export default dummyData
