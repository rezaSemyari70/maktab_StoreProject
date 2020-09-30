import React, {useState, useEffect} from 'react'
import {Row, Col} from 'reactstrap';
import RelatedProducts from '../RelatedProducts/RelatedProducts';
import SliderSingleProduct from '../SliderSingleProduct/SliderSingleProduct';
import {useParams} from 'react-router-dom';
import api from '../../Api/api';

import './ProductInfo.scss';
import ContentInfo from '../ContentInfo/ContentInfo';

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
            <SliderSingleProduct items={items}/>
            <ContentInfo  singleProduct={singleProduct}/>
        </div>
    )
}

export default ProductInfo
