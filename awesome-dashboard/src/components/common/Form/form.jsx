import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./../FormComponents/Input/Input";
import CheckBox from "../FormComponents/Checkbox/checkBoxInput";
import Button from "../FormComponents/Button/Button";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const { data } = this.state;
    let errors = {};

    const { error } = Joi.validate(data, this.schema, {
      abortEarly: false,
      allowUnknown: true
    });

    if (!error) return null;

    for (let item of error.details) {
      errors[item.path] = item.message;
    }

    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };

    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    e.preventDefault();
    //Call validate method
    const errors = this.validate();

    this.setState({ errors: errors || {} });

    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    let value = "";
    //Check for the type of input
    if (input.type === "checkbox") value = input.checked;
    else value = input.value;
    const property = input.name;
    data[property] = value;
    this.setState({ data, errors });
  };

  handleBackButtonPressed = path => {
    this.props.history.push(path);
  };

  renderInput = (name, type, label?) => {
    const { data, errors } = this.state;

    return (
      <Input
        label={label}
        name={name}
        type={type}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };

  renderCheckBox = (name, label?) => {
    const { data } = this.state;

    return (
      <CheckBox
        name={name}
        value={data[name]}
        onChange={this.handleChange}
        label={label}
      />
    );
  };

  renderSubmitButton = (label, styles) => {
    return (
      <Button
        text={label}
        className={styles}
        onButtonClicked={this.handleSubmit}
      />
    );
  };
}

export default Form;
