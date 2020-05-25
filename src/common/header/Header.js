import React from 'react';
import Button from '@material-ui/core/Button';
import './Header.css';
import logo from '../../assets/logo.svg';



class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <img src={logo} className="app-logo" alt="logo" />
                <Button variant="contained"  className="bt">LogIn</Button>

            </div>
        )
    }
}
export default Header;