import styled from "styled-components";
import { media } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://lh3.googleusercontent.com/p/AF1QipORSwb1NHYjSlYEjPCnV_ng6YxfLcecBbNMQHXW=w1080-h608-p-no-v0");
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 2rem;
  background-color: rgba(0, 120, 225, 0.5);
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 120, 225, 0.5);
  ${media.tablet`width: 60%;
  padding: 1.5rem;`}
  ${media.phone`width: 75%;
  padding: 1rem;`}
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 200;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;

  ${media.tablet`flex-direction: column;`}
`;
const Input = styled.input`
  ::placeholder {
    color: rgba(247, 118, 5, 0.7);
    font-size: 1.66rem;
  }
  flex: 1;
  height: 2rem;
  min-width: 40%;
  margin: 0.75rem 0.5rem 0 0;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);
  font-size: 1.75rem;
  font-weight: 500;
  &:focus {
    outline: none;
  }

  ${media.tablet`margin: 0.5rem 0;
  padding: 0.5rem;
  font-size: 1.5rem;`}

  ${media.phone`margin: 0.25rem 0;
  padding: 0.25rem;
  font-size: 1.33rem;`}
`;
const Agreement = styled.span`
  font-size: 0.75rem;
  margin: 0.8rem 0.4rem;
`;
const Button = styled.button`
  width: 100%;
  border: none;
  padding: 0.75rem 1rem;
  background-color: rgba(247, 118, 5, 0.8);
  color: white;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.5s ease;
  font-size: 2rem;

  &:hover {
    background-color: rgba(52, 250, 197, 0.6);
    box-shadow: 0px 0px 10px rgba(52, 250, 197, 0.6);
  }
`;
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};
export default Register;
