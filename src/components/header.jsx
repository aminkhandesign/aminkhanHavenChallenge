import React, {Component} from 'react';


class Header extends Component {

    render(){
        return (
            <div className="header">
                <div className="logo">
                    <img src="./images/header/gnc_2014.svg" />
                    <img src="./images/header/livenationconcerts.png" />
                </div>
                <div className="social"></div>
            </div>
        )
    }
}

export default Header