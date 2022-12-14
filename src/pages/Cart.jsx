import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { media } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopButton = styled.button`
  padding: 0.75rem;
  font-size: 1.25rem;
  letter-spacing: 0.2rem;
  cursor: pointer;
  border: ${(props) => (props.type === "filled" ? "none" : "3px outset black")};
  background-color: ${(props) =>
    props.type === "filled" ? "#f77605" : "transparent"};
  color: ${(props) => props.type === "filled" && "none"};
  transition: all 0.5s ease;
  transform-style: calc(
    ${(props) => props.type === "filled" && "scale(1.2)"} + 0.5rem
  );

  &:hover {
    background-color: ${(props) =>
      props.type === "filled" ? "transparent" : "#f77605"};
    color: ${(props) => (props.type === "filled" ? "#f77605" : "#34fac5")};
    border: ${(props) =>
      props.type === "filled" ? "none" : "3px inset #34fac5"};
    transform: ${(props) =>
      props.type === "filled" ? "scale(1.2)" : "translateY(1px)"};
    font-size: ${(props) => props.type === "filled" && "1.5rem"};
  }

  ${media.tablet`padding: 0.5rem;
  font-size: 1rem;
  `};

  ${media.phone`padding: 0.25rem;
  font-size: 0.75rem;
  `};
`;
const TopTexts = styled.div`
  display: flex;
`;
const TopText = styled.span`
  margin: auto;
  text-decoration: underline;
  cursor: pointer;
  margin: 0 0.5rem;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  ${media.tablet`flex-direction: column;`};
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
`;
const Image = styled.img`
  aspect-ratio: inherit;
  min-width: 30%;
  max-width: 90%;

  ${media.tablet`min-width: 100%;
  max-width: 100%;`};
`;
const Details = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 0.33rem;

  ${media.tablet`gap: 0.1rem;`}
`;
const ProductName = styled.span`
  font-size: 2rem;

  ${media.tablet`font-size: 1.5rem;`}

  ${media.phone`font-size: 1.25rem;`}
`;
const ProductId = styled.span``;
const ProductCategory = styled.div``;
const ProductCondition = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductAmount = styled.div`
  font-size: 2rem;
  margin: 0 0.5rem;

  ${media.phone`margin: 0.25rem 1rem;`}
`;

const ProductPrice = styled.div`
  font-size: 2rem;
  font-weight: 200;
  margin: 0 0.5rem;
  align-self: center;

  ${media.phone`margin: 0.25rem 1rem;`}
`;

const Hr = styled.hr`
  background-color: #34fac5;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid #34fac5;
  border-radius: 0.75rem;
  padding: 1rem;
  height: 50vh;

  ${media.tablet`height: 100vh;`}
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "1.5rem"};
`;

const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryItemTotal = styled.span``;
const Button = styled.span`
  width: 100%;
  padding: 0.75rem;
  background-color: #34fac5;
  font-size: 1.25rem;
  letter-spacing: 0.2rem;
  cursor: pointer;
  border: none;
  color: #f77605;
  transition: all 0.5s ease;

  &:hover {
    background-color: #f77605;
    color: #34fac5;
    transform: scale(1.2);
    font-size: 1.5rem;
  }
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>CART (NOT VAPE)</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://www.sagamusic.com/wp-content/uploads/2020/07/SS-10_a_bg-510x628.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> A really cool banjo that totally won't annoy
                    your roommates.
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductCategory>
                    <b>Category:</b> Music!
                  </ProductCategory>
                  <ProductCondition>
                    <b>Condition:</b> Like New
                  </ProductCondition>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>1</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>$51</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://funkogames.com/wp-content/uploads/2022/02/FunkoGames_GoofyMovie.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> A Goofy Movie Board Game. You know you want
                    it.
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductCategory>
                    <b>Category:</b> Board Games!
                  </ProductCategory>
                  <ProductCondition>
                    <b>Condition:</b> Decent
                  </ProductCondition>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>2</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>$14.50</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Discount</SummaryItemText>
              <SummaryItemPrice>$ 10.80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemTotal>$ 75.10</SummaryItemTotal>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};
export default Cart;
