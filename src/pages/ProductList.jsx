import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { media } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

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
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value.toLowerCase();
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Good Stuff(Category Name)</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="category" onChange={handleFilters}>
            <Option disabled>Category</Option>
            <Option>movies</Option>
            <Option>games</Option>
            <Option>board Games</Option>
            <Option>music</Option>
            <Option>toys</Option>
            <Option>electronics</Option>
          </Select>
          <Select name="subcategory" onChange={handleFilters}>
            <Option disabled>SubCategory</Option>
            <Option></Option>
            <Option></Option>
            <Option></Option>
            <Option></Option>
            <Option></Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
