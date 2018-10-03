import React from "react";
import { MutationFn } from "react-apollo";
import { RouteComponentProps } from 'react-router-dom';
import { toast } from "react-toastify";
// import {} from "../../types/api";
import PhoneLoginPresenter from "./PhoneLoginPresenter";
// import { PHONE_SIGN_IN } from "./PhoneQueries";

interface IState {
  countryCode: string;
  phoneNumber: string;
}

// class PhoneSignInMutation extends Mutation<
//   startPhoneVerification,
//   startPhoneVerificationVariables
// > {}

class PhoneLoginContainer extends React.Component<
  RouteComponentProps<any>,
  IState
> {
  public phoneMutation: MutationFn;
  public state = {
    countryCode: "+82",
    phoneNumber: ""
  };

  public render() {
    // const { history } = this.props;
    const { countryCode, phoneNumber } = this.state;
    return (
      <PhoneLoginPresenter 
        countryCode={countryCode}
        phoneNumber={phoneNumber}
        onInputChange={this.onInputChange}
        onSubmit={this.onSubmit}
        loading={false}
      />
    );
      // <PhoneSignInMutation
      //   mutation={PHONE_SIGN_IN}
      //   variables={{
      //     phoneNumber: `${countryCode}${phoneNumber}`
      //   }}
      //   onCompleted={data => {
      //   }}
      // >
      // </PhoneSignInMutation>
  }

  public onInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = event => {
    const {
      target: {name, value}
    } = event;
    this.setState({
      [name]: value
    } as any);
  };

  public onSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    const { countryCode, phoneNumber } = this.state;
    const phone = `${countryCode}${phoneNumber}`;
    const isValid = /^\+[1-9]{1}[0-9]{7,11}$/.test(phone);
    if (isValid) {
      this.phoneMutation();
    } else {
      toast.error("Please write a valid phone number", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    }
  };
}

export default PhoneLoginContainer;