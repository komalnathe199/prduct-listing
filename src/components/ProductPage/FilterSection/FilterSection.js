import React from 'react'
import { Form } from 'react-bootstrap'
import './FilterSection.css'

const FilterSection = () => {
  return (
    <section >
      <div className='d-flex mt-5 justify-content-between'>
          <h4 className='main-common-title'>Filetrs</h4>
          <p className='pink-text'>CLEAR ALL</p>
      </div>
      <div className='filter-section'>
      <div className='grey-border'></div>
      <div >
        <h4 className='main-common-title'>Color</h4>
        <Form.Check type="checkbox" label="Blue"/>
        <Form.Check type="checkbox" label="Black"/>
        <Form.Check type="checkbox" label="Pink"/>
        <Form.Check type="checkbox" label="Red"/>
        <Form.Check type="checkbox" label="White"/>
        <Form.Check type="checkbox" label="Grey"/>
        <Form.Check type="checkbox" label="Blue"/>
      </div>
      <div className='grey-border'></div>
      <div>
        <h4 className='main-common-title'>Price</h4>
        <Form.Check type="checkbox" label="Below 500"/>
        <Form.Check type="checkbox" label="500-1000"/>
        <Form.Check type="checkbox" label="1000-2000"/>
        <Form.Check type="checkbox" label="2000-3000"/>
        <Form.Check type="checkbox" label="4000-5000"/>
        <Form.Check type="checkbox" label="6000-7000"/>
        <Form.Check type="checkbox" label="8000-9000"/>
      </div>
      <div className='grey-border'></div>
      <div>
        <h4 className='main-common-title'>Category</h4>
        <Form.Check type="checkbox" label="Earphone"/>
        <Form.Check type="checkbox" label="Headphone"/>
      </div>
      <div className='grey-border'></div>
      </div>
     
    </section>
  )
}

export default FilterSection