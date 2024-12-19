import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FilterSection from './FilterSection/FilterSection'
import ProductCatagory from './ProductCatagory/ProductCatagory'

const ProductPage = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col xl={3} lg={3} md={4} sm={12} xs={12} >
            <FilterSection />
          </Col>
          <Col xl={9} lg={9} md={8} sm={12} xs={12} >
            <ProductCatagory />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ProductPage