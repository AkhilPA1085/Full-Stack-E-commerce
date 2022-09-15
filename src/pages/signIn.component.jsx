import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://www.pngall.com/wp-content/uploads/2016/04/Shopping-PNG-HD.png");
  background-size  :contain ;
  background-repeat: no-repeat;
  background-position: right;
  display: flex;
  align-items: center;
  ${mobile({backgroundSize:"cover",})}
`;

const Wrapper = styled.div`
    width: 25%;
    background-color: #fff;
    padding: 30px;
    ${mobile({width:"75%"})}
`;

const Title = styled.h1`
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;
    font-weight: 200;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    padding: 10px;
    margin: 10px 0px;
    ${mobile({margin:"13px 0px"})}

    &:focus{
        outline: none;
    }
`;
const Link = styled.a`
    text-decoration: none;
    color: blue;
    font-size: 14px;
    margin: 0px 10px 20px 0px;
    cursor: pointer;
`;

const Button = styled.button`
    width: 40%;
    padding: 10px;
    font-size: 16px;
    background-color: teal;
    color: #fff;
    cursor: pointer;
    border: 1px solid teal;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 20px;
`;

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Form>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Button type="submit">Signin</Button>
          <Link>Forgot password?</Link>
          <Link>Create an account?</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default SignIn