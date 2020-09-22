import React from 'react';
import AllCategoriesHome from '../../Views/AllCategoriesHome/CategoriesSlider';
// import {Row , Container} from 'reactstrap';
import HomeSlider from '../../Views/HomeSlider/HomeSlider';
import SpecialProductSlider from '../../Views/SpecialProductSlider/SpecialProductSlider';
import SupermarketBanner from '../../Views/SupermarketBanner/SupermarketBanner';
import './Content.scss';



const DefaultContent = (props) => {
    


    return (
      <div>
        <HomeSlider/>
          <SpecialProductSlider/>
        <SupermarketBanner/>
        <AllCategoriesHome/>
      </div>
    );
}

export default DefaultContent;