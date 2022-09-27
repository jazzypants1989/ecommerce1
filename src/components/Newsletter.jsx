import { MailOutline } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 2.33rem;
  margin-bottom: 1rem;
  letter-spacing: 2px;
  color: rgba(247, 118, 5, 0.95);
  text-shadow: 0 0 10px rgba(247, 118, 5, 0.95);
  font-weight: 400;
`;
const Description = styled.p`
  text-align: center;
  font-size: 1.66rem;
  margin-bottom: 1rem;
  font-weight: 300;
  @media only screen and (max-width: 768px) {
    margin: 1rem;
  }
`;
const InputContainer = styled.div`
  width: 50%;
  height: 3rem;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  color: rgba(247, 118, 5, 0.95);
  transition: all 0.5s ease;
  outline: none;
  &&:hover {
    border: 1px solid rgba(247, 118, 5, 0.95);
    box-shadow: 0 0 10px rgba(247, 118, 5, 0.95);
    transform: translateY(-5px);

    &&::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  &&::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: rgba(247, 118, 5, 0.95);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s ease;
  }

  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`;
const Input = styled.input`
  ::placeholder {
    color: rgba(247, 118, 5, 0.95);
    font-size: 1.66rem;
  }
  flex: 8;
  border: none;
  padding-left: 20px;
  background-color: transparent;
  font-size: 1.75rem;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: rgba(247, 118, 5, 0.95);
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Become a Larry!</Title>
      <Description>
        Join the fan club and get semi-sorta-regular updates from our fearless
        leader about new products and stuff going on at the store.
      </Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <MailOutline />
        </Button>
      </InputContainer>
    </Container>
  );
};
export default Newsletter;
