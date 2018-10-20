import React from "react";
// import { Mutation } from "react-apollo";
// import { RouteComponentProps } from "react-router-dom";
// import { toast } from "react-toastify";
// import VerifyPhonePresenter from './VerifyPhonePresenter';

// interface IState {
//   verificationKey: string;
//   phoneNumber: string;
// }

// interface IProps extends RouteComponentProps<any> {}

// class VerifyMutation extends Mutation<verifyPhone, verifyPhon

class VerifyPhoneContainer extends React.Component {
  constructor(props) {
    super(props);
    if (!props.location.state) {
      props.history.push("/");
    }
    this.state = {
      phoneNumber: props.location.state.phone,
      verificationKey: ""
    }
  }

  public render() {
    // const { verificationKey, phoneNumber } = this.state;
    return (
      <div>VerifyPhoneContainer</div>
    );
  }

  public onInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    } as any);
  };
}

export default VerifyPhoneContainer;