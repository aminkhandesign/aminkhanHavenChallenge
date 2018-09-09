import React,{Component} from 'react';



class Left extends Component {

    constructor(props){
        super(props);
        this.state={
                    }
    }
    render(){
      return (
          <div className="box left">
          <img src = "./images/left_box/TTR_SWEEP.png"/>
          <div className="ribbon">Message</div>
         < ul>1 Grand Prize winner will receive:
         <li>2 tickets to aL ive nation concert in the U,S*</li>
         <li>Airfare &amp hotel accommodation for 2</li>
         <li>$200 cash gift card</li>
         </ul>
         </div>
      )

    }
}


export default Left