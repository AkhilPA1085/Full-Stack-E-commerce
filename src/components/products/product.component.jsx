import { FavoriteBorderOutlined,Search, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Info = styled.div`
    opacity:0;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    transition: all 0.5s ease;
`
const Container = styled.div`
    flex: 1;
    min-width: 250px;
    height: 350px;
    padding-top: 20px;
    position: relative;
    background-color: aliceblue;
    display: flex;
    justify-content: center;
    cursor: pointer;

    &:hover ${Info}{
        opacity: 1;
    }
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
    position: absolute;
`

const Icon = styled.div`
    background-color: #fff;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    z-index: 4;
    transition: all 0.5s ease;
    &:hover{
        background-color: aliceblue;
        transform: scale(1.1);
    }
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