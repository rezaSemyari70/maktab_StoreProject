import React from 'react';

const Home =  React.lazy(()=> import ('../Views/Home/Home'));


const routes = [
    {path:'/' , name:'home' , exact:true , component: Home},
]

export default routes;