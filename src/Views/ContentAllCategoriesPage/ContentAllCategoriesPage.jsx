import React from 'react'
import {Row} from 'reactstrap';
import BannerCollection from '../BannerCollection/BannerCollection';
import SidebarCategoryPage from '../SidebarCategoryPage/SidebarCategoryPage';

import './ContentAllCategoriesPage.scss';

function ContentAllCategoriesPage() {

    return (
        <Row>
            <SidebarCategoryPage/>
            <BannerCollection/>
        </Row>
    )
}

export default ContentAllCategoriesPage;
