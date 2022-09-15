import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../../data'
import Product from './product.component'

const Container = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    padding: 20px;
    margin-top: 100px;
`
const Products = () => {
  return (
    <Container>
        {popularProducts.map((product)=>(
            <Product product={product} key={product.id}/>
        ))}
    </Container>
  )
}

export default Products