import React from 'react';

const Home =  React.lazy(()=> import ('../Views/Home/Home'));
const AllCategoriesPage =  React.lazy(()=> import ('../Views/AllCategoriesPage/AllCategoriesPage'));


const routes = [
    {path:'/AllCategoriesPage' , name:'AllCategoriesPage' , exact:true , component: AllCategoriesPage},
    {path:'/' , name:'home' , component: Home},
]

export default routes;