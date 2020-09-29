import React from 'react';

const Home =  React.lazy(()=> import ('../Views/Home/Home'));
const AllCategoriesPage =  React.lazy(()=> import ('../Views/AllCategoriesPage/AllCategoriesPage'));
const CategoryProductsPage =  React.lazy(()=> import ('../Views/CategoryProductsPage/CategoryProductsPage'));


const routes = [
    {path:'/AllCategoriesPage' , name:'AllCategoriesPage' , exact:true , component: AllCategoriesPage},
    {path:'/CategoryProductsPage/:id' , name:'CategoryProductsPage' , exact:true , component: CategoryProductsPage},
    {path:'/' , name:'home' , exact:true , component: Home},
]

export default routes;