import styled from "styled-components";

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
  bottom: 2.5rem;
  margin-bottom: 1rem;
  letter-spacing: 2px;
  font-size: 2rem;
  text-shadow: 0 0 8px black;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.25), transparent);
`;

const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 10px;
  background-color: rgba(247, 118, 5, 0.8);
  font-size: 1.25rem;
  cursor: pointer;
  position: absolute;
  bottom: 1rem;
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
