import React from 'react';
import CategoriesSliderHome from '../../Views/CategoriesSliderHome/CategoriesSliderHome';
// import {Row , Container} from 'reactstrap';
import HomeSlider from '../../Views/HomeSlider/HomeSlider';
import SpecialProductSlider from '../../Views/SpecialProductSlider/SpecialProductSlider';
import SupermarketBanner from '../../Views/SupermarketBanner/SupermarketBanner';
import {getProducts} from '../../redux/reducers/product/product.thunk';
import {connect} from 'react-redux';

import './Content.scss';

const DefaultContent = ({props , getProducts}) => {
    


    return (
      <div>
        <HomeSlider/>
        <SpecialProductSlider getProducts={()=>getProducts()}/>
        <SupermarketBanner/>
        <CategoriesSliderHome/>
      </div>
    );
}

export default connect(null , {getProducts})(DefaultContent);