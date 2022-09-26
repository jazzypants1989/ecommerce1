import styled from "styled-components";

const Container = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #34fac5;
  font-size: 1.75rem;
  color: rgba(0, 80, 192, 1);
  font-weight: bolder;
`;

const Announcement = () => {
  return (
    <Container>This Just In: Electric Larry is the coolest ever!</Container>
  );
};
export default Announcement;
