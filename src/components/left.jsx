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
          <div className="ribbon"><span className="ribbonMsg">Enter for a chance to win a Rock FLight </span>
          <span className="ribbonMsg">to a live Nation concert of your choice! </span></div>
         < ul className="prizes">1 Grand Prize winner will receive:
         <li id="tickets"><div className="listItem" id="ticket"></div>2 tickets to a Live nation concert in the US*</li>
         <li id="plane"><div className="listItem" id="ticket"></div>Airfare & hotel accommodation for 2</li>
         <li id="cash"><div className="listItem" id="ticket"></div>$200 cash gift card</li>
         </ul>
         </div>
      )

    }
}


export default Left