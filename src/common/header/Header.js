import React from 'react';
import Button from '@material-ui/core/Button';
import './Header.css';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';



class Header extends React.Component{
    constructor(){
        super();
        this.state={
            modalIsOpen:false
        }
    }

    openModalHandler=()=>{
              this.setState({modalIsOpen:true});
    }
    closeModalHandler=()=>{
        this.setState({modalIsOpen:false});
    }
    render(){
        return(
            <div className="header">
                <img src={logo} className="app-logo" alt="logo" />
                <Button variant="contained"  className="bt" onClick={this.openModalHandler}>LogIn</Button>
                <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen}  contentLabel="Login" onRequestClose={this.closeModalHandler}>

                </Modal>

            </div>
        )
    }
}
export default Header;