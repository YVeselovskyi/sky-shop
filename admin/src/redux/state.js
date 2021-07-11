// eslint-disable-next-line import/no-mutable-exports

const state = {
  usersPage: {
    users: [
      {
        id: 1, email: 'nnaqwe@gmail.com', username: 'nazarii', age: 19, gender: 'M',
      },
      {
        id: 2, email: 'anna8855@gmail.com', username: 'annet_115', age: 19, gender: 'F',
      },
      {
        id: 3, email: 'vrvr99@gmail.com', username: 'varvara99', age: 22, gender: 'F',
      },
      {
        id: 4, email: 'freewqq12@gmail.com', username: 'user789', age: 15, gender: 'M',
      },
      {
        id: 5, email: 'random@gmail.com', username: 'rndmguy', age: 18, gender: 'M',
      },
      {
        id: 6, email: 'notrandom@gmail.com', username: 'ntrndmgirl', age: 35, gender: 'F',
      },
      {
        id: 7, email: 'pochta45@gmail.com', username: 'maxmax', age: 28, gender: 'M',
      },
      {
        id: 8, email: 'nevermindk@gmail.com', username: 'aleX', age: 17, gender: 'M',
      },
      {
        id: 9, email: 'mm887@gmail.com', username: 'marina887', age: 25, gender: 'F',
      },
      {
        id: 10, email: 'ddkaba11@gmail.com', username: 'kabargin', age: 55, gender: 'M',
      },
      {
        id: 11, email: 'vasek@mail.ru', username: 'sswwqqaa', age: 12, gender: 'F',
      }],
    addUser(user) {
      state.usersPage.users = Object.assign([], state.usersPage.users);
      state.usersPage.users.push(user);
    },
  },
  productsPage: {
    products: [
      {
        id: 1, name: 'Pants', description: 'Shtany za 40 griven', category: 'Clothes', price: 40,
      },
      {
        id: 2, name: 'T-shirt', description: 'Amazing ARMYANE futbolka', category: 'Clothes', price: 20,
      },
      {
        id: 3, name: 'Jacket', description: 'Pidzhak', category: 'Clothes', price: 33,
      },
      {
        id: 4, name: 'Socks', description: 'GUCCI Socks', category: 'Clothes', price: 5,
      },
      {
        id: 5, name: 'Lamborghini', description: 'Sport car', category: 'Car', price: 150000,
      },
      {
        id: 6, name: 'Lexus', description: 'Premium car', category: 'Car', price: 20,
      },
      {
        id: 7, name: 'BMW', description: 'Takih bol`she ne delayut', category: 'Car', price: 1200,
      },
      {
        id: 8, name: 'Xiaomi MI 220 Ultra', description: 'Smartphone', category: 'Technologies', price: 20,
      },
      {
        id: 9, name: 'OppO', description: 'Amazing smartphone', category: 'Clothes', price: 20,
      },
    ],
  },
};

const addUser = (user) => {
  state.usersPage.users = Object.assign([], state.usersPage.users);
  state.usersPage.users.push(user);
};

const deleteUser = (user) => {
  state.usersPage.users = Object.assign([], state.usersPage.users);
  state.usersPage.users = state.usersPage.users.filter((item) => item !== user);
};

const addProduct = (product) => {
  state.productsPage.products = Object.assign([], state.productsPage.products);
  state.productsPage.products.push(product);
};

const removeProduct = (product) => {
  state.productsPage.products = Object.assign([], state.productsPage.products);
  state.productsPage.products = state.productsPage.products.filter((item) => item !== product);
};

export {
  state, addUser, deleteUser, addProduct, removeProduct,
};
