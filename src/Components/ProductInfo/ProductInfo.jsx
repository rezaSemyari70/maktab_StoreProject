import React, {useState, useEffect} from 'react'
import SliderSingleProduct from '../SliderSingleProduct/SliderSingleProduct';
import {useParams} from 'react-router-dom';
import api from '../../Api/api';
import ContentInfo from '../ContentInfo/ContentInfo';
import Spinner from '../../Components/Spinner/Spinner';

import './ProductInfo.scss';

function ProductInfo() {

    const {id} = useParams();
    console.log(id)

    const [singleProduct,
        setSingleProduct] = useState({images: [{}]})
    const [pending,
        setPending] = useState(true)
    console.log(singleProduct)
    useEffect(() => {
        api
            .get(`products/${id}`)
            .then(res => {
                setSingleProduct(res.data)
                setPending(false)
            })
            .catch(error => console.log(error))
    }, [])

    const items = singleProduct
        .images
        .map(item => {
            return ({src: item.src, id: item.id});
        })
    console.log(items)

        

    return (
        <div>
            { pending ? <Spinner/>
            :<div>
            <SliderSingleProduct items={items}/>
            <ContentInfo  singleProduct={singleProduct}/>
            </div>}
        </div>
    )
}

export default ProductInfo
