import styled from "styled-components"
import Announcement from "../components/announcement.component"
import Footer from "../components/footer.component"
import Navbar from "../components/navbar.components"
import NewsLetter from "../components/newsletter.component"
import Products from "../components/products/products.component"
import { mobile } from "../responsive"

const Container = styled.div``
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
`
const Filter = styled.div`
    display: flex;
    gap: 20px;
    ${mobile({flexDirection:"column",})}
`

const FilterText = styled.p`
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    ${mobile({fontSize:"16px"})}
`
const Select = styled.select`
    font-size: 20px;
    padding: 10px;
    &:focus{
        outline: none;
    }

    ${mobile({fontSize:"16px",margin:"10px 0px"})}
    
`
const Option = styled.option`
    ${mobile({fontSize:"16px",padding:"0px"})}
`

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>
                    Filter Products:
                </FilterText>
                <Select>
                    <Option selected disabled>color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Blue</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option selected disabled>size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected disabled>Newest</Option>
                    <Option>Price (low to high)</Option>
                    <Option>Price (high to low)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default ProductList