import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import { Badge, ThemeProvider } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { createTheme } from "@material-ui/core/styles";

const Container = styled.div`
  height: 15%;
  background-color: rgba(0, 80, 192, 1);
  width: 100%;
  font-size: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 5px 15px;
  justify-content: space-between;
  align-items: center;
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
`;

const Input = styled.input`
  border: none;
  background: none;
  font-size: 1.5rem;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const Logo = styled.div`
  flex: 1;
  text-align: center;
  font-size: 3.5rem;
  color: rgba(247, 118, 5, 1);
  text-shadow: 0px 0px 5px rgba(247, 118, 5, 1);
  z-index: 1;
`;

const Menu = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
  padding: 5px 15px;
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
          Search:
          <Input />
          <SearchIcon
            style={{ color: "#34fac5", fontSize: 16, cursor: "pointer" }}
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
