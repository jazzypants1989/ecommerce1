import styled from "styled-components";

const Container = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(52, 250, 197, 0.7);
  font-size: 1.75rem;
  color: rgba(0, 80, 192, 1);
  font-weight: bolder;
  letter-spacing: 0.33rem;
`;

const Announcement = () => {
  return (
    <Container>This Just In: Electric Larry is the coolest ever!</Container>
  );
};
export default Announcement;
