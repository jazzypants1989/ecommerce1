import styled from "styled-components";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { media } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;

  ${media.tablet`padding: 10px;
  flex-direction: column;
  `}
`;
const ImgContainer = styled.div`
  flex: 1;
  min-width: 25vw;
  min-height: 25vh;

  ${media.tablet`min-width: 100%;
  min-height: 90%;
  max-height: 95%;
  `}
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
  font-size: 3rem;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 4rem;
  text-shadow: 0px 0px 5px rgba(247, 118, 5, 1);
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 1.25rem;
  font-weight: 200;
`;

const FilterCat1 = styled.select`
  margin-left: 0.6rem;
  padding: 0 1rem;
  font-size: 1rem;
  background-color: #34fac5;
  transition: all 0.5s ease;

  &&:hover {
    background-color: #f77605;
  }

  &&:focus {
    background-color: #f77605;
  }

  &&:active {
    background-color: #f77605;
  }
`;
const FilterOption1 = styled.option`
  font-size: 1rem;
`;

const FilterCat2 = styled.select`
  font-size: 1rem;
  padding: 0.25rem;
  margin: 0 1rem;
  background-color: #34fac5;
  transition: all 0.5s ease;

  &&:hover {
    background-color: #f77605;
  }

  &&:focus {
    background-color: #f77605;
  }

  &&:active {
    background-color: #f77605;
  }
`;
const FilterOption2 = styled.option`
  font-size: 1rem;
  margin: 0 1rem;
`;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0px;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #f77605;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: #f77605;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.5s ease;
  &:hover {
    background-color: #34fac5;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://lh3.googleusercontent.com/p/AF1QipORSwb1NHYjSlYEjPCnV_ng6YxfLcecBbNMQHXW=w1080-h608-p-no-v0" />
        </ImgContainer>
        <InfoContainer>
          <Title>Product Name</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quae.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Genre:</FilterTitle>
              <FilterCat1>
                <FilterOption1>Action</FilterOption1>
                <FilterOption1>Fantasy</FilterOption1>
                <FilterOption1>Comedy</FilterOption1>
                <FilterOption1>Romance</FilterOption1>
                <FilterOption1>Cheese</FilterOption1>
              </FilterCat1>
            </Filter>
            <Filter>
              <FilterTitle>Decade of Release:</FilterTitle>
              <FilterCat2>
                <FilterOption2>1950</FilterOption2>
                <FilterOption2>1960</FilterOption2>
                <FilterOption2>1970</FilterOption2>
                <FilterOption2>1980</FilterOption2>
                <FilterOption2>1990</FilterOption2>
                <FilterOption2>2000</FilterOption2>
                <FilterOption2>2010</FilterOption2>
                <FilterOption2>2020</FilterOption2>
              </FilterCat2>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};
export default Product;
