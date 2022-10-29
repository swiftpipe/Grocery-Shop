import {createServer} from 'miragejs';

if (window.server) {
  window.server.shutdown();
}

const listProducts = [
  {
    id: 1,
    name: 'Chinese Fresh Cabbage',
    img: require('../src/assets/chinese-cabbage.png'),
    type: 1,
    pricePerKg: '$5.66',
  },
  {
    id: 2,
    name: 'Fresh Red Tomato',
    img: require('../src/assets/one-fresh-red-tomato-isolated-white.png'),
    type: 1,
    pricePerKg: '$5.66',
  },
  {
    id: 3,
    name: 'Purple Sweet Potato',
    img: require('../src/assets/purple-sweet-potato.png'),
    type: 2,
    pricePerKg: '$5.66',
  },
  {
    id: 4,
    name: 'Green Beans',
    img: require('../src/assets/green-beans-handful-isolated-white-background-cutout.png'),
    type: 2,
    pricePerKg: '$5.66',
  },
  {
    id: 5,
    name: 'Fresh Broccoli',
    img: require('../src/assets/fresh-broccoli-vegetable.png'),
    type: 1,
    pricePerKg: '$5.66',
  },
  {
    id: 6,
    name: 'Potato',
    img: require('../src/assets/potato.png'),
    type: 3,
    pricePerKg: '$5.66',
  },
];

const listCategory = [
  {
    id: '1',
    name: 'Vegetable',
    image: require('../src/assets/vegetable.png'),
  },
  {
    id: '2',
    name: 'Fruit',
    image: require('../src/assets/fruit.png'),
  },
  {
    id: '3',
    name: 'Dairy',
    image: require('../src/assets/dairy.png'),
  },
  {
    id: '4',
    name: 'Meats',
    image: require('../src/assets/meats.png'),
  },
];

// update backend
window.server = createServer({
  routes() {
    this.get('/api/product', (schema, req) => {
      return listProducts
        .map(item => ({
          ...item,
          categoryName: listCategory.find(cat => cat.id == item.type).name,
        }))
        .filter(item => {
          if (req.queryParams.type > 0) {
            return item.type == req.queryParams.type;
          }

          return true;
        })
        .filter(item =>
          item.name
            .toLowerCase()
            .includes((req.queryParams.s || '').toLowerCase()),
        );
    });

    this.get('/api/category', () => {
      return listCategory;
    });
  },
});
