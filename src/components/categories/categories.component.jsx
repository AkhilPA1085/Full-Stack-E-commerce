import styled from "styled-components"
import { categories } from "../../data"
import { mobile } from "../../responsive"
import CategoryItem from "./categoryItem.component"

const Container = styled.div`
    max-width: 1240px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 20px;
    padding-top: 100px;
    ${mobile({padding:"0px",flexDirection:"column"})}
`

const Categories = () => {
  return (
    <Container>
        {categories.map((item)=>(
            <CategoryItem item={item}/>
        ))}
    </Container>
  )
}

export default Categories