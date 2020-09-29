import React, { useState , useEffect } from 'react'
import ListOfProducts from '../../Components/ListOfProducts/ListOfProducts'
import Header from '../../Container/DefaultHeader';
import Footer from '../../Container/DefaultFooter';
import api from '../../Api/api';
import {useParams} from 'react-router-dom';

function CategoryProductsPage() {
    const {id} = useParams();
    
    const [listProducts, setListProducts] = useState([]);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        api.get("products", {category:id ,per_page:100}).then(res => {
            setListProducts(res.data.filter(item => item.name !== "تخفیفات"))
            setPending(false)
        }).catch(error => console.write(error));
    }, []);

    return (
        <div>
            <Header/>
            <ListOfProducts listProducts={listProducts}/>
            <Footer/>
        </div>
    )
}

export default CategoryProductsPage
