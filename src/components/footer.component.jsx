import { Facebook, Instagram, Mail, Payment, Phone, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  ${mobile({flexDirection:"column"})}
`;
const Left = styled.div`
  flex: 1;
  padding: 20px;
`;
const Logo = styled.h1`
  font-size: 30px;
  font-weight: 500;
  text-transform: capitalize;
`;

const Description = styled.p``

const SocialContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialIcon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #${props=>props.color};
    color: #fff;
    ${mobile({width:"40px",height:"40px"})}
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display:"none",})}
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 500;
  text-transform: capitalize;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    gap:10px;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Shopping Cart</Logo>
        <Description>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus fuga
          cupiditate aliquam? Unde exercitationem veniam doloribus officia,
          saepe tenetur tempora.
        </Description>
        <SocialContainer>
          <SocialIcon color='3B5999'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color='E4405F'>
            <Instagram />
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Usefull links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Contact</ListItem>
            <ListItem>Terms</ListItem>
            <ListItem>Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>Wish list</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
            <Room/>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </ContactItem>
        <ContactItem>
            <Phone/>+1 2324 3536
        </ContactItem>
        <ContactItem>
            <Mail/>info@shoppingcart.com
        </ContactItem>
        <Payment/>
      </Right>
    </Container>
  );
};

export default Footer;
