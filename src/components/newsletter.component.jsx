import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    margin-top: 100px;
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #ffd5d5;

`

const Title = styled.h1`
    font-size: 70px;
    text-transform: uppercase;
    letter-spacing: 3px;
    ${mobile({textAlign:"center",margin:"0px",fontSize:"40px"})}
`
const Description = styled.p`
    font-size: 30px;
    text-align: center;
    ${mobile({fontSize:"12px"})}
`
const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    width: 50%;
    border: 1px solid teal;
    ${mobile({width:"80%"})}
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    &:focus{
        outline: none;
    }
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: #fff;
`

const NewsLetter = () => {
  return (
    <Container>
      <Title>News Letter</Title>
      <Description>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima maiores
        id quaerat sequi inventore sapiente autem sit sed velit deleniti!
      </Description>
      <InputContainer>
        <Input placeholder="Your Email"/>
        <Button>
            <Send/>
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
