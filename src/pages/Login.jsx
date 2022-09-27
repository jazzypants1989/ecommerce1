import styled from "styled-components";

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 200;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  ::placeholder {
    color: rgba(247, 118, 5, 0.7);
    font-size: 1.66rem;
  }
  flex: 1;
  min-width: 40%;
  margin: 0.5rem;
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
`;
const Button = styled.button`
  margin: 0.5rem;
  border: none;
  padding: 0.75rem 1rem;
  background-color: rgba(247, 118, 5, 0.8);
  color: white;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.5s ease;
  font-size: 2rem;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(247, 118, 5, 0.8);
  & &:focus {
    outline: none;
  }

  &:hover {
    background-color: rgba(52, 250, 197, 0.6);
    box-shadow: 0px 0px 10px rgba(52, 250, 197, 0.6);
    color: rgba(0, 0, 0, 0.8);
  }
`;

const Link = styled.a`
  margin: 0.75rem 0;
  padding: 0 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  cursor: pointer;
  color: rgba(52, 250, 197, 1);
  letter-spacing: 1px;
  transition: all 1s ease;

  &:hover {
    color: rgba(52, 250, 197, 0.5);
    text-decoration: underline;
    text-shadow: 0px 0px 5px black;
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>LOG ON IN</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button>OKAY FINE</Button>
          <Link>Well, shucks, I forgot my dang password.</Link>
          <Link>I didn't even know I needed one!</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};
export default Register;
