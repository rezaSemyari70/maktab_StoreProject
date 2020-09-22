import React from 'react';
import {Row , Container} from 'reactstrap';
import HomeSlider from '../../Views/HomeSlider/HomeSlider';
import SpecialProductSlider from '../../Views/SpecialProductSlider/SpecialProductSlider';
import './Content.scss';



const DefaultContent = (props) => {
    


    return (
      <div>
        <HomeSlider/>
          <SpecialProductSlider/>
      </div>
    );
}

export default DefaultContent;