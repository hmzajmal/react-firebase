import React, { Component } from "react";
import { connect } from "react-redux";
import { signin } from "../store/actions/authActions";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "hmza@gmail.com",
      password: "123456"
    };
  }
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.signin(this.state);
    // this.props.history.push("/props");
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">Email </label>
          <input type="text" id="email" onChange={this.handleChange} />
          <label htmlFor="">password </label>
          <input type="text" id="password" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signin: cred => dispatch(signin(cred))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);
