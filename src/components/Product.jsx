import styled from "styled-components";
import {
  ShoppingCartRounded,
  SearchRounded,
  FavoriteRounded,
} from "@material-ui/icons";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 2;
  background-color: transparent;
  transition: all 0.25s ease;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  position: relative;
  transition: all 0.25s ease;

  &:hover {
    transform: scale(1.08);
  }

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 225px;
  height: 225px;
  border-radius: 50%;
  background-color: rgba(247, 118, 5, 0.95);
  position: absolute;
  z-index: 2;
`;

const Image = styled.img`
  min-height: 75%;
  max-width: 100%;
  z-index: 2;
  background-color: transparent;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(247, 118, 5, 0.66);
  color: rgba(52, 250, 197, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  padding: none;
  transition: all 0.5s ease;

  &:hover {
    background-color: rgba(247, 118, 5, 1);
    color: rgba(52, 250, 197, 0.95);
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartRounded />
        </Icon>
        <Icon>
          <SearchRounded />
        </Icon>
        <Icon>
          <FavoriteRounded />
        </Icon>
      </Info>
    </Container>
  );
};
export default Product;
