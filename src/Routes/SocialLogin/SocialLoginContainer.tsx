import React from "react";
import { RouteComponentProps } from 'react-router-dom';
import SocialLoginPresenter from './SocialLoginPresenter';

interface IProps extends RouteComponentProps<any> {}

class SocialLoginContainer extends React.Component<IProps> {
  public state = {
    email: ""
  };
  public render() {
    return (
      <SocialLoginPresenter loginCallback={this.loginCallback} />
    );
  }

  public loginCallback = response => {
    console.log("loginCallback");
  }
}

export default SocialLoginContainer;