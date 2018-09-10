import React, {Component} from 'react';


class Header extends Component {

    render(){
        return (
            <div className="header">
                <div className="logo">
                    <img src="./images/header/gnc_2014.svg" />
                    <img src="./images/header/livenationconcerts.png" />
                </div>
                <div className="social">
                <div id="share" className="icon">
                SHARE
                </div>
                <div id="fb" className="icon"></div>
                <div id="twitter" className="icon"></div>
                
                </div>
            </div>
        )
    }
}

export default Header