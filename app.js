/* eslint-disable spaced-comment */
/* eslint-disable no-console */
const Express = require('express');
const mongoose = require('mongoose');
const config = require('./config.json');

//collections
const User = require('./models/User');
//const Product = require('./models/Product');

const app = new Express();

app.set('views', `${__dirname}/views`);

const PORT = process.env.PORT || config.PORT;

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

app.get('/', async (req, res) => {
  const users = await User.find({}).lean();
  if (users) {
    console.log('empty');
  } else console.log(users);
  res.send('Hello world');
});

connectDbAndStartServer();
