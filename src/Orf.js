import "./Register.css";

import React from "react";

const emailValidator =
  /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
// const contactNoValidator = /^[0-9]/;

class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurantName: "",
      restaurantType: "",
      emailAddress: "",
      password: "",
      passwordConfirmation: "",
      contactNo: "",
      bankName: "",
      gstNo: "",
      panNo: "",
      aadharNo: "",
      bankAccountNo: "",
      ifscCode: "",
      restaurantNameError: "",
      restaurantTypeError: "",
      emailAddressError: "",
      passwordError: "",
      passwordConfirmationError: "",
      contactNoError: "",
      bankNameError: "",
      gstNoError: "",
      panNoError: "",
      aadharNoError: "",
      bankAccountNoError: "",
      ifscCodeError: "",
      isFormSubmitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateRestaurantName = this.validateRestaurantName.bind(this);
    this.validateRestaurantType = this.validateRestaurantType.bind(this);
    this.validateEmailAddress = this.validateEmailAddress.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validatePasswordConfirmation =
      this.validatePasswordConfirmation.bind(this);
    this.validateContactNo = this.validateContactNo.bind(this);

    this.validateField = this.validateField.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });

    return;
  }

  handleBlur(event) {
    const { name } = event.target;

    this.validateField(name);
    return;
  }

  handleSubmit(event) {
    event.preventDefault();
    let formFileds = [
      "restaurantName",
      "restaurantType",
      "emailAddress",
      "password",
      "passwordConfirmation",
      "contactNo",
      "bankName",
      "gstNo",
      "panNo",
      "aadharNo",
      "bankAccountNo",
      "ifscCode",
    ];
    let isValid = true;
    formFileds.forEach((field) => {
      isValid = this.validateField(field) && isValid;
    });

    if (isValid) this.setState({ isFormSubmitted: true });
    else this.setState({ isFormSubmitted: false });

    return this.state.isFormSubmitted;
  }

  validateField(name) {
    let isValid = false;

    if (name === "restaurantName") isValid = this.validateRestaurantName();
    else if (name === "restaurantType") isValid = this.validateRestaurantType();
    else if (name === "emailAddress") isValid = this.validateEmailAddress();
    else if (name === "password") isValid = this.validatePassword();
    else if (name === "passwordConfirmation")
      isValid = this.validatePasswordConfirmation();
    else if (name === "contactNo") isValid = this.validateContactNo();
    else if (name === "bankname") isValid = this.validateBankName();
    else if (name === "gstno") isValid = this.validateGstNo();
    else if (name === "panno") isValid = this.validatePanNo();
    else if (name === "aadharno") isValid = this.validateAadharNo();
    else if (name === "bankaccountno") isValid = this.validateBankAccountNo();
    else if (name === "ifscno") isValid = this.validateIfscCode();

    return isValid;
  }

  validateRestaurantName() {
    let restaurantNameError = "";
    const value = this.state.restaurantName;
    if (value.trim() === "")
      restaurantNameError = "Restaurant Name is required";

    this.setState({
      restaurantNameError,
    });
    return restaurantNameError === "";
  }

  validateRestaurantType() {
    let restaurantTypeError = "";
    const value = this.state.restaurantType;
    if (value.trim() === "")
      restaurantTypeError = "Restaurant Type is required";

    this.setState({
      restaurantTypeError,
    });
    return restaurantTypeError === "";
  }

  validateEmailAddress() {
    let emailAddressError = "";
    const value = this.state.emailAddress;
    if (value.trim === "") emailAddressError = "Email Address is required";
    else if (!emailValidator.test(value))
      emailAddressError = "Email is not valid";

    this.setState({
      emailAddressError,
    });
    return emailAddressError === "";
  }

  validatePassword() {
    let passwordError = "";
    const value = this.state.password;
    if (value.trim === "") passwordError = "Password is required";
    else if (!passwordValidator.test(value))
      passwordError =
        "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";

    this.setState({
      passwordError,
    });
    return passwordError === "";
  }

  validatePasswordConfirmation() {
    let passwordConfirmationError = "";
    if (this.state.password !== this.state.passwordConfirmation)
      passwordConfirmationError = "Password does not match Confirmation";

    this.setState({
      passwordConfirmationError,
    });
    return passwordConfirmationError === "";
  }

  validateContactNo() {
    let contactNoError = "";
    const value = this.state.contactNo;
    if (value.trim() === "") contactNoError = "Contact No  is required";

    this.setState({
      contactNoError,
    });
    return contactNoError === "";
  }

  validateGstNo() {
    let gstNoError = "";
    const value = this.state.gstNo;
    if (value.trim() === "") gstNoError = "Gst No  is required";

    this.setState({
      gstNoError,
    });
    return gstNoError === "";
  }

  validatePanNo() {
    let panNoError = "";
    const value = this.state.panNo;
    if (value.trim() === "") panNoError = "Pan No  is required";

    this.setState({
      panNoError,
    });
    return panNoError === "";
  }

  validateAadharNo() {
    let aadharNoError = "";
    const value = this.state.aadharNo;
    if (value.trim() === "") aadharNoError = "Aadhar No  is required";

    this.setState({
      aadharNoError,
    });
    return aadharNoError === "";
  }

  validateBankName() {
    let bankNameError = "";
    const value = this.state.bankName;
    if (value.trim() === "") bankNameError = "Bank Name  is required";

    this.setState({
      bankNameError,
    });
    return bankNameError === "";
  }

  validateBankAccountNo() {
    let bankAccountNoError = "";
    const value = this.state.bankaccountNo;
    if (value.trim() === "")
      bankAccountNoError = "Bank Account No  is required";

    this.setState({
      bankAccountNoError,
    });
    return bankAccountNoError === "";
  }

  validateIfscCode() {
    let ifscCodeError = "";
    const value = this.state.ifscCode;
    if (value.trim() === "") ifscCodeError = "IFSC Code  is required";

    this.setState({
      ifscCodeError,
    });
    return ifscCodeError === "";
  }

  render() {
    return (
      <div className="main">
        <h1>Restaurant Registration Form</h1>
        {this.state.isFormSubmitted ? (
          <div className="details">
            <h3>Thanks for signing up, find your details below:</h3>
            <div>Restaurant Name: {this.state.restaurantName}</div>
            <div>Restaurant Type: {this.state.restaurantType}</div>
            <div>Email Address: {this.state.emailAddress}</div>
            <div>Contact No: {this.state.contactNo}</div>
            <div>Gst No: {this.state.gstNo}</div>
            <div>Pan No: {this.state.panNo}</div>
            <div>Aadhar No: {this.state.aadharNo}</div>
            <div>Bank Name: {this.state.bankName}</div>
            <div>Bank Account No: {this.state.bankAccountNo}</div>
            <div>IFSC Code: {this.state.ifscCode}</div>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Restaurant Name"
              name="restaurantName"
              value={this.state.restaurantName}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.restaurantNameError && (
              <div className="errorMsg">{this.state.restaurantNameError}</div>
            )}
            <input
              type="text"
              placeholder="Restaurant Type"
              name="restaurantType"
              value={this.state.restaurantType}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.restaurantTypeError && (
              <div className="errorMsg">{this.state.restaurantTypeError}</div>
            )}
            <input
              type="email"
              placeholder="Email Address"
              name="emailAddress"
              value={this.state.emailAddress}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.emailAddressError && (
              <div className="errorMsg">{this.state.emailAddressError}</div>
            )}
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.passwordError && (
              <div className="errorMsg">{this.state.passwordError}</div>
            )}
            <input
              type="password"
              placeholder="Confirm Password"
              name="passwordConfirmation"
              value={this.state.passwordConfirmation}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.passwordConfirmationError && (
              <div className="errorMsg">
                {this.state.passwordConfirmationError}
              </div>
            )}
            <input
              type="text"
              placeholder="Contact No"
              name="contactNo"
              value={this.state.contactNo}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.contactNoError && (
              <div className="errorMsg">{this.state.contactNoError}</div>
            )}
            <input
              type="text"
              placeholder="Gst No"
              name="gstNo"
              value={this.state.gstNo}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.gstNoError && (
              <div className="errorMsg">{this.state.gstNoError}</div>
            )}
            <input
              type="text"
              placeholder="Pan No"
              name="panNo"
              value={this.state.panNo}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.panNoError && (
              <div className="errorMsg">{this.state.panNoError}</div>
            )}
            <input
              type="text"
              placeholder="Aadhar No"
              name="aadharNo"
              value={this.state.aadharNo}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.aadharNoError && (
              <div className="errorMsg">{this.state.aadharNoError}</div>
            )}
            <input
              type="text"
              placeholder="Bank Name"
              name="bankName"
              value={this.state.bankName}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.bankNameError && (
              <div className="errorMsg">{this.state.bankNameError}</div>
            )}
            <input
              type="text"
              placeholder="Bank Account No"
              name="bankAccountNo"
              value={this.state.bankAccountNo}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.bankAccountNoError && (
              <div className="errorMsg">{this.state.bankAccountNoError}</div>
            )}
            <input
              type="text"
              placeholder="IFSC Code"
              name="ifscCode"
              value={this.state.ifscCode}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.ifscCodeError && (
              <div className="errorMsg">{this.state.ifscCodeError}</div>
            )}
            <button>Next</button>
          </form>
        )}
      </div>
    );
  }
}
export default FormComponent;
