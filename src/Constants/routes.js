import React from 'react';

const Home =  React.lazy(()=> import ('../Views/Home/Home'));
const AllCategoriesPage =  React.lazy(()=> import ('../Views/AllCategoriesPage/AllCategoriesPage'));
const CategoryProductsPage =  React.lazy(()=> import ('../Views/CategoryProductsPage/CategoryProductsPage'));
const ShowProductPage =  React.lazy(()=> import ('../Views/ShowProductPage/ShowProductPage'));



const routes = [
    {path:'/CategoryProductsPage/:id' , name:'CategoryProductsPage' , exact:true , component: CategoryProductsPage},
    {path:'/ShowProductPage/:id' , name:'ShowProductPage' , exact:true , component: ShowProductPage},
    {path:'/AllCategoriesPage' , name:'AllCategoriesPage' , exact:true , component: AllCategoriesPage},
    {path:'/' , name:'home' , exact:true , component: Home},
]

export default routes;