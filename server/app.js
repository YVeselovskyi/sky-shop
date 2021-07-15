/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
/* eslint-disable no-console */
const Express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config.json');

//collections
const User = require('./models/User');
const Product = require('./models/Product');

const app = new Express();

app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());

app.set('views', `${__dirname}/views`);

const PORT = process.env.PORT || 3000;

const connectDbAndStartServer = async () => {
  try {
    await mongoose.connect(`mongodb+srv://dbSkyshop:${config.dbPassword}@cluster.ceywm.mongodb.net/SkyshopDB?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => {
      console.log(`Started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

app.post('/admin/addProduct', (req, res) => {
  const {
    name, description, price, category,
  } = req.body;

  const product = new Product({
    name, description, price, category,
  });

  product.save((err) => {
    if (err) { console.log(err); }
    console.log('Product saved', product);
    //mongoose.disconnect();
    res.json({ data: null });
  });
});

app.post('/admin/addUser', (req, res) => {
  const {
    email, username, age, gender,
  } = req.body;

  const user = new User({
    email, username, age, gender,
  });
  user.save((err) => {
    if (err) { console.log(err); }
    console.log('User saved', user);
    //mongoose.disconnect();
    res.json({ data: null });
  });
});

app.post('/admin/editUser', async (req, res) => {
  if (!req.body) res.sendStatus(400);
  const { name, update } = req.body;//{id: userId, update: {parameters that we change} }
  console.log(`request body: ${name}, ${update}`);
  await User.findOneAndUpdate({ username: name }, update, {
    new: true,
  }, (err, updatedUser) => {
    if (err) console.log(err);

    res.json({ data: { updatedUser } });
  });
});

app.post('/admin/editProduct', async (req, res) => {
  if (!req.body) res.sendStatus(400);

  //{name: prdouctName, update: {parameters that we change} }
  const { productName, update } = req.body;
  console.log(`request body: ${productName}, ${update}`);
  await User.findOneAndUpdate({ name: productName }, update, {
    new: true,
  }, (err, updatedProduct) => {
    if (err) console.log(err);

    res.json({ data: { updatedProduct } });
  });
});

app.get('/Users', async (req, res) => {
  await User
    .find({})//find all
    .lean()//getting vanila object not model
    .exec((err, users) => {
      if (err) console.log(err);
      res.json({ users });
    });
});

app.get('/Products', async (req, res) => {
  await Product
    .find({})//find all
    .lean()//getting vanila object not model
    .exec((err, products) => {
      if (err) console.log(err);
      res.json({ products });
    });
});

connectDbAndStartServer();
