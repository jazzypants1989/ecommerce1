import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pay from "../components/Pay";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { media } from "../responsive";
import { useNavigate } from "react-router-dom";
import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import styled from "styled-components";

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
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        history.push("/success", {
          stripeData: res.data,
          products: cart,
        });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <Pay />
            <Button onClick={() => navigate("/success")}>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
