import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "react-sidebar";
import Menu from "../../Components/Menu";
import styled from "../../typed-components";

const Container = styled.div``;

const MenuButton = styled.button`
  appearance: none;
  padding: 10px;
  position: absolute;
  top: 10px;
  left: 10px;
  text-align: center;
  font-weight: 800;
  border: 0;
  cursor: pointer;
  font-size: 20px;
  transform: rotate(90deg);
  z-index: 2;
  background-color: transparent;
`;

interface IProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const HomePresenter: React.SFC<IProps> = ({
  isMenuOpen,
  toggleMenu
}) => (
  <Container>
    <Helmet>
      <title>Home | Buber</title>
    </Helmet>
    <Sidebar
      sidebar={<Menu />}
      open={isMenuOpen}
      onSetOpen={toggleMenu}
      styles={{
        sidebar: {
          backgroundColor: "white",
          width: "80%",
          zIndex: "10"
        }
      }}
    >
      <MenuButton onClick={toggleMenu}>|||</MenuButton>
    </Sidebar>
  </Container>
);

export default HomePresenter;