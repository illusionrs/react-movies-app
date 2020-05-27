import React from "react";
import Button from "@material-ui/core/Button";
import "./Header.css";
import logo from "../../assets/logo.svg";
import Modal from "react-modal";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import PropTypes from "prop-types";
import FormHelperText from "@material-ui/core/FormHelperText";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    usernameRequired: "dispNone",
    username: "",
  },
};

const TabContainer = function (props) {
  return (
    <Typography component="div" style={{ padding: 0, textAlign: "center" }}>
      {props.children}
    </Typography>
  );
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      value: 0,
    };
  }

  openModalHandler = () => {
    this.setState({ modalIsOpen: true });
  };
  closeModalHandler = () => {
    this.setState({ modalIsOpen: false });
  };
  tabChangeHandler = (event, value) => {
    this.setState({ value });
  };
  loginClickHandler = () => {
    this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
  };
  
  inputUsernameChangeHandler = (e) => {
    this.setState({ username: e.target.value });
  }
  render() {
    return (
      <div className="header">
        <img src={logo} className="app-logo" alt="logo" />
        <Button
          variant="contained"
          className="bt"
          onClick={this.openModalHandler}
        >
          LogIn
        </Button>
        <Modal
          ariaHideApp={false}
          isOpen={this.state.modalIsOpen}
          contentLabel="Login"
          onRequestClose={this.closeModalHandler}
          style={customStyles}
        >
          <Tabs
            className="tabs"
            value={this.state.value}
            onChange={this.tabChangeHandler}
          >
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
          {this.state.value === 0 && (
            <TabContainer>
              <FormControl required>
                <InputLabel htmlFor="userName">UserName</InputLabel>
                <Input id="userName" type="text"  username={this.state.username} onChange={this.inputUsernameChangeHandler}/>
                <FormHelperText className={this.state.usernameRequired}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input id="password" type="password" />
              </FormControl>
              <br />
              <br />
              <Button variant="contained" color="primary"  onClick={this.loginClickHandler}>
                LOGIN
              </Button>
            </TabContainer>
          )}
        </Modal>
      </div>
    );
  }
}
export default Header;
