import {createServer} from 'miragejs';

if (window.server) {
  window.server.shutdown();
}

window.server = createServer({
  routes() {
    this.get('/api/product', (schema, req) => {
      const listProducts = [
        {
          id: 1,
          name: 'Chinese Fresh Cabbage',
          img: require('../assets/chinese-cabbage.png'),
          type: 1,
          pricePerKg: '$5.66',
        },
        {
          id: 2,
          name: 'Fresh Red Tomato',
          img: require('../assets/one-fresh-red-tomato-isolated-white.png'),
          type: 1,
          pricePerKg: '$5.66',
        },
        {
          id: 3,
          name: 'Purple Sweet Potato',
          img: require('../assets/purple-sweet-potato.png'),
          type: 2,
          pricePerKg: '$5.66',
        },
        {
          id: 4,
          name: 'Green Beans',
          img: require('../assets/green-beans-handful-isolated-white-background-cutout.png'),
          type: 2,
          pricePerKg: '$5.66',
        },
        {
          id: 5,
          name: 'Fresh Broccoli',
          img: require('../assets/fresh-broccoli-vegetable.png'),
          type: 1,
          pricePerKg: '$5.66',
        },
        {
          id: 6,
          name: 'Potato',
          img: require('../assets/potato.png'),
          type: 3,
          pricePerKg: '$5.66',
        },
      ];

      return listProducts.filter(item => item.type == req.queryParams.type);
    });
  },
});
