import React from "react";
import styled from "../../typed-components";

const Container = styled.div`
  height: 100%;
`;

const Header = styled.div`
  background-color: black;
  height: 20%;
  margin-bottom: 30px;
  padding: 0 15px;
  color: white;
`;

const MenuPresenter: React.SFC = () => (
  <Container>
    <Header>
      hello Menu
    </Header>
  </Container>
);

export default MenuPresenter;