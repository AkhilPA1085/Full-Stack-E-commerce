import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://global-uploads.webflow.com/5fce68a0d8f769e24b593987/605672772e8de83e673e2c0e_Granny%20Blob.png");
  background-repeat: no-repeat;
  background-position: right;
  display: flex;
  align-items: center;
  ${mobile({backgroundSize:"cover",justifyContent:"center"})}
`;

const Wrapper = styled.div`
    width: 50%;
    background-color: #fff;
    padding: 30px;
    ${mobile({width:"80%"})}
`;

const Title = styled.h1`
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;
    font-weight: 200;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    ${mobile({justifyContent:"center"})}
`;

const Input = styled.input`
    padding: 10px;
    margin: 0px 20px 20px 0px;

    &:focus{
        outline: none;
    }
`;

const Agreement = styled.p`
    font-size: 18px;
    text-align: center;
    ${mobile({fontSize:"12px"})}
`;

const Button = styled.button`
    padding: 10px;
    font-size: 16px;
    background-color: teal;
    color: #fff;
    cursor: pointer;
    border: 1px solid teal;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 2px;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an Account</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By clicking Sign Up, you agree to our Terms, Privacy Policy and
            Cookies Policy. You may receive SMS notifications from us and can
            opt out at any time.
          </Agreement>
          <Button type="submit">Sign up</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
