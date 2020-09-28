import React from 'react';
import CategoriesSliderHome from '../../Views/CategoriesSliderHome/CategoriesSliderHome';
import HomeSlider from '../../Views/HomeSlider/HomeSlider';
import SpecialProductSlider from '../../Views/SpecialProductSlider/SpecialProductSlider';
import SupermarketBanner from '../../Views/SupermarketBanner/SupermarketBanner';
import {getProducts} from '../../redux/reducers/product/product.thunk';
import {connect} from 'react-redux';
import BestsellersSliderHome from '../../Views/BestsellersSliderHome/BestsellersSliderHome';
import ResentlyProducts from '../../Views/ResentlyProducts/ResentlyProducts';

import './Content.scss';

const DefaultContent = ({props , getProducts}) => {
    
    return (
      <div>
        <HomeSlider/>
        <SpecialProductSlider getProducts={()=>getProducts()}/>
        <SupermarketBanner/>
        <BestsellersSliderHome/>
        <CategoriesSliderHome/>
        <ResentlyProducts/>
      </div>
    );
}

export default connect(null , {getProducts})(DefaultContent);