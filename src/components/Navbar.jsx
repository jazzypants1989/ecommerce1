import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import { Badge, ThemeProvider } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { createTheme } from "@material-ui/core/styles";
import { media } from "../responsive";

const Container = styled.div`
  height: 15%;
  background-color: rgba(0, 80, 192, 1);
  width: 100%;
  font-size: 1.33rem;

  ${media.tablet`height: 10%;
  font-size: 1rem;`}
`;

const Wrapper = styled.div`
  display: flex;
  padding: 5px 15px;
  justify-content: space-between;
  align-items: center;
  ${media.tablet`flex-direction: column;
  padding: 5px 0;`}
`;

const Search = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 25px;
  padding: 5px;
  border: 1px solid rgba(52, 250, 197, 0.5);
  border-radius: 5px;

  ${media.tablet`margin-left: 0;
  margin-bottom: 10px;
  width: 80%;
  order: 1;
  `}
`;

const Input = styled.input`
  border: none;
  background: none;
  font-size: 1.5rem;
  width: 100%;

  &:focus {
    outline: none;
  }

  ${media.tablet`font-size: 1rem;`}

  ${media.phone`font-size: 0.8rem;`}
`;

const Logo = styled.div`
  flex: 2;
  text-align: center;
  font-size: 3.5rem;
  color: rgba(247, 118, 5, 1);
  text-shadow: 0px 0px 5px rgba(247, 118, 5, 1);
  z-index: 1;
  ${media.tablet`font-size: 2.75rem;`}
  ${media.phone`font-size: 1.5rem;
  margin: 0.25rem 0;`}
`;

const Menu = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${media.tablet`flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 2;`}
`;

const MenuItem = styled.div`
  font-size: 1.25rem;
  cursor: pointer;
  padding: 5px 15px;
  transition: all 0.3s ease;
  border-radius: 5px;

  &:hover {
    background-color: rgba(247, 118, 5, 0.8);
    color: rgba(0, 80, 192, 1);
  }

  ${media.tablet`padding: 10px 0;
  `}

  ${media.phone`padding: 5px 0;
  font-size: 1rem;
  `}
`;

const Navbar = () => {
  const theme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#0050c0",
      },
      secondary: {
        main: "#f77605",
      },
    },
  });

  return (
    <Container>
      <Wrapper>
        <Search>
          <Input />
          <SearchIcon
            style={{
              color: "#34fac5",
              fontSize: 16,
              cursor: "pointer",
              padding: "5px",
            }}
          />
        </Search>
        <Logo>Electric Larry's!</Logo>
        <Menu>
          <MenuItem>Login</MenuItem>
          <MenuItem>Register</MenuItem>
          <ThemeProvider theme={theme}>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </ThemeProvider>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
