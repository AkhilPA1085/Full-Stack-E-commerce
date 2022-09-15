import { FavoriteBorderOutlined,Search, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    flex: 1;
    min-width: 250px;
    height: 350px;
    padding-top: 20px;
    position: relative;
    background-color: aliceblue;
    display: flex;
    justify-content: center;
`
const Circle = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
`

const Image = styled.img`
    height: 75%;
    z-index: 2;
`

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

const Icon = styled.div`
    z-index: 3;
`



const Product = ({product}) => {
    const{image} = product
  return (
    <Container>
        <Circle/>
        <Image src={image}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <Search/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product