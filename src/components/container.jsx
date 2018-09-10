import React, {Component} from 'react';
import Header from './header.jsx';
import Left from './left.jsx';
import Form from './form.jsx';
import Footer from './footer.jsx';


class Container extends Component {

    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="container">
            <Header />
            <div className="flex_container">
                <Left />
                <Form />
            </div>
            <Footer classsName="footer"/>
            </div>
        )
    }
}

export default Container