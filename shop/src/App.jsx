import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setClothes } from './actions/clothes';
import { setSort } from './actions/sort';
import { setSearchQuery } from './actions/search';
import { addToCart } from './actions/cart';
import axios from 'axios';
import orderBy from 'lodash/orderBy';
import { Grid } from '@material-ui/core'
import HeaderMenu from './components/headerMenu/HeaderMenu';
import AsideDesktop from './components/Aside/AsideDesktop';
import ClothesCard from './components/clothesCard/ClothesCard';
import Sort from './components/sort/Sort';



class App extends Component {

    componentDidMount() {
        const { setClothes } = this.props;
        axios.get('/clothes.json').then(({ data }) => {
            setClothes(data);
        });
    }

    render() {
        const { clothes, isReady, setSort, setSearchQuery, totalPrice, count, addToCart } = this.props;
        return (
            <>
                <div className="root">
                    <HeaderMenu />
                    <AsideDesktop />
                    <main className='content'>
                        <Grid container spacing={3}>
                            <Sort setSort={setSort} setSearchQuery={setSearchQuery} totalPrice={totalPrice} count={count}    />
                        </Grid>
                        <Grid justify='flex-start' container spacing={3}>
                            {!isReady ? 'Загрузка...' : clothes.map((clothe, index) => <ClothesCard key={index} {...clothe} addToCart={addToCart} count={count}/>)}
                        </Grid>
                    </main>
                </div>
            </>
        )
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
    clothes.filter(o => o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 || 
    o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0, 
    );

const searchClothes = (clothes, sortBy, searchQuery) => {
    return sortByPriceHight(filterClothes(clothes, searchQuery), sortBy);
};


const mapStateToProps = ({ clothes, cart }) => ({
    clothes: clothes.items && searchClothes(clothes.items, clothes.sortBy, clothes.searchQuery),
    isReady: clothes.isReady,
    totalPrice: cart.items.reduce((total, clothe) => total + clothe.price, 0),
    count: cart.items.length,
    addedCount: 0,
    // sortBy: clothes.sortBy,
    // searchQuery: clothes.searchQuery
});
const mapDispatchToProps = dispatch => ({
    setClothes: clothes => dispatch(setClothes(clothes)),
    setSort: sort => dispatch(setSort(sort)),
    setSearchQuery: value => dispatch(setSearchQuery(value)),
    addToCart: obj => dispatch(addToCart(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);