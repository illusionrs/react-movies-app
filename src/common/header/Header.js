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

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const TabContainer = function (props) {
  return (
    <Typography component="div" style={{ padding: 0,textAlign:'center'}}>
      {props.children}
    </Typography>
  );
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
          <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>

          <TabContainer>
            <FormControl required>
              <InputLabel htmlFor="userName">UserName</InputLabel>
              <Input id="userName" type="text" />
            </FormControl>
            <br/>
            <br/>
            <FormControl>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input id="password" type="password" />
            </FormControl>
            <br/>
            <br/>
            <Button variant="contained" color="primary">LOGIN</Button>
          </TabContainer>
        </Modal>
      </div>
    );
  }
}
export default Header;
