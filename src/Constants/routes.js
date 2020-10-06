import React from 'react';

const Home =  React.lazy(()=> import ('../Views/Home/Home'));
const AllCategoriesPage =  React.lazy(()=> import ('../Views/AllCategoriesPage/AllCategoriesPage'));
const CategoryProductsPage =  React.lazy(()=> import ('../Views/CategoryProductsPage/CategoryProductsPage'));
const ShowProductPage =  React.lazy(()=> import ('../Views/ShowProductPage/ShowProductPage'));
const ShoppingBasket =  React.lazy(()=> import ('../Views/ShoppingBasket/ShoppingBasket'));
const Login =  React.lazy(()=> import ('../Views/Login/Login'));
const Register =  React.lazy(()=> import ('../Views/Register/Register'));



const routes = [
    {path:'/CategoryProductsPage/:id' , name:'CategoryProductsPage' , exact:true , component: CategoryProductsPage},
    {path:'/ShowProductPage/:id' , name:'ShowProductPage' , exact:true , component: ShowProductPage},
    {path:'/AllCategoriesPage' , name:'AllCategoriesPage' , exact:true , component: AllCategoriesPage},
    {path:'/ShoppingBasket' , name:'ShoppingBasket' , exact:true , component: ShoppingBasket},
    {path:'/login' , name:'login' , exact:true , component: Login},
    {path:'/register' , name:'register' , exact:true , component: Register},
    {path:'/' , name:'home' , exact:true , component: Home},
]

export default routes;