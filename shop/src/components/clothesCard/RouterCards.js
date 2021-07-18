import React from 'react';
import ClothesCard from './ClothesCard';
import AccessoriesCard from './AccessoriesCard';
import AllProducts from './AllProducts';
import ShoesCard from './ShoesCard';
import SportwearCard from './SportwearCard';
import { Route } from 'react-router-dom';
export default function RouterCards(props) {
   return (
      <>
         {/* <Route
            exact
            path='/'
            component={() => {
               AllProducts(props.clothes, props.addToCart, props.count);
            }}
         />
         <Route path='/clothing' component={ClothesCard} />
         <Route path='/shoes' component={ShoesCard} />
         <Route path='/accessories' component={AccessoriesCard} />
         <Route path='/sportwear' component={SportwearCard} /> */}
      </>
   );
}
