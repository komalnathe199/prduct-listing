import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Col, Row } from 'react-bootstrap'

const ProductCatagory = () => {

    const products = [
        {
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/banner/1.webp`,
            productName: 'Foxin',
            description: 'Foxin 309 wired headphone black',
            price: 599,
            originalPrice: 15000,
        },
        {
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/banner/2.webp`,
            productName: 'Sony',
            description: 'Sony wireless headphone',
            price: 2499,
            originalPrice: 5000,
        },
        {
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/banner/4.webp`,
            productName: 'Sony',
            description: 'Sony wireless headphone',
            price: 2499,
            originalPrice: 5000,
        },
        {
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/banner/1.webp`,
            productName: 'Sony',
            description: 'Sony wireless headphone',
            price: 2499,
            originalPrice: 5000,
        },
        {
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/banner/2.webp`,
            productName: 'Sony',
            description: 'Sony wireless headphone',
            price: 2499,
            originalPrice: 5000,
        },
        {
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/banner/4.webp`,
            productName: 'Sony',
            description: 'Sony wireless headphone',
            price: 2499,
            originalPrice: 5000,
        },
    ];
    return (
        <section className='product-category'>
            <div className='mt-5'>
                <h4 className='main-common-title'>Headphone</h4>
                <p className='normal-text'>Showing 48 products</p>
            </div>
            <Row>
                {products.map((product, index) => (
                    <Col md={4}>
                        <ProductCard
                            key={index}
                            imageUrl={product.imageUrl}
                            productName={product.productName}
                            description={product.description}
                            price={product.price}
                            originalPrice={product.originalPrice}
                        />
                    </Col>
                ))}
            </Row>
        </section>
    )
}

export default ProductCatagory