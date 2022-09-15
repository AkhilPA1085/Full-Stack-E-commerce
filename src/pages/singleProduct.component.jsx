import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/announcement.component";
import Footer from "../components/footer.component";
import Navbar from "../components/navbar.components";
import NewsLetter from "../components/newsletter.component";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({flexDirection:"column",padding:"20px"})}
`;

const ImageContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
`;

const InfoContainer = styled.div`
    flex: 1;
`;

const Title = styled.h1`
    font-weight: 200;
    margin: 0;
`;

const Description = styled.p`
    margin: 20px 0px;
`;

const Price = styled.p`
    font-weight: 300;
    font-size: 45px;
`;

const FilterContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    ${mobile({width:"100%"})}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
    gap:10px;
`

const FilterTitle = styled.p`
    margin: 0;
    text-transform: capitalize;
    font-size: 20px;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`

const FilterSize = styled.select`
    padding: 10px;
    &:focus{
        outline: none;
    }
`

const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin-top:40px;
    
    ${mobile({width:"100%"})}
`

const AmountContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:10px;
`

const Amount = styled.div`
    width: 20px;
    height: 20px;
    font-weight: 600;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid teal;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
    padding: 10px;
    font-size: 16px;
    background-color: #fff;
    border: 2px solid teal;
    color: teal;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 700;
    &:hover{
        background-color: teal;
        color: #fff;
    }
`


const SingleProduct = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.pinimg.com/originals/d6/0c/ae/d60cae213c52ae8111a55da8ff28e5b8.png" />
        </ImageContainer>
        <InfoContainer>
          <Title>Lorem 123</Title>
          <Description>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque odit
            dolore quo?
          </Description>
          <Price>$20</Price>
          <FilterContainer>
            <Filter>
                <FilterTitle>color</FilterTitle>
                <FilterColor color="black"/>
                <FilterColor color="gray"/>
                <FilterColor color="skyblue"/>
            </Filter>
            <Filter>
                <FilterTitle>size</FilterTitle>
                <FilterSize>
                    <FilterSizeOption>XS</FilterSizeOption>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                    <FilterSizeOption>XXL</FilterSizeOption>
                </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
                <Remove/>
                <Amount>1</Amount>
                <Add/>
            </AmountContainer>
            <Button>Add to cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
