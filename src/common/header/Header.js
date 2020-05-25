import React from 'react';
import Button from '@material-ui/core/Button';
import './Header.css';



class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <Button variant="contained"  className="bt">LogIn</Button>

            </div>
        )
    }
}
export default Header;