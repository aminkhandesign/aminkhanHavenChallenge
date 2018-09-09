import React, {Component} from 'react';
import Header from './header.jsx';
import Left from './left.jsx';
import Form from './form.jsx';


class Container extends Component {

    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="container">
            <Header />
            <div class="flex">
                <Left />
                <Form />
            </div>
            </div>
        )
    }
}

export default Container