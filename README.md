# Grocery Shop with React Native

[Watch it on Youtube](https://www.youtube.com/watch?v=pMvulQ1zX1I&t=288s)

This project is Grocery App using React Native. This app has a Landing page, Product, and Cart. Users can add products to cart.

[Subscribe](https://www.youtube.com/channel/UCIoqY-6WSUdHQEGz0J1Y8Zw) to my channel For More!

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)

## Design

[Grocery Shop](https://www.uplabs.com/posts/ijo-grocery-list)

## Usage

- Go to your project's root folder and run `yarn install`.
- If you are using Xcode 12.5 or higher got to /ios and execute `npx pod-install ios`
- Run `yarn ios` or `yarn android` to start your application!

Note: Please read the Setup environments section that is below in this file for more information about the execution scripts.

## Structure Code

- `src`: This folder is the main container of all the code inside your application.
  - `hooks`: This folder contains all custom hook use through your app.
  - `assets`: Asset folder to store all images, vectors, etc.
  - `components`: Folder to store any common component that you use through your app
  - `configs`: Folder to store any kind of configs that you have.
  - `screens`: Folder that contains all your application screens/features.
  - `App.js`: Main component that starts your whole app, config navigation.
  - `index.js`: Entry point of your application as per React-Native standards.

## Mock data

This project use [MigrateJS](https://miragejs.com/) to create mock data

This example data mock: 
```javascript
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
    id: 1,
    name: 'Vegetable',
    image: require('../src/assets/vegetable.png'),
  },
  {
    id: 2,
    name: 'Fruit',
    image: require('../src/assets/fruit.png'),
  },
  {
    id: 3,
    name: 'Dairy',
    image: require('../src/assets/dairy.png'),
  },
  {
    id: 4,
    name: 'Meats',
    image: require('../src/assets/meats.png'),
  },
];
```