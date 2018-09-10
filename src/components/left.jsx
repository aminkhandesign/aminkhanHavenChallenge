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
         <li id="tickets"><img src="../images/left_box/ticketNew.png"/>2 tickets to aL ive nation concert in the US*</li>
         <li id="plane"><img src="../images/left_box/planeNew.png"/>Airfare & hotel accommodation for 2</li>
         <li id="cash"><img src="../images/left_box/dollarNew.png"/>$200 cash gift card</li>
         </ul>
         </div>
      )

    }
}


export default Left