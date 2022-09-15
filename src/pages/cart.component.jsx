import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/announcement.component";
import Footer from "../components/footer.component";
import Navbar from "../components/navbar.components";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div``;

const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #232329;
`;

const Top = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({padding:"10px"})}
`;

const TopButton = styled.button`
  font-size: 16px;
  font-weight: 600;
  padding: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  background-color: ${(props) =>
    props.type === "checkout" ? "black" : "transparent"};
  color: ${(props) => props.type === "checkout" && "white"};
  border: ${(props) => props.type === "checkout" && "none"};
  ${mobile({fontSize:"13px"})}
`;

const TopTexts = styled.div`
  display: flex;
  gap: 20px;
  ${mobile({display:"none"})}
`;

const TopText = styled.p``;

const Bottom = styled.div`
    padding-top: 50px;
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
`;

const ProductName = styled.p``;

const ProductId = styled.p``;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #${props=>props.color};
`;

const ProductSize = styled.p``;

const PriceDetail = styled.p`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    ${mobile({gap:"30px"})}
`

const ProductAmount = styled.div`
    border: 1px solid teal;
    padding: 10px;
    font-weight: 500;
`

const ProductPrice = styled.div`
    font-size: 30px;
    ${mobile({marginTop:"20px"})}
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Summery = styled.div`
    flex: 1;
    padding: 20px;
    border: 1px solid lightgray;
`;

const SummeryTitle = styled.h1`
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
`;

const SummeryItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`

const SummeryItemText = styled.p`
    margin: 0;
    padding: 0;
    text-transform: capitalize;
    font-size: 18px;
    font-weight: ${props=>props.type === "total" && 700};
`

const SummerPrice = styled.p`
    margin: 0;
    padding: 0;
    font-size: ${props=>props.type === "total-price" && 30}px;
`

const Button = styled.button`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    letter-spacing: 2px;
    background-color: black;
    color: #fff;
    cursor: pointer;
    border: none;
    text-transform: uppercase;
    font-weight: 700;
`

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>your bag</Title>
        <Top>
          <TopButton>continue shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your wishlist(2)</TopText>
          </TopTexts>
          <TopButton type="checkout">checkout now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://cdn.shopify.com/s/files/1/0589/6568/8504/products/olive_green_tshirt_with_black_indian_army_print_8696c7cd-f4d7-4618-bdae-28172d01d0a3_1280x.png?v=1644573757" />
                <Details>
                  <ProductName>
                    <b>Name:</b>lorem 23
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>2344566
                  </ProductId>
                  <ProductColor color="022402"/>
                  <ProductSize>
                    <b>Size:</b>M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                    <Remove/>
                        <ProductAmount>2</ProductAmount>
                    <Add/>
                </ProductAmountContainer>
                <ProductPrice>$49</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr/>
          </Info>
          <Summery>
            <SummeryTitle>order summery</SummeryTitle>
            <SummeryItem>
                <SummeryItemText>subtotal</SummeryItemText>
                <SummerPrice>$10</SummerPrice>
            </SummeryItem>
            <SummeryItem>
                <SummeryItemText>estimated shipping</SummeryItemText>
                <SummerPrice>$5</SummerPrice>
            </SummeryItem>
            <SummeryItem>
                <SummeryItemText>shipping discount</SummeryItemText>
                <SummerPrice>$4</SummerPrice>
            </SummeryItem>
            <SummeryItem>
                <SummeryItemText type="total">Total</SummeryItemText>
                <SummerPrice type="total-price">$45</SummerPrice>
            </SummeryItem>
            <Button>Checkout now</Button>
          </Summery>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
