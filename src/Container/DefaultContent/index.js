import React,{useState , useEffect} from 'react';
import CategoriesSliderHome from '../../Views/CategoriesSliderHome/CategoriesSliderHome';
import HomeSlider from '../../Views/HomeSlider/HomeSlider';
import SpecialProductSlider from '../../Views/SpecialProductSlider/SpecialProductSlider';
import SupermarketBanner from '../../Views/SupermarketBanner/SupermarketBanner';
// import {getProducts} from '../../redux/reducers/product/product.thunk';
// import {connect} from 'react-redux';
import BestsellersSliderHome from '../../Views/BestsellersSliderHome/BestsellersSliderHome';
import ResentlyProducts from '../../Views/ResentlyProducts/ResentlyProducts';

import './Content.scss';

const DefaultContent = () => {
    
//   useEffect(() => {
//     getProducts(faction, property, categoryId);
//     // console.log(bestsellers)
// }, [])

    return (
      <div>
        <HomeSlider/>
        <SpecialProductSlider  />
        <SupermarketBanner/>
        <BestsellersSliderHome/>
        <CategoriesSliderHome/>
        <ResentlyProducts/>
      </div>
    );
}

export default DefaultContent;