import React from "react";
import HomePresenter from "./HomePresenter";

interface IState {
  isMenuOpen: boolean;
}

class HomeContainer extends React.Component<any, IState> {
  public state = {
    isMenuOpen: false
  }

  public render() {
    console.log("HomeContainer");
    const { isMenuOpen } = this.state;
    return (
      <HomePresenter isMenuOpen={isMenuOpen} toggleMenu={this.toggleMenu}/>
    );
  }
  public toggleMenu = () => {
    this.setState(state => {
      return {
        isMenuOpen: !state.isMenuOpen
      };
    });
  }
}

export default HomeContainer;