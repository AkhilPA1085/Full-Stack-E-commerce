import styled from "styled-components"
import { mobile } from "../../responsive"

const Container = styled.div`
    flex: 1;
    height: 70vh;
    padding-top: 20px;
    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({height:"40vh",})}
`

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.h1`
    color: #09b6fb;
    text-transform: uppercase;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 16px;
    background-color: #fff;
    cursor: pointer;
    border: 1px solid lightgray;
    text-transform: uppercase;
    font-weight: 700;
`


const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.image}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem