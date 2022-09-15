import styled from "styled-components"
import { categories } from "../data"
import CategoryItem from "./categoryItem.component"

const Container = styled.div`
    max-width: 1240px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 10px;
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