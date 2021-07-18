import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setClothes } from './actions/clothes';
import { setSort } from './actions/sort';
import { setSearchQuery } from './actions/search';
import { addToCart } from './actions/cart';
import axios from 'axios';
import orderBy from 'lodash/orderBy';
import { Grid } from '@material-ui/core';
import HeaderMenu from './components/headerMenu/HeaderMenu';
import AsideDesktop from './components/Aside/AsideDesktop';
import ClothesCard from './components/clothesCard/ClothesCard';
import AccessoriesCard from './components/clothesCard/AccessoriesCard';
import AllProducts from './components/clothesCard/AllProducts';
import ShoesCard from './components/clothesCard/ShoesCard';
import SportwearCard from './components/clothesCard/SportwearCard';

import Sort from './components/sort/Sort';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
   componentDidMount() {
      const { setClothes } = this.props;
      axios
         .get('https://infinite-bayou-82737.herokuapp.com/products')
         .then(({ data }) => {
            setClothes(data.products);
         });
   }

   render() {
      const {
         clothes,
         isReady,
         setSort,
         setSearchQuery,
         totalPrice,
         count,
         addToCart,
      } = this.props;
      return (
         <>
            <BrowserRouter>
               <div className='root'>
                  <HeaderMenu />
                  <AsideDesktop />
                  <main className='content'>
                     <Grid container spacing={3}>
                        <Sort
                           setSort={setSort}
                           setSearchQuery={setSearchQuery}
                           totalPrice={totalPrice}
                           count={count}
                        />
                     </Grid>
                     <Grid container spacing={3}>
                        {!isReady ? (
                           'Загрузка...'
                        ) : (
                           <Switch>
                              <Route exact path='/'>
                                 {clothes.map((clothe, index) => (
                                    <AllProducts
                                       key={index}
                                       {...clothe}
                                       addToCart={addToCart}
                                       count={count}
                                    />
                                 ))}
                              </Route>
                              <Route path='/clothing'>
                                 {clothes.map((clothe, index) => (
                                    <ClothesCard
                                       key={index}
                                       {...clothe}
                                       addToCart={addToCart}
                                       count={count}
                                    />
                                 ))}
                              </Route>
                              <Route path='/shoes'>
                                 {clothes.map((clothe, index) => (
                                    <ShoesCard
                                       key={index}
                                       {...clothe}
                                       addToCart={addToCart}
                                       count={count}
                                    />
                                 ))}
                              </Route>
                              <Route path='/accessories'>
                                 {clothes.map((clothe, index) => (
                                    <AccessoriesCard
                                       key={index}
                                       {...clothe}
                                       addToCart={addToCart}
                                       count={count}
                                    />
                                 ))}
                              </Route>
                              <Route path='/sportwear'>
                                 {clothes.map((clothe, index) => (
                                    <SportwearCard
                                       key={index}
                                       {...clothe}
                                       addToCart={addToCart}
                                       count={count}
                                    />
                                 ))}
                              </Route>
                           </Switch>
                        )}
                     </Grid>
                  </main>
               </div>
            </BrowserRouter>
         </>
      );
   }
}

const sortByPriceHight = (clothes, sortBy) => {
   switch (sortBy) {
      case 'all':
         return clothes;
      case 'price hight to low':
         return orderBy(clothes, 'price', 'desc');
      case 'price low to hight':
         return orderBy(clothes, 'price', 'asc');
      case 'title':
         return orderBy(clothes, 'title', 'asc');
      default:
         return clothes;
   }
};
const filterClothes = (clothes, searchQuery) =>
   clothes.filter(
      (o) =>
         o.name.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
         o.description.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
   );

const searchClothes = (clothes, sortBy, searchQuery) => {
   return sortByPriceHight(filterClothes(clothes, searchQuery), sortBy);
};

const mapStateToProps = ({ clothes, cart }) => ({
   clothes:
      clothes.items &&
      searchClothes(clothes.items, clothes.sortBy, clothes.searchQuery),
   isReady: clothes.isReady,
   totalPrice: cart.items.reduce((total, clothe) => total + clothe.price, 0),
   count: cart.items.length,
   addedCount: 0,
   // sortBy: clothes.sortBy,
   // searchQuery: clothes.searchQuery
});
const mapDispatchToProps = (dispatch) => ({
   setClothes: (clothes) => dispatch(setClothes(clothes)),
   setSort: (sort) => dispatch(setSort(sort)),
   setSearchQuery: (value) => dispatch(setSearchQuery(value)),
   addToCart: (obj) => dispatch(addToCart(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
