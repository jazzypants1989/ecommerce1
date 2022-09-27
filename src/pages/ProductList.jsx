import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { media } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  font-size: 3rem;
  margin: 1rem;
  letter-spacing: 2px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 1rem;

  ${media.tablet`margin: 0.5rem;
  display: flex;
  flex-direction: column;`}
`;

const FilterText = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  margin-right: 1rem;
  letter-spacing: 1px;

  ${media.phone`margin-right: 0`}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Good Stuff(Category Name)</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Category
            </Option>
            <Option>Movies</Option>
            <Option>Games</Option>
            <Option>Board Games</Option>
            <Option>Music</Option>
            <Option>Toys</Option>
            <Option>Electronics</Option>
          </Select>
          <Select>
            <Option disabled selected>
              SubCategory
            </Option>
            <Option>Hopefully,</Option>
            <Option>I can make this dynamic</Option>
            <Option>So it changes</Option>
            <Option>Depending on the</Option>
            <Option>Category the user selects </Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
