import React from 'react';
import Header from './DefaultHeader';
import Footer from './DefaultFooter';
import Content from './DefaultContent';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import routes from '../Constants/routes';

function DefaultContent() {
    return (
        <div>
            {/* <Header/>
            <Content/> */}
            <BrowserRouter>
                <Switch>
                    <React.Suspense fallback={< div > loding ...</div>}>
                        {routes.map(item => (
                            <Route
                                key={item.name}
                                path={item.path}
                                exact={item.exact}
                                render={props => <item.component {...props}/>}/>
                        ))
}
                    </React.Suspense>
                </Switch>
            </BrowserRouter>
            {/* <Footer/> */}
        </div>
    )
}

export default DefaultContent;
