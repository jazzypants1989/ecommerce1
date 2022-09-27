import styled from "styled-components";
import { media } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${media.tablet`aspect-ratio: 16/9;
  max-height: 50vh;`}

  ${media.phone``}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

const Title = styled.h1`
  color: #f77605;
  position: absolute;
  bottom: 2.75rem;
  margin-bottom: 1rem;
  letter-spacing: 2px;
  font-size: 2rem;
  text-shadow: 0 0 8px black;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.25), transparent);

  ${media.tablet`font-size: 1.5rem;
  bottom: 2.5rem;`}

  ${media.phone`font-size: 1.25rem;`}
`;

const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 10px;
  background-color: rgba(247, 118, 5, 0.8);
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  bottom: 1rem;

  &:hover {
    background-color: rgba(247, 118, 5, 1);
    color: rgba(52, 250, 197, 0.8);
  }

  ${media.tablet`font-size: 1.25rem;`}
  ${media.phone`font-size: 1rem;`}
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>OH YEAH!</Button>
      </Info>
    </Container>
  );
};
export default CategoryItem;
