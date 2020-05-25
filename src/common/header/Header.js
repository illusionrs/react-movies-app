import React from 'react';
import Button from '@material-ui/core/Button';
import './Header.css';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



class Header extends React.Component{
    constructor(){
        super();
        this.state={
            modalIsOpen:false,
            value:0
        }
    }

    openModalHandler=()=>{
              this.setState({modalIsOpen:true});
    }
    closeModalHandler=()=>{
        this.setState({modalIsOpen:false});
    }
    tabChangeHandler=(event,value)=>{
        this.setState({value});
    }
    render(){
        return(
            <div className="header">
                <img src={logo} className="app-logo" alt="logo" />
                <Button variant="contained"  className="bt" onClick={this.openModalHandler}>LogIn</Button>
                <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen}  contentLabel="Login" onRequestClose={this.closeModalHandler}>
                   <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                       <Tab label="Login"/>
                       <Tab label="Register"/>
                   </Tabs>
                </Modal>

            </div>
        )
    }
}
export default Header;