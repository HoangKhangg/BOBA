import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import {listProducts} from '../actions/productActions'
import Product from '../components/Product'
import { useFetcher, useNavigate, useLocation } from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'
import ProductCarousel from '../components/ProductCarousel'

function HomeScreen() {
   const dispatch = useDispatch()
   const productList = useSelector(stage => stage.productList)
   const {error, loading, products } = productList 
   const location =useLocation()
   let keyword = location.search
   useEffect(() => {
    dispatch(listProducts(keyword))
   }, [dispatch, keyword])

    return (
        
        <div>
            {!keyword && <ProductCarousel />}

            <h1>SẢN PHẨM MỚI NHẤT</h1>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row>
                            {products.map(product => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product} />
                                </Col>
                            ))}
                        </Row>
                        
                    </div>
            }
        </div>
    )
}

export default HomeScreen
